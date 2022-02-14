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
navMenuLink.forEach(n => n.addEventListener('click', linkAction));

// 스크롤 시 768px 이상 헤더에 그림자 및 애니메이션
function scrollHeader(){
    const nav = document.querySelector('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);

// 스크롤 시 해당 섹션 메뉴에 표시
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('nav__list--active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('nav__list--active')
        }
    })
}
window.addEventListener('scroll', scrollActive);

// 스크롤 업 버튼
const backToTop = document.getElementById('scroll-up');
const checkScroll=()=>{
    let pageOffset = window.pageYOffset;
    if(pageYOffset >= 200){
        backToTop.classList.add('scroll-up--show');  
    }else{
        backToTop.classList.remove('scroll-up--show'); 
    }
}
const moveBackToTop=()=>{
    if(window.pageYOffset > 0){
        window.scrollTo({top:0, behavior:"smooth"});
    }
}
window.addEventListener('scroll', checkScroll);
backToTop.addEventListener('click',moveBackToTop);