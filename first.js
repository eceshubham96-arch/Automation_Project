x=null;
y=undefined;
console.log(x) 
console.log(y);
fullname="shubham";
age=24;
price=99.99;
console.log(price);
console.log(age);
console.log(fullname)

console.log(fullname);
console.log('welcome to the world of JavaScript!');
console.log("my name is shubham");
console.log("i love backchodiya");
console.log("apna college");
console.group("apna college");
console.log("i m scaring in coding");
console.log("my age is 24");
console.groupEnd();

console.group("User Profile");
console.log("Name: Shubham");
console.log("Age: 24");
console.log("Course: JavaScript");
console.groupEnd();

console.group("login api debugging");
 console.debug("login api debugging");
console.log("restarted");
console.error("failed to fetch user");
console.log("retrying");
console.warn("api is slow");
console.groupEnd();

age=27;
price=100.70;
console.log(age, price);
console.log(age + "\n" + price);
console.log("age:", age);
console.log("price:", price); 

// fullname="shubham";
// console.log("fullname:" + fullname);

// // boolean type variables
// let isloggedin = true;
let isloggedout = false;

if (isloggedout) {
    console.log("welcome to the dashboard");
} else {
    console.log("please login to continue");
}

let isloggedin = true;

if (isloggedin) {
    console.log("welcome to the dashboard");
} else {
    console.log("please login to continue");
}

let msg = "hello world";

if(msg) {
    console.log("message is not empty");
} else {
    console.log("message is empty");
}

// string functions

let emptyString = "shub";

if (emptyString) {
    console.log('string is not empty — name: ' + emptyString);
} else {
    console.log('string is empty');
}



let cartSummary = calculateCart(cart);
console.log("Total items in cart:", cartSummary.totalQuantity);
// console.log("Total price:", cartSummary.totalPrice);

// if (cartSummary.totalPrice > 50) {
//     console.log("Your order qualifies! Apply a discount or ship for free.");
// } else {
//     console.log("Your order is small. Add more items to qualify for a discount.");
// }

console.group("login api debugging");
//  console.debug("login api debugging");
console.log("restarted");
console.error("failed to fetch user");
console.log("retrying");
console.warn("api is slow");
console.groupEnd();


console.group('user profile');
console.log('name');
console.error('gaand mra jaake ');
console.log('bsdk');
console.warn('sorry');
console.groupEnd();
{

 let x=22;
 let y=('shubham');
 console.log('x: ' + x + '\ny: '+ y);
}
 {
 let x=24;
 console.log(x+10);
 }
 {
  let [x,y]= [-60,20]  ;
  console.log(x-10);
  console.log(y+10);
}

let arr = [5, 10, 15 ,20];
arr[1] = 20;

console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
let arr = [5, 10, 15];

console.log(arr[0]); // ?
console.log(arr[1]); // ?
console.log(arr[2]); // ?

// array is a data structure that can hold multiple values in a single variable.
let arr = [9, 18, 27];

// console.log(arr[1]); 
arr[1] = arr[1] + 10;
arr.push(20);
// console.log(arr);


let name = "Shubham";   // string
let age = 24;           // number
let isStudent = true;   // boolean

console.log(name);
console.log(age);
console.log(isStudent);

let arr = [1, 2, 3, 4, 5]; // array
arr[2] = arr[2] + 25;
arr.push(5);
console.log(arr);

let x = null;
let y = undefined;
let z = null;
console.log(x + " " + "\n" + y + ''+ '\n' +z);

console.log("welcome to the world of JavaScript!");
 
console.group('apna college');
console.log('restarted');
console.error('failed to fetch user');
console.log('retrying');
console.warn('api is slow');
console.groupEnd();

console.groupCollapsed("user profile");
console.log("name: shubham");
console.log("age: 24");
console.log("course: JavaScript");
console.groupEnd();



 