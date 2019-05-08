// FOR IN LOOPS

// Great for iterating over values in an object
// The for in statement iterates a specified variable over all the enumerable properties of an object

let student = {name: 'Peter', awesome: true, degree: 'JavaScript', week: 1};
for (item in student) 
{ //console.log('item =>', item); // name awesome degree work
console.log('student[item] =>',student[item]);
};

let dogArray = ['collie', 'shiba', "akita", "beagle", "irish wolfhound"];
for (dog in dogArray){
  console.log(dog)
};

let catArray = ['tabby', 'maine coon', 'burmese', 'british shorthair'];
for (cat in catArray){
  console.log(catArray[cat])
};

/*
let name = 'daNielle';
for (letter in name.slice(1)){
  console.log(name.slice(1)[letter].toLowerCase())
};
*/

let studentName = 'dAnielle';
let capName;
for ( let n in studentName ) {
  if (n == 0) {
    capName = studentName[n].toUpperCase();
  } else {
    capName += studentName[n].toLowerCase()
  }
}
 console.log(capName);



firstLetter = name[0] + name.slice(1).toLowerCase()