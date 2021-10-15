document.querySelector('#dropdown-menu').addEventListener('click', () => {
    document.querySelector('.menu-mobile').style.width = '200px';
});
document.querySelector('#botao-fechar').addEventListener('click', () => {
    document.querySelector('.menu-mobile').style.width = '0';  
});