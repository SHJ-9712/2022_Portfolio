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
    navMenu.classList.remove('show-menu');
}
navMenuLink.forEach(n => n.addEventListener('click', linkAction));

// 스크롤 시 768px 이상 헤더에 그림자 및 애니메이션
function scrollHeader(){
    const nav = document.querySelector('header');
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// 스크롤 시 해당 섹션 메뉴에 표시
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('nav__list--active');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('nav__list--active');
        }
    });
}
window.addEventListener('scroll', scrollActive);

// 포트폴리오 number 스크롤 애니메이션
// window.addEventListener('scroll', function() {
//     const project = document.querySelectorAll('.portfolio__project');
//     const scrT = document.documentElement.scrollTop;
//     project.forEach(current => {
//         const box = current.offsetHeight;
//         const boxTop = current.offsetTop;
//         if(scrT > boxTop && scrT <= boxTop + box) {
//             project.classList.add('portfolio__project--active');
//         } else {
//             project.classList.remove('portfolio__project--active');
//         }
//     });
// });
// function getSectionPoint() {
//     const section = document.querySelector('#section3')
//     const sections = document.querySelectorAll('.project');
//     const thisPoint = document.documentElement.scrollTop;

//     for (let i = 0; i < sections.length; i++) {
//         let number = 250; //margin-bottom

//         if (thisPoint >= (section.offsetTop + sections[0].offsetTop) && thisPoint <= (section.offsetTop + section.clientHeight)) {

//             let point = sections[0].offsetTop + Math.abs(sections[0].getBoundingClientRect().top);
//             const num = document.querySelectorAll('.num');

//             // console.log(sections[0].getBoundingClientRect().top);
//             // console.log("sections.offsetTop : " + sections[0].offsetTop);

//             if ((sections[i].offsetTop - number) <= point) {
//                 if (Number(num[i].textContent) > 1) {
//                     sections[i - 1].classList.remove('active');
//                     sections[i].classList.add('active');
//                 } else {
//                     sections[i].classList.add('active');
//                 }
//             } else {
//                 sections[i].classList.remove('active');
//             }
//         }
//     }
// }
// window.addEventListener('scroll', getSectionPoint);

// 포트폴리오 모달창
const modalBtns = document.querySelectorAll(".portfolio__box");
const modalWarp = document.querySelector('.portfolio__modal-warp');
const overlay = document.querySelector(".portfolio__overlay");
const modals = document.querySelectorAll(".portfolio__modal");
const closeBtn = document.querySelectorAll(".portfolio__modal__footer .close-btn");

modalBtns.forEach((modalBtn) => {
    modalBtn.addEventListener('click', function() {
        modals.forEach((modal) => {
            const modalData = modal.getAttribute('data-portfolio');
            const btnData = modalBtn.getAttribute('data-portfolio');
            if(modalData === btnData) {
                modalWarp.style.display = "flex";
                modal.style.display = 'block';
                document.querySelector('body').style.overflow = "hidden";
            }
        });
    });
});
closeBtn.forEach((closeBtn) => {
    closeBtn.addEventListener('click', function() {
        overlay.classList.add('close-overlay');
        modals.forEach((modal) => {
            modal.classList.add('close-modal');
        });
        setTimeout(() => {
            modalWarp.style.display = "none";
            overlay.classList.remove('close-overlay');
            modals.forEach((modal) => {
                modal.classList.remove('close-modal');
                modal.style.display = 'none';
            });
        }, 350);
        document.querySelector('body').style.overflow = "visible";
    });
});
// 모달 바깥영역 overlay 클릭시 꺼짐
overlay.addEventListener('click', function() {
    overlay.classList.add('close-overlay');
    modals.forEach((modal) => {
        modal.classList.add('close-modal');
    });
    setTimeout(() => {
        modalWarp.style.display = "none";
        overlay.classList.remove('close-overlay');
        modals.forEach((modal) => {
            modal.classList.remove('close-modal');
            modal.style.display = 'none';
        });
    }, 350);
    document.querySelector('body').style.overflow = "visible";
});
// 키보드 esc누르면 꺼짐
window.addEventListener("keyup", e => {
    if(modalWarp.style.display === "flex" && e.key === "Escape") {
        overlay.classList.add('close-overlay');
        modals.forEach((modal) => {
            modal.classList.add('close-modal');
        });
        setTimeout(() => {
            modalWarp.style.display = "none";
            overlay.classList.remove('close-overlay');
            modals.forEach((modal) => {
                modal.classList.remove('close-modal');
                modal.style.display = 'none';
            });
        }, 350);
        document.querySelector('body').style.overflow = "visible";
    }
});

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