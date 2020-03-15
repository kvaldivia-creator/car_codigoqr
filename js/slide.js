let indice = 1

muestraSlide(indice)

function nextSlide(n) {
    muestraSlide(indice+=n)
}

function positionSlide(n) {
    muestraSlide(indice=n)
}

setInterval(() => {
    muestraSlide(indice += 1)
}, 4000);

function muestraSlide(n) {
    let slides = document.getElementsByClassName('carousel__slide')
    let barras = document.getElementsByClassName('barra')

    if (n > slides.length) {
        indice = 1
    }

    if (n < 1) {
        indice = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }

    for (let i = 0; i < slides.length; i++) {
        barras[i].className = barras[i].className.replace("active", "")
    }

    slides[indice-1].style.display = 'block'
    barras[indice-1].className += ' active'
}