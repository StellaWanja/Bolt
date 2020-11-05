const navSlide = () => {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navIcons = document.querySelectorAll('.nav-icons i')

    hamburgerIcon.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + 0.2}s`; //can add other links (/7 or /5) and +0.3s - delay
            }
        });     

        //burger animation
        hamburgerIcon.classList.toggle('toggle-links');
    });
}

// slides
//initialize slideshow
const slides = document.querySelector('.slider').children; //call three img-slide div
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const indicator = document.querySelector('.indicator');
let imgIndex = 0;

prev.addEventListener('click', () => {
    prevSlide();
    updateCircleIndicator();
    resetTimer();
});

next.addEventListener('click', () => {
    nextSlide();
    updateCircleIndicator();
    resetTimer();
});

const prevSlide = () => {
    if(imgIndex == 0){
        imgIndex=slides.length-1;
    } else {
        imgIndex --;
    }
    changeSlide();
}

const nextSlide = () => {
    if(imgIndex == slides.length - 1){
        imgIndex = 0;
    } else {
        imgIndex++;
    }
    changeSlide();
}

const changeSlide = () => {
    for(let i=0; i<slides.length; i++){
        //remove active from main slide
        slides[i].classList.remove('img-active');
    }
    slides[imgIndex].classList.add('img-active');
}

const circleIndicator = () => {
    for(let i=0; i<slides.length; i++){
        const div = document.createElement('div');
        div.setAttribute('onclick','indicateSlide(this)');
        div.id = i;
        if(i==0){
            div.className = 'indicator-active';
        }
        indicator.appendChild(div);
    }
}

const indicateSlide = (element) => {
    imgIndex = element.id;
    changeSlide();
    updateCircleIndicator();
    resetTimer();
}

const updateCircleIndicator = () => {
    for(let i=0; i<indicator.children.length; i++){
        indicator.children[i].classList.remove('indicator-active');
    }
    indicator.children[imgIndex].classList.add('indicator-active');
}

const resetTimer = () => {
    //reset when clicked - stop then start again
    clearInterval(slideTimer);
    slideTimer = setInterval(autoPlay,4000);
}

const autoPlay = () => {
    nextSlide();
    updateCircleIndicator();
}

let slideTimer = setInterval(autoPlay,4000);

//call functions
const bolt = () => {
    navSlide();
    prevSlide();
    nextSlide();
    circleIndicator();
}

bolt();
