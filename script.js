let inputslider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

sliderValue.textContent = inputslider.value;

inputslider.addEventListener('input', () => {
  sliderValue.textContent = inputslider.value;
});

genBtn.addEventListener('click', () => {
  passBox.value = generatePassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~@#$%^&*";

function generatePassword() {
  let genpassword = "";
  let allChars = "";

  if (lowercase.checked) allChars += lowerChars;
  if (uppercase.checked) allChars += upperChars;
  if (numbers.checked) allChars += allNumbers;
  if (symbols.checked) allChars += allSymbols;

  if (allChars.length === 0) {
    return 'select option';
  }

  for (let i = 0; i < inputslider.value; i++) {
    genpassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  return genpassword;
}

copyIcon.addEventListener('click', () => {
  if (passBox.value && passBox.value.length > 0) {
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText = "check";
    copyIcon.title = "Password Copied";
    setTimeout(() => {
      copyIcon.innerText = "content_copy";
      copyIcon.title = "";
    }, 2000);
  }
});
