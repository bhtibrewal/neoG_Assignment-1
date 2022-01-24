const iframe = document.querySelector(".main-iframe");

const navList = document.querySelectorAll(".links_name");


let activeBtn = navList[0];

const localStorageName = localStorage.getItem("activeBtn");
let activeBtnName = localStorageName !== null ? localStorageName : activeBtn.textContent.trim().toLowerCase();

const updateActive = (navItem, name) => {
    navItem.classList.add("active");
    iframe.src = `./src/${name}/${name}.html`;
    localStorage.setItem("activeBtn", name);
    activeBtn = navItem;
}

navList.forEach((navItem) => {

    const name = navItem.textContent.trim().toLowerCase();
    if (name === activeBtnName) {
        updateActive(navItem, name);
    }
    navItem.addEventListener('click', (e) => {
        activeBtn.classList.remove("active");
        updateActive(navItem, name);
    })
})



