const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#collected-links");
let myLeads = [];

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value);  
    renderLeads();
    inputEl.value = ''; 
})

function renderLeads() {
    ulEl.innerHTML = ''; // wipe to prevent duplicates showing up on screen
    
    myLeads.forEach(lead => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = myLeads(lead);
        a.textContent = myLeads(lead);

        a.target = '_blank'; //open in new tab

        li.append(a);
        ulEl.append(li);
    });
}
