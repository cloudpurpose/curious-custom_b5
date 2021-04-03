function resetHamburger() {
    let windowX = window.innerWidth;
    if (windowX >= 768) {
        fullStyle();
    } else {
        mobileStyle();
    }
}

function fullStyle() {
    let mainNav = document.getElementById('main-nav');
    let leftNav = document.getElementById('left-nav');
    let rightNav = document.getElementById('right-nav');
    mainNav.classList.remove('mobile');
    mainNav.classList.add('show');
    leftNav.classList.remove('flex-column');
    leftNav.classList.add('d-flex');
    rightNav.classList.remove('flex-column');
    rightNav.classList.add('d-flex');
}

function mobileStyle() {
    let mainNav = document.getElementById('main-nav');
    let leftNav = document.getElementById('left-nav');
    let rightNav = document.getElementById('right-nav');
    mainNav.classList.add('mobile');
    mainNav.classList.remove('show');
    leftNav.classList.add('flex-column');
    leftNav.classList.remove('d-flex');
    rightNav.classList.add('flex-column');
    rightNav.classList.remove('d-flex');
}

window.addEventListener("resize", function() {
    resetHamburger();
});

document.addEventListener("DOMContentLoaded", function() {
    resetHamburger();
});