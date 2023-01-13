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
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numerical = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", ":", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "?", "@", "[", "^", "|"];
// var RESULT = [];
function generatePassword() {
  // User input 
  var password = [];
  //  how many characters doy ou want to contain?  (at least 8)
  let userInput = parseInt(prompt("Please enter number of characters"));

  // LC prompt confirm 
  let userUpperCase = confirm("Do you want uppercase characters?");
  // NUMS pront confirm 
  let userNumChar = confirm("Do you want number characters?");
  //  special char confirm 
  let userSpecialChar = confirm("Do you want special characters?");


  // Conditional
  // if user chooses x number of characters total
  // for Loop (iteration!) iterates x number of times 
  // 
  if (userInput < 8) {
    alert("Please enter at least 8 characters!");
  } else if (userInput > 128) {
    alert("No more than 128 characters!");

  } else {
    // if the user chooeses to add lowercae characters
    // randomly select Y numner of chars, oush it to the results array

    // if use chooeses to add upppercase chars
    // randomly select Y numner of chars, oush it to the results array
    let possibleChar = [];
    // if the user chooses nums 
    if (userNumChar) {
      possibleChar = possibleChar.concat(numerical)
    }
    if (userSpecialChar) {
      possibleChar = possibleChar.concat(specialChar)
    }
    console.log(possibleChar);

    for (var i = 0; i < userInput; i++) {
      var randomChar = Math.floor(Math.random() * userInput);
      password = password.concat(possibleChar[randomChar]);
    }
    console.log(password);
  }
  // randomly select Y numner of chars, oush it to the results array
  
  
};
// results = ["a", "B", 0, "?"]

// Displaty reuslts on to page 
// target TextArea element, display results 
document.getElementById("password").value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
