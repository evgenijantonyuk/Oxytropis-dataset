document.addEventListener('DOMContentLoaded', () => {
    //     ======== Finding ============
    const icon = document.querySelector('.icon')
    const blockSearch = document.querySelector('.block-search')
    const searchClear = document.querySelector('.clear')
    let input = document.querySelector('#mySearch')
    
    icon.onclick = function () {
        blockSearch.classList.toggle('active')
    }
    
    searchClear.onclick = function () {
        document.getElementById('mySearch').value = ''
    }
    
    
    input.oninput = function () {
        let value = this.value.trim().toLowerCase()
        let list = document.querySelectorAll('.species__block')
        let genus = document.querySelectorAll('.genus')
        let subgenus = document.querySelectorAll('.subgenus')
        let section = document.querySelectorAll('.section')
        
        if (value !== '') {
            list.forEach(elem => {
                if (elem.innerText.search(value) === -1) {
                    elem.classList.add('input-hide')
                }
            })
        } else {
            list.forEach(elem => {
                elem.classList.remove('input-hide')
            })
        }
        
        if (value !== '') {
            genus.forEach(elem => {
                if (elem.innerText.search(value) === -1) {
                    elem.classList.add('input-hide')
                }
            })
        } else {
            genus.forEach(elem => {
                elem.classList.remove('input-hide')
            })
        }
        
        if (value !== '') {
            section.forEach(elem => {
                if (elem.innerText.search(value) === -1) {
                    elem.classList.add('input-hide')
                }
            })
        } else {
            section.forEach(elem => {
                elem.classList.remove('input-hide')
            })
        }
        
        if (value !== '') {
            subgenus.forEach(elem => {
                if (elem.innerText.search(value) === -1) {
                    elem.classList.add('input-hide')
                }
            })
        } else {
            subgenus.forEach(elem => {
                elem.classList.remove('input-hide')
            })
        }
    }
    
//     ===================================== hamburger-menu ================================
    const burgerOpenMenuBtn = document.querySelector('.header__burger-btn')
    const burgerMobileMenu = document.querySelector('.nav-mobile')
    const burgerCloseMenu = document.querySelector('.header__burger-btn')

    burgerOpenMenuBtn.addEventListener('click', function () {
        console.log('click')
        burgerMobileMenu.classList.toggle('active')
        burgerCloseMenu.classList.toggle('active')
    })
    

})



