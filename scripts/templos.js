const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    
    if (navMenu.classList.contains('show')) {
        menuButton.textContent = '✕';
        menuButton.setAttribute('aria-label', 'Fechar menu de navegação');
    } else {
        menuButton.textContent = '☰';
        menuButton.setAttribute('aria-label', 'Abrir menu de navegação');
    }
});

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;