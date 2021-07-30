// begroeting
const userName = prompt (`Welkom bij mijn slep! Wat is je naam?`);

const greetName = alert (`Hey ` + userName + `!`);

const yourLowestNumber = prompt (`Je gaat een getal raden tussen twee waarden die je zelf kunt kiezen! Kies nu het laagste getal om het slep te beginnen:`);
const yourHighestNumber = prompt (`Kies je hoogste getal:`);
let lowestNumber = parseInt(yourLowestNumber);
let highestNumber = parseInt(yourHighestNumber);

const yourNumberGuess = prompt (`Het slep begint! Raad het getal tussen ${lowestNumber} en ${highestNumber}:`);
let numberGuess = parseInt(yourNumberGuess);
const yourNumberIs = alert (`Je koos: ${numberGuess}.`);


const getRandomNumber = function (lowestNumber, highestNumber) {  
    const randomNumber = Math.floor(Math.random()) * (highestNumber - lowestNumber) + lowestNumber;
    return randomNumber;
  };
  
const randomNumber = getRandomNumber(lowestNumber,highestNumber);

console.log(randomNumber);

const numberControl = function (randomNumber, numberGuess) {
    if (randomNumber === numberGuess) {
        return true;
    }
    else {
        return false;
    };
    
};

console.log(numberControl(randomNumber,numberGuess));


for (i=4; i>0; i--) {
    let definiteNumber = numberControl (randomNumber, numberGuess);
    if (definiteNumber === true) {
         alert (`Je hebt gewonnen ${userName}! (poging ${5-i} van 5)`);
         i=0;
    }
    else if (definiteNumber === false ) {
        numberGuess = prompt (`Dat is niet het juiste nummer. Probeer het nog een keer! Kies een nummer tussen ${lowestNumber} en ${highestNumber} (poging ${5-i} van 5) `);
    };
    if (definiteNumber === false && i=== 1) {
        alert (`Helaas... je hebt het getal niet geraden. dit is poging 5 en hiermee eindigt het slep.`);
    }   
};  

let theEnd = alert (`${userName}, bedankt voor het sleppen!`);









