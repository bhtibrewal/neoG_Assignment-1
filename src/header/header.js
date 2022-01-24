/* header */

const header = document.querySelector("#short");

let lastScroll = 0;
window.onscroll = function () {
  const currentScroll = window.pageYOffset;

  // down
  if (currentScroll > lastScroll && !header.classList.contains("short")) {
    header.classList.add("short");
    // console.log(header.classList);
  }
  // up
  else if(currentScroll < lastScroll){
    if (currentScroll < 30 && header.classList.contains("short")) {
      header.classList.remove("short");
      // console.log(header.classList);
    }
  }
  lastScroll = currentScroll;
}
