
const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCartIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCartIcon.addEventListener('click', toggleCartIcon)

function toggleDesktopMenu() {

    const isAsideOpen = !aside.classList.contains('inactive')

    if (isAsideOpen) {
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleCartIcon() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
}

const productList = []

productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Pantalla',
    price: 500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

console.log(productList)

/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */


function renderProducts(arr) {

    // FOR QUE CREA EL OBJETO HTML DEL PRODUCT CARD
    for (product of arr) {

        // SE CREA EL DIV CONTENERDOR PRINCIPAL Y SE LE AGREGA LA CLASE 'PRODUCT-CARD'
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        // SE CREA LA IMAGEN Y SE LE AGREGA EL SRC CON LA FUENTE DE LA IMAGEN
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)

        // SE CREA EL CONTENEDOR INTERIOR CON LA INFORMACIÓN DEL PRODUCTO Y SE LE AGREGA LA CLASE 'PRODUCT-INFO'
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        // SE CREA EL DIV CONTENEDOR CON LOS DOS PARRAFOS DE TEXTO
        const productInfoDiv = document.createElement('div')
        // SE CREAN LOS DOS 'P' Y SE LES AGREGAN LAS CADENAS DE TEXTO
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p')
        productName.innerText = product.name

        // SE PUEDEN AGREGAR DOS OBJETOS USANDO APPEND EN VEZ DE APPENDCHILD
        productInfoDiv.append(productPrice, productName)

        // SE CREA EL 'FIGURE' QUE ES LA IMAGEN DEL CARRITO
        const productInfoFigure = document.createElement('figure')
        const productImgFigure = document.createElement('img')
        productImgFigure.setAttribute('src', './icons/bt_add_to_cart.svg')

        // SE REALIZA LA INTEGRACIÓN DE LOS DIFERENTES ELEMENTOS
        productInfoFigure.appendChild(productImgFigure)

        productInfo.append(productInfoDiv, productInfoFigure)

        productCard.append(productImg, productInfo)

        cardsContainer.appendChild(productCard)

    }

}

renderProducts(productList)
