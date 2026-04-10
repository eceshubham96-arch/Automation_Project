// x=null;
// y=undefined;
// console.log(x) 
// console.log(y);
// fullname="shubham";
// age=24;
// price=99.99;
// console.log(price);
// console.log(age);
// console.log(fullname)

// console.log(fullname);
// console.log('welcome to the world of JavaScript!');
// console.log("my name is shubham");
// console.log("i love backchodiya");
// console.log("apna college");
// console.group("apna college");
// console.log("i m scaring in coding");
// console.log("my age is 24");
// console.groupEnd();

// console.group("User Profile");
// console.log("Name: Shubham");
// console.log("Age: 24");
// console.log("Course: JavaScript");
// console.groupEnd();

// console.group("login api debugging");
 // console.debug("login api debugging");
// console.log("restarted");
// console.error("failed to fetch user");
// console.log("retrying");
// console.warn("api is slow");
// console.groupEnd();

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

let fullstring = "";
if(fullstring) {
    console.log("string is not empty - name: " + fullstring);
} else {
    console.log("string is empty - name:shub " + fullstring);
}
let name = "shubham";
// start a timer before using timeLog/timeEnd
console.time("name length calculation");
let nameLength = name.length;
console.timeLog("name length calculation");
console.timeEnd("name length calculation");
console.log("length of the name: " + nameLength);

// Hard-coded learning example: shopping cart summary
let cart = [
    { item: "Apple", quantity: 3, unitPrice: 10 },
    { item: "Banana", quantity: 2, unitPrice: 5 },
    { item: "Cake", quantity: 1, unitPrice: 50 }
];

function calculateCart(cartItems) {
    let totalQuantity = 0;
    let totalPrice = 0;

    for (let i = 0; i < cartItems.length; i++) {
        let product = cartItems[i];
        totalQuantity += product.quantity;
        totalPrice += product.quantity * product.unitPrice;
        console.log("Item:", product.item, "x", product.quantity, "=", product.quantity * product.unitPrice);
    }

    return {
        totalQuantity: totalQuantity,
        totalPrice: totalPrice
    };
}

let cartSummary = calculateCart(cart);
console.log("Total items in cart:", cartSummary.totalQuantity);
console.log("Total price:", cartSummary.totalPrice);

if (cartSummary.totalPrice > 50) {
    console.log("Your order qualifies! Apply a discount or ship for free.");
} else {
    console.log("Your order is small. Add more items to qualify for a discount.");
}

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

