const loadComponent = () => {
  const loader = document.getElementById("loader");

  //   oculta el elemento despues de 3 segundos
  setTimeout(() => {
    loader.classList.add("hide");
  }, 2000);
};

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

  document.addEventListener("DOMContentLoaded", () => {
    loadComponent();
    showProducts()
    // Se pone así en caso de que se vayan a ejecuatr más funciones
  });

const shopIcon = document.getElementById("cart-shop")

const shopCloseIcon = document.getElementById("close-cart")
  
  shopIcon.addEventListener("click", () => {
    cart.classList.remove("hide")
  })
  shopCloseIcon.addEventListener("click", () => {
    cart.classList.add("hide")
  })