// Types
// Boolean


let on = true;
console.log(on);

let off = false;
console.log(false);


// Null
//null is an empty value (it is NOT 0 or undefined)

let empty = null;
console.log(empty);

// Undefined
// No value assigned. NOT AN ERROR

let undef = undefined;
console.log(undef);

let grass;

console.log(grass);


// Numbers
let degrees = 90;
console.log(degrees);

let precise =  999999999999999;
console.log(precise);

      //Once you get up to 16 digits JavaScript will round
let rounded = 99999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard =(0.2 *10 +0.1 *10) / 10;
console.log(numbersAreHard);

// Strings
//Strings are any value within quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

let first = 1050 + 100;
let second = '1050'+ '100';
console.log(first);
console.log(second);
console.log(typeof first);
console.log(typeof second);

let third = 1050 + '100';
console.log(third);
console.log(typeof third);


//Challenge
let firstName = 'Danielle';
let lastName = 'Geiser';
let houseNumber = 15261;
let street = 'Ten Point Drive';
let city = 'Noblesville';
let state = 'IN';
let zipcode = 46060;


console.log(firstName, lastName + ',' ,houseNumber + ' ' + street + ',' , city + ', ' + state + ' ' + zipcode);

// Objects
// A collection of key-value pairings.
// Hold multiple datatypes

// Denotes by { }
// Has keys and values(color(key): 'blue'(value)), separeted with a colon.
// Each key is separated with a coma.

let burritosNow = {
  size: 'large',
  quantity: 4,
  now: true
};

console.log(burritosNow);
console.log(typeof burritosNow);


//Arrays
//Arrays are great for lists
//Denotes by [ ]
//Has values ('blue', 'green', 'yellow'), separated by commas

let burritos = ['large', 4, true];
console.log(burritos);
console.log(typeof burritos);










