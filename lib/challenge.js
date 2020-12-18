/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */
function sayHello() {
  console.log("Hello World")
}
sayHello()
/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */
function print(message){
  console.log(message)
}
print("Hola")
/*
 * Prompt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 */
function printMessage(message){
  console.log("Today's message is ", message)
}
printMessage("Howdy")

/*
 * Prompt 4:
 *
 * Fix the following function:
 */

/** Starter Code */
function powerTwo(a) {
  return a ** 2
}
powerTwo(2)
/*
 * Prompt 5:
 *
 * Create a function called reverseMessage. This function should take
 * a parameter called message. When invoked and passed a string, print the
 * string in reverse. (hint: look up some ways of doing this.)
 */
function reverseMessage(str) {
  let strArray = str.split(""); 
  let reverseArray =[];
  for (let i=(strArray.length-1); i>=0; i--) {
      reverseArray.push(strArray[i]);
      } 
  return reverseArray.join("");
 }
console.log ("Your reversed message is: " + reverseMessage("Your email"));

/*
 * Prompt 6:
 *
 * Create a function called multiply that takes two parameters: a and b. When
 * invoked, multiply a times b. If b an argument is not passed in for b, then
 * double a (i.e. multiply it by two).
 *
 * Hint: use a default parameter.
 */
function multiply(a,b) {
  let answ = null;
  if (b == undefined) {
    answ= a*2;
  } else { answ =a*b;
  }
  return answ
}
console.log(multiply(3));
console.log(multiply(3,4));
/*
 * Prompt 7:
 *
 * Fix the following code. HINT: Think Objects :)
 */

/** Starter Code */
function makePerson(firstname, lastname) {
var person = {
  firstname: firstname,
  lastname: lastname
}
return person;
}

const zakk = makePerson('Zakk', 'F')
const jimmy = makePerson('Jimmy', 'B')
console.log(zakk)
console.log(jimmy)
/*
 * Prompt 8:
 *
 * Write a function that returns an object. The object can be anything.
 */
function carObj(name, carMake) {
var car= {
  owner: name,
  make: carMake
}
return Object.entries(car)[0]
}
console.log(carObj('Peter', 'Honda'))

/*
 * Prompt 9:
 *
 * Write a function that returns an array. The array can be of anything.
 */
function mkArray(length) {
var arrayLength= [];
for(let i=0; i<length; i++) {
  arrayLength.push(i)
}
return arrayLength
}
console.log(mkArray(10));

/*
 * Prompt 10:
 *
 * Write a function that, when called, adds a number passed in as a parameter to
 * the sum variable below. Invoke your method a few times and then print the sum
 */

/** Starter Code */
let sum = 0
function accSum(sumNum) {
    sum += sumNum
return sum
}
console.log(accSum(10));
console.log(accSum(10));
console.log(accSum(10));
/*
 * Prompt 11:
 *
 * Write a function that takes an array of number values and returns the sum.
 * Test it out to make sure it works.
 */
function sumArray(anArray) {
  let Array1 = anArray;
  let sumArray1 =0;
for(let i=0; i<anArray.length; i++) {
  sumArray1 += Array1[i];
}
return sumArray1
}
console.log(sumArray([1, 2, 3, 4, 5]));

/*
 * Prompt 12:
 *
 * Write a function that takes a string and returns an array of every word in
 * the string.
 */
function splitStr(str) {
  let strArray = str.split(""); 
  return strArray;
 }
console.log (splitStr("String"));

/*
 * Prompt 13:
 *
 * How can you write a function so that this expression works? It should print
 * the string "this works!"
 */

/** Starter Code */
function testFunc() {
console.log ("this works!");
 }
testFunc()

/*
 * Prompt 14:
 *
 * Write a function that takes the add function below as a parameter and invokes
 * it, passing in 2 and 4.
 */

/** Starter Code */
let adding =function add(a, b) {
  return a + b
}
adding(2,4);

/*
 * Prompt 15:
 *
 * Write a function that returns another function. Have the inner function print
 * the string "hello world"
 */
function sayHelloNested() {
  let message2 = "Hello again World";
  let printString = function printMessage(string){
  console.log(string)
}
  return printString(message2)
}
sayHelloNested()

