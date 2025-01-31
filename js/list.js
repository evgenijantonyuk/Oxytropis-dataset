document.addEventListener('DOMContentLoaded', () => {
    //     ======== Finding ============
    document.querySelector('#input').oninput = function () {
        let val = this.value.trim().toLowerCase()
        let searchItems = document.querySelectorAll('.search')
        if (val !== '') {
            searchItems.forEach(function (elem) {
                if (elem.innerText.search(val) === -1) {
                    elem.classList.add('hide')
                    elem.innerHTML = elem.innerText
                } else {
                    elem.classList.remove('hide')
                    let str = elem.innerText
                    elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length)
                }
            })
        } else {
            searchItems.forEach(function (elem) {
                elem.classList.remove('hide')
                elem.innerHTML = elem.innerText
            })
        }
    }
    
    function insertMark(symbols, position, len) {
        return symbols.slice(0, position) + '<mark>' + symbols.slice(position, position + len) + '</mark>' + symbols.slice(position + len)
    }
})
//  ======================= burger menu ===============
const openMenuBtn = document.querySelector('.header__burger-btn')
const mobileMenu = document.querySelector('.nav-mobile')
const closeMenu = document.querySelector('.header__burger-btn')

openMenuBtn.addEventListener('click', function () {
    console.log('click')
    mobileMenu.classList.toggle('active')
    closeMenu.classList.toggle('active')
})

