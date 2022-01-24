/* badge */

const hideButton = document.querySelector(".hide-button");
const badge = document.querySelector(".hide-badge");
let on = true;
hideButton.addEventListener("click", () => {
  badge.style.display = on ? "none" : "grid";
  on = !on;
});
