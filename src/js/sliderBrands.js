// Иници

let bottom = document.querySelector('.brands__button')

if (window.screen.width <= 500) {
    new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        slidesPerView: 1.4,
        spaceBetween: 16,
        width: 240,
        slidesPerView: 'auto',
        scrtollbar: {
            hide: true
        },
        centeredSlides: true
    })

    bottom.remove()
} else {
    let wrapper = document.querySelector('.swiper-wrapper')
    wrapper.classList.remove('swiper-wrapper')
    wrapper.classList.add('flex-conteiner')
    let swiperW = document.querySelector('.swiper-container')
    swiperW.classList.remove('swiper-container')
}

let show = bottom.querySelector('.button__show-more')

let hide = bottom.querySelector('.button__hide-some')
hide.remove()
let iter = 1

let flexCon = document.querySelector('.flex-conteiner')

let arrowRotate = bottom.querySelector('.button__img')

bottom.addEventListener('click', () => {
    if (iter % 2 == 0) {
        bottom.appendChild(show)
        flexCon.classList.remove('show-brands')
        hide.remove()

        arrowRotate.classList.remove('button__img-show')
    } else {
        arrowRotate.classList.add('button__img-show')
        bottom.appendChild(hide)
        show.remove()
        flexCon.classList.add('show-brands')
    }
    iter = iter + 1

    console.log(iter)
})

// menu

let menuParant = document.querySelector('.l-menu-block')

let menuBurger = document.querySelector('.burger__icon')

let menuBurgerH = menuParant.querySelector('.m-header__menu-burger')

let menuOverlay = document.querySelector('.menu__overlay')

menuBurger.addEventListener('click', () => {
    menuParant.classList.toggle('menu-trans')
    menuOverlay.classList.add('d-block')
})

menuBurgerH.addEventListener('click', () => {
    menuParant.classList.toggle('menu-trans')
    menuOverlay.classList.remove('d-block')
})

menuOverlay.addEventListener('click', () => {
    menuParant.classList.toggle('menu-trans')
    menuOverlay.classList.remove('d-block')
})
