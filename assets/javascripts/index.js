const openMenu = document.querySelector(".hambur");
const closeBtn = document.querySelector(".closeBtn");
const closeBtn1 = document.querySelector(".closeBtn1");

const sideMenu = document.querySelector(".side-menu")
const findUs = document.querySelector(".find-us");
const socail_container = document.querySelector(".social-container");

findUs.addEventListener("click", () => {
    socail_container.style.width = "100%";
})

closeBtn1.addEventListener("click", () => {
    socail_container.style.width = "0%";

})
openMenu.addEventListener("click", () => {
    sideMenu.style.width = "100%";
})
closeBtn.addEventListener("click", () => {
    sideMenu.style.width = "0%";

})

// display the video
const video = document.querySelector("video");

window.onload = function () {
    video.play()
}  