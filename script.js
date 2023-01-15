// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//  ARRAYS for each one - data structures 
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numerical = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", ":", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "?", "@", "[", "^", "|"];
// var RESULT = [];
function generatePassword() {
  // User input 
  var password = [];
  //  how many characters doy ou want to contain?  (at least 8)
  let userInput = parseInt(prompt("Please enter number of characters"));

  // LC prompt confirm 
  let userLowerCase = confirm("Do you want lowercase characters?");
  // UC promt confirm
  let userUpperCase = confirm("Do you want uppercase characters?");
  // NUMS pront confirm 
  let userNumChar = confirm("Do you want number characters?");
  //  special char confirm 
  let userSpecialChar = confirm("Do you want special characters?");

  // Conditional - if user chooses x number of characters total
  // for Loop (iteration!) iterates x number of times 
  // 
  if (userInput.length < 8) {
    alert("Please enter at least 8 characters!");
  } else if (userInput.length > 128) {
    alert("No more than 128 characters!");

  } else {
    let possibleChar = [];
    // if the user chooeses to add lowercae characters
    // randomly select Y numner of chars, oush it to the results array
    if (userLowerCase) {
      possibleChar = possibleChar.concat(lowerCase)
    }
    // if use chooeses to add upppercase chars
    // randomly select Y numner of chars, oush it to the results array
    if (userUpperCase) {
      possibleChar = possibleChar.concat(upperCase)
    }
    // if the user chooses numbers 
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
  // randomly select Y numner of chars, push it to the results array
  // generatePassword();
  // document.write(password);
  
};
// Display results on to page 
// target TextArea element, display results 
document.getElementById("password").value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
