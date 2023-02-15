/*
// 99 bottles of beer code
var name = "Bottles";
var value = 99;

while (value > 0) {
   console.log(value,"",name, "of beer on the wall");
   console.log(value,"",name, "of beer");
   console.log("Take one out, pass it around");
   value --;
   if (value > 0){
       console.log("Now we have ",value,"",name, "of beer on the wall");
       console.log("");

   }
   else {
       console.log("There is no more",name, "on the wall!", "Lets go get 99 more!");
   }
}
*/

//---------------New Code---------------------------
// Crack the code challange
/*
function init () {
let access = document.getElementById("code9");     // dont worry about running this code through VS, "document" will never be referenced because VS is not a webbased server
let code = access.innerHTML;
code = code + " midnight";
alert(code);
}

window.onload = init;
*/

//------New Code------------------------------------
// Reveal the secret message!


/*
function init () {
let word = document.getElementById("e7");
let word2 = document.getElementById("e8");
let word3 = document.getElementById("e16");
let word4 = document.getElementById("e9");
let word5 = document.getElementById("e18");
let word6 = document.getElementById("e13");
let word7 = document.getElementById("e12");
let word8 = document.getElementById("e2");

let code = word.innerHTML +" "+ word2.innerHTML +" "+ word3.innerHTML +" "+ word4.innerHTML +" "+ word5.innerHTML +" "+ word6.innerHTML +" "+ word7.innerHTML +" "+ word8.innerHTML;

alert(code);
}

window.onload = init;
 */

//---------------New Code----------------------------------------
// Code for planets webpage

 function init () {
    let planetG = document.getElementById("greenplanet");    // getElementById checks for a reference to that element
    planetG.innerHTML = "Red Alert: Hit by phaser fire!";    // innerHTML looks into that reference and edits with whatever new code the user wants.
    planetG.setAttribute("class" , "redtext");               // setAttribute enables you to alter or add new attributes to your reference. you can also use the getAtribute to get the value of an atribute
}

// to make sure that an Id Exist in your html code you can use this code to verify
/* 
let string = document.getElementById("stringName");
let newStringName = string.getAttribute("new attribute");

if (newStringName == null){
    console.log ("No attribute found");
} else {
    // input your new code here!!
}
*/

window.onload = init;

// ---------New Code------------------------------------------
// Sharpen your pencil, song excersice

/* function init(){

 let song1 = document.getElementById("song1");    
 let song2 = document.getElementById("song2");    
 let song3 = document.getElementById("song3");    
 
 song1.innerHTML = "Blue Suede Strings, by Elvis Pagely";
 song2.innerHTML = "Great Objects on Fire, By Jerry JSON LEWIS";
 song3.innerHTML = "I Code the Line, by Jhonny JavaScript";
    
}

window.onload = init;
 */