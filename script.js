const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".bottom-header__links");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    header.classList.toggle("active");
})