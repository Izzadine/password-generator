//write function to generate two random passwords

const arrayOfCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];


let passOneEl = document.querySelector("#passwordone-el");
let passTwoEl = document.getElementById("passwordtwo-el");

let newCharacters = arrayOfCharacters.filter((item) =>
  /^[a-zA-Z\s]+$/.test(item)
);

function generatePassword(length, list) {
  let password = "";
  let checkBox = document.getElementById("one-el").checked;

  if (checkBox) {
    list = newCharacters;
  }
  if (!checkBox) {
    list = arrayOfCharacters;
  }
  for (let i = 0; i < Math.abs(length); i++) {
    const randomIndex = Math.floor(Math.random() * list.length);
    password += list[randomIndex];
  }
  return password;
}

function generateRandomPassword() {
  let passwordLength = document.querySelector("#passwordlength-el").value; 
  let list;

  passOneEl.textContent = generatePassword(passwordLength, list);
  passTwoEl.textContent = generatePassword(passwordLength, list);
}

document
  .getElementById("passwordone-el")
  .addEventListener("click", function () {
    let copyText = document.getElementById("passwordone-el").innerText;
    navigator.clipboard.writeText(copyText);
    alert("Password 1 copied to clipboard!");
  });

document
  .getElementById("passwordtwo-el")
  .addEventListener("click", function () {
    let copyText = document.getElementById("passwordtwo-el").innerText;
    navigator.clipboard.writeText(copyText);
    alert("Password 2 copied to clipboard!");
  });

