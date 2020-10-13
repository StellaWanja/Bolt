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

//call functions
const bolt = () => {
    navSlide();
}

bolt();