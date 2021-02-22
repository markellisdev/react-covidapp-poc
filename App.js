import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MapView from 'react-native-maps';
import logo from './app/assets/logo.png';

// Screens Imported
import WelcomeScreen from './app/screens/WelcomeScreen';
import CategoryScreen from './app/screens/CategoryScreen';
import DescriptionScreen from './app/screens/DescriptionScreen';
import MapScreen from './app/screens/MapScreen';
import SubCategoryScreen from './app/screens/SubCategoryScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [items, setItems] = useState([]);
  return <WelcomeScreen />
  // return (
  //   <SafeAreaView style={styles.container}>
  //     {/* Add Google map in background for now */}
  //     <MapView
  //       style={StyleSheet.absoluteFillObject}
  //       provider={MapView.PROVIDER_GOOGLE}
  //       // Set San Antonio as initialRegion
  //       initialRegion={{
  //         latitude: 29.42934083341083,
  //         longitude: -98.48763303426837,
  //         latitudeDelta: 0.922,
  //         longitudeDelta: 0.421,
  //       }}>
  //     </MapView>
  //     {/* Add an image */}
  //     <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.logo} />
  //     {/* Text instructions for user */}
  //     <Text style={styles.instructions}>
  //       To share a photo from your phone with a friend, just press the button below!
  //     </Text>
  //     {/* Add button */}
  //     <TouchableOpacity onPress={() => alert('Hello World!')} style={styles.button}>
  //       <Text style={styles.buttonText}>Pick a photo</Text>
  //     </TouchableOpacity>
  //     <StatusBar style="auto" />
  //   </SafeAreaView>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { width:305, height:159, marginBottom: 20 },
  instructions: {color:'#888', fontSize: 18, marginHorizontal: 15, marginBottom: 10},
  button: { backgroundColor: 'blue', padding: 20, borderRadius: 5 },
  buttonText: { fontSize: 20, color: '#fff' },
});
