'use strict';

/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;



///////////////////////////////////////
// Functions
function logger() {
    console.log('My name is Jonas');
  }
  
  // calling / running / invoking function
  logger();
  logger();
  logger();

  function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
  }

  const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');



///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
  }
  const age1 = calcAge1(1991);
  
  // Function expression
  const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
  }
  const age2 = calcAge2(1991);
  
  console.log(age1, age2);



///////////////////////////////////////
// Arrow functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
} 

console.log(yearsUntilRetirement(1991, 'Ondra'));
console.log(yearsUntilRetirement(1980, 'Bob'));



///////////////////////////////////////
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
} 

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
  }
  console.log(fruitProcessor(2, 3));



///////////////////////////////////////
// Reviewing Functions

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`);
        return -1
    }
}

console.log(yearsUntilRetirement(1991, 'Ondra'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/


///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀


//MY VERSION:
//DATA 1
// const dolphinsScore1 = 44;
// const dolphinsScore2 = 23;
// const dolphinsScore3 = 71;
// const calcAverageDolphins = (ar1, ar2, ar3) => {return (ar1 + ar2 + ar3)/3};

// console.log(calcAverageDolphins(dolphinsScore1, dolphinsScore2, dolphinsScore3)); // inside of this brackets
// //score1 is equal to arr1

// const koalasScore1 = 65;
// const koalasScore2 = 54;
// const koalasScore3 = 49;
// const calcAverageKoalas = (ar1, ar2, ar3) => {return (ar1 + ar2 + ar3)/3};
// console.log(calcAverageKoalas(koalasScore1, koalasScore2, koalasScore3));

//DATA 2
// const dolphinsScore1 = 85;
// const dolphinsScore2 = 54;
// const dolphinsScore3 = 41;
// const calcAverageDolphins = (ar1, ar2, ar3) => {return (ar1 + ar2 + ar3)/3};

// console.log(calcAverageDolphins(dolphinsScore1, dolphinsScore2, dolphinsScore3));

// const koalasScore1 = 23;
// const koalasScore2 = 34;
// const koalasScore3 = 27;
// const calcAverageKoalas = (ar1, ar2, ar3) => {return (ar1 + ar2 + ar3)/3};
// console.log(calcAverageKoalas(koalasScore1, koalasScore2, koalasScore3));

//JONAS SOLUTION:
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
      console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
      console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
      console.log('No team wins...');
    }
  }
  checkWinner(scoreDolphins, scoreKoalas);
  checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/


///////////////////////////////////////
// Introduction to Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']; // Not gonna work

const firstName = 'Ondrej'
const ondrej = [firstName, 'Demeter', 2022 - 1991, 'Printer', friends];
console.log(ondrej);
console.log(ondrej.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages =[calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

