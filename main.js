let openNav = document.querySelector(".menu");
let close_menu = document.querySelector(".close-menu");
let sideMenu = document.querySelector(".sideMenu");
let bg = document.querySelector(".bg");

openNav.addEventListener("click", () => {
    sideMenu.classList.add('open');
    bg.classList.add('active');
})

close_menu.addEventListener("click", () => {
    sideMenu.classList.remove('open');
    bg.classList.remove('active');
})