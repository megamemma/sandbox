const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#collected-links");
let myLeads = [];
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

const inputBtn = document.querySelector("#input-btn");
const tabBtn = document.querySelector("#tab-btn");
const pasteBtn = document.querySelector("#paste-btn");

const deleteBtn = document.querySelector("#delete-btn");

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}  

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"},
]

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value);  
    inputEl.value = ''; 

    render(myLeads);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
})

tabBtn.addEventListener("click", () => {
    console.log(tabs.at(0).url);
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
