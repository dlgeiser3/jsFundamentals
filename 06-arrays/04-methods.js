//FARMERS MARKET CHALLENGE

// let veggAmounts = [{name:'Sweet Potatoes',amount:4},{name:'Heirloom Tomatoes',amount:15},{name:'Kolrabi',amount:2},{name:'Honey Combs',amount:1}];

// let veggPrices = [{name:'Sweet Potatoes',price:2},{name:'Heirloom Tomatoes',price:1.50},{name:'Kolrabi',price:4},{name:'Honey Combs',price:10}];

// function veggPricePairing(arr1,arr2) {
//   for(let i = 0; i < arr1.length; i++){
//     if(arr1[i].name == arr2[i].name){
//       arr1[i].price = arr2[i].price;  
//     }
//   }
//   return arr1;
// }
// console.log(veggPricePairing(veggAmounts,veggPrices));


let colors = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'blueviolet', 'indigo', 'violet', 'pink'];
let place = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'];


function colorPlace(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++){
      console.log(arr1[i] + " is " + arr2[i])
  }
};

colorPlace(place, colors);




// let foodFunction = () => {
//   for(f in food) {
//     console.log(f),
//     console.log(food[f]),
//     console.log(food)
//   }
// }

// foodFunction();