const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#collected-links");
let myLeads = [];
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const deleteBtn = document.querySelector("#delete-btn");
const pasteBtn = document.querySelector("#paste-btn");

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}  

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value);  
    inputEl.value = ''; 

    render(myLeads);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
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
