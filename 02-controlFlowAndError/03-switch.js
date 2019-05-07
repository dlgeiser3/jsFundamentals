// SWITCH

let friend = 'Carol';

switch(friend) {
  case "Tom":
    console.log('Hey Tom!');
  break;
  case "Ken":
    console.log ('Hey Ken!');
  break;
  case "Carol":
    console.log ('Hey Carol!');
  break;
  default: 
    console.log(`I'm sorry, ${friend}, but do I know you?`); //BACKTICKS USED HERE to include friend varible 
  };


// String interpolation allows us to create a placeholder for the value of a varible that we choose to assign

let dessert = 'Pudding';

switch(dessert) {
  case 'Pie':
    console.log('Pie, pie, me oh my');
  break;
  case 'Cake':
   console.log('Cake is great!');
  break;
  case 'Ice Cream':
    console.log('I scream for ice cream!');
  break;
  default:
    console.log(`I'm sorry, ${dessert} is not on the menu.`)
};


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



