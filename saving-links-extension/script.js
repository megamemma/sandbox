let inputBtn = document.querySelector("#input-btn");

inputBtn.addEventListener("click", () => {
    console.log("Btn clicked.")
})

let box = document.querySelector("#box-el");

box.addEventListener("click", () => {
    box.textContent = 'Box just opened';
})