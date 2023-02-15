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
/*
const prompt = require('prompt-sync')();               // You only need to activate this once and call prompt for user input

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
    //file.activate.push(activationWords);
    //file['activate'].push(activationWords);           // I can't get to push the array to the object, it only works is i set the words in the object array
    console.log("Do you want to change the secret's content?");
    let setNew = prompt("(Yes/No): "); 
    if(file.activate.indexOf(setNew) >= 0){              //Finally fixed the program to check if the user input matches any of the strings in the array with the ".indexOf" property

    let newSecret = prompt("New Secret: ");
    setNewSecret(superSecretPassword,2,newSecret);      // Calls the setNewSecret Function
    }
    else{
      console.log("Nevermind then, continue!");
    }
  } else {
    console.log("Sorry Bra no Secret for you!");
}
  }

function setNewSecret(file,passwordInput,newSecret){       // Function to set a new secret
  if (passwordInput == file.password){
    file.opened = 0;
    file.contents = newSecret;
   console.log(file.contents);
  }
}

getSecret(superSecretPassword,password);
//"Dr. Evel's next meeting is in Philadelphia!"          // This is the input secret based on the book!
*/

//----------------New Code--------------------------
//Auto pick a random car code
/*
function makeCar(){
  let makes = ["Chevy","GM","Fiat","Webville Motors","Tucker"];
  let models = ["Cadillac","500","Bel-Air","Taxi","Torpedo"];
  let years = [1995,1957,1948,1954,1961];
  let colors = ["red","blue","tan","yellow","white"];
  let convertible = [true,false];
  
  let rand = Math.floor(Math.random() * makes.length);
  let rand2 = Math.floor(Math.random() * models.length);
  let rand3 = Math.floor(Math.random() * years.length);
  let rand4 = Math.floor(Math.random() * colors.length);
  let rand5 = Math.floor(Math.random() * 5) + 1;
  let rand6 = Math.floor(Math.random() * 2);

  let car = {
    make: makes[rand],
    model: models[rand2],
    year: years[rand3],
    color: colors[rand4],
    passangers: rand5,
    convertible: convertible[rand6],
    mileage: 0
  }
  displayCar(car);
}

function displayCar(car){
  let phrase = ("Your new car is a " +car.year+" "+car.make+" "+car.model+" "+car.passangers+" "+car.convertible);
  console.log (phrase);
}
makeCar();
*/

//-----------------------New Code-------------------
// Functions with behaivor (methods are often called functions in objects and encapsulating is using the object method(function) to change a property
/* 
let fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passangers: 2,
  convertible: false,
  milage: 88000,
  started: false,
  fuel: 0,  
  start: function(){
    if (this.fuel == 0){
    console.log("The car is empty, fill up before starting");
    
    } else {
    this.started = true;
    }
  },
  stop: function(){
    this.started = false;
  },
  drive: function() {                                                 //added anothe method = addfuel, to start the car
    if (this.started){
     if(this.fuel > 0){
      console.log(this.make+" "+this.model+" "+"goes Zoom Zoom");
      this.fuel = this.fuel - 1;

    } else {
      console.log("Out of fuel!");
      this.stop();
    }
   } else {
      console.log("You need to start the engine first!");
    }
  },
 addfuel: function(amount){                                        //parameters (amount) don't need the "this" keyword because its within a function, a local variable
  this.fuel = this.fuel + amount;
 }
};

let taxi = {                                                    
  make: "Webville Motors",
  model: "Taxi",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertibles: false,
  mileage: 281341,
  started: false,
    
    start: function(){
      this.started = true;
    },
    stop: function(){
      this.started = false;
    },
    drive: function() {
      if (this.started){
        console.log("Zoom Zoom");
      } else {
        console.log("You need to start the engine first!");
      }
    } 
};
let cadi = {
  make: "GM",
  model: "Cadillac",
  year: 1955,
  color: "tan",
  passengers: 5,
  convertibles: false,
  mileage: 12892,
  started: false,
    
    start: function(){
      this.started = true;
    },
    stop: function(){
      this.started = false;
    },
    drive: function() {
      if (this.started){
        console.log("Zoom Zoom");
      } else {
        console.log("You need to start the engine first!");
      }
    } 
};
let chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "Red",
  passengers: 2,
  convertibles: false,
  mileage: 1021,
  started: false,
    
    start: function(){
      this.started = true;
    },
    stop: function(){
      this.started = false;
    },
    drive: function() {
      if (this.started){
        console.log("Zoom Zoom");
      } else {
        console.log("You need to start the engine first!");
      }
    } 
};
// I could not find a way to store the methods (drive,start,stop) in one single function yet. I had copy and paste the methods to each of the objects. COME BACK IN THE FUTURE TO SEE IF YOU CAN FIX THIS!!!!
fiat.drive();                   // Make sure you understand the sequence in calling methonds otherwise it can get tricky!!!!!
fiat.start();
fiat.addfuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();

taxi.drive();
taxi.start();
taxi.drive();
taxi.stop();

cadi.drive();
cadi.start();
cadi.drive();
cadi.stop();

chevy.drive();
chevy.start();
chevy.drive();
chevy.stop();

// Sharpen your pencil code (just a code learning to use the "this" keyword)

let eightBall = {
  index: 0,
  advice: ["Yes","No","Maybe","Not a chance"],
  shake: function (){
    this.index = this.index + 1;                   // This function from the book is not working, it keeps inputing "No"
    if (this.index >= this.advice.length){
      this.index = 0;
    }
  },
  look: function(){
    return this.advice[this.index];
  }
};

eightBall.shake();
console.log(eightBall.look());
 */

// ----------------------------New Code----------------------
// New Code for types function!

/* let test1 = "H" ;
let test2 = 1233;
let test3 = true;
let test4 = {};
let test5 = null;
let test6 = [];
let test7 = {"hwello" : 1234};
let test8 = ["ssdsf", 1234];
function test9 (){return "hello"};

function getType(input){
  console.log(typeof input);
}

getType(test1);
getType(test2);
getType(test3);
getType(test4);
getType(test5);
getType(test6);
getType(test7);
getType(test8);
getType(test9); */

//-----------------------New Code---------------------
// this is the proper way to use Nan

/* let notAnumber = 0/0;

if (isNaN(notAnumber)){                       // to make a code and test if its not a number is isNaN

  console.log("This is not a number");
  return 0;

}

*/


// (99 == "99") ?/* if */ console.log("A number is a string!") :/* else */ console.log("No way a number is equal t a string");     // This is the ternary way to write an if statement

//-----------------New Code---------------------
// Code for Earl's auto garage exercise
/* 
function findCars (car) {
  for (i = 0; i < lot.length; i++){
    if (car === lot[i]){
      console.log (i);
    }
  }
  return - 1;
}

let chevy = {
  model : "Chevy",
  make: "Bel-Air"
};

let taxi = {
  model : "Webville Motors",
  make : "Taxi"
};

let fiat1 = {
  model : "Fiat",
  make : "500"
};

let fiat2 = {
  model : "Fiat",
  make : "500"
};

let lot = [chevy, taxi, fiat1, fiat2];

let loc1 = findCars (fiat2);
let loc2 = findCars (taxi);
let loc3 = findCars (chevy);
let loc4 = findCars (fiat1);
 */

//-----------New Code-----------------
// Code for lie dectetor for truthy or falsey
/*  
function lieDectectorTest (){                               // remember this code adds up the lies if the value return true
  lies = 0;
  
  let stolenDiamond = {};
  if (stolenDiamond){
    console.log("You Stole the Diamonds");
    lies++;
  }  
  let car ={
    KeysinPocket : null
  };

  if (car.KeysinPocket){
    console.log("Uh Oh, guess you stole the car");
    lies++;
  };

  if (car.emptyGasTank){
    console.log("You drove the car after you stole it!");
    lies++;
  };

  let foundYouAtTheCrimeScene = [];
  if (foundYouAtTheCrimeScene){
    console.log("A sure sign of guilt");
    lies++;
  };
  if (foundYouAtTheCrimeScene[0]){
    console.log("Caugh you with the stolen item");
    lies++
  };

  let yourName = " ";  
  if(yourName){
    console.log("Guess you lied about your name");
    lies++
  };
  return lies;
}

let amountOfLies = lieDectectorTest();
console.log("You told " + amountOfLies + " Lies!");
if (amountOfLies <= 3) {
  console.log("Guilty as charged!");
}

  */

//---------------New Code-----------
// This are most used properties in JS
/* 
// The Length Property - holds the numer of charecters in the string or array. Good for iteration
// The charAt() method - Return the index number of the desired integer

let log = console.log;

let name = "mynameis@whatidk";

for (i=0;i<name.length; i++){
  if (name.charAt(i) === "@"){
    log ("There is a @ sign at index " + i);
  }

}

// The indexOf method - takes a string as an argument and returns the index of the first charecter

let phrase = "There is a cat in the house";

let index = phrase.indexOf("cat");
log ("The is a cat at index "+ index);

// You can also ad a second argument as the starting index of the search

let index2 = phrase.indexOf("the",5);
log("there is a the at index " + index2);

// if you call an argument and it cant be found it will return "-1"
let index3 = phrase.indexOf("dog");
log ("there is a dog at index "+index3);

// the substring method - Takes 1 or 2 arguments and returns the string contained within it

let data = "name|phrase|address";

let index4 = data.substring(5,10);   // starts at index 5 and prints everything but not including 10 and anthing after that
log ("substring is " + index4);

let index5 = data.substring(5);     // or you can pass one argument and print everything starting from that argument;
log("substring is " + index5);

// The split method - takes a character and acts like a delimiter, in other word breaks the string into parts based on the giving charecter

let index6 = data.split("|");
log("Split array is ", index6);

// Other methods and properties 

// toLowerCase(); return every uppercase charecter to lower case
// toUpperCase(); acts the same as the method above but return all upper case
// slice(); returns a new string that has part of the original string
//lastIndexOf(); acts just like indexOf but finds the last charecter not the first
// match(); searches for a match in a string using a regular expression
// trim(); removes white space from around the string. Really handy when precessing user input
 */

//-------- New Code--------------------
// This is for the code to validate a phone number
/* 
// Larry's Code
function valitdateLarry(phoneNumber){
  if(phoneNumber.length > 8 || phoneNumber.length < 7){
    return false;
  }
  for (i=0; i<phoneNumber.lenght;i++){
    if(i === 3){
      if (phoneNumber.lenght === 8 && phoneNumber.charAt(i) !== "-"){
        return false;
      } else if (phoneNumber.length === 7 && isNaN(phoneNumber.charAt(i))){
        return false;
      }
    } else if ( isNaN(phoneNumber.charAt(i))){
      return false;
    }
  }
 return true;
}

// Brad's Code

function validateBrad(phoneNumber){

  let first = phoneNumber.substring(0,3);                          // fix this code because the second if statement was outside the the first which doesn't make sence hence will return a false value all the time
  let second = phoneNumber.substring(phoneNumber.length - 4);
  if (phoneNumber.length < 8 || phoneNumber.length > 7){
    if (isNaN(first) || isNaN(second)){
      return false; 
    }
  }
  if (phoneNumber.length === 8){
    return (phoneNumber.charAt(3) === "-");
  }
  return true;
}

// Amy's Code

function validateAmy(phoneNumber){
  return phoneNumber.match(/^\d{3}-?\d{4}$/);                   // this is a regular expression, its a little complicated you'll get use to it
  // "^" starts to search at the beginning of your string
  // "$" searches at the end of your string
  // "\d" matches any one digit number
  // "{#}" amount of numbers you want to match
  // "-?" matches zero and a dash
  // "/ /" beginnig and end of a regular expression
}

let phoneN = "123-4567";
let log = console.log;

log("this is larry's code ", valitdateLarry(phoneN));
log("this is brad's code ", validateBrad(phoneN));
log("this is amy's code ", validateAmy(phoneN));
 */

// ---------------New code-----------------------------
// This is a laboratory excersice code that introduces "new" and "instanceOf"

function Duck(sound){
  this.sound = sound;
  this.quack = function () {console.log(this.sound)};
}

let toy = new Duck ("quack quack");

toy.quack();
let log = console.log;

log(typeof toy);
log(toy instanceof Duck);