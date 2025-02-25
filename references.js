// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;

// bad 
var count = 1; 
if (true) {
    count += 1;
}

// use let instead 
let count = 1; 
if (true) {
    count += 1; 
}

// const and let only exist in the blocks they are defined in.
{
    let a = 1;
    const b = 1;
    var c = 1;
  }
  console.log(a); // ReferenceError
  console.log(b); // ReferenceError
  console.log(c); // Prints 1