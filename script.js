// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var finalPassword = [];
  console.log("working")
  var passwordLength = prompt("How long do you want your password? (between 8 - 128)")
  var numbers = confirm("Do you want numbers in your password?");
  var lowerCases = confirm("Do you want lowecase ? ( between  a - z)")
  var upperCases = confirm("Do you want upercase")
  var specialCharacters = confirm("Do you want specialcharacter")

  const myCharacters = '~!@#$%^&*(){}[]\|<>/?,.';
  const myNumbers = '0123456789';
  const myLowerCases = 'abcdefghijklmnopqrstuvwxyz';
  const myUperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  if (passwordLength < 8) {
    alert("Password needs to be at least 8, try again")
  } else if (passwordLength > 128) {
    alert("Password can only be 128 characters longs")
  } else {
    if (numbers) {
      for (var i = 0; i < myNumbers.length; i++) {

        finalPassword.push(myNumbers[i])
      }
    }
    if (lowerCases) {
      for (var i = 0; i < myLowerCases.length; i++) {
        finalPassword.push(myLowerCases[i])
      }
    }

    if (upperCases) {
      for (var i = 0; i < myUperCase.length; i++) {
        finalPassword.push(myUperCase[i])

      }
    }
    if (specialCharacters) {
      for (var i = 0; i < myCharacters.length; i++)
        finalPassword.push(myCharacters[i])
    }
  }
  var passwordText = document.querySelector("#password");
  passwordText.textContent = finalPassword.join('')

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
