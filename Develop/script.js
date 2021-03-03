// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }



// setting up array for possible characters
var specChars = ['!','<','@','<','#','<','$'];
var numChars = ['0','1','2','3','4','5','6','7','8','9'];
var upChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
var lowChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];


var hasSpecChars = confirm("Would you like to use symbols?");
var hasNum = confirm("Would you like to use numbers?");
var hasUpper = confirm("Would you like to use uppercase letters?");
var hasLower = confirm("Would you like to use lowercase letters?");
console.log(confirm);




// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
