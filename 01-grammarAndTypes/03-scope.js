// Scope

// JavaScript has fuction scope.
// Scope determines the accessibility of these varaiables
// Variable defined inside of a function are NOT accessible from outside the function.

// Local and Global Scope
 
let x = 12
 function scope() {
   let x = 33
   console.log(x); 
 }
scope();
console.log(x);

let x = 12

function coffee() {
  x = 33
  console.log(x);
}
coffee()
console.log(x);

// Var vs Let

//VAR
var x = 12

function scope() {
  var x = 33
  if (true){
    var x = 45;
    console.log(x);
  }
  console.log(x);
}

scope()
console.log(x);


//LET
var x = 12

function scope() {
  var x = 33
  if (true){
    let x = 45;
    console.log(x);
  }
  console.log(x);
}

scope()
console.log(x);


//CONST
var x = 12

function scope() {
  var x = 33
  if (true){
    const x = 45;
    console.log(x);
  }
  console.log(x);
}

scope()
console.log(x);