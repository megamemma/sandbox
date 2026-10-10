const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    const text = inputBox.value.trim();
    if(!text) {
        alert("You must write something.");
        return;
    }
    
    const li = document.createElement("li");
    li.textContent = text;

    const span = document.createElement("span");
    span.textContent = '\u00d7';

    li.appendChild(span);
    listContainer.appendChild(li);
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", (e) => {
    if (e.target.matches("li")) {
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if (e.target.matches("span")) {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);    
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
