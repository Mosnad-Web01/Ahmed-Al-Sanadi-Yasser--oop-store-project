"use strict";

class App {
    static async run() {
        Loader.show(); // Show loader while fetching products  : By Ahmed
        const products = await APIService.fetchProducts();
        Loader.hide(); // Hide loader once products are fetched : By Ahmed
        HomePage.renderProducts(products);
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
        this.container.classList.add("bg-gray-100","dark:bg-gray-600");

        const NavBar = this.CreateNavBar();
        this.container.appendChild(NavBar);

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
            "container", "mx-auto", "px-4", "grid", "sm:grid-cols-1",
            "md:grid-cols-2", "lg:grid-cols-4",
            "gap-6", "mt-5"
        );
        return gridDiv;
    }

    static createProductCard(product) {
        const productDiv = document.createElement("div");
        productDiv.classList.add(
            "bg-white", "dark:bg-gray-200",
            "border", "border-gray-200", "dark:border-gray-700",
            "rounded-lg",
            "shadow-md", "hover:shadow-lg",
            "overflow-hidden", "transform", "transition-transform", "duration-300",
            "hover:scale-105",
            "flex", "flex-col", "justify-between", "h-full"
        );



        productDiv.innerHTML = this.getProductHTML(product);
        this.addProductEventListeners(productDiv, product);

        return productDiv;
    }

    static getProductHTML(product) {
        return `
        <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg overflow-hidden transform transition-transform duration-300  flex flex-col justify-between h-full">
            <div class="relative p-4 rounded-t-lg bg-white">
                <img 
                    class="w-full p-3 object-cover rounded-lg mx-auto transform transition-transform duration-300shadow-md " 
                    src="${product.image}" alt="${product.title} poster" 
                    style="height: 270px; object-fit: contain; max-width: 272px;">
                <div class="absolute top-2 left-2 bg-yellow-400 text-yellow-800 text-xs font-bold rounded-full px-2 py-1 shadow-md">
                    New
                </div>
            </div>
            <div class="flex-grow bg-white dark:bg-gray-800 bg-opacity-80 px-4 py-4 flex flex-col justify-between">
                <div>
                    <h3 class="text-lg font-semibold mb-1 text-blue-700 dark:text-white">${product.title}</h3>
                    <p class="text-gray-500 dark:text-gray-400 italic">${product.category}</p>
                    <p class="text-gray-600 dark:text-gray-300">${product.rating} / 5 (${product.count})</p>
                </div>
                <p class="text-2xl font-extrabold text-blue-800 dark:text-blue-400 mt-1">$ ${product.price}</p>
            </div>
            <div class="flex items-center justify-center mt-3">
                <button class="min-w-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white text-lg font-semibold py-3 px-4 rounded-b-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-800 add-to-cart-btn" data-id="${product.id}">
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

    static CreateNavBar() {
        const Nav = document.createElement("nav");
        Nav.classList.add("flex", "items-center", "justify-between", "py-4", "px-7", "bg-white" ,"dark:bg-gray-900", "shadow-md");
     
    
        // Initial logo setup

        Nav.innerHTML = `
            <div class="flex items-center gap-8">
                <a href="index.html" class="text-xl font-semibold text-gray-800 dark:text-white hover:text-blue-500">
                  <img class="h-10" src="../assets/logo.png" id="logo"  alt="Store logo"/>
                </a>
                <ul class="hidden md:flex items-center gap-6">
                    <li><a href="index.html" class="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Home</a></li>
                    <li><a href="About.html" class="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">About</a></li>
                    <li>
                        <select class="bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none">
                            <option value="electronics">Electronics</option>
                            <option value="jewelery">Jewelery</option>
                            <option value="men's clothing">Men's Clothing</option>
                            <option value="women's clothing">Women's Clothing</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div class="flex items-center gap-4">
                <button id="theme-toggle" class="text-2xl focus:outline-none">
                    <span id="theme-icon" class="transition-transform duration-300 ease-in-out">🌞</span>
                </button>
    
                <a href="cart.html" class="relative">
                    <svg class="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 6.2a1 1 0 00.4.8c.3.2.7.2 1 .2h10a1 1 0 00.8-.4l3-3H6M7 13l1.5-7M5.4 5H19m-6 8a2 2 0 100 4 2 2 0 000-4z"></path>
                    </svg>
                    <span id="cart-count" class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
                </a>
            </div>
            <div class="md:hidden">
                <button id="menu-toggle" class="text-gray-500 dark:text-gray-300 focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            <div id="mobile-menu" class="hidden md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg">
                <ul class="flex flex-col items-center p-4">
                    <li class="w-full mb-2"><a href="index.html" class="block w-full text-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Home</a></li>
                    <li class="w-full mb-2"><a href="About.html" class="block w-full text-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">About</a></li>
                    <li class="w-full">
                        <select class="bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded-md w-full focus:outline-none">
                            <option value="electronics">Electronics</option>
                            <option value="jewelery">Jewelery</option>
                            <option value="men's clothing">Men's Clothing</option>
                            <option value="women's clothing">Women's Clothing</option>
                        </select>
                    </li>
                </ul>
            </div>
        `;
    

          // Initialize the theme toggle icon based on the local storage setting
        const themeToggle = Nav.querySelector("#theme-toggle");
        const themeIcon = Nav.querySelector("#theme-icon");
    
        // Load theme from local storage
        const darkMode = localStorage.getItem("darkMode") === "true";
        if (darkMode) {
            document.documentElement.classList.add("dark");
            themeIcon.textContent = '🌜';
        } else {
            document.documentElement.classList.remove("dark");
            themeIcon.textContent = '🌞';
        }
    
        // Theme toggle functionality
        themeToggle.addEventListener("click", () => {
            this.toggleTheme();
            // Update icon based on the theme
            const isDarkMode = document.documentElement.classList.contains("dark");
            themeIcon.textContent = isDarkMode ? '🌜' : '🌞';
            // Update the logo based on the theme
            const logo = Nav.querySelector("#logo");
            logo.src = isDarkMode ? "../assets/logo.png" : "../assets/logo-dark.png";
        });
    
        // Mobile menu toggle functionality
        const menuToggle = Nav.querySelector("#menu-toggle");
        const mobileMenu = Nav.querySelector("#mobile-menu");
    
        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    
        return Nav;
    }

    static toggleTheme() {
        const html = document.documentElement;
        const isDarkMode = html.classList.toggle("dark");
        // Save the theme preference to local storage
        localStorage.setItem("darkMode", isDarkMode);
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
