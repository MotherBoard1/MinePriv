function myfunc()
{
    document.getElementById("demo").innerHTML = "Taylor Swift"
   //  here innerhtml is used, it can also be used to output a variable
   //  document.write(5*8)
   //  document.write removes all html and overwrites inner html
   //  window.alert(4*5)
   //  alert happens before innerhtml and write happens
   //  console.log(4+5)
   // window.print()
    
}

//different ways to write into an element
/* html element = innerhtml
   html output = docujment.write
   alert box = window.alert
   browser console = console.log

 //  console.log(9+9)

 let x, y, z
 x = 9
 y = 8
 z = x + y
 console.log(z);
 g

 //redeclaring with var works but not with let or const

 let x = "3" + 4 + 5
 console.log(x);

 //javascript treats $ as letters

 let $ = 9, $$ = 45
 console.log($ + $$);

 carName = "Volv"
 var carName //can hoist
 console.log(carName)

 carname = "Volv"
 let carname // cant hoist also const
console.log(carname)

const person = {
   firstname: "John",
   lastname: "Doe",
   age: 30,
   eyeColor: "blue"
}

console.log(person.age, person.eyeColor)



function myF(p1, p2)
{
   return p1*p2
}

console.log(myF(2, 3))

function toCelsius(faren)
{
   let RedNam; //local variables
   return ((5/9) * (faren-32))
}

console.log(toCelsius(41));*/

// const car = {
//    type:"Fiat",
//    model:"500",
//    color:"white",
//    description: function() {
//       return this.model + " " + this.color+ " " + this.type
//       //this refers to the object being called - the owner of the function
//    }
// }
// property
// console.log(car.color);

// console.log(car["model"]);

//methods - functions stored as a property
// var halt = car.description()
// console.log(halt);

//events things that happen to html
// An HTML event can be something the browser does, or something a user does.

// Here are some examples of HTML events:

// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked

//<element event="some JavaScript">
//<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>

// console.log("it's \n me");

// let text = "hell \"she\" said fully"
// console.log(text);

// let text1 = "hey bitches\
//  Gerd!"

// console.log(text1);
// let text2 = "hey bitches " +
// "Ned!"

// console.log(text2);

// let x = "Herw"
// let y = new String("Herw")
// let z = new String("Herw")

// if(x != y)//theyre similar in strings
// {
//    console.log("YES BITCH");
// }

// if(z === y) // theyre not the same type
// {
//    console.log("m BITCH"); //can't compare two js objects, it'll give you false
// }


// let red = "QWERTYUIOPASDFGHJKLZXCVBNM"
//console.log(red.length);

// let part = red.slice(5,17)
// let port = red.slice(-19, -9)
// console.log(part);
// console.log(port);

// let part = red.substring(5,17)
// //let port = red.substring(-19, -9)
// console.log(part);
// //console.log(port);
// part = part.replace(part, "hetero bitches")
// console.log(part);
//replace onlyreplaces the first match
//let text = "Please visit Microsoft!";
//let newText = text.replace("MICROSOFT", "W3Schools");
//case sensitive so it won't work

// let text = "Please visit Microsoft!";
// let newText = text.replace(/MICROSOFT/i, "W3Schools");

//to replace caps with small letters

// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace(/Microsoft/g, "W3Schools");

//toupper, trikm, concat

// let text = "5";
// let padded = text.padStart(4,"0");
// let pad = text.padEnd(4,"x");
// console.log(padded, pad);

//pad is a string method
//charAt returns character at idex, charCodet returns unicode

// let str = "Please locate where 'locate' occurs!";
// console.log(str.lastIndexOf("locate")) //starts with 1
// console.log(str.lastIndexOf("John"))
// console.log(str.lastIndexOf("locate", 15))
// console.log(str.search("locate")) //starts with 0

// let text = "The rain in SPAIN stays mainly in the plain";
// console.log(text.match(/ain/g)); //not a global search
// console.log(text.match(/ain/gi)); //a global search (case insensitive)
// console.log(text.includes("main, 21")); //does a string include a specific value
// console.log(text.startsWith("rain", 4)); //does it start wth? nope, thenfalse
// console.log(text.endsWith("in", 12));

//TEMPLATE LITERALS
//text = `He's dead but I shouted "No he's not"`
// console.log(text) //i can use both quotes

// text = `he
// this is fine
// really` // I can type on multilines too
// console.log(text)
// let named = "Honey"
// let named1 = "Darling"

// text = `You know, I dont call him ${named} but ${named1}`
// console.log(text)
// //Automatic replacing of variables with real values is called string interpolation.

// let price = 10
// let VAT = 0.25

// let total = `Total: ${price * (1+VAT).toFixed(2)}`
// console.log(total)

//returns the index of the last occurence
//-1is returned if it doesnt exist

// let header = "Templates Literals";
// let tags = ["template literals", "javascript", "es6"];

// let html = `<h2>${header}</h2><ul>`;
// for (const x of tags) {
//   html += `<li>${x}</li>`;
// }

// html += `</ul>`;
// document.getElementById("demo").innerHTML = html;

//The maximum number of decimals is 17.
// let x = 123e5;    // 12300000
// let y = 123e-5;   // 0.00123
// let x = "10";
// let y = "20";
// let z = x + y;
// console.log(z); ///1020

// let x = 10;
// let y = 20;
// let z = "The result is: " + (x + y) //without the bracket, itll concatenate
// console.log(z);

// let x = 10;
// let y = 20;
// let z = "30";
// let result = x + y + z; //3030 cuz x and y a re numbers
// //JavaScript will try to convert strings to numbers in all numeric operations:
// //js will perform every other operation with numbers in strings except +
// // console.log(result);

// let x1 = 100/"App"
// console.log(isNaN(x1))

// let x = NaN
// let y = 5
// let z = x + y
// console.log(z); //gives nan

// let x = NaN;
// let y = "5";
// let z = x + y;
// console.log(z); //concatenation

// let myNumber = 2;
// // Execute until Infinity
// while (myNumber != Infinity) {
//   myNumber = myNumber * myNumber;
// }
// console.log(myNumber); //infinity is a number

// let myNumber = 32;
// console.log(myNumber.toString(32));
// console.log(myNumber.toString(16)); //hex
// console.log(myNumber.toString(12)); //douze
// console.log(myNumber.toString(10));//decimal
// console.log(myNumber.toString(8));//octal
// console.log(myNumber.toString(2));//binary

//numbers can be objects

// let y = new Number(123) //works but slows execution speed
// let x = 123

// console.log(Boolean(x == y)) //equall
// console.log(Boolean(x === y)) //not equal

//number has objects
// let x = 123
// let y = 5.674547
// console.log(x.toString())
// console.log((100 + 23).toString())
// console.log(x.toExponential(3));
// console.log(y.toFixed(3));

// //.toprecision, .tovalueof
// //number(), parseInt(), parseFloat()

// //console.log(Number(new Date("1970-01-01")));

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NEGATIVE_INFINITY);

//these properties above cannot be used on nujmbers


//array literal

// const array_name = ['sab', 'seb', 'kol']
// const color = new Array("red", "orange", "yellow")
//the value of an array can be changed
//document.getElementById("demo").innerHTML = array_name
//arrays are objects

//You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
//cars.sort() sorts the array

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let text = "<ul>";
// fruits.forEach(myFunction);
// text += "</ul>";

// function myFunction(value) {
//   text += "<li>" + value + "</li>";
// }

// array_name.push("fer")
// console.log(array_name);
// color[color.length] = "green"
// console.log(color);
// console.log(color.toString())
// console.log(color.join("&"))
// In JavaScript, arrays use numbered indexes.  
// In JavaScript, objects use named indexes.

//const point = [40] is not the same as const points = new Array(40);

// const array_name = ['sab', 'seb', 'kol']
// const color = new Array("red", "orange", "yellow")

// console.log(console.log(color.push("kiwi"))); //pushes kiwi to the last pat of array
//pop pushes out the last array
//shift retuns the value that was shifted out
//unshift, adds an element to the beginning
//delete obv deletes, but it leaves undefined holes
//concat adds two arrays together
//splice can add and remove
//slice brings out a piece

// const points = [40, 100, 1, 5, 25, 10];

// for (let i = points.length -1; i > 0; i--) {
//   let j = Math.floor(Math.random() * i)
//   let k = points[i]
//   points[i] = points[j]
//   points[j] = k
// }

//You can use Math.max.apply to find the highest number in an array

// function myArrayMax(arr) {
//    let len = arr.length;
//    let max = -Infinity;
//    while (len--) {
//      if (arr[len] > max) {
//        max = arr[len];
//      }
//    }
//    return max;
//  }

// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);
// document.getElementById("demo").innerHTML = txt;

// function myFunction(value, index, array) {
//   txt += value + "<br>";
// }

// The map() method creates a new array by performing a function on each array element.

// The map() method does not execute the function for array elements without values.

// The map() method does not change the original array.


// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value, index, array) {
//   return value * 2;
// }
// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself
// When a callback function uses only the value parameter,
//  the index and array parameters can be omitted
// console.log(numbers2);

// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

//filter does a function and filters according to that

// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);
// let sum1 = numbers.reduceRight(myFunction);

// function myFunction(total, value, index, array) {
//   return total + value;
// }

// console.log(sum1);
// console.log(sum);

//every() checks if it passes the test

//some checks if some pass the test

// const d = new Date() //object creating current date and time

//7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
//one parameter will be treated as millisecs

//const d = new Date(99, 11, 24);
//const d = new Date(9, 11, 24);
//that is 19xx

// const d = new Date("October 13, 2014 11:13:00");

// console.log(d);

//properties math.e, math.pi
//methods math.round()
// const fruits = new Map([
//    ["apples", 500],
//    ["bananas", 300],
//    ["oranges", 200]
//  ]);
 
//  for (const x of fruits) {
//    console.log(x);
//  }
 

//A JavaScript Set is a collection of unique values. Each value can only occur once in a Set.
// has add, delete, foreachh method and has size as a property
//A Map holds key-value pairs where the keys can be any datatype.b A Map remembers the original insertion order of the keys.
//hhas set, get, size, delete
//typeof

//constructor constructor function for all JavaScript variables.
//undefined means undefined while null is an object

//tyoe conversion
// Number("2345") //to number
// parseFloat("78") //to float
// parseInt("78") //to inyt

//unary + operator
// let y = "5";      // y is a string
// let x = + y;      // x is a number

//String(9) number to string

// //(123).toString()
// d = new Date();
// d.getTime()        // returns 1404568027739
//string(Date())

// Number(false)     // returns 0
// Number(true)      // returns 1

//javascript has bitwise operators as well

//A regular expression is a sequence of characters that forms a search pattern.

//The search pattern can be used for text search and text replace operations.

//string.search() under regexp
// let text = "Visit W3Schools!";
// let n = text.search("W3Schools");

// let text = "Visit Microsoft!";
// let result = text.replace("Microsoft", "W3Schools");