const phone = '+2349033391891';

const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close');
const nav = document.querySelector('header nav');

// let allLinks = [];
const allLinks = document.getElementsByTagName('a');

const products = document.querySelectorAll(".product-card");
const productsDetails = document.querySelectorAll(".card-details");
const orderButton = document.querySelectorAll(".order-btn");
const productName = document.querySelectorAll(".product-name");
const subscribeButton = document.getElementById("subscrib-btn");
const emailInput = document.getElementById("email-input");
const emailInputWarning = document.getElementById("email-input-warning");
const addToCartBtn = document.querySelectorAll('.add-to-cart-btn');

hamburger.addEventListener('click', () => {
    nav.classList.add('open');
    hamburger.classList.add('hide');
    closeIcon.classList.add('show');
});

closeIcon.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.classList.remove('hide');
    closeIcon.classList.remove('show');
});

subscribeButton.addEventListener('click', (e) => {
    if (emailInput.value === "") {
        e.preventDefault();
        alert("Please enter an email");
        // emailInputWarning.style.display('block');
    }
})
console.log(productName);

 function orderNow(name, price, features) {
      const message = `Hello, I'm interested in ordering:\n\nProduct: ${name}\nPrice: ₦${price}`;
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
          window.open(url, '_blank');
        // alert(`${message} \n\n ${url}`);
}

cart = [];
console.log(addToCartBtn)

// addToCart();
// orderNow();
