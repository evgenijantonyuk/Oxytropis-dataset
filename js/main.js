document.addEventListener('DOMContentLoaded', function(){
    
    // ======== Gallery ========
    new Gallery(document.getElementById('gallery'), {
        margin: 15
    })
//     ===================================== hamburger-menu ================================
    const openMenuBtn = document.querySelector('#burger')
    const mobileMenu = document.querySelector('.nav-mobile')
    const closeMenu = document.querySelector('.header__burger-btn')
    
    openMenuBtn.addEventListener('click', function () {
        console.log('click')
        mobileMenu.classList.toggle('active')
        closeMenu.classList.toggle('active')
    })
    //     ====================================== modal ===================================
    
    const buttonShow = document.querySelector('.contacts-button')
    const contacts = document.querySelector('.contacts')
    const formCloseBtn = document.querySelector('.form__close-btn')
    
    buttonShow.addEventListener('click', function(){
        // console.log('click')
        contacts.classList.add('isVisible')
    })
    
    formCloseBtn.addEventListener('click', function(){
        contacts.classList.remove('isVisible')
    })

// ======================================== form ======================================
    const form = document.forms["form"];
    const formArr = Array.from(form);
    const validFormArr = [];
    const button = form.elements["button"];
    
    formArr.forEach((el) => {
        if (el.hasAttribute("data-reg")) {
            el.setAttribute("is-valid", "0");
            validFormArr.push(el);
        }
    });
    
    form.addEventListener("input", inputHandler);
    form.addEventListener("submit", formCheck);
    
    function inputHandler({ target }) {
        if (target.hasAttribute("data-reg")) {
            inputCheck(target);
        }
    }
    
    function inputCheck(el) {
        const inputValue = el.value;
        const inputReg = el.getAttribute("data-reg");
        const reg = new RegExp(inputReg);
        if (reg.test(inputValue)) {
            el.setAttribute("is-valid", "1");
            el.style.border = "2px solid rgb(0, 196, 0)";
        } else {
            el.setAttribute("is-valid", "0");
            el.style.border = "2px solid rgb(255, 0, 0)";
        }
    }
    
    function formCheck(e) {
        e.preventDefault();
        const allValid = [];
        validFormArr.forEach((el) => {
            allValid.push(el.getAttribute("is-valid"));
        });
        const isAllValid = allValid.reduce((acc, current) => {
            return acc && current;
        });
        if (!Boolean(Number(isAllValid))) {
            alert("Заполните поля правильно!");
            return;
        }
        formSubmit();
    }
    
    async function formSubmit() {
        const data = serializeForm(form);
        const response = await sendData(data);
        if (response.ok) {
            let result = await response.json();
            alert(result.message);
            formReset();
        } else {
            alert("Код ошибки: " + response.status);
        }
    }
    
    function serializeForm(formNode) {
        return new FormData(form);
    }
    
    async function sendData(data) {
        return await fetch("./php/send_mail.php", {
            method: "POST",
            body: data,
        });
    }
    
    function formReset() {
        form.reset();
        validFormArr.forEach((el) => {
            el.setAttribute("is-valid", 0);
            el.style.border = "none";
        });
    }
// ==================================================================

})
