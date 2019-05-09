// Iterating

//forEach(); method that executes a function once for each array element

forEach('currentValue', 'the index', 'the entire array');

let food =['Pie', 'Cake', 'Pizza', 'Pasta', 'Cupcake'];

// food.forEach(f => {console.log(f) } );
// food.forEach((f, number) => {console.log(number, f) } );
// food.forEach( (f, number, array) => {console.log(f, number, array) } );

let foodFunction = () => {
  for(f in food) {
    console.log(f),
    console.log(food[f]),
    console.log(food)
  }
}

foodFunction();



//CHALLENGE 

let movies = ['Kiki\'s Delivery Service', 'Lord of the Rings', 'My Neighbor Totoro'];

movies.forEach(m => {console.log(m) } );

movies.push('Spirited Away');
console.log(movies);

movies.splice(1, 1, 'Howl\'s Moving Castle');
console.log(movies);


