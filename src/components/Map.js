import React, { useContext } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Text } from "react-native-elements";
import MapView, { Polyline } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const { state: { currentLocation } } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        longitudeDelta: 0.01,
        latitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        longitudeDelta: 0.01,
        latitudeDelta: 0.01,
      }}
    >
      <Polyline coordinates={[]} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottomr: 400,
  },
  map: {
    height: 300,
  },
});

export default Map;
