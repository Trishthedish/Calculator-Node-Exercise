'use strict';
var prompt = require('prompt');

//start the prompt
prompt.start();

//collect two numbers (num1 and num2) and an operation
//then call the function `calculator` with the results
prompt.get(['num1','num2','operation'], calculator);



function calculator(error, result) {
  var total = 0;
  var num1 = parseFloat(result.num1);
  var num2 = parseFloat(result.num2);
  var operation = result.operation;

  if (isNaN(num1) || isNaN(num2)){
    throw "The input number is invalid.";
  }
  else if (num1 === "" || num2 === "" || operation === "") {
    throw "the input can not be empty.";
  }
  else {
    if (operation === "+" || operation === "add" ) {
      total = num1 + num2;
    }
     else if (operation === "-" || operation === "minus") {
       total = num1 - num2;
     }
      else if (operation == "*" || operation == "multiplication" || operation == "times") {

      }
   }
   console.log(num1 + " " + operation + " " + num2 + " = " + total);
}
// expression :	Value matched against label.
//
// label : An Identifier to be matched against expression.
//
// statements :	Group of statements that are executed once if expression matches label.




// var operation = operation;
// var add = function(num1, num2) {
//   return num1 + num2;
//
// };
//
// add(answer.num1, answer.num2);



// var subtract = function(num1, num2) {
//   return num1 - num2;
// };


// switch(operation) {
//   case "+" || "add" || "plus":
//   // statement that should be executed.
//     var total = num1 + num2;
//     console.log(total);
//   break;
//
//   case "-" || "subtract" || "minus":
//   // statement that should be executed.
//   break;
//
//   case "*" || "multiply" || "times":
//   //statement that should be executed.
//   break;
//
//   case "/" || "divide":
//   //statement that should be executed.
//   break;
//
//   default:
//   //statement that should be run.
//   break;
//
// }
