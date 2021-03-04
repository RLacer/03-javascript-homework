var generateBtn = document.querySelector("#generate");

// possible characters

var specChars = ['!', '<', '@', '<', '#', '<', '$'];
var numChars = ['0', '1', '2', '3', '4', '5', '6'];
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


// // Write password to the #password input

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


  // replicate to other option chars


};





  // user prommpts and confirms
  // adding prompt with alerts and hard stops 
  function getPasswordOptions() {
    var length = parseInt(prompt("How many characters in your password? Enter a number between 1 and 28"));
    // if user doesn't enter a number
    if (isNaN(length) === true) {
      alert("Password length must be a number!");
      return;
    };
    /// hard stop if user doesn't enter a number not >0<29 
    if (length < 1 || length > 28) {
      alert("Password must be betweeen 1 and 28 characters!");
      return;
    };
    // confirm boxes for character options
    var hasSpecChars = confirm("Would you like to use symbols?");
    var hasNum = confirm("Would you like to use numbers?");
    var hasUpper = confirm("Would you like to use uppercase letters?");
    var hasLower = confirm("Would you like to use lowercase letters?");
    // console.log(confirm);

    if (
      hasSpecChars === false &&
      hasNum === false &&
      hasUpper === false &&
      hasLower === false
    ) {
      // if  user selects false (cancel) for all data types
      alert("Password must contain at least 1 character type!");
      return;
    }
    // all data choices
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
// generateBtn.addEventListener("click", writePassword);
