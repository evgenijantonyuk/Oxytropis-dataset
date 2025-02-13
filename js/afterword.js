//     ===================================== hamburger-menu ================================
const burgerOpenMenuBtn = document.querySelector('#afterword-burger')
const burgerMobileMenu = document.querySelector('.nav-mobile')
const burgerCloseMenu = document.querySelector('.header__burger-btn')

burgerOpenMenuBtn.addEventListener('click', function () {
    console.log('click')
    burgerMobileMenu.classList.toggle('active')
    burgerCloseMenu.classList.toggle('active')
})

