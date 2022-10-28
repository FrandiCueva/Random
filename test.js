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
// this code generates random words and capitalises the first letter of every word!
/*
function makePhrases(){                                                        
  var words1 = ["24/7","multi-tier","30,000 foot","B-to-B","win-win"];           
  var words2 = ["empowered","value-added","oriented","focused","aligned"];
  var words3 = ["process","solution","tipping-point","strategy","vision"]; 

  var rand1 = Math.floor(Math.random() * words1.length);
  var rand2 = Math.floor(Math.random() * words2.length);
  var rand3 = Math.floor(Math.random() * words3.length);

  var phrase = words1[rand1] +" "+ words2[rand2] +" "+ words3[rand3]; 
  console.log(capitaliseArray(phrase));
}

function capitaliseArray(capitaliseA){                // Capitalises firt words of a string in each array!
  const words = capitaliseA.split(" ");
  for (var i = 0; i < words.length; i++){
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  const string = words.join(" ");
  const string2 = capitaliseForD(string);
  const string3 = capitaliseForS(string2);
  return string3;
}
function capitaliseForD(capitaliseD){                  // Capitalises words with dashes!
  const arr = capitaliseD.split("-");
  for (var i= 0; i < arr.length; i++){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const string = arr.join("-");
  return string;
}
 function capitaliseForS(capitaliseS){                //capitalises words in a string!
   const arr = capitaliseS.split(" ");
   for (var i = 0; i < arr.length; i++){
     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const string = arr.join(" ");
    return string;
  } 
makePhrases();
*/

//-----------------------New Code------------------------------
// Code for number iteration
/*
const scores = [ 60,50,60,58,54,54,58,50,52,54,48,69,34,55,51,52,44,51,69,64,66,55,52,61,46,31,57,52,44,18,41,53,55,61,51,44];
let i = 0;

while (i < scores.length){
  console.log("Your Score is: ",scores[i],"Your Solution is: ",i);
  i = i + 1;
}
*/

//-----------New Code------------------------
// Introducing the for loop
/*
let products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter","Bubblegum"];
let hasBubbleGum = [false,false,false,true];
let i = 0;                                           // varibale initialization

while (i < products.length){                                  
  if (hasBubbleGum[i]){
    console.log(products[i],"contains bubble gum");
  }
  i++;                                               //variable increment
}

for (let i = 0; i <products.length; i++){             // the for loop basically acts like a while loop but adds the variable initialization and variable increment
  if (hasBubbleGum[i]){                               // 
    console.log(products[i],"contains bubble gum");
  }
}
*/

//------------------- New Code---------------------
// Code for finding the score with the highest nummber
/*
const scores = [ 
  60,50,60,58,54,54,
  58,50,52,54,48,69,
  34,55,51,52,44,51,
  69,64,66,55,52,61,
  46,31,57,52,44,18,
  41,53,55,61,51,44];

const costs = [
  .25,.27,.25,.25,.25,.25,
  .33,.31,.25,.29,.27,.22,
  .31,.25,.25,.33,.21,.25,
  .25,.25,.28,.25,.24,.22,
  .20,.25,.30,.25,.24,.25,
  .25,.25,.27,.25,.26,.29];


function printAndGettingHighScore(scores){
  let highScore = 0;
  let output;
  for (let i = 0; i < scores.length; i++){
    output = "Your Bubble Solution # "+i+" Score: "+scores[i]+" and the cost is: "+ costs[i];
    console.log(output);
    if (scores[i] > highScore) {                              // checks each time through the loop to see if there is a new high score
      highScore = scores[i];
    } 
  }
  return highScore;
}
  
function getBestResults(scores,highScores){
  let bestSolutions = [];
  for (let i = 0; i < scores.length; i++){
    if (scores[i] == highScores)
      bestSolutions.push(i);
    // bestSolutions.splice(bestSolutions.length,0,i);         // This is another way to push new values into an array
    }
    return bestSolutions;
  }

  function getMostCostEffectiveSolution(scores,costs,highScore){
     let cost = 100;
     let index;
     for (var i = 0; i < scores.length; i++){
       if(scores[i] == highScore){
         if (cost > costs[i]){
           index = i;
           cost = costs[i];
         }
       }
     }
     return index;
  }
 
 let highScore = printAndGettingHighScore(scores);
 console.log("Bubble Test Scores:", scores.length);
 console.log("Highest bubble score: "+ highScore);

 let bestSolutions = getBestResults(scores,highScore);
 let order = bestSolutions.map((e) => ("#"+e)).join(", ");      // This separates the new bubble solutions with the highest scores with a #
 console.log("Solutions with highest score: " + order);

 let costEffectiveSolution = getMostCostEffectiveSolution(scores,costs,highScore);
 console.log("Bubble Solution #",costEffectiveSolution, "The most cost effective solution");
*/

// --------New Code--------------------------
// Introducing object oriented programming
/*
let princess = {

  name: "Princess", 
  weight: 12,
  age: 2,
  breed: "CockaPoo", 
  activity: "fetchballs"
}

let bark;

if (princess.weight > 20){
  bark = "WOOF WOOF";
}
else {
  bark = "woof woof";
}

function loseWeight(dog,amount){                  // Added a function for princess to lose weight
   dog.weight = dog.weight - amount;
}
let speak = "When " +princess.name+ " barks " +bark+ " she wants to play her favorite activity, " +princess.activity+ " with the blaster";
console.log(speak);

loseWeight(princess,2);
let newWeightForDog = princess.name + " new weight is " + princess.weight;
console.log(newWeightForDog);
*/

// ----------New Code----------------------
//Pre-qualified car code
/*
let taxi = {                                                      // Objects for Cars and spesific details
  make: "Webville Motors",
  model: "Taxi",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertibles: false,
  mileage: 281341 
};
let cadi = {
  make: "GM",
  model: "Cadillac",
  year: 1955,
  color: "tan",
  passengers: 5,
  convertibles: false,
  mileage: 12892 
};
let fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertibles: false,
  mileage: 88000 
};
let chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "Red",
  passengers: 2,
  convertibles: false,
  mileage: 1021 
};

function prequal(car){                            // Checks cars for milage and year
  if(car.mileage > 10000){                        // if car mileage is bigger than 10000 then this make the entire function False otherwise it will return true and continue with the next statement
    return false;
  } else if(car.year > 1960){                     // if car year is bigger than 1960 then this make the entire function False otherwise it will return true and continue with the next statement
    return false;
  }
  return true;
  }
 
  function prequal2(car){
  let worthALook = prequal(car);                  // Checks the first function with the variable car for each object
  if (worthALook){                                // if worthALook returns TRUE then it runs the first statement other wise if it return FALSE then it runs the second statement
    console.log ("You gotta check out this " +car.make+ " " + car.model);
  }
  else {
    console.log ("You should really pass on the " +car.make+ " " +car.model);
  }
}

prequal2(taxi);
prequal2(cadi);
prequal2(fiat);
prequal2(chevy);
*/

//------------------------New Code--------------------------
// secret password code
// I upgraded this code to make a user input instead work;

const prompt = require('prompt-sync')();

let password = prompt("Password: ");

let superSecretPassword = {
  level: "Classified",
  opened: 0,
  password: 2,
  contents: "Dr. Evel's next meeting is in Detroit!",
  activate: ['Yes','yes','YES','YeS','yES','yeS']                  
};

//let activationWords = ['Yes','yes','YES','YeS','yES','yeS'];

function getSecret(file,passwordInput){
  file.opened = file.opened + 1;                          // This updates the "opened" property in the object but it has no affect here
  if (passwordInput == file.password){
    console.log(file.opened);
    console.log(file.contents);
     //file['activate'].push(activationWords);           // I can't get to push the array to the object, it only works is i set the words in the object array
    console.log("Do you want to change the secret's content?");
    let setNew = prompt("(Yes/No): "); 
    if(file.activate.indexOf(setNew) >= 0){              //Code works with an activate parameter in the object with a single string, but does not work with multiple strings in an array, FIX IT!!
      // output = 1;
    let newSecret = prompt("New Secret: ");
    setNewSecret(superSecretPassword,2,newSecret);
    }
    else{
      console.log("Nevermind then, continue!");
    }
  } else {
    console.log("Sorry Bra no Secret for you!");
}
  }
  //activateNewSecret(output);

/*
function activateNewSecret(activate){
  let newSecret;
  if(activate == 1){
  newSecret = userInputSecret("New Secret: ");
  }
  setNewSecret(superSecretPassword,2,newSecret);
}
*/

function setNewSecret(file,passwordInput,newSecret){
  if (passwordInput == file.password){
    file.opened = 0;
    file.contents = newSecret;
   console.log(file.contents);
  }
}

getSecret(superSecretPassword,password);

  //"Dr. Evel's next meeting is in Philadelphia!"