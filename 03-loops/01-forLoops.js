// FOR LOOPS

/*
A loop is a programming tool that repeats a set of instructions until a specified condition is met. 
*/

const vacationSpots = ['Florence', 'Copenhagen', 'Istanbul'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

// Types of loops
/*
For statement
Do While Statements
While statements
Labeled statement
Break Statement
Contiue statement
For in statement
For of statement
*/

      // ctr C --Stops terminal from running 

for (let i = 0; i < 10; i++){
  console.log(i);
};

//CHALLENGE

for (let i = 0; i <= 20; i += 2){
  console.log(i);
};

for (let i = 10; i >= 0; i--){
  console.log(i);
};


for (let i = 0; i >= -24; i -= 2){
  console.log(i);
};


//CHALLENGE 1 spell out your name
let name = 'Danielle'

/* 
for (let x = 0; x <= 7; x++){
  console.log(name[x])
}
*/


for (x = 0; x < name.length; x++){
  console.log(name[x])
}

//CHALLENGE 2 adds all numbers 1 - 50

var sum = 0;
for (var i = 1; i <= 50; i++) {
  console.log(sum = sum + i);
};
