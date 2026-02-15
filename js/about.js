const navMenu = document.querySelector('.nav-menu')
const closeMenuBtn = document.querySelector('.close-menu-btn')
const menuBtn = document.querySelector('.menu-btn')
const navItem = document.querySelectorAll('.nav-item')

function closeMenu () {
    navMenu.style.transform = 'translateX(105%)'
    closeMenuBtn.style.display = 'none'
    menuBtn.style.display = 'block'
}

menuBtn.addEventListener('click', () => {
    navMenu.style.transform = 'translateX(0%)'
    closeMenuBtn.style.display = 'block'
    menuBtn.style.display = 'none'
})

closeMenuBtn.addEventListener('click', closeMenu)

navItem.forEach(item => {
    item.addEventListener('click', closeMenu)
})