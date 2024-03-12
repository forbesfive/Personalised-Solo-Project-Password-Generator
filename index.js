// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];

// Create arrays for when symbols and numbers are not required in generate password
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

// Variables to control light/dark theme
const themeBtn = document.getElementById("theme-btn")
const themeBody = document.getElementById("body")
const themeContainer = document.getElementById("container")
// Variable for user requirements on password length
const pwdLength = document.getElementById("pwd-length")
// Variables relating to value of array dependent on user requirements on numbers and symbols
const symbolChoice = document.getElementById("symbol-choice")
const numberChoice = document.getElementById("number-choice")
// Variable for generating random password on button click
const generateBtn = document.getElementById("generate-btn")
// Variables relating to copy password function request and notification
const passwordOne = document.getElementById("copy-btn95")
const passwordTwo = document.getElementById("copy-btn96")
const copyTextOne = document.getElementById("copy-text-one")
const copyTextTwo = document.getElementById("copy-text-two")

themeBtn.addEventListener("click", changeTheme)
generateBtn.addEventListener("click", randomPasswordGenerator)
passwordOne.addEventListener("click", copyPasswordOne)
passwordTwo.addEventListener("click", copyPasswordTwo)

// Function to control light/dark theme
function changeTheme() {
    if (themeBtn.textContent === "LIGHT") {
        themeBody.classList.add("body-light")
        themeContainer.classList.add("container-light")
        themeBtn.classList.add("theme-btn-light")
        themeBtn.textContent = "DARK"
    } else {
        themeBody.classList.remove("body-light")
        themeBody.classList.remove("DARK")
        themeContainer.classList.remove("container-light")
        themeBtn.classList.remove("theme-btn-light")
        themeBtn.textContent = "LIGHT" 
    }
}

// Function to validate correct password length entered and to set array contents for user requirements on numbers and symbols and call randomCharacterGenerator() function to output to webpage
function randomPasswordGenerator() {
    if (pwdLength.value > 7 && pwdLength.value < 16) {
        characters.length = 52 
        if (symbolChoice.checked && numberChoice.checked) {
            //uses character array with letters only
            console.log(characters)
        } else if (symbolChoice.checked) {
            for (let i = 0; i < numbers.length; i++) {
                characters.push(numbers[i])
            }
            console.log(characters)
        } else if (numberChoice.checked) {
            for (let i = 0; i < symbols.length; i++) {
                characters.push(symbols[i])
            }
            console.log(characters)
        } else {
            for (let i = 0; i < numbers.length; i++) {
                characters.push(numbers[i])
            }
            for (let i = 0; i < symbols.length; i++) {
                characters.push(symbols[i])
            }
            console.log(characters)
        }

        passwordOne.textContent = randomCharacterGenerator();
        passwordTwo.textContent = randomCharacterGenerator();
        copyTextOne.textContent = ""
        copyTextTwo.textContent = ""
    } else {
        alert("Choose password length (between 8 and 15)")
    }
}

// Function to generate random characters string
function randomCharacterGenerator() {
    let count = parseInt(pwdLength.value)
    let randomNumber
    let randomCharacters = ""
    for (let i = 0; i < count; i++) {
        randomNumber = Math.floor(Math.random() * characters.length)
        randomCharacters += characters[randomNumber]
    }
    return randomCharacters
}

// Function to copy password to clipboard
function copyPasswordOne() {
    if (passwordOne.value === "") {
        navigator.clipboard.writeText(passwordOne.textContent)
        // alert("Copied the text: " + passwordOne.textContent);
        copyTextOne.textContent = "Password Copied"
        copyTextTwo.textContent = ""
    }
}

// Function to copy password to clipboard
function copyPasswordTwo() {
    if (passwordTwo.value === "") {
        navigator.clipboard.writeText(passwordTwo.textContent)
        // alert("Copied the text: " + passwordTwo.textContent);
        copyTextTwo.textContent = "Password Copied"
        copyTextOne.textContent = ""
    }
}