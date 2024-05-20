const burgerMenu = document.querySelector('.burger-menu')
const mobileLinks = document.querySelector('.mobile-links')
const openBurgerMenu = document.querySelector('.open-burger-menu')
const galleryButton = document.querySelector('.gallery-button')
const leftArrow = document.querySelector('.left-arrow-gallery')
const rightArrow = document.querySelector('.right-arrow-gallery')
const galleryDiv = document.querySelector('.gallery-div')


const galleryImagesPreview = ["url('./images/image1.webp')","url('./images/image2.webp')","url('./images/image3.webp')","url('./images/image4.avif')","url('./images/image5.avif')","url('./images/image6.jpg')"]


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


let counter = 0
rightArrow.addEventListener('click', () => {  
    if (counter == galleryImagesPreview.length) {
        counter = 0
    }
    counter += 1
    galleryDiv.style.backgroundImage = galleryImagesPreview[counter]
})

leftArrow.addEventListener('click', () => {  
    if (counter == 0) {
        counter = galleryImagesPreview.length
    }
    counter -= 1
    galleryDiv.style.backgroundImage = galleryImagesPreview[counter]
})