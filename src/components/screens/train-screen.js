import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ImageBackground,
} from 'react-native';
import { CardyoText } from "../../infrastructure/styled-components";
import styled from "styled-components/native";
import AwesomeButton from "react-native-really-awesome-button";
import { pick, shuffle, unusedCards } from "../cards/cards.compnent";
import GestureFlipView from 'react-native-gesture-flip-card';
import { TextInput } from 'react-native-paper';
import Toast, {DURATION} from 'react-native-easy-toast'
import { Audio } from 'expo-av';



const Background = require("../../../assets/blue-background.png");



export const TrainScreen = ({navigation}) => {

const [currentCardIndex, setCurrentCardIndex] = useState(0);
const [cards, setCards] = useState(unusedCards);  
const [currentCard, setCurrentCard] = useState(unusedCards[0]);


useEffect(() => {
  setCards(shuffle(unusedCards));
}, [])

useEffect(() => {
  setCurrentCard(cards[currentCardIndex]);
});

const nextCard = () => {
  if (currentCardIndex !== cards.length - 1) {
    setCurrentCardIndex(currentCardIndex + 1);
  } 
};

const prevCard = () => {
  if (currentCardIndex !== 0) {
    setCurrentCardIndex(currentCardIndex - 1);
  }
};


const renderFront = () => <FlipCardView><WordText>{currentCard.word}</WordText></FlipCardView>;
const renderBack = () => <FlipCardView><DefinitionText>{currentCard.definition}</DefinitionText></FlipCardView>;



    return(
      <ImageBackground style={{flex:1, }} source={Background} resizeMode='cover'>
        <CardyoView>
          <GestureFlipView width={300} height={450}>
            {renderFront()}
            {renderBack()}
          </GestureFlipView>
            <ButtonContainer>
              <MyButton 
                backgroundColor="#f55d3b" 
                width={150} backgroundActive="#d67104" 
                raiseLevel={3}
                onPressIn={prevCard}
                >
                Previous card
                </MyButton>

                <MyButton 
                backgroundColor="#70d132" 
                width={150} 
                backgroundActive="#4e8f24" 
                raiseLevel={3}
                onPressIn={nextCard}
                >
                Next card
              </MyButton>
            </ButtonContainer>
            <MenuButtonContainer>
              <MenuButton 
                width={300} 
                onPress={() =>{navigation.navigate("Main")}}
                >
                Main menu
                </MenuButton>
            </MenuButtonContainer>
        </CardyoView>
      </ImageBackground>
    );
};





const styles = StyleSheet.create({
  face:{
    width: 180,
    height: 350,
    backgroundColor:"green",
  },
  back:{
    width: 180,
    height: 350,
    backgroundColor:"white",
  },
  textStyle:{
    color:"black",
    fontSize:24,
  },

})

const AlertView = styled.View`

`;

const FlipCardView = styled.View`
    padding-top: 0px;
    height: 450px;
    width: 350px;
    background-color: #fffade;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
`;


const CardyoView = styled.View`
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    //backgroundColor: #f1d6ff;
`;

const TextInputContainer = styled.View`
  padding-top: 35px;
`;

const TextInputGuess = styled(TextInput)`
  width: 300px;
  height: 60px;
  border-radius: 15px;
  background-color: #fffade;
`;


const ButtonContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
`;

const MenuButtonContainer = styled.View`
  padding-top: 25px;
  padding-bottom: 20px;
`;

const MyButton = styled(AwesomeButton)`
    margin-right: 25px;
    margin-left: 25px;
    margin-top: 35px;
`;

const MenuButton = styled(AwesomeButton)`
    margin-top: 10px;
`;

const WordText = styled.Text`
  font-size: 35;
  font-family: 'FredokaOne_400Regular';
  padding: 15px;
`;

const DefinitionText = styled.Text`
  font-size: 22;
  font-family: 'FredokaOne_400Regular';
  padding: 15px;
`;