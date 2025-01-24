document.addEventListener('DOMContentLoaded', function(){
    // ======== Gallery ========
    new Gallery(document.getElementById('gallery'), {
        margin: 15
    })
//     =========================
    
    const buttonShow = document.querySelector('.contacts-button')
    const contacts = document.querySelector('.contacts')
    const container = document.querySelector('.container')
    
    buttonShow.addEventListener('click', function(){
        contacts.classList.toggle('active');
        container.classList.toggle('active');
    })

})



