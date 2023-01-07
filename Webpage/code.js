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
let access = document.getElementById("code9");
let code = access.innerHTML;
code = code + " midnight";
alert(code);
