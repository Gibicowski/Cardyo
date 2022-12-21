import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native';
//import { useFonts as useBungee, Bungee_400Regular } from '@expo-google-fonts/bungee';
//import { useFonts as useFredokaOne, FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one';
import AppIntroSlider from 'react-native-app-intro-slider';
import styled from "styled-components/native"
import styledComponentsNative from 'styled-components/native';
import { StartScreen } from './start-screen.component';
import  LottieView from "lottie-react-native";




const slides = [
  {
    key: 'zero',
    title: 'Learn the words!',
    text: 'First, go to "Learn" and scroll through the words available and try to memorize them.',
    //image: require('./assets/1.jpg'),
    backgroundColor: '#a1f7b8',
  },
    {
      key: 'one',
      title: 'Guess the word!',
      text: 'Look at the card and try to guess the word',
      //image: require('./assets/1.jpg'),
      backgroundColor: '#fbc2eb',
    },
    {
      key: 'two',
      title: 'Swipe the card',
      text: "When you feel ready, swipe the card to see the word's meaning",
      //image: require('./assets/2.jpg'),
      backgroundColor: '#ff9482',
    },
    {
      key: 'three!',
      title: 'Learn',
      text: "There you have it! The definition. Make sure you read it thoroughly an understand.",
      //image: require('./assets/3.jpg'),
      backgroundColor: '#8fc6fd',
    },
    {
      key: 'four',
      title: 'You are ready to do your cardyo!',
      text: "Great! Now that you have learnt some words, you can go out to the field and test yourself, and don't forget that if you do your cardyo on a daily basis it is going to be much effective.",
      //image: require('./assets/3.jpg'),
      backgroundColor: '#907cf7',
    }
  ];


export const HowToScreen = ({navigation}) => {
  const _renderItem = ({item}) => (
    <SliderView style={{backgroundColor: item.backgroundColor}}>
      <CardyoTextSmall>CARDYO</CardyoTextSmall>
      <HowTocard>
      <CardTextTitle>{item.title}</CardTextTitle>
      <CardText>{item.text}</CardText>
      </HowTocard>
    </SliderView>
  );

  const _onDone = () => {navigation.navigate("Main")};

  return(
    <IntroSlider renderItem={_renderItem} data={slides} onDone={_onDone}/>
  );
}


const IntroSlider = styled(AppIntroSlider)`
  hegiht: 500px;
`;

const SliderView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const HowTocard = styled.View`
  width: 340px;
  height: 510px;
  background-color: #fffade;
  border-radius: 12px;
  position: absolute;
  top: 120px;
`;

const CardText = styled.Text`
  font-size: 17;
  margin-top: 140px;
  font-family: FredokaOne_400Regular;
  align-self: center;
  bottom: 75px;
  padding: 25px;
`;

const CardTextTitle = styled.Text`
  font-size:23
  padding-top: 220px;
  font-family: FredokaOne_400Regular;
  align-self: center;
  bottom: 135px;
`;

const CardyoTextSmall = styled.Text`
  font-Family: "Bungee_400Regular";
  color:'#fe6039';
  fontSize: 50;
  position: absolute;
  top: 15px;
`;

const AnimationView = styled(LottieView)`
  flex: 1;
  resizeMode="cover"

`;

const AnimationContainer = styled.View`
  align-items: center;
  align-self: center;
  height: 350px;
  width: 150px;
  background-color: red;
  position: absolute;
`;




