import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
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
import { TextInput, Button } from 'react-native-paper';
import Toast, {DURATION} from 'react-native-easy-toast'
import { Audio } from 'expo-av';



const Background = require("../../../assets/blue-background.png");



export const Cardyo = ({navigation}) => {

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

const [correctSound, setCorrectSound] = React.useState();

  async function playCorrectSound() {
    console.log('Loading correct Sound');
    const { sound } = await Audio.Sound.createAsync( require('../../../assets/sounds/positive.mp3')
    );
    setCorrectSound(sound);

    console.log('Playing correct Sound');
    await correctSound.playAsync();
  

    React.useEffect(() => {
      return correctSound
        ? () => {
            console.log('Unloading correct Sound');
            correctSound.unloadAsync();
          }
        : undefined;
    }, [correctSound]);
  };


const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../../../assets/sounds/incorrect.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
};





const renderFront = () => <FlipCardView><WordText>
  {input.trim().toLowerCase () == currentCard.word.toLowerCase() ? currentCard.word : undefined}
  </WordText></FlipCardView>;
const renderBack = () => <FlipCardView><DefinitionText>{currentCard.definition}</DefinitionText></FlipCardView>;

const [input, setInput] = useState('answer');


const checkWord = () => {
  console.log(currentCard.word, input)
  if (currentCard.word.trim().toLowerCase() === input.trim().toLowerCase() ) {
     CorrectWord();
  } else {
     WrongWord();
  }
};

const _toast = useRef()
const wrongToast = useRef()

const CorrectWord = () => {
  _toast.current.show('Congrats!', 500);
  playCorrectSound()
};


const WrongWord = () => {
  wrongToast.current.show('Oops, the word is not correct. Please try again', 500);
  playSound();
  };

console.log(_toast.current, wrongToast.current);


    return(
      <ImageBackground style={{flex:1, }} source={Background} resizeMode='cover'>
        <CardyoView>
          <Toast 
          ref={_toast}
          style={{backgroundColor:'green'}}
          position='top'
          />
          <CorrectToast 
          ref={wrongToast} 
          style={{backgroundColor:"#ff5c26"}}
          position="top"
          />
          <GestureFlipView width={300} height={450}>
            {renderBack()}
            {renderFront()}
          </GestureFlipView>
          <TextInputContainer>
          <TextInputGuess 
            label="Guess!" 
            mode="outlined" 
            onSubmitEditing={checkWord} 
            onChangeText={text => setInput(text)}
          />
          </TextInputContainer>
          <GuessButtonContainer>
          <GuessButton 
          text="Check!" 
          onPress={checkWord} 
          buttonColor="#35004f" 
          type="elevated"
          textColor="white"
          >Check!</GuessButton>
          </GuessButtonContainer>
          
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
  padding-top: 5px;
`;

const TextInputGuess = styled(TextInput)`
  width: 300px;
  height: 60px;
  border-radius: 15px;
  background-color: #fffade;
`;

const GuessButtonContainer = styled.View`
  padding-top: 10px;
  width: 150px;
`;

const GuessButton = styled(Button)`

`;

const CorrectToast = styled(Toast)`
  background-color: "green";
`;


const ButtonContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 0px;
`;

const MenuButtonContainer = styled.View`
  padding-top: 15px;
  padding-bottom: 30px;
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

const WordTextHidden = styled.Text`
  font-size: 35;
  font-family: 'FredokaOne_400Regular';
  padding: 15px;
  color: #f1d6ff;
`;

const DefinitionText = styled.Text`
  font-size: 22;
  font-family: 'FredokaOne_400Regular';
  padding: 15px;
`;