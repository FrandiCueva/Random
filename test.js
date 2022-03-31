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
