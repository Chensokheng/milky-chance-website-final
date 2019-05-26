const openMenu = document.querySelector(".hambur");
const closeBtn = document.querySelector(".closeBtn");

const sideMenu = document.querySelector(".side-menu")

openMenu.addEventListener("click", () => {
    sideMenu.style.width = "100%";
})
closeBtn.addEventListener("click", () => {
    sideMenu.style.width = "0%";
})