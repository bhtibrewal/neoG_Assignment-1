import "./styles.css";

const container = document.querySelector(".container");
const addButton = document.querySelector(".add-btn");
// const input = document.getElementById(".input");
let arr = [
  "apple",
  "banana",
  "grape",
  "mango",
  "peach",
  "apple",
  "banana",
  "grape",
  "mango",
  "peach"
];
let outputarr = [];

function clickHandler() {
  let num = Math.floor(Math.random() * 10);
  // outputarr.push(arr[num]);
  // console.log(num, outputarr);

  container.innerHTML += `<div onclick="del(event)" class='chip flex '>
  <p>${arr[num]}</p2>
  <button class="x-btn" >x</button>
  </div>`;
}
window.del = function del(event) {
  event.target.parentElement.remove();
};
addButton.addEventListener("click", clickHandler);
