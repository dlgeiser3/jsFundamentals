//Returns

function capitalizeName(name) {
  let capName = '';
  for (let l in name) {
    if (l == 0) {
      capName += name[l].toUpperCase();
     } else {
       capName += name[l].toLowerCase();
     }
  }
  console.log(capName);
  return capName
}

const myName = capitalizeName('danIeLLe');

console.log(myName, 'Hello');


//CHALLENGE Tip calculator

function tipCalc(total, percent) {
  let tipTotal = total * (percent/100);
  let grandTotal = tipTotal + total;
  console.log(`Tip = $${tipTotal.toFixed(2)}`);
  console.log(`Grand total = $${grandTotal.toFixed(2)}`);
  return tipTotal;
  return grandTotal;
};

tipCalc(156.45, 25);

