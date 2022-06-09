/*
let js = 'amazing';
console.log(40+23+8-10);

console.log("Bora");
console.log(23);

let firstName = "Ondra";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let ondra_bora = "OB";
let $function = 27;

let person = "ondra";
let PI = 3.1415;

let myFirstJob = 'printer';
let myCurrentJob = 'programmer';

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Ondra');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'printer';

lastName = 'Demeter';
console.log (lastName);


// Math operators
const now = 2022;
const ageOndra = now - 1991;
const ageBora = now - 2018 ;
console.log (ageOndra, ageBora);

console.log (ageOndra * 2, ageOndra /10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Ondra';
const lastName = 'Demeter';
console.log (firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15 
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x ++; // x = x + 1 = 101
x --; // x = x - 1 = 100
x --; // x = x - 1 = 99
console.log (x);

// Comparison operators
console.log (ageOndra < ageBora);
console.log (ageBora >= 32);

const isFullAge = ageBora >=32;

console.log (now - 1991 > now - 2018);


const now = 2022;
const ageOndra = now - 1991;
const ageBora = now - 2018;
console.log (now - 1991 > now - 2018); 

let x, y;
x = y = 25 -10 - 5; //x = y = 10, x = 10
console.log (x, y);

const averageAge = (ageOndra + ageBora) / 2
console.log (ageOndra, ageBora, averageAge);


// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

console.log ("Data 1")
console.log ('Mark');
let markWeight1 = 78;
let markHeight1 = 1.69;
let markBMI1 = (markWeight1 / markHeight1 ** 2);
console.log (markBMI1);

console.log ('John');
let johnWeight1 = 92;
let johnHeight1 = 1.76;
let johnBMI1 = (johnWeight1 / johnHeight1 ** 2);
console.log (johnBMI1);

console.log ("Data 2")
console.log ('Mark');
let markWeight2 = 95;
let markHeight2 = 1.88;
let markBMI2 = (markWeight2 / markHeight2 ** 2);
console.log (markBMI2);

console.log ('John');
let johnWeight2 = 85;
let johnHeight2 = 1.76;
let johnBMI2 = (johnWeight2 / johnHeight2 ** 2);
console.log (johnBMI2);

let markHigherBMI1 = markBMI1 < johnBMI1;
console.log (markHigherBMI1)

let markHigherBMI2 = markBMI2 > johnBMI2
console.log (markHigherBMI2)


const firstName = 'Ondra';
const job = 'printer';
const birthYear = 1991;
const year = 2037

const Ondra = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log (Ondra);

const ondraNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log (ondraNew);
console.log (`Just a regular string...`)
console.log (`String with \n\
multiple \n\
lines`);
console.log (`String
multiple
lines`);


const age = 15;
const isOldEnough = age >= 18;

if (age >=18) {
    console.log ('Bora can start driving license 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log (`Bora is too young. She must wait for another ${yearsLeft} years to be able to apply for her drivers license 🚗.`)
};
 const birthYear = 1991;

 let century;
 if (birthYear <= 2000) {
 century = 20;}
 else { century = 21;
}
console.log (century);


// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉
// GOOD LUCK 😀

console.log ("Data 1")
console.log ('Mark');
let markWeight1 = 78;
let markHeight1 = 1.69;
let markBMI1 = (markWeight1 / markHeight1 ** 2);
console.log (`BMI (${markBMI1})`);

console.log ('John');
let johnWeight1 = 92;
let johnHeight1 = 1.76;
let johnBMI1 = (johnWeight1 / johnHeight1 ** 2);
console.log (`BMI (${johnBMI1})`);

console.log ("Data 2")
console.log ('Mark');
let markWeight2 = 88;
let markHeight2 = 1.76;
let markBMI2 = (markWeight2 / markHeight2 ** 2);
console.log (`BMI (${markBMI2})`);

console.log ('John');
let johnWeight2 = 95;
let johnHeight2 = 1.88;
let johnBMI2 = (johnWeight2 / johnHeight2 ** 2);
console.log (`BMI (${johnBMI2})`);

let markHigherBMI1 = markBMI1 < johnBMI1;
console.log (markHigherBMI1)

let markHigherBMI2 = markBMI2 > johnBMI2
console.log (markHigherBMI2)

console.log (markBMI1, johnBMI1);
if (markBMI1 > johnBMI1) {
    console.log (`Mark's BMI 1 (${markBMI1}) is higher than John's (${ johnBMI1})!`)
} else {
    console.log (`John's BMI 1 (${johnBMI1}) is higher than Mark's (${markBMI1})!`)
};

console.log (markBMI2, johnBMI2);
if (markBMI2 > johnBMI2) {
    console.log (`Mark's BMI 2 (${markBMI2}) is higher than John's (${johnBMI2})!`)
} else {
    console.log (`John's BMI 2 (${johnBMI2}) is higher than Mark's (${markBMI2})!`)
};


//Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Ondra'));
console.log(typeof NaN);

console.log(String(23), 23);

//Type coercion
console.log('I am ' + 23 + ' years old.');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' > '18');

let n ='1' + 1; // '11'
n = n - 1; // '11' - 1 = 10
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Ondra'));
console.log(Boolean({}));

const money = 3;
if(money) {
    console.log("Dont spend it all 🤑");
} else {
    console.log('You should get a job!');
}


const age = 18;
if(age === 18) console.log('You ve just became an adult (strict)'); 

if(age == 18) console.log('You ve just became an adult (loose)');

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if(favourite === 7) {
     console.log('7 is also a cool number!');
} else if(favourite === 9) {
    console.log('9 is also a cool number!');
} else {
    console.log('Number is not 23 or 7 or 9');
}

if(favourite !== 23) console.log('Why not 23?');


const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive');
// }

const isTired = false; // C

console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive');
}


//////////////////////
// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK 😀

const Dolphins = Number((96 + 108 + 89)/3);
console.log(Dolphins);

const Koalas  = Number((88 + 91 + 110)/3);
console.log(Koalas);

const winnerOfTheCompetion = (Dolphins > Koalas);

if(Dolphins > Koalas) {
    console.log('The winner of the competion is Dolphins!');
} else if(Koalas > Dolphins) {
    console.log('The winner of the competion is Koalas')
} else if(Dolphins === Koalas) {
    console.log('It is draw!')
}

//Bonus 1
const Dolphins = Number((95 + 112 + 101)/3);
console.log(Dolphins);

const Koalas  = Number((109 + 95 + 123)/3);
console.log(Koalas);

const winner = ((Dolphins || Koalas) > 100);


if(Dolphins > Koalas && Dolphins >= 100) {
    console.log('The winner of the competion is Dolphins!');
} else if(Koalas > Dolphins && Koalas >= 100) {
    console.log('The winner of the competion is Koalas')
} else if(Dolphins > Koalas && Dolphins >= 100) {
    console.log('Both are the winners!')
} else console.log('No one is winner!')


///////////////////////
//THE SWITCH STATEMENT
const day = 'Monday';

switch(day) {
    case 'Monday': // day === 'Monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'Tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code examples');
        break;
    case 'Friday':
        console.log('I record videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend');
        break;
        default:
            console.log('Not a valid day!');
}

if (day === 'Monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if(day === 'Tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'Wednesday' || day === 'Thursday') {
    console.log('Write code examples');
} else if (day === 'Friday') {
    console.log('I record videos');
} else if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend'); 
} else {
    console.log('Not a valid day!');
}


//////////////////////////
//THE CONDITIONAL OPERATOR

const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') :
// console.log('I like to drink water 🚰');

const drink = age >= 18 ? 'wine 🍷' : 'water 🚰';
console.log(drink);

let drink2;
if(age >= 18) {
    drink2 = 'wine 🍷'
} else {
    drink2 = 'water 🚰'
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 🚰'}`)


//////////////////////////
// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// GOOD LUCK 😀

// const bill = 275;
// console.log(`The bill was ${bill} `);

// const tip = ((bill) * 15/100);
// console.log(`The tip was ${tip}`);

// const total = (bill + tip);
// console.log(`The total value is ${total}`);

const bill = 275
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/
