function toggleMenu() {
    const navList = document.getElementById('listvonli');
    const isVisible = navList.style.display === 'block';

    navList.style.display = isVisible ? 'none' : 'block';
    document.querySelector('.dreipunkte').setAttribute('aria-expanded', !isVisible);
}