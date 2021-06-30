const menuBtn= document.querySelector('.headerTop__menu-button');
const oppenedMenu= document.querySelector('.openMenu');
let menuOpen=false;

const headerTop = document.querySelector('.headerTop');
const headerTopImg= document.querySelector('.headerTop__logo');

const arrow=document.querySelector('.banerTop__arrow');
const arrowIcon=document.getElementById('arrow');

const contact = document.getElementById('contact');

const arrowUp= document.querySelector('.arrowUp');


menuBtn.addEventListener('click', ()=> {
    if(!menuOpen){
        menuBtn.classList.add('open');
        oppenedMenu.classList.add('activeMenu');
        menuOpen=true;
    }
    else{
        menuBtn.classList.remove('open');
        oppenedMenu.classList.remove('activeMenu');
        menuOpen=false;
    }
});

window.addEventListener('scroll', ()=>{
    let windowPosition = window.scrollY;
    if(windowPosition>50){
        headerTop.classList.add('headerTop-scroll');
        headerTopImg.classList.add('headerTop-scroll-img');
    }
    else{
        headerTop.classList.remove('headerTop-scroll');
        headerTopImg.classList.remove('headerTop-scroll-img');
    }

    if(windowPosition>400){
        arrowUp.classList.add('arrowUpShow');
    }
    else{
        arrowUp.classList.remove('arrowUpShow');
    }
});

let viewWidth= window.innerWidth;
arrow.addEventListener('click', ()=>{
    window.scrollTo({
        top:(0.45)*viewWidth,
        behavior: 'smooth'
    });
});

arrowIcon.addEventListener('click', ()=>{
    window.scrollTo({
        top:(0.45)*viewWidth,
        behavior: 'smooth'
    });
});

contact.addEventListener('click', ()=>{
    window.scrollTo({
        top:(4)*viewWidth,
        behavior: 'smooth'
    });
});
arrowUp.addEventListener('click', ()=>{
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
});
