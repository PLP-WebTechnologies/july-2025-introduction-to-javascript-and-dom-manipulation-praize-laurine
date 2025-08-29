// Part 1: Mastering JavaScript Basics

let userName = "Johnte Fresh "
let age = 20

if (userName >= 18) {
    console.log (`Hey ${userName}, You are of age to use this site.`);
} else{
    console.log (`Hey ${userName}, You are still a minor.`)
}

// Operators
let x = 9;
let y = 5;

console.log(`Addition: ${x + y}`);
console.log(`Multiplication: ${x * y}`)


// Part 2: JavaScript Functions — The Heart of Reusability

function calculateTotal(price, quantity){
    return price * quantity
}

let total = calculateTotal(10, 3);
console.log(`Total price (10 * 3): ${total}`);


function greeting(name){
    return `Hello, ${name}`;
}

console.log(greeting("Chakim"));


// Part 3: JavaScript Loops — Embrace the Power of Repetition!

for (let i = 5; i >= 5; i-- ){
    console.log(i)
}

// Looping through an array

let fruits = ["apple", "blueberry", "grapes"];

console.log("fruits in the array:");

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


// Part 4: Mastering the DOM with JavaScript

// a)Toggle text visibility
let toggleBtn = document.getElementById("toggle-btn");
let message = document.getElementById("message");

toggleBtn.addEventListener("click", function() {
  if (message.style.display === "none") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
});

// b)Changing text content dynamically
message.addEventListener("mouseover", function() {
  message.innerText = "Hey, You just hovered over me!";
});

message.addEventListener("mouseout", function() {
  message.innerText = "Hurray! You've successfully learnt how to toggle in JavaScript";
});

// c)Create elements dynamically by adding list items
let addItemBtn = document.getElementById("add-item-btn");
let list = document.getElementById("dynamic-list");

addItemBtn.addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(newItem);
});