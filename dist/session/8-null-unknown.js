"use strict";
//null 
const myText = (text) => {
    if (text === null) {
        console.log("I have no text");
    }
    else {
        console.log(text);
    }
};
//myText(null);
//myText("This is not a null value");
// unknown type : jekhon amra (data er type) data somporke kisu e jani nah, tokhon amra null-unknown use korbo
const guessSomething = (myGuess) => {
    console.log(myGuess);
};
guessSomething(23);
guessSomething("hello");
guessSomething(null);
guessSomething(undefined);
guessSomething(true);
