// Assignment Code
// remove empty "object" from page and declare password
let password = [];
//  Declare ARRAYS for each one - data structures 
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numerical = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", ":", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "?", "@", "[", "^", "|"];

function generatePassword() { 
  // User input - how many characters do you want to contain? 
  let userInput = parseInt(prompt("Please enter number of characters"));

  // Conditional - if user chooses x number of characters total
  if (userInput < 8 || userInput == null) {
    alert("Please enter at least 8 characters!");

  } else if (userInput > 128) {
    alert("No more than 128 characters!");

  } else {
    // LC prompt confirm 
    let userLowerCase = confirm("Do you want lowercase characters?");
    // UC prompt confirm
    let userUpperCase = confirm("Do you want uppercase characters?");
    // NUMS prompt confirm 
    let userNumChar = confirm("Do you want number characters?");
    //  special char prompt confirm 
    let userSpecialChar = confirm("Do you want special characters?");

    let possibleChar = [];
    // if the user chooses to add lowercase characters
    if (userLowerCase) {
      possibleChar = possibleChar.concat(lowerCase);
    }
    // if user chooses to add upppercase chars
    if (userUpperCase) {
      possibleChar = possibleChar.concat(upperCase);
    }
    // if the user chooses numbers 
    if (userNumChar) {
      possibleChar = possibleChar.concat(numerical);
    }
    if (userSpecialChar) {
      possibleChar = possibleChar.concat(specialChar);
    }
    //console.log(possibleChar);
    // for Loop - iterates x number of times 
    for (var i = 0; i < userInput; i++) {
      var randomChar = Math.floor(Math.random() * userInput);

      password = password.concat(possibleChar[randomChar]);
    }
    password.toString().replace(/,/g, "");

    console.log(password);
    // this return statement fixes the output to #password 
    return password;
  }
  // randomly select Y numner of chars, push it to the results array

};
// Display results on to page 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// target TextArea element, display results 
document.getElementById("password").value = password;
// adding textContent here -- will this work?
document.getElementById("password").textContent = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
