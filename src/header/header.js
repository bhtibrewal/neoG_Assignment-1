/* header */

const header = document.querySelector(".header");
window.onscroll = function () {
  if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50
  ) {
    header.style.width= "auto";
  } else {
    document.querySelector(".header").style.display = "flex";
  }
}
