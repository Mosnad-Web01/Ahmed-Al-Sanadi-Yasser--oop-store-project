"use strict";

class App {
    static async run() {
        
        Loader.show(); // Show loader while fetching products  : By Ahmed
        const products = await APIService.fetchProducts();
        Loader.hide(); // Hide loader once products are fetched : By Ahmed

        HomePage.renderProducts(products);
    }
}


const addNav = () => {
    return `
        <nav class="bg-gray-300 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
                <div class="flex items-center">
                    <button onclick="toggleTheme()" id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                       Dark
                    </button>
                    <a href="cart.html" class="ml-4 relative text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 p-2.5 rounded-lg">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.344 2.938A3 3 0 007.336 8H19a1 1 0 010 2H7.5a1 1 0 01-.945-.676L5.7 5H4.5a1 1 0 01-.992-.883L3.344 3H3zm2 4.5H5v2h.5a1 1 0 010 2H5v2h.5a1 1 0 010 2H5v2h.5a1 1 0 010 2H5v1a1 1 0 001 1h12a1 1 0 001-1v-1h-1a1 1 0 110-2h.5v-2H19a1 1 0 110-2h.5v-2H19a1 1 0 110-2h.5v-2H19a1 1 0 110-2h.5v-2H19a1 1 0 110-2H18V6.5h-.5v-2H18V4h-.5v-1a1 1 0 00-1-1h-3.5a1 1 0 01-.992-.883L12.342 1H11.5a1 1 0 00-.992.883L10.344 3H10l.034 1.451a1 1 0 00-.42.865v.134a1 1 0 00.944.884H5.734a1 1 0 00-.944-.884L4.824 4.317 5 5.5v2zm6.793 10.795a1 1 0 01-.293.707l-1.292 1.292a1 1 0 01-1.414 0l-1.292-1.292a1 1 0 010-1.414l1.292-1.292a1 1 0 011.414 0l1.292 1.292a1 1 0 01.293.707zm0-10.79a1 1 0 01.293.707v1.586a1 1 0 01-.293.707l-1.292 1.292a1 1 0 01-1.414 0l-1.292-1.292a1 1 0 010-1.414l1.292-1.292a1 1 0 011.414 0zm4.207 10.79a1 1 0 01-.293.707l-1.292 1.292a1 1 0 01-1.414 0l-1.292-1.292a1 1 0 010-1.414l1.292-1.292a1 1 0 011.414 0l1.292 1.292a1 1 0 01.293.707zm0-10.79a1 1 0 01.293.707v1.586a1 1 0 01-.293.707l-1.292 1.292a1 1 0 01-1.414 0l-1.292-1.292a1 1 0 010-1.414l1.292-1.292a1 1 0 011.414 0z"></path>
                        </svg>
                        <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">3</span>
                    </a>
                </div>
                <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="index.html" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
                        </li>
                        <li>
                            <a href="about.html" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                        </li>
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Dropdown
                                <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
}

const toggleTheme = () => {
        
}

if (window.location.pathname.includes("about.html")) {
    console.log("You are on the About page.");

    // Example: Add navigation bar to the About page
    let nav = document.getElementById("nav");
    if (nav) {
        const navbar = document.createElement("div");
        navbar.innerHTML = addNav();
        nav.appendChild(navbar);
    }
}


/* Created By Ahmed ------------*/
class Loader {
    static container = document.querySelector("body");

    static show() {
        const loaderDiv = document.createElement("div");
        loaderDiv.id = "loader";
        loaderDiv.classList.add(
            "fixed",
            "inset-0",
            "flex",
            "items-center",
            "justify-center",
            "bg-white",
            "z-50"
        );
        loaderDiv.innerHTML = `
            <svg class="animate-spin h-20 w-20 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291l1.412-1.411A5.985 5.985 0 016 12H2c0 1.788.676 3.427 1.792 4.708l1.206 1.206z"></path>
            </svg>
    `;
        this.container.appendChild(loaderDiv);
    }

    static hide() {
        const loaderDiv = document.getElementById("loader");
        if (loaderDiv) {
            loaderDiv.remove();
        }
    }
}



class APIService {
    static STORE_BASE_URL = "https://fakestoreapi.com";
    static async fetchProducts() {
        const url = APIService._constructUrl("products");
        const res = await fetch(url);
        const data = await res.json();
        return data.map((product) => new Product(product));
    }
    static async fetchProduct(productId) {
        const url = APIService._constructUrl(`products/${productId}`);
        const res = await fetch(url);
        const data = await res.json();
        return new Product(data);
    }
    static _constructUrl(path) {
        return `${APIService.STORE_BASE_URL}/${path}`;
    }
}

/* --Modified By Ahmed ------------*/
class HomePage {
    static container = document.querySelector("body");

    static renderProducts(products) {


        const navbar = document.createElement("div");
        navbar.innerHTML = addNav();
        this.container.appendChild(navbar);


        this.container.classList.add("bg-gray-100");

        // Add the "View Cart" button at the top
        const viewCartButton = this.createViewCartButton();
        this.container.appendChild(viewCartButton);

        const gridDiv = this.createGridDiv();

        products.forEach(product => {
            const productDiv = this.createProductCard(product);
            gridDiv.appendChild(productDiv);
        });

        this.container.appendChild(gridDiv);
    }

    static createGridDiv() {
        const gridDiv = document.createElement("div");
        gridDiv.classList.add(
            "container", "mx-auto", "px-4", "grid",
            "grid-cols-1", "sm:grid-cols-2",
            "md:grid-cols-3", "lg:grid-cols-3",
            "gap-6", "mt-5"
        );
        return gridDiv;
    }

    static createProductCard(product) {
        const productDiv = document.createElement("div");
        productDiv.classList.add(
            "bg-gradient-to-br", "from-blue-50", "to-blue-100",
            "border-2", "border-blue-200", "rounded-xl",
            "shadow-lg", "overflow-hidden", "transition-all",
            "duration-400", "hover:shadow-2xl", "hover:scale-105",
            "flex", "flex-col", "justify-between", "h-full", "bg-red-500"
        );

        productDiv.innerHTML = this.getProductHTML(product);
        this.addProductEventListeners(productDiv, product);

        return productDiv;
    }

    static getProductHTML(product) {
        return `
            <div class="grid grid-cols-1 gap-4 h-full">
                <div class="relative p-4 rounded-lg bg-gradient-to-b from-gray-100 to-gray-200">
                    <img 
                        class="w-full p-3 object-cover rounded-lg mx-auto transform transition-transform duration-300 hover:scale-110 shadow-md border border-blue-300" 
                        src="${product.image}" alt="${product.title} poster" 
                        style="height: 270px; object-fit: contain; max-width: 272px;">
                    <div class="absolute top-2 left-2 bg-yellow-400 text-yellow-800 text-xs font-bold rounded-full px-2 py-1 shadow-md">
                        New
                    </div>
                </div>
                <div class="flex-grow bg-white bg-opacity-80 px-4 py-4 flex flex-col justify-between rounded-lg">
                    <div>
                        <h3 class="text-lg font-semibold mb-1 text-blue-700">${product.title}</h3>
                        <p class="text-gray-500 italic">${product.category}</p>
                        <p class="text-gray-600">${product.rating} / 5 (${product.count})</p>
                    </div>
                    <p class="text-2xl font-extrabold text-blue-800 mt-1">$ ${product.price}</p>
                </div>
                <div class="flex items-center justify-center mt-3">
                    <button class="min-w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-semibold py-3 px-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-700 add-to-cart-btn" data-id="${product.id}">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
    }

    static addProductEventListeners(productDiv, product) {
        productDiv.addEventListener("click", () => {
            Products.run(product);
        });

        const addToCartButton = productDiv.querySelector(".add-to-cart-btn");
        addToCartButton.addEventListener("click", (e) => {
            e.stopPropagation(); // prevents triggering product details
            this.addToCart(product);
        });
    }

    static createViewCartButton() {
        const buttonDiv = document.createElement("div");
        buttonDiv.classList.add("flex", "justify-center", "mb-4");
        // buttonDiv.innerHTML = `
        //     <a href="cart.html" class="bg-blue-500 text-white py-2 px-4 rounded">View Cart</a>
        // `;
        return buttonDiv;
    }

    static addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || {};

        if (cart[product.id]) {
            cart[product.id].quantity += 1; // Increase quantity if already in cart
        } else {
            cart[product.id] = {
                ...product,
                quantity: 1 // Add new product with quantity 1
            };
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.title} added to cart!`);
    }
}
class Products {
    static async run(product) {
        const productDetails = await APIService.fetchProduct(product.id);
        ProductPage.renderProduct(productDetails);
    }
}

class ProductPage {
    static container = document.querySelector("body");
    static renderProduct(product) {
        ProductPage.container.innerHTML = `
      <div>
        ${product.title}
      </div>`;
    }
}

/*--- Modified by Ahmed  to add price, category, rating count ---*/
class Product {
    constructor(json) {
        this.id = json.id;
        this.title = json.title;
        this.image = json.image;
        this.price = json.price;
        this.category = json.category;
        this.description = json.description;
        this.rating = json.rating.rate;
        this.count = json.rating.count;
    }
}

document.addEventListener("DOMContentLoaded", App.run);
