const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#collected-links");
let myLeads = [];
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
}  

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value);  
    inputEl.value = ''; 

    renderLeads();
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
})

function renderLeads() {
    ulEl.innerHTML = ''; // wipe to prevent duplicates showing up on screen
    
    myLeads.forEach(lead => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = lead;
        a.textContent = lead;

        a.target = '_blank'; //open in new tab

        li.append(a);
        ulEl.append(li);
    });
}
