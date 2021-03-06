// html line 28
var generateBtn = document.querySelector("#generate");

// possible characters

var specChars = ['!','<','@','<','#','<','$','%','*','(',')'];
var numChars = ['0','1','2','3','4','5','6','7','8','9'];
var upChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
var lowChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];


// get random
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}


// // Write password to the #password input (html line 22)

function writePassword() {
   var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  // getPasswordOptions is passed to options [] for array
  var options = getPasswordOptions();
  var result = [];
  var possChars = [];
  var guarChars = [];

  // get random function line 14 use to push guarChars
if (options.hasSpecChars) {
  possChars = possChars.concat(specChars);
  console.log(possChars);
  guarChars.push(getRandom(specChars));

};
// Replicate to other option chars
if (options.hasNum) {
  possChars = possChars.concat(numChars);
  console.log(possChars);
  guarChars.push(getRandom(numChars));
  console.log(guarChars);
}
if (options.hasUpper) {
  possChars = possChars.concat(upChars);
  console.log(possChars);
  guarChars.push(getRandom(upChars));
  console.log(guarChars);
}
if (options.hasLower) {
  possChars = possChars.concat(lowChars);
  guarChars.push(getRandom(lowChars));
  console.log(guarChars);
}
// index for var options, var result line 30, push var newChar pushes newChar 1 at a time until length
for (let i = 0; i < options.length; i++) {
  var newChar = getRandom(possChars);
  result.push(newChar);
 console.log("RESULT1",result); 

  
}
for (let i = 0; i < guarChars.length; i++) {
 result[i] = guarChars[i];
 console.log("RESULT2",result);

  
}
return result.join("");
};

// user options
function getPasswordOptions() {
  var length = parseInt(prompt("How many characters in your password? Enter a number from 8 to 128"));
  console.log(length);
  if (isNaN(length) === true) {
    alert("Password length must be a number!");
    return;
  };

  if (length < 8 || length > 128) {
    alert("Password must be 8 to 128 characters!");
    return;
  };
// confirm boxes for character options
  var hasSpecChars = confirm("Would you like to use symbols?");
  var hasNum = confirm("Would you like to use numbers?");
  var hasUpper = confirm("Would you like to use uppercase letters?");
  var hasLower = confirm("Would you like to use lowercase letters?");
console.log(confirm);
  if (
    hasSpecChars === false &&
    hasNum === false &&
    hasUpper === false &&
    hasLower === false
  ) {
    alert("Password must contain at least 1 character type!");
    return;
  }
  var passwordOptions = {
    length,
    hasSpecChars,
    hasNum,
    hasUpper,
    hasLower,
  };
  return passwordOptions;


};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);













