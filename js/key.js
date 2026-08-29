
//     ===================================== hamburger-menu ================================
const burgerOpenMenuBtn = document.querySelector('#key-burger')
const burgerMobileMenu = document.querySelector('.nav-mobile')
const burgerCloseMenu = document.querySelector('.header__burger-btn')

burgerOpenMenuBtn.addEventListener('click', function () {
    console.log('click')
    burgerMobileMenu.classList.toggle('active')
    burgerCloseMenu.classList.toggle('active')
})

const buttonTop = document.querySelector('.button__up-key')

const showButton = () => {
    window.addEventListener('scroll', () => {

        if (window.scrollY > 100) {
            buttonTop.classList.add('show')
        } else {
            buttonTop.classList.remove('show')
        }
    })
}

const scrollToTop = () => {
    buttonTop.addEventListener('click', () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })
}

showButton()
scrollToTop()

