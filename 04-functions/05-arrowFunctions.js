//Arrow Functions

//Normal
function coffee() {
  console.log('coffee is good');
};

//Fat Arrow
let coffee = () => {
  console.log('fat arrow coffee');
};

coffee();

//Concise Body
//concise bodies do not nee parantheses, unless you have more than one parameter
//return is implied
//line breaks are bad
let apples = (x, y) => console.log(`There are ${x} apples and ${y} pears.`);

apples(10, 6);

//Block Body
let apples = (x) => {
  console.log(`There are ${x} apples.`);
};

apples(8);
