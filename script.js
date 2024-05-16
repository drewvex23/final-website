const burgerMenu = document.querySelector('.burger-menu')
const mobileLinks = document.querySelector('.mobile-links')
const openBurgerMenu = document.querySelector('.open-burger-menu')
const galleryButton = document.querySelector('.gallery-button')
const leftArrow = document.querySelector('.left-arrow-gallery')
const rightArrow = document.querySelector('.right-arrow-gallery')
const galleryDiv = document.querySelector('.gallery-div')


const galleryImagesPreview = ['./images/image1.webp','./images/image2.jpg','./images/image3.jpg','./images/image4.jpg','./images/image5.avif','./images/image6.jpg']


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

galleryButton.addEventListener('click', () => {
    location.href = './HTML/gallery.html'
})

rightArrow.addEventListener('click', () => {
    
    galleryDiv.style.backgroundImage = "url('./images/image1.webp')" 
})