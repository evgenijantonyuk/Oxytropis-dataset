//     ===================================== hamburger-menu ================================
const openMenuBtn = document.querySelector('#key-burger')
const mobileMenu = document.querySelector('.nav-mobile')
const closeMenu = document.querySelector('.header__burger-btn')

openMenuBtn.addEventListener('click', function () {
    console.log('click')
    mobileMenu.classList.toggle('active')
    closeMenu.classList.toggle('active')
})
