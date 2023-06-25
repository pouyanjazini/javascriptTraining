//practice number 7
var Friends = [
    { FirstName: "Hassan", LastName: "RezaAli" },
    { FirstName: "Niloo", LastName: "Khalili" }
];



function printFriends(friends) {
    for (var i = 0; i < friends.length; i++) {
        console.log("First Name: " + friends[i].FirstName + ", Last Name: " + friends[i].LastName);
    }
}

printFriends(Friends);



//practice number 8
var myPerson = {FirstName : 'Pouyan', LastName : 'Jazini'};

function printMyName(myname) {
    
        console.log("First Name: " + myname.FirstName + ", Last Name: " + myname.LastName);
    
}


printMyName(myPerson);


//practice number 9
//////
function sum() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    return result;
  }
  
 
  console.log(sum(1, 2, 3, 4)); // prints 10
  console.log(sum(5, 10, 15)); // prints 30

///////////
  function subtraction() {
    var result = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      result -= arguments[i];
    }
    return result;
  }
  
 
  console.log(subtraction(10, 2, 3)); // prints 5
  console.log(subtraction(20, 5, 2, 3)); // prints 10

/////////
  function multiply() {
    var result = 1;
    for (var i = 0; i < arguments.length; i++) {
      result *= arguments[i];
    }
    return result;
  }
  

  console.log(multiply(2, 3, 4)); // prints 24
  console.log(multiply(5, 10, 2)); // prints 100

//////
  function divide() {
    var result = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      if (arguments[i] !== 0) {
        result /= arguments[i];
      } else {
        console.log("Error: Division by zero.");
        return null;
      }
    }
    return result;
  }
  

  console.log(divide(20, 2, 5)); // prints 2
  console.log(divide(10, 0, 2)); // prints "Error: Division by zero." and returns null


////////////////////
//practice number 10


  function operation(operationName, ...args) {
 
    switch (operationName) {
      case "sum":
        return sum(...args);
      case "subtract":
        return subtraction(...args);;
      case "multiply":
        return multiply(...args);
      case "divide":
        return divide(...args);
      default:
        console.log("Error: Invalid operation.");
        return null;
    }
  }

console.log(operation("sum", 1, 4, 6)); // prints 11
console.log(operation("subtract", 10, 2, 3)); // prints 5
console.log(operation("multiply", 2, 3, 4)); // prints 24
console.log(operation("divide", 20, 2, 5)); // prints 2
console.log(operation("power", 2, 3)); // prints "Error: Invalid operation." and returns null


///////////////////
//practice number 11

function callbackOperation(callbackFn, ...args) {
  return callbackFn(...args);
}


console.log(callbackOperation(sum, 1, 4, 6)); // Output: 11

///////////////////
//practice number 12
function oddOrEven(num) {
  if (num % 2 === 0) {
    console.log('is even');
  } else {
    console.log('is odd');
  }
}


oddOrEven(5); // Output: is odd
oddOrEven(6); // Output: is even

//////
function oddOrEven2(num) {
  console.log(`${num} is ${num % 2 === 0 ? "even" : "odd"}`);
}


oddOrEven2(5); // Output: 5 is odd
oddOrEven2(6); // Output: 6 is even


////
function oddOrEven3(num) {
  switch (num % 2) {
    case 0:
      console.log(`${num} is even`);
      break;
    case 1:
      console.log(`${num} is odd`);
      break;
    default:
      console.log(`${num} is not a valid number`);
  }
}


oddOrEven3(5); // Output: 5 is odd
oddOrEven3(6); // Output: 6 is even


/////practice number 16 
// var obj = {
//   charlize_theron: 23,
//   brad_pitt: ['angelina_jolie', 'Nicole Kidman'],
//   jennifer_lawrence: {
//     jennifer_aniston: 22,
//     // null,
//     jennifer_connelly: 63
//   }
// }

// var mystr = JSON.stringify(obj);
// var spl = mystr.split('_');
// console.log(spl);
// console.log(mystr);

// function convert(obj) {
//   var newObj = {};
//   for (var key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       var newKey = '';
//       var words = key.split('_');
//       for (var i = 0; i < words.length; i++) {
//         var word = words[i];
//         if (i > 0) {
//           word = word.charAt(0).toUpperCase() + word.slice(1);
//         }
//         newKey += word;
//       }
//       var value = obj[key];
//       if (typeof value === 'object' && value !== null) {
//         newObj[newKey] = convert(value);
//       } else {
//         newObj[newKey] = value;
//       }
//     }
//   }
//   return newObj;
// }

// var obj = {
//   charlize_theron: 23,
//   brad_pitt: ['angelina_jolie', 'Nicole Kidman'],
//   jennifer_lawrence: {
//     jennifer_aniston: 22,
//     // null,
//     jennifer_connelly: 63
//   }
// };

// var newObj = convert(obj);
// console.log(newObj);


// var obj ={
//   name : 'pouyan',
//   age : 33
// }

// Object.defineProperty(obj,'ghad',{value:175})
// Object.defineProperty(obj,'family',{value :'jazini',enumerable : true})

// console.log(obj);
// console.log(JSON.stringify(obj));

// var obj = {
//   name: 'Ali'
//   //   age: 33
// }


// Object.defineProperty(obj, 'age', {
//   get: function () {
//     return this.age
//   },
//   set: function (value) {
//     this.age = +value
//   }
// })

// obj.age = '39'

// console.log(obj)