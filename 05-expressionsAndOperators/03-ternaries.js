// Ternaries

// Ternaries are a shorthand version of an if else if statement

let x = 6;

// If statement
if (x > 0) {
  console.log('yes');  
} else {
  console.log('no')
};

// ternary
(x > 0) ? console.log('yes') : console.log('no'); 
     // ? means "if"      // : means "else"


// conditional statement
if (x == 0) {
  console.log('Hello') 
} else if (x < 0) {
  console.log('Hi')
} else {
  console.log('Goodbye')
}

//ternary operator
(x == 0) ? console.log('Hello') : (x < 0) ? console.log('Hi') : console.log('Goodbye');


//CHALLENGE
let age = 27;

(age >= 25) ? console.log('You can rent a car!') : (age >= 21) ? console.log('You can drink!') :(age >= 18) ? 
console.log('You can vote!') : console.log("You're too young to do anything.");




//SWITCH
let yep = -8;

switch (true) {
  case (yep is < 0 && yep > -10):
    console.log('worked');
  break;
  case (yep > 0):
    console.log('worked!!');
  break;
  default:
    console.log("didn't work");
};


//ternary
let yep = -8;

(yep < 0 && yep > -10) ? console.log('worked') : (yep > 0) ? console.log('worked') : console.log ("didn't work");

