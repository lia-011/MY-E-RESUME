const navLinks = document.querySelectorAll('header nav a');
const logolink = document.querySelector('.logo');

const activePage = () => {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

navLinks.forEach((link, idx) => { 
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');

            }
        });
    });

logolink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();

        navLinks[0].classList.add('active');
    }
});

const arrowRight = document.querySelector('.skills-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.skills-box .navigation .arrow-left');

let index = 0;

const activeskills = () => {
    const imgSlide = document.querySelector('.skills-carousel .img-slide');
    const skillsDetails = document.querySelectorAll('.skills-detail');

    imgSlide.style.transform = 'translateX(calc(${index * -100}% - ${index * 2}rem))';
    
    skillsdetail.forEach(detail => {
        detail.classList.remove('active'); 
    });
    skillsdetail[index].classList.add('active');

}

arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove('disabled');
    
    }

    else {
        index = 5;
        arrowRight.classList.add('disabled');
    }

    activeskills();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled');

    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activeskills();
})


