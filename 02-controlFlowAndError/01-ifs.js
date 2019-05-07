// IF

//IF SYNTAX
/* 
if(condition) {
  //logic
  console.log('words')
}; 
*/



let isOn = true;

if(isOn == true) {
  console.log('The light is on!')
};

if (isOn){ 
  console.log('The light is on, yay!')
};

let isOff = false;

if (isOff == false) {
  console.log('The light is off')
};

weather = 65;

if (weather < 70) {
  console.log('Wear a jacket')
};

// IF ELSE
weather = 75;

if(weather < 70) {
  console.log('Wear a jacket')
} else {
  console.log('No jacket necessary')
};

// IF ELSE SYNTAX
/* 
if (condition) {
  logic
  console.log(logic)  
} else {
  console.log(error)
}
*/

let name1 = 'Danielle'

if(name1 == 'Danielle') {
  console.log('Hello, my name is', name1 + ".")
} else {
  console.log('Hello, what is your name?')
};



//let name = 'daNielle'

//if(name.charAt(0) == name.charAt(0).toUpperCase(1)) {
 // console.log(name)
//} else {
  //console.log(name.charAt(0).toUpperCase(1) + name.slice(1))
//};



//CHALLENGE Print first letter upper case and all others lower case
let name = 'daNIellE'

if (name[0] == name[0].toUpperCase()) {
  firstLetter = name[0] + name.slice(1).toLowerCase()
  console.log(firstLetter)
} else {
 otherLetters = name.charAt(0).toUpperCase() +name.slice(1).toLowerCase()
 console.log(otherLetters);
};

//ELSE IF

/*
if (condition) {
  logic a 
} else if (different condition) {
  logic b 
} else {
  logic c 
}
*/

age = 27;

if (age <= 17){
  console.log("You're too young to do anything.")
} else if (age > 17 && age < 21){ 
  console.log("You can vote!")
} else if (age > 20 && age < 25) {
  console.log("You can drink!")
} else if (age == 25 ) {
  console.log("You can rent a car!")
} else {
  console.log("You're old.")
};

// else ifs will stop at the first condition that is met

