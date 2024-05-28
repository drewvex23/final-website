const burgerMenu = document.querySelector('.burger-menu')
const mobileLinks = document.querySelector('.mobile-links')
const openBurgerMenu = document.querySelector('.open-burger-menu')
const galleryButton = document.querySelector('.gallery-button')
const leftArrow = document.querySelector('.left-arrow-gallery')
const rightArrow = document.querySelector('.right-arrow-gallery')
const galleryDiv = document.querySelector('.gallery-div')
const galleryImagesPreview = ["url('./images/image1.webp')","url('./images/image2.webp')","url('./images/image3.webp')","url('./images/image4.avif')","url('./images/image5.avif')","url('./images/image6.jpg')"]
const easternSeeMoreBtn = document.querySelector('.eastern-see-more-div')
const easternMoreTeamStats = document.querySelector('.eastern-see-more-stats')
const easternCloseMoreBtn = document.querySelector('.eastern-close-more-div')
const westernSeeMoreBtn = document.querySelector('.western-see-more-div')
const westernMoreTeamStats = document.querySelector('.western-see-more-stats')
const westernCloseMoreBtn = document.querySelector('.western-close-more-div')
const eastSelector = document.querySelector('.east-conf-select')
const westSelector = document.querySelector('.west-conf-select')
const eastStats = document.querySelector('.eastern-stats')
const westStats = document.querySelector('.western-stats')

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

easternSeeMoreBtn.addEventListener('click', () => {
    easternMoreTeamStats.style.display = 'flex'
    easternSeeMoreBtn.style.display = 'none'
    easternCloseMoreBtn.style.display = 'flex'
})

easternCloseMoreBtn.addEventListener('click', () => {
    easternMoreTeamStats.style.display = 'none'
    easternSeeMoreBtn.style.display = 'flex'
    easternCloseMoreBtn.style.display = 'none'
})

westernSeeMoreBtn.addEventListener('click', () => {
    westernMoreTeamStats.style.display = 'flex'
    westernSeeMoreBtn.style.display = 'none'
    westernCloseMoreBtn.style.display = 'flex'
})

westernCloseMoreBtn.addEventListener('click', () => {
    westernMoreTeamStats.style.display = 'none'
    westernSeeMoreBtn.style.display = 'flex'
    westernCloseMoreBtn.style.display = 'none'
})

eastSelector.addEventListener('click', () => {
    eastSelector.style.fontWeight = '900'
    westSelector.style.fontWeight = '400'
    eastStats.style.display = 'flex'
    westStats.style.display = 'none'
    easternSeeMoreBtn.style.display = 'flex'
    westernSeeMoreBtn.style.display = 'none'
    westernCloseMoreBtn.style.display = 'none'
    if (westernMoreTeamStats.style.display == 'flex') {
        easternMoreTeamStats.style.display = 'flex'
        westernMoreTeamStats.style.display = 'none'
        easternSeeMoreBtn.style.display = 'none'
        easternCloseMoreBtn.style.display = 'flex'
    }
})

westSelector.addEventListener('click', () => {
    eastSelector.style.fontWeight = '400'
    westSelector.style.fontWeight = '900'
    eastStats.style.display = 'none'
    westStats.style.display = 'flex'
    easternSeeMoreBtn.style.display = 'none'
    westernSeeMoreBtn.style.display = 'flex'
    easternCloseMoreBtn.style.display = 'none'

    if (easternMoreTeamStats.style.display == 'flex') {
        easternMoreTeamStats.style.display = 'none'
        westernMoreTeamStats.style.display = 'flex'
        westernSeeMoreBtn.style.display = 'none'
        westernCloseMoreBtn.style.display = 'flex'
    }
})