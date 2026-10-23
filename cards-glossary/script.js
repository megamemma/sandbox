let queue = [], total = 0, known = 0;
const cardText = document.querySelector('#train .card');
const textarea = document.querySelector('#input');

function parseText (text) {
    return text.split('\n')
        .map(line => {
            const [word, translation] = line.split('-').map(str => str.trim());
            return word && translation ? { word, translation } : null;
        })
        .filter(Boolean); //remove empty lines
}

document.querySelector('#start-button').addEventListener('click', () => {
    const words = parseText(textarea.value);
    if(!words.length) return alert("Введи слова в формате: слово - перевод.")

    queue = [...words];
    total = words.length;
    known = 0;

    changeScreen(screenTrain);
    renderCard(); //show the 1st word;
})

function renderCard() {
    if (!queue.length) {
        changeScreen(screenDone);
        return;
    }
    cardText.textContent = queue[0].word;
}

textarea.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        document.querySelector('#start-button'.click());
    }
})

