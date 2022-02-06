// header menu show & hide
const navMenu = document.querySelector('header .nav .nav__menu');
const navMenuClose = document.querySelector('header .nav .nav__menu .nav__menu__close');
const navMenuBtn = document.querySelector('header .nav .nav__menu-btn');
// menu show
if(navMenuBtn) {
    navMenuBtn.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu');
    });
}
// menu hide
if(navMenuClose) {
    navMenuClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu');
    });
}
// 메뉴의 링크 클릭 시 menu hide
const navMenuLink = document.querySelectorAll('header .nav .nav__list > li a');
function linkAction(){
    navMenu.classList.remove('show-menu')
}
navMenuLink.forEach(n => n.addEventListener('click', linkAction))