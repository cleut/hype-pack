// pick images

const slideArea = document.querySelector("div.slides")
const images = slideArea.querySelectorAll("img")

let currentSlide = 0
let z = 1

slideArea.addEventListener("click", function () {
    currentSlide = currentSlide + 1

    if (currentSlide > images.length - 1) {
        currentSlide = 0
    }

    z = z + 1

    // removes animation
    images.forEach(image => {
        image.style.animation = ""
    })


    images[currentSlide].style.zIndex = z
    images[currentSlide].style.animation = "fade 0.5s"
})

// hover state thingy

slideArea.addEventListener("mouseover", function () {
    images.forEach(image => {
        const x = 25 * (Math.floor(Math.random() * 5)) - 60
        const y = 25 * (Math.floor(Math.random() * 5)) - 60


        image.style.transform = `translate(${x}px, ${y}px)`
    })
})

// hover state when mouse leaves

slideArea.addEventListener("mouseout", function (){
    images.forEach(image => {
        image.style.transform = ""
    })
})