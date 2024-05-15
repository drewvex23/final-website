const burgerMenu = document.querySelector('.burger-menu')
const mobileLinks = document.querySelector('.mobile-links')
const openBurgerMenu = document.querySelector('.open-burger-menu')

burgerMenu.addEventListener('click', () => {
    mobileLinks.style.display = 'flex'
    burgerMenu.style.display = 'none'
    openBurgerMenu.style.display = 'block'
})

openBurgerMenu.addEventListener('click', () => {
    mobileLinks.style.display = 'none'
    burgerMenu.style.display = 'block'
    openBurgerMenu.style.display = 'none'
})