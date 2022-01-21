
const chipInput = document.querySelector(".chip-input");

function addChip(text) {
  const chipContainer = document.querySelector("#chip-box");
  let chip = document.createElement("div");
  chip.className = "chip flex-center";
  chip.innerHTML = `<p>${text}</p>
  <button onclick="del(event)" class="x-btn" >x</button>`;
  chipContainer.appendChild(chip);
}
chipInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    if (event.target.value === "") alert("enter chip text");
    else {
      addChip(event.target.value);
      event.target.value = "";
    }
  }
});
window.del = function del(event) {
  event.target.parentElement.remove();
};
addChip("Lemon");

//  Badge

const hideButton = document.querySelector(".hide-button");
const badge = document.querySelector(".hide-badge");
let on = true;
hideButton.addEventListener("click", () => {
  badge.style.display = on ? "none" : "grid";
  on = !on;
});

// snackbar

const snackbarBtn = document.querySelector(".snackbar-btn");
const snackbar = document.querySelector(".snackbar-2");
snackbarBtn.addEventListener("click", () =>{
  snackbar.style.display="flex";
  setTimeout(() => {
    snackbar.style.display="none";
  }, 2000);
})