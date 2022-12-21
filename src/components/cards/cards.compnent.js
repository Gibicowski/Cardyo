import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";


export var unusedCards = [
    {
        definition: "The lack or unavailability of something or someone.",
        word: "Absence",
    } ,
    {
        definition: "A settled way of thinking or feeling about something.",
        word: "Vanilla",
    } ,
    {
        definition: "The event of two things' existing together.",
        word: "Coexist",
    } ,
    {
        definition: "Retrieve or recover (something previously lost, given, or paid); obtain the return of.",
        word: "Reclaim",
    } ,
    {
        definition: "A herbaceous plant of the pea family, with dense globular flower heads and leaves which are typically three-lobed.",
        word: "Clover",
    } ,
    {
        definition: "To leave somebody, especially somebody you are responsible for, with no intention of returning",
        word: "Abandon"
    },
    {
        definition: "The fact that somebody/something is able to do something",
        word: "Ability"
    },
    {
        definition: "at or to a higher place or position than something/somebody",
        word: "Above"
    },
    {
        definition:"in or to a foreign country",
        word:"Abroad"
    },
    {
        definition:"definite and without any doubt",
        word: "Absolute"
    },
    {
        definition:"to take willingly something that is offered; to say ‘yes’ to an offer, invitation, etc.",
        word:"accept"
    },
    {
        definition:" the opportunity or right to use something or to see somebody/something",
        word:"access"
    },
    {
        definition:"an unpleasant event, especially in a vehicle, that happens unexpectedly and causes injury or damage",
        word:"accident"
    },
    {
        definition:" a place to live, work or stay in",
        word:"accomodation"
    },
    {
        definition:" to travel or go somewhere with somebody/something",
        word:"accompany"
    },
    {
        definition:"to say that somebody has done something wrong or is guilty of something",
        word:"accuse"
    },
    {
        definition:"to succeed in reaching a particular goal, status or standard, especially by making an effort for a long time",
        word:"achieve"
    },
    {
        definition:"to accept that something is true",
        word:"acknowledge"
    },
    {
        definition:"to gain something by your own efforts, ability or behaviour",
        word:"acquire"
    },
    {
        definition:"from one side to the other side",
        word:"across"
    },
    {
        definition:"a thing that is added to something else",
        word:"addition"
    },
    {
        definition:"to think about a problem or a situation and decide how you are going to deal with it(v)",
        word:"address"
    },
    {
        definition:"the activities that are done in order to plan, organize and run a business, school or other institution",
        word:"administration"
    },
    {
        definition:"an area or a region with a particular feature or use",
        word:"zone"
    },
    {
        definition:"an injury to part of the body, especially one in which a hole is made in the skin using a weapon",
        word:"wound"
    },
    {
        definition:"the soft hair that covers the body of sheep and some other animals",
        word:"wool"
    },
    {
        definition:"a person who sees something happen and is able to describe it to other people",
        word:"witness"
    },
    {
        definition:"able to make sensible decisions and give good advice because of the experience and knowledge that you have",
        word:"wise"
    },
    {
        definition:"measuring a large distance from one side to the other",
        word:"wide"
    },
    {
        definition:"a low, quiet voice or the sound it makes",
        word:"whisper"
    },
    {
        definition:"having a lot of money, possessions, etc.",
        word:"wealthy"
    },
    {
        definition:"the act of using something in a careless or unnecessary way, causing it to be lost or destroyed",
        word:"waste"
    },
    {
        definition:"necessary or essential in order for something to succeed or exist",
        word:"vital"
    },
    {
        definition:"extremely large in area, size, amount, etc.",
        word:"vast"
    },
    {
        definition:"connected with a town or city",
        word:"urban"
    },
    {
        definition:"the act of joining two or more things together; the state of being joined together",
        word:"union"
    },
    {
        definition:"in a state like sleep because of an injury or illness, and not able to use your senses",
        word:"unconscious"
    },
    {
        definition:"having the usual qualities or features of a particular type of person, thing or group",
        word:"typical"
    },
    {
        definition:"something that is done to cure an illness or injury, or to make somebody look and feel good",
        word:"treatment"
    },
    {
        definition:"​a belief, custom or way of doing something that has existed for a long time among a particular group of people; a set of these beliefs or customs",
        word:"tradition"
    },
    {
        definition:"held or fixed in position securely; difficult to move, open or separate",
        word:"tight"
    },
    {
        definition:"a statement in which you tell somebody that you will punish or harm them, especially if they do not do what you want",
        word:"threat"
    },
    {
        definition:"to say that you will cause trouble, hurt somebody, etc. if you do not get what you want",
        word:"threaten"
    },
    {
        definition:"a building or an outdoor area where plays and similar types of entertainment are performed",
        word:"theatre"
    },
    {
        definition:"a particular way of doing something, especially one in which you have to learn special skills",
        word:"technique"
    },
    {
        definition:"an object, a person or a place that people aim at when attacking",
        word:"target"
    },
    {
        definition:"a natural ability to do something well",
        word:"talent"
    },
    {
        definition:"the feeling of being sorry for somebody; showing that you understand and care about somebody’s problems",
        word:"sympathy"
    },
    {
        definition:" to change or make something change from one thing to another",
        word:"switch"
    },
    {
        definition:"a person who is suspected of a crime or of having done something wrong",
        word:"suspect"
    },
    {
        definition:"medical treatment of injuries or diseases that involves cutting open a person’s body and often removing or replacing some parts; the branch of medicine connected with this treatment",
        word:"surgery"
    },
    {
        definition:"the outside or top layer of something",
        word:"surface"
    },
    {
        definition:"to think or believe that something is true or possible (based on the knowledge that you have)",
        word:"suppose"
    },
    {
        definition:"a short statement that gives only the main points of something, not the details",
        word:"summary"
    },
    {
        definition:" to be convenient or useful for somebody",
        word:"suit"
    },
    {
        definition:" to be badly affected by a disease, pain, sad feelings, a lack of something, etc.",
        word:"suffer"
    },
    {
        definition:"happening or done quickly and unexpectedly",
        word:"sudden"
    },
    {
        definition:"a type of solid, liquid or gas that has particular qualities",
        word:"substance"
    },
    {
        definition:" to give a document, proposal, etc. to somebody in authority so that they can study or consider it",
        word:"submit"
    },
    {
        definition:"used to refer to a substance, material, group of objects, etc. when you do not know the name, when the name is not important or when it is obvious what you are talking about",
        word:"stuff"
    },
    {
        definition:"a hard fight in which people try to obtain or achieve something, especially something that somebody else does not want them to have",
        word:"struggle"
    },
    {
        definition:"the way in which the parts of something are connected together, arranged or organized; a particular arrangement of parts",
        word:"structure"
    },
    {
        definition:"that must be obeyed exactly",
        word:"strict"
    },
    {
        definition:"made of or covered in a substance that sticks to things that touch it",
        word:"sticky"
    },
    {
        definition:"something that you say or write that gives information or an opinion",
        word:"statement"
    },
    {
        definition:"to look at somebody/something for a long time",
        word:"stare"
    },
    {
        definition:"all the workers employed in an organization considered as a group",
        word:"staff"
    },
    {
        definition:"a person who is an expert in a particular area of work or study",
        word:"specialist"
    },
    {
        definition:"to arrange things in groups or in a particular order according to their type, etc.; to separate things of one type from others",
        word:"sort"
    },
    {
        definition:"the top layer of the earth in which plants, trees, etc. grow",
        word:"soil"
    },
    {
        definition:"a place where a building, town, etc. was, is or will be located",
        word:"site"
    },
    {
        definition:"large or important enough to have an effect or to be noticed",
        word:"significant"
    },
    {
        definition:" the fact of having a place to live or stay, considered as a basic human need",
        word:"shelter"
    },
    {
        definition:"more than two but not very many",
        word:"several"
    },
    {
        definition:"thinking about things in a careful and sensible way; not silly",
        word:"serious"
    },
    {
        definition:"able to make good judgements based on reason and experience rather than emotion; practical",
        word:"sensible"
    },
    {
        definition:" to look for something/somebody",
        word:"seek"
    },
]

export const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  };



  export const getCard = () => {
    var Index = Math.floor(Math.random() * unusedCards.length);
    const pick = unusedCards[Index]
    console.log(pick.word)
    console.log(pick.definition)
        return pick
};

//const getCard = () => {

    //let Index = Math.floor(Math.random() * unusedCards.length);
    //console.log(Index + "index");
    //let cardIndex = unusedCards.splice(Index);
    //console.log(cardIndex + "cardindex");

    
    //return cardIndex
//};




//setCurrentCards([...currentCards, {title:"yeni kardım", desc: "blabla"}])

//let currentWord
//let currentDefinition
//let myword

//export const getWord = (myword) => {
    //currentWord = unusedCards.findIndex(obj => obj.word === myword)
    //return(
     //   currentWord
    //);
//};

//export const getDefinition = (mydefinition) => {
   // currentDefinition = unusedCards.findIndex(obj => obj.definition === mydefinition)
    //return(
     //   currentDefinition
   // );
//};





//console.log(currentCard);

//let usedCards = []


//let pickIndex = unusedCards.length;
//let currentCard = []


//function pickCard() {
    //Index = Math.floor(Math.random(0,pickIndex) * pickIndex)
    //console.log(Index);
    //return currentCard.push(unusedCards.splice(Index,1)[0]);
     
//};




export const Word = styled.Text`
    font-size: 24;
`;