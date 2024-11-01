import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import tio from '/assets/motoristafoto.png';
import van from '/assets/Vanescolar.png';

export default function App() {
  const [region, setRegion] = useState({
    latitude: -23.55052,
    longitude: -46.633308,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  const [driverLocation, setDriverLocation] = useState({
    latitude: -23.551,
    longitude: -46.634,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        ...region,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, );

  const simulateDriverMovement = () => {
    setDriverLocation((prevLocation) => ({
      ...prevLocation,
      latitude: prevLocation.latitude + 0.0005,
      longitude: prevLocation.longitude + 0.0005,
    }));
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region}>
        <Marker coordinate={region} title="Você" pinColor="blue" />
        <Marker coordinate={driverLocation} title="Tio Valter" />
        <Polyline
          coordinates={[region, driverLocation]}
          strokeColor="#FFA500"
          strokeWidth={4}
        />
      </MapView>
      <View style={styles.driverInfo}>
        <Image
          source={tio}
          style={styles.driverImage}
        />
        <View style={styles.image}>
          <Image
            source={van}
            style={styles.van}
          />
        </View>
        <Text style={styles.driverName}>Tio Valter</Text>
        <Text style={styles.plate}>Placa: DTC4538</Text>
        <Text style={styles.vehicle}>Van Renault Ducato</Text>
        <Text style={styles.rating}>Classificação: ★★★★★ 5.0</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text onPress={() => alert('Ligando para Tio Valter...')} style={styles.buttonText}>Ligar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText1}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '60%',
  },
  driverInfo: {
    padding: 20,
    backgroundColor: 'black',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    width: 414,
    height: 358
  },
  driverImage: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginBottom: 10,
  },
  van: {
    marginLeft: 150,
    width: '80%',
    height: '100%',
    marginTop: -110
  },
  driverName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: -180
  },
  plate: {
    fontSize: 16,
    color: 'white'
  },
  vehicle: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white'
  },
  rating: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#FFC107',
    padding: 13,
    borderRadius: 13,
    width: '48%', 
  },
  button1: {
    backgroundColor: 'white',
    padding: 13,
    borderRadius: 13,
    width: '48%',  
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  buttonText1: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});
