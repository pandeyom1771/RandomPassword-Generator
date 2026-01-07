/* 
  Selecting required elements from the DOM.
  These are used multiple times, so stored in variables.
*/
const passwordOutput = document.getElementById("passwordOutput");
const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");

/* 
  Character sets for password generation.
  Kept separate for clarity and easy control.
*/
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

/* 
  Function to generate password based on selected options.
*/
function generatePassword() {

  let availableChars = "";
  let generatedPassword = "";

  const passwordLength = Number(lengthInput.value);

  /* 
    Check which options are selected 
    and build the allowed character pool.
  */
  if (uppercaseCheckbox.checked) {
    availableChars += uppercaseChars;
  }

  if (lowercaseCheckbox.checked) {
    availableChars += lowercaseChars;
  }

  if (numbersCheckbox.checked) {
    availableChars += numberChars;
  }

  if (symbolsCheckbox.checked) {
    availableChars += symbolChars;
  }

  /* 
    Basic validation.
    If no option is selected, password generation makes no sense.
  */
  if (availableChars.length === 0) {
    alert("Please select at least one character type.");
    return;
  }

  /* 
    Generate password by randomly picking characters
    from the available character set.
  */
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    generatedPassword += availableChars[randomIndex];
  }

  /* 
    Display the generated password in the output field.
  */
  passwordOutput.value = generatedPassword;
}

/* 
  Event listener for button click.
  Triggers password generation.
*/
generateBtn.addEventListener("click", generatePassword);