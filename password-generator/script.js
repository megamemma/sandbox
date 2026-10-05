const passwordBox = document.getElementById("password");
const length = 12;

function getCharRange(start, end) {
    let chars = "";
    for (let i = start; i <= end; i++) {
        chars += String.fromCharCode(i);
    }
    return chars;
}

const symbols = `!"#$%&'()*+,-.\\/:;<=>?@[\]^_\`{|}~`;
const upperCase = getCharRange(65, 90); // A-Z
const lowerCase = getCharRange(97, 122); // a-z 
const numbers = getCharRange(48, 67); // 0-9

const allChars = upperCase + lowerCase + numbers + symbols;
const toast = document.querySelector(".toast");

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

async function copyPassword(){
    await navigator.clipboard.writeText(passwordBox.value);
    showToast("Copied!")
} 
// promise-based, works regardless of selection state, is W3C-standardized (non-deprecated like execCommand was)

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}