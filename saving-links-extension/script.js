import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://saving-links-ext-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#collected-links");
let myLeads = [];
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

const inputBtn = document.querySelector("#input-btn"); // ~saveInputBtn
const tabBtn = document.querySelector("#tab-btn");
const pasteBtn = document.querySelector("#paste-btn");

const deleteBtn = document.querySelector("#delete-btn");

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}  

inputBtn.addEventListener("click", () => {
    const cleanInput = inputEl.value.trim;

    if (!cleanInput) {
        inputEl.value = '';
        return;
    }

    myLeads.push(cleanInput);  
    inputEl.value = ''; 

    render(myLeads);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
})

tabBtn.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {

        myLeads.push(tabs.at(0).url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads);
    })

})

deleteBtn.addEventListener("dblclick", () => {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

pasteBtn.addEventListener("click", async ()=> {
    inputEl.value = await navigator.clipboard.readText();
}) 

function render(leads) {
    ulEl.innerHTML = ''; // wipe to prevent duplicates showing up on screen
    
    leads.forEach(lead => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = lead;
        a.textContent = lead;

        a.target = '_blank'; //open in new tab

        li.append(a);
        ulEl.append(li);
    });
}
