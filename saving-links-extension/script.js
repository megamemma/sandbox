const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#collected-links");
let myLeads = [];

inputBtn.addEventListener("click", () => {
    console.log("Btn clicked.")
    const inputVal = inputEl.value;
    myLeads.push(inputVal);

    for (let i = 0; i < myLeads.length; i++) {
        myLeads.push[i];
        console.log(myLeads);
    }
})


