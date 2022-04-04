/*const promt = require('prompt-sync')();

var age = promt("Enter Age: ");
var name = "Alejandro";

if (age > 14 ) {
    console.log("You are too old for this website");
}
    else {
    console.log("Welcome " ,name,"!");
}*/

//-------------------new code--------------------------
//prompt function for use interraction!!

/*const number = require('prompt-sync')();

var name = number("Enter your name: ");
var age = number("Enter your Age: ");

console.log("Your Name is: " ,name);
console.log("And")
console.log("Your age: Your are ", age, "years young");
*/

//---------------------New Code---------------------
//Delay code for webpage!!

/* var computers = 10;
setTimeout (delay, 1000);

while (computers > 0) {

    console.log("Broken computer!");
    computers --;
}

function delay (){
console.log("All computers are broken!");
}

//------------ New Code -----------------------
//Bottle Game
var name = "Bottles";
var value = 99;

while (value > 0) {
   console.log(value,"",name, "of beer on the wall");
   console.log(value,"",name, "of beer");
   console.log("Take one out, pass it around");
   value --;
   if (value > 0){
       console.log("Now we have ",value,"",name, "of beer on the wall\n");
   }
   else {
       console.log("There is no more",name, "on the wall!", "\nLets go get 99 more!");
   }
}
//----------New Code ----------------------
  for (i = 1; i <= 5; ++i) {
    setDelay(i);
  }
  
  function setDelay(i) {
    setTimeout(function(){
      console.log(i);
    }, 5000);
  }*/
 
//--------------------New Code----------------
// Using Functions!!!

/*
function bark(name, weight){
  if (weight > 20){
    console.log(name,"barks WOOF, WOOF!");
  }
  else 
  console.log(name, "barks wood, woof!");
}
bark("Princess", 11);
bark("Killer", 25);
bark("Prince", 30);
*/

//----------------New Code---------------
/*
function inVoc(temp){
  temp =2 ;
}

var yoke = 1;

inVoc(yoke);

console.log(yoke);
*/

//------- New Code-------------
/*
function calculatedArea(r){
    if (r <= 0){
      return 0;
    }
    else {
      area = (Math.PI * r * r);
      return area;
    }
}
var radius = 5.2;
var theArea = calculatedArea(radius);
console.log("The are of the circle is", theArea);
*/

//----------New Code------------------------
/*
function playTurn(player,location){
  points = 0;                       // always declare variables "var" with in a function otherwise it would be used glabaly!
  if (location == 1){               // you can shadow a global varibale by declaring it with the same name in your function!
    points = points + 100;
  }
  return points;
}
var total = playTurn("Mike",1);
console.log(points);
*/

//------New Code---------
//radius formula code
/*
var x = 32;
var y = 44;
var radius = 5;

var centerX = 0;
var centerY = 0;
var width = 600;
var height = 400;

function setup(width,height){
  centerX = width/2;
  centerY = height/2;
}

function computeDistance(x1,y1,x2,y2){
  var dx = x1-x2;
  var dy = y1-y2;
  var d2 = (dx * dx) + (dy * dy);
  var d = Math.sqrt(d2);
  return d;
}

function circleArea(r){
  var area = Math.PI * r * r;
  return area;
}

setup(width,height);
var area = circleArea(radius);
var distance = computeDistance(x,y,centerX,centerY);
console.log("Area:",area);
console.log("Distance:",distance);
*/

//-------------------New Code----------------------
// Thing-A-Ma-Jig Code. Acts like a factorial code but its for something else
/*
function clunk(times){         // always remeber to save the code before running it otherwise ill run the previous code with the prevoius inputs!!!
  var num = times;
  while(num > 0){
    display("clunk");
    num  = num - 1;
  }
}
function thingamajig(size){
  var facky = 1;
  clunkCounter = 0;
  if (size == 0){
    display("clank");
  }
  else if (size == 1){
    display("thunk");
  }
  else {
    while(size > 1){
    facky = facky * size;
    size = size - 1;
  }
  clunk(facky);
 }
}
function display(output){
console.log(output);
clunkCounter = clunkCounter + 1;
}
var clunkCounter = 0;
thingamajig(5);
console.log(clunkCounter);
*/

//----------------------New Code-----------------------------
// Arrays
/*
var product = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
var last = product.length - 1;
var recent = product[last];
console.log(recent);
*/

//----------------New Code---------------------------

function makePhrases(){
  var words1 = ["24/7","mmulti-tier","30,000 foot","B-to-B","win-win"];
  var words2 = ["empowered","value-added","oriented","focused","aligned"];
  var words3 = ["process","solution","tipping-point","strategy","vision"]; 

  var rand1 = Math.floor(Math.random() * words1.length);
  var rand2 = Math.floor(Math.random() * words2.length);
  var rand3 = Math.floor(Math.random() * words3.length);

  var phrase = words1[rand1] +" "+ words2[rand2] +" "+ words3[rand3];
  const arr = phrase.split(" ");
  const capitalsA = capitaliseArray(arr);
}

function capitaliseArray(capitaliseA){
  const words = capitaliseA;
  for (var i = 0; i < words.length; i++){
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  const string2 = words.join(" ");
  const string3 = capitaliseTFL(string2);
  return string3;
}
function capitaliseForD(capitaliseD){
  const arr = capitaliseD.split("-");
  for (var i= 0; i < arr.length; i++){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const string = arr.join("-");
  return string;
}

 function capitaliseForS(capitaliseS){
   const arr = capitaliseS.split(" ");
   for (var i = 0; i < arr.length; i++){
     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const string = arr.join(" ");
    return string;
  }



makePhrases();
//const wordss = ["me and","you and them","and you too", "and me too lol"];
//console.log(capitaliseArray(wordss));

