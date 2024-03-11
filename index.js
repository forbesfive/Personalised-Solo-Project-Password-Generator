const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Create arrays for when symbols and numbers are not required in generate password
const charactersSansSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const charactersSansNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const charactersLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// Variables to control light/dark theme
let themeBtn = document.getElementById("theme-btn")
themeBtn.addEventListener("click", changeTheme)
let themeBody = document.getElementById("body")
let themeContainer = document.getElementById("container")
// Variable for user requirements on password length
let pwdLength = document.getElementById("pwd-length")
// Variables relating to value of array dependent on user requirements on numbers and symbols
let workingArray = []
let symbolChoice = document.getElementById("symbol-choice")
let numberChoice = document.getElementById("number-choice")
// Variable for generating random password on button click
let generateBtn = document.getElementById("generate-btn")
generateBtn.addEventListener("click", randomPasswordGenerator)
let isGenerated = false
// Variables relating to copy password function request and notification
let passwordOne = document.getElementById("copy-btn95")
passwordOne.addEventListener("click", copyPasswordOne)
let passwordTwo = document.getElementById("copy-btn96")
passwordTwo.addEventListener("click", copyPasswordTwo)
let copyTextOne = document.getElementById("copy-text-one")
let copyTextTwo = document.getElementById("copy-text-two")

// Function to control light/dark theme
function changeTheme() {
    if (themeBtn.textContent === "DARK") {
        themeBody.classList.add("body-light")
        themeContainer.classList.add("container-light")
        themeBtn.textContent = "LIGHT"
    } else {
        themeBody.classList.remove("body-light")
        themeContainer.classList.remove("container-light")
        themeBtn.textContent = "DARK" 
    }
}

// Function to set array contents for user requirements on numbers and symbols and call randomCharacterGenerator() function to output to webpage
function randomPasswordGenerator() {
    if (symbolChoice.checked && numberChoice.checked) {
        workingArray = charactersLetters
    } else if (symbolChoice.checked) {
        workingArray = charactersSansSymbols
    } else if (numberChoice.checked) {
        workingArray = charactersSansNumbers
    } else {
        workingArray = characters
    }
    passwordOne.textContent = randomCharacterGenerator();
    passwordTwo.textContent = randomCharacterGenerator();
    isGenerated = true
    copyTextOne.textContent = ""
    copyTextTwo.textContent = ""
}

// Function to generate random characters string
function randomCharacterGenerator() {
    let count = parseInt(pwdLength.value)
    let randomNumber
    let randomCharacters = ""
    for (let i = 0; i < count; i++) {
        randomNumber = Math.floor(Math.random() * workingArray.length)
        randomCharacters += workingArray[randomNumber]
    }
    return randomCharacters
}

// Function to copy password to clipboard
function copyPasswordOne() {
    if (isGenerated === true) {
        navigator.clipboard.writeText(passwordOne.textContent)
        // alert("Copied the text: " + passwordOne.textContent);
        copyTextOne.textContent = "Password Copied"
        copyTextTwo.textContent = ""
    }
}

// Function to copy password to clipboard
function copyPasswordTwo() {
    if (isGenerated === true) {
        navigator.clipboard.writeText(passwordTwo.textContent)
        // alert("Copied the text: " + passwordTwo.textContent);
        copyTextTwo.textContent = "Password Copied"
        copyTextOne.textContent = ""
    }
}