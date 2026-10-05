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

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}