import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { requestForegroundPermissionsAsync } from "expo-location";
import Map from "../components/Map";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);
  
  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }

      
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>TrackCreateScreen</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});

export default TrackCreateScreen;
