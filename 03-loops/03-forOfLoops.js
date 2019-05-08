// FOR OF LOOPS

// The for... of statement creates a loop iterating over iterable objects, meaning it can numerically look over these items. 
    //iterable vs. enumerable
  

let student = {name: 'Peter', awesome: true, degree: 'JavaScript', week: 1};
for (item of student) {
  console.log(item);
}; //student is not iterable (because it is an object -- it would with "for in") 
      // -- the keys become part of the ordered schema and it cannot iterate

let dogArray = ['collie', 'shiba', "akita", "beagle", "irish wolfhound"];
for(dog of dogArray) {
  console.log(dog)
};


