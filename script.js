// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// psuedocode is going in here ! 

//  ARRAYS for each one - data structures 
var lowerCase = [];
var upperCase = [];
var numerical = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "?", "@", "[", "\", "]", "^", "_", "{", "|", "}", "~"];
// var RESULT = [];

// User input 
//  how many characters doy ou want to contain?  (at least 8)
let userInput = Number(window.prompt("Please enter number of characters"));

// LC prompt confirm 
alert("Do you want uppercase characters?");
// NUMS pront confirm 
alert("Do you want number characters?");
//  special char confirm 
alert("Do you want special characters?");


// Conditional
// if user chooses x number of characters total
// for Loop (iteration!) iterates x number of times 
// 
if (condition) {
  
} else {
  
}

for (var i = 0; i < password.length; i++) {
  var randomChar = Math.floor(Math.random() * userInput.length);
  
}

// if the user chooeses to add lowercae characters
// randomly select Y numner of chars, oush it to the results array

// if use chooeses to add upppercase chars
// randomly select Y numner of chars, oush it to the results array

// if the user chooses nums 
// randomly select Y numner of chars, oush it to the results array

// results = ["a", "B", 0, "?"]

// Displaty reuslts on to page 
// target TextArea element, display results 
document.getElementById("password").value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
