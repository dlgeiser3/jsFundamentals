// Variables
// Variables are containers for storing data values (words, sentences, numers, objects, etc);


var a = 1;
var b = 2;
console.log(a + b);

/* Notes:
1. a varible must begin with a letter, underscroe, or a dollar sign
2. numers may follow the above characters, but cannot come first
3. JavaScript is case sensitive -- 'hello' and 'Hello' are different varible names
4. variables must be identified with unique names
*/

var x;
console.log('Declaration', x);

x = 10;
console.log('Initialization 1:', x);

x = 33;
console.log('Initialization 2:', x);

var y = 'Hello';
console.log('Both: ', x, y)


// Var, Let, and Const;

// Var = 'old' keyword;
// Let = 'new' keyword;
// Const = also 'new' keyword; declares unchangeable varibles 

var today = 'great!';
const elevenFifty = 'wonderful';
console.log(today, elevenFifty);

today = 'lovely!';
console.log(today, elevenFifty);

elevenFifty = 'Super';
console.log(today, elevenFifty);
