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
const number = getCharRange(48, 67); // 0-9
