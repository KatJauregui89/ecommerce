// LOADER
const loadComponent = () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 2000);
};

// --------MENÚ HAMBURGUESA---------
const menuBtn = document.getElementById("menu-btn")
const menu = document.getElementById("nav-menu")
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("visible")
})
// -------DARK MODE---------------
const themeIcon = document.getElementById("theme-btn")

themeIcon.addEventListener("click", () =>{
  document.body.classList.toggle("dark")

  if (themeIcon.classList.contains("bx-moon")){
    themeIcon.classList.replace("bx-moon", "bx-sun")
  }else{
    themeIcon.classList.replace("bx-sun", "bx-moon")
  }
})

// PRODUCTOS
const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20
    }
  ]

  // MOSTRAR OCULTAR CARRITO
  const cart = document.getElementById("cart-container")
  const shopIcon = document.getElementById("cart-shop")
  const shopCloseIcon = document.getElementById("close-cart")

  shopIcon.addEventListener("click", () => {
    cart.classList.remove("hide")
  })
  shopCloseIcon.addEventListener("click", () => {
    cart.classList.add("hide")
  })

  // MOSTRAR PRODUCTOS EN PÁGINA
const showProducts = () => {
  const productContainer = document.getElementById("products-list")

  let fragment = ``

  items.forEach(producto => {
   fragment += `
   <div class="product-card" id="${producto.id}">
     <img src="${producto.image}" alt="Academlo merch">
     <button class="btn btn-add"><i class='bx bxs-plus-circle' ></i></button>
   </div>
   <div class="product-info">
      <span class="price">$${producto.price}</span>
      <span class="Stock">Stock:${producto.quantity}</span>
      <span class="product-type">${producto.name}</span>
   </div>
  `

})

  productContainer.innerHTML = fragment

  cartFuncionality()
}

function cartFuncionality(){
  const buttons = document.querySelectorAll(".btn-add")
  const cart = []

  buttons.forEach(button => {
    button.addEventListener("click", e =>{
      const id = parseInt(e.target.parentElement.id)
      const selectedProduct = items.find(item => item.id === id)
      
      let index = cart.indexOf(selectedProduct)

      if (index !== -1){
        if(cart[index].quantity <= cart[index].cantidad){
          alert("Ya no hay stock ):")
        }else{
          cart[index].cantidad++
        }
      }else{
        selectedProduct.cantidad = 1
        cart.push(selectedProduct)

      }
      console.log(cart);
      showProducts(cart)
    })
  })
}

function showProductsInCart(cart){
  const productsInCart = document.getElementById("product-selected")
  let fragment = ``


}

  document.addEventListener("DOMContentLoaded", () => {
    loadComponent();
    showProducts()
  });

  