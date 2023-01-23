// Assignment Code
var generateBtn = document.querySelector("#generate");

//Code
function generatePassword() {
  let output = "";
  let allowedCharacters = "";
  let passwordParameters = {
    length: 8,
    allowedCharacters: {
      lowercase: false,
      uppercase: false,
      numbers: false,
      specialCharacters: false,
    },
  };

  let lengthConfirmation = window.confirm(
    "Do you want to define the password length?\nDefault: 8"
  );

  if (lengthConfirmation === true) {
    let passwordLengthNumber = parseInt(
      window.prompt("Insert Password Length")
    );

    if (passwordLengthNumber >= 8 && passwordLengthNumber <= 128) {
      passwordParameters.length = passwordLengthNumber;
    } else {
      window.alert("Invalid length, The default length was used.");
    }
  }

  window.alert(
    "At least one type of character must be selected!\n\nIf no character type is selectecd the password will be generated using only numbers and lowercase characters"
  );

  let upperConfirmation = window.confirm(
    "Do you want to use uppercase characters?"
  );

  if (upperConfirmation === true) {
    passwordParameters.allowedCharacters.uppercase = true;
  }

  let lowerConfirmation = window.confirm(
    "Do you want to use lowercase characters?"
  );

  if (lowerConfirmation === true) {
    passwordParameters.allowedCharacters.lowercase = true;
  }

  let numericConfirmation = window.confirm("Do you want to use numbers?");

  if (numericConfirmation === true) {
    passwordParameters.allowedCharacters.numbers = true;
  }

  let specialCharConfirmation = window.confirm(
    "Do you want to use special characters?"
  );

  if (specialCharConfirmation === true) {
    passwordParameters.allowedCharacters.specialCharacters = true;
  }

  if (passwordParameters.allowedCharacters.lowercase === true) {
    allowedCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (passwordParameters.allowedCharacters.uppercase === true) {
    allowedCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (passwordParameters.allowedCharacters.numbers === true) {
    allowedCharacters += "0123456789";
  }
  if (passwordParameters.allowedCharacters.specialCharacters === true) {
    allowedCharacters += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  }
  if (!allowedCharacters) {
    allowedCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";
  }

  for (let i = 0; i < passwordParameters.length; i++) {
    output +=
      allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)];
  }

  return output;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
