import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useFonts as useBungee, Bungee_400Regular } from '@expo-google-fonts/bungee';
import { useFonts as useFredokaOne, FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one';
import { HowToScreen } from './how-to-play-screen.component';
import { SettingsScreen } from './settings-screen.component';
import  LottieView from "lottie-react-native";
import styled from "styled-components/native"




export const StartScreen = ({navigation}) => {

  let [FredokaOneLoaded] = useFredokaOne({
    FredokaOne_400Regular,
  });
  
  let [BungeeLoaded] = useBungee({
    Bungee_400Regular,
  });

  const blueimage = require("../../../assets/blue-background.png");
  const startbuttonimage = require("../../../assets/startbutton.png");
  const howtoplaybuttonimage = require("../../../assets/howtoplaybutton.png");
  const settingsbuttonimage = require("../../../assets/settingsbutton.png");
  
  if(!FredokaOneLoaded || !BungeeLoaded) {
    return (<></>)
  } else {
    return (
      <View style={{flex:1}}>
      <ImageBackground style={{flex:1, }} source={blueimage} resizeMode='cover'>
        <SafeAreaView style={{flex:1}}>

        
        <View style={{height:180, width:'100%', alignItems:'center', justifyContent:'center',}}>
          <Text style={{fontFamily:'Bungee_400Regular', color:'#fe6039', fontSize:75, flex:1, marginTop: 25}}>
          CARDYO
          </Text>
        </View>
          <AnimationView source={require('../../../assets/brain.json')} autoPlay loop  />
        <View style={{flex:1, justifyContent:'center', alignItems:'center',}}>
          
          <TouchableOpacity 
          style={{
          justifyContent:'center', 
          alignItems:'center', 
          width:160, 
          height:80, 
          borderRadius:100,  
          }} 
          onPress={() => {
            navigation.navigate("Cardyo");
          }}
          >
            <ImageBackground style={{width:160, height:80, justifyContent:'center', alignContent:'center', alignItems:'center'}} imageStyle={{borderRadius:100,}} source={startbuttonimage}>
            <Text style={{fontFamily:'FredokaOne_400Regular', fontSize:24, color:'#2E2222'}}>
              Start
            </Text>
            </ImageBackground>
          </TouchableOpacity>


          
          <TouchableOpacity style={{justifyContent:'center', alignItems:'center', backgroundColor:'red', width:160, height:80, borderRadius:100, marginTop:50}} 
          onPress={() => {
            navigation.navigate("HowToPlay");
          }}>
            <ImageBackground style={{width:160, height:80, justifyContent:'center', alignContent:'center', alignItems:'center'}} imageStyle={{borderRadius:100,}} source={howtoplaybuttonimage}>
              <Text style={{fontFamily:'FredokaOne_400Regular', fontSize:24, color:'#2E2222'}}>
              How to play?
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          
          <TouchableOpacity style={{justifyContent:'center', alignItems:'center', backgroundColor:'red', width:160, height:80, borderRadius:100, marginTop:50}} 
          onPress={() => {
            navigation.navigate("Learn");
          }}>
            <ImageBackground style={{width:160, height:80, justifyContent:'center', alignContent:'center', alignItems:'center'}} imageStyle={{borderRadius:100,}} source={settingsbuttonimage}>
              <Text style={{fontFamily:'FredokaOne_400Regular', fontSize:24, color:'#2E2222'}}>
              Learn
              </Text>
            </ImageBackground>
          </TouchableOpacity >
        
        </View>
        </SafeAreaView>
      </ImageBackground>
      
      </View>
    );
  }
};




const AnimationView = styled(LottieView)`
  justify-content: center;
  align-self: center;
  length: 200px;
  width: 200px;
`;


