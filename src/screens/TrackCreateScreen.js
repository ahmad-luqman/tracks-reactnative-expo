import React from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import Map from "../components/Map";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>TrackCreateScreen</Text>
      <Map />
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
