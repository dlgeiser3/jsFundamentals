// Arrays

// Arrays are and object. Thay area container that can hold multiple datatypes.
// Has [] brackets
// Great for lists 

let students = ['Sebastian', 'Eric', 'Michael', 16, 74, false, ['Nic', 'Charles', 'Ethan']];

console.log(typeof students);

console.log(students instanceof Array);

console.log(students[1]); //square bracket notation
console.log(students[6][1]);

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

//  food.push('Pizza', 'Chips', 'Ice cream'); //appends a value or values to an array
//  food.splice(1, 1, 'Banana') //can add value at specific point and delete another value
//  food.splice(2, 0, 'Sweet Potato Pie')
food.pop(); // this will remove the last item in your array
food.shift(); //removes the first item from the array
food.unshift('Muffin'); //inserts elements at the start of any array
console.log(food);

for(f in food) {
  console.log(food[f]);
  //console.log[f];
}
