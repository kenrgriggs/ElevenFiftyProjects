// ********** Relational Operators **********

// Greater than: >
// Less than: <
// Less than or equal to: <=
// Greater than or equal to: >=

// ********** Logical Operators **********

// AND: &&
// OR:  ||

// ********** Equality Operators **********

// Equal: ==           Strict: ===
// Not Equal: !=       Strict: !==
//

/* EXAMPLE

let age = 12;
if (age >= 21) {
    console.log('Can Purchase Alcohol.');
} else {
    console.log('Cannot Purchase Alcohol.');
}

*/

// CHALLENEGE 1: Who's Name is longer?

var myName = 'Kenneth';
console.log(myName);
var friendsName = 'Andr';
console.log(friendsName);

var namelength = Math.abs(myName.length - friendsName.length);
console.log(namelength);


if ( myName.length > friendsName.length ) {
    console.log(myName, 'has the longer name, and it has', myName.length, 'letters, which is', namelength, 'longer than', friendsName,);
} else if ( myName.length < friendsName.length ) {
    console.log(friendsName, 'has the longer name, and it has', friendsName.length, 'letters, which is', namelength, 'longer than', myName,);
} else {
    console.log( friendsName, 'and', myName, 'are the same length.');
}

/*
function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00');
  }
  
  console.log(getFee(true));
  // expected output: "$2.00"
  
  console.log(getFee(false));
  // expected output: "$10.00"
  
  console.log(getFee(null));
  // expected output: "$10.00"
  */