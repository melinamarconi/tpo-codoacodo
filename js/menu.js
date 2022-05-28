const bmenu = document.querySelector(".nav__responsive-button");
const menu = document.querySelector('.nav__li-container');
menu.style.top = "-1000px"
bmenu.addEventListener("click", (e) => {
    if(menu.style.top == "-1000px"){
        menu.style.top="-27px"

    }else {
        menu.style.top="-1000px"
    }
})