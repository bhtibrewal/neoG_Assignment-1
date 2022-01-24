const tabs = document.querySelector("#tab");
console.log(tabs);

tabs.addEventListener("click", e => {
    if (e.target.id !== tabs.id) {
        document.getElementById("active-tab").id = "";
        e.target.setAttribute("id", "active-tab");
    }
})  

