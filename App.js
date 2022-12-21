import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useFonts as useBungee, Bungee_400Regular } from '@expo-google-fonts/bungee';
import { useFonts as useFredokaOne, FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one';
import { StartScreen } from './src/components/screens/start-screen.component';
import { HowToScreen } from './src/components/screens/how-to-play-screen.component';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsScreen } from './src/components/screens/settings-screen.component';
import { Cardyo, pickCard } from './src/components/screens/cardyo-screen';
import { TrainScreen } from './src/components/screens/train-screen';





const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Main" component={StartScreen} />
        <Stack.Screen name="Cardyo" component={Cardyo}/>
        <Stack.Screen name="HowToPlay" component={HowToScreen} />
        <Stack.Screen name="Learn" component={TrainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );  
};

export default App;