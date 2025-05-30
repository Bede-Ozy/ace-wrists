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

// console.log(allLinks);
// console.log(products);
// console.log(productsDetails);
console.log(productName);

// orderButton.forEach(a =>{
//         const nameOfProduct = productName.textContent;
//     a.addEventListener('click', (e) => {
//         e.preventDefault();
//         console.log(productName.textContent); 
//         console.log(nameOfProduct);
//     })
// })

// Array.from(allLinks).forEach(a => {
//     a.addEventListener('click', (e) => {
//         e.preventDefault();
//     })
// });

 function orderNow(name, price, features) {
      const message = `Hello, I'm interested in ordering:\n\nProduct: ${name}\nPrice: ₦${price}`;
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        //   window.open(url, '_blank');
        alert(`${message} \n\n ${url}`);
    }

// orderNow();