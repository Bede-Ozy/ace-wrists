document.addEventListener("DOMContentLoaded", () => {
    const colorFilterOption = document.querySelectorAll(".color-filter");
    const brandFilterOption = document.querySelectorAll('.brand-filter');
    const productCard = document.querySelectorAll(".product-card");
    const navSubscribeBtn = document.querySelector(".subscribe-btn");
    const navSearchInput = document.querySelector("#search-input");

    function searchProduct(searchPhrase){
        productCard.forEach(item => {
        const itemData = [item.dataset.color, item.dataset.brand];

            if(itemData.includes(searchPhrase)){
                item.style.display = 'block';
            } 
            else {
                item.style.display = 'none';
            }
        });
    }

    navSubscribeBtn.addEventListener('click', () => {
        searchPhrase = navSearchInput.value;
        console.log(searchPhrase);
        searchProduct(searchPhrase);
    })

    

    // console.log(colorFilterOption);
    // console.log(colorFilterOption[1].value);
    // console.log(colorFilterOption[0].value);
    function colorFilterSelection () {

        colorFilterOption.forEach(input => {
        let filterColor = "";

            input.addEventListener('click', () => {
                filterColor = input.value;
                console.log(filterColor);

                productCard.forEach(item => {
                    const itemColor = item.dataset.color;
                    const allItems = item;
                    
                    if (itemColor === filterColor){
                        item.style.display = 'block';
                    }
                    else {
                        item.style.display = 'none';
                    }

                    if (filterColor === 'all') {
                        item.style.display = 'block';
                    }

                    
                });
            });
        });
    }
    function brandFilterSelection () {

        brandFilterOption.forEach(input => {
        let filterBrand = "";

            input.addEventListener('click', () => {
                filterBrand = input.value;
                console.log(filterBrand);

                productCard.forEach(item => {
                    const itemBrand = item.dataset.brand;
                    
                    if (itemBrand === filterBrand){
                        item.style.display = 'block';
                    }
                    else {
                        item.style.display = 'none';
                    }

                    if (filterBrand === 'all') {
                        item.style.display = 'block';
                    }
                });
            });
        });
    }

    colorFilterSelection();

    brandFilterSelection();

    const heroElement = document.querySelector('.hero');
    // const heroText = document.querySelector('hero-text');

    const images = ['../images/geneva_chain_watch_gold_black_face.png', '../images/gshock.jpg', '../images/invicta.jpg', '../images/CASIO.jpg', '../images/geneva_chain_watch_silver_black_face.png'];
    // const heroTextList = ['Shop affordable & timeless wrist watches from classic brands.', 'Turn Your outfit into a dazzle.', 'Look better with a fancy wrist', 'Ace up your outfit']
    let currentImageIndex = 0;

    setInterval(() => {
        heroElement.style.backgroundImage = `url(${images[currentImageIndex]})`;
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }, 5000);


});





















//   const colorFilters = document.querySelectorAll('.color-filter');
//   const brandFilters = document.querySelectorAll('.brand-filter');
//   const items = document.querySelectorAll('.filter-item');

//   let selectedColor = 'all';
//   let selectedBrand = 'all';

//   // Handle color filter
//   colorFilters.forEach(input => {
//     input.addEventListener('click', () => {
//       selectedColor = input.value;
//       applyCombinedFilter();
//     });
//   });

//   // Handle brand filter
//   brandFilters.forEach(input => {
//     input.addEventListener('click', () => {
//       selectedBrand = input.value;
//       console.log(selectedBrand)
//       applyCombinedFilter();
//     });
//   });

//   function applyCombinedFilter() {
//     items.forEach(item => {
//       const itemColor = item.dataset.color;
//       const itemBrand = item.dataset.brand;

//       const matchColor = selectedColor === 'all' || itemColor === selectedColor;
//       const matchBrand = selectedBrand === 'all' || itemBrand === selectedBrand;

//       if (matchColor && matchBrand) {
//         item.style.display = 'block';
//       } else {
//         item.style.display = 'none';
//       }
//     });
//   }


// applyCombinedFilter();
