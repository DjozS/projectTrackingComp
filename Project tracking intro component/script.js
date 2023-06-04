const menu = document.querySelector('ul')
const menuBtn = document.querySelector('.menuBtn')
const closeBtn = document.querySelector('.closeBtn')
menuBtn.addEventListener("click", function(){
    menu.style.display = "flex";
    menuBtn.style.display = "none";
    closeBtn.style.display = "flex"
})
closeBtn.addEventListener("click", function(){
    menu.style.display = "none";
    menuBtn.style.display = "flex";
    closeBtn.style.display = "none"
})