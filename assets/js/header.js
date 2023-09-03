function abrirMenu () {
    let menuMobile = document.querySelector('.menu-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.mobile-menu-icon').src = "./assets/img/close-icon.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.mobile-menu-icon').src = "./assets/img/menu-icon.svg";
    }
}