import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: 37.33233 + i * 0.0001,
        longitude: -122.03121 + i * 0.0001,
      });
    } else {
      points.push({
        latitude: 37.33233 - i * 0.0001,
        longitude: -122.03121 - i * 0.0001,
      });
    }
  }
  
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        longitude: -122.0312186,
        latitude: 37.33233,
        longitudeDelta: 0.01,
        latitudeDelta: 0.01,
      }}
    >
      <Polyline
        coordinates={points}
      />
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
