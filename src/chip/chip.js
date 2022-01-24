/* chips */
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
