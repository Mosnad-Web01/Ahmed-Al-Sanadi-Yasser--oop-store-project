"use strict";

class App {
    static async run() {
        Loader.show(); // Show loader while fetching products
        const products = await APIService.fetchProducts();
        Loader.hide(); // Hide loader once products are fetched
        HomePage.renderProducts(products);
    }
}

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
        try {
            const url = APIService._constructUrl("products");
            const res = await fetch(url);
            if (!res.ok) throw new Error("Failed to fetch products");
            const data = await res.json();
            return data.map((product) => new Product(product));
        } catch (error) {
            console.error("Error fetching products:", error);
            Loader.hide();
            HomePage.renderError("Failed to load products. Please try again later.");
        }
    }

    static async fetchProduct(productId) {
        try {
            const url = APIService._constructUrl(`products/${productId}`);
            const res = await fetch(url);
            if (!res.ok) throw new Error("Failed to fetch product details");
            const data = await res.json();
            return new Product(data);
        } catch (error) {
            console.error("Error fetching product:", error);
            Loader.hide();
            ProductPage.renderError("Failed to load product details. Please try again later.");
        }
    }

    static _constructUrl(path) {
        return `${APIService.STORE_BASE_URL}/${path}`;
    }
}

class HomePage {
    static container = document.querySelector("body");

    static renderProducts(products) {
        this.container.innerHTML = ""; // Clear existing content
        this.container.classList.add("bg-gray-100", "dark:bg-gray-800");

        const navBar = this.createNavBar();
        this.container.appendChild(navBar);

        const gridDiv = this.createGridDiv();

        products.forEach((product) => {
            const productCard = this.createProductCard(product);
            gridDiv.appendChild(productCard);
        });

        this.container.appendChild(gridDiv);

        // Update cart count on initial load
        this.updateCartCount();
    }

    static createNavBar() {
        const nav = document.createElement("nav");
        nav.classList.add(
            "flex",
            "items-center",
            "justify-between",
            "py-4",
            "px-7",
            "bg-white",
            "dark:bg-gray-900",
            "shadow-md",
            "fixed",
            "w-full",
            "z-10"
        );

        nav.innerHTML = `
            <div class="flex items-center gap-8">
                <a href="index.html" class="text-xl font-semibold text-gray-800 dark:text-white hover:text-blue-500">
                    <img class="h-10" src="../assets/logo.png" id="logo" alt="Store logo"/>
                </a>
                <ul class="hidden md:flex items-center gap-6">
                    <li><a href="index.html" class="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Home</a></li>
                    <li><a href="about.html" class="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">About</a></li>
                    <li>
                        <select id="category-filter" class="bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none">
                            <option value="all">All Categories</option>
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
                    <svg class="w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13.5"></path>
                    </svg>
                    <span id="cart-count" class="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
                </a>
            </div>
            <div class="md:hidden">
                <button id="menu-toggle" class="text-gray-500 dark:text-gray-300 focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <div id="mobile-menu" class="hidden md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg">
                <ul class="flex flex-col items-center p-4">
                    <li class="w-full mb-2"><a href="#" class="block w-full text-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Home</a></li>
                    <li class="w-full mb-2"><a href="about.html" class="block w-full text-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">About</a></li>
                    <li class="w-full">
                        <select id="mobile-category-filter" class="bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded-md w-full focus:outline-none">
                            <option value="all">All Categories</option>
                            <option value="electronics">Electronics</option>
                            <option value="jewelery">Jewelery</option>
                            <option value="men's clothing">Men's Clothing</option>
                            <option value="women's clothing">Women's Clothing</option>
                        </select>
                    </li>
                </ul>
            </div>
        `;

        // Theme toggle functionality
        const themeToggle = nav.querySelector("#theme-toggle");
        const themeIcon = nav.querySelector("#theme-icon");
        const logo = nav.querySelector("#logo");

        // Load theme from local storage
        const darkMode = localStorage.getItem("darkMode") === "true";
        if (darkMode) {
            document.documentElement.classList.add("dark");
            themeIcon.textContent = '🌜';
            logo.src = "../assets/logo.png";
        } else {
            document.documentElement.classList.remove("dark");
            themeIcon.textContent = '🌞';
            logo.src = "../assets/logo-dark.png";
        }

        themeToggle.addEventListener("click", () => {
            this.toggleTheme();
            const isDarkMode = document.documentElement.classList.contains("dark");
            themeIcon.textContent = isDarkMode ? '🌜' : '🌞';
            logo.src = isDarkMode ? "../assets/logo.png" : "../assets/logo-dark.png";
        });

        // Mobile menu toggle functionality
        const menuToggle = nav.querySelector("#menu-toggle");
        const mobileMenu = nav.querySelector("#mobile-menu");

        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });

        // Category filter functionality
        const categoryFilter = nav.querySelector("#category-filter");
        const mobileCategoryFilter = nav.querySelector("#mobile-category-filter");

        categoryFilter.addEventListener("change", (e) => {
            this.filterProducts(e.target.value);
        });

        mobileCategoryFilter.addEventListener("change", (e) => {
            this.filterProducts(e.target.value);
            mobileMenu.classList.add("hidden"); // Close mobile menu after selection
        });

        return nav;
    }

    static toggleTheme() {
        const html = document.documentElement;
        const isDarkMode = html.classList.toggle("dark");
        localStorage.setItem("darkMode", isDarkMode);
    }

    static createGridDiv() {
        const gridDiv = document.createElement("div");
        gridDiv.id = "product-grid";
        gridDiv.classList.add(
            "container",
            "mx-auto",
            "px-4",
            "pt-24", // To offset fixed navbar
            "grid",
            "grid-cols-1",
            "sm:grid-cols-2",
            "md:grid-cols-3",
            "lg:grid-cols-4",
            "gap-6",
            "pb-10"
        );
        return gridDiv;
    }

    static createProductCard(product) {
        const productCard = document.createElement("div");
        productCard.classList.add(
            "bg-white",
            "dark:bg-gray-800",
            "border",
            "border-gray-200",
            "dark:border-gray-700",
            "rounded-lg",
            "shadow-md",
            "overflow-hidden",
            "flex",
            "flex-col",
            "justify-between",
            "transition-transform",
            "duration-300",
            "hover:scale-105"
        );

        productCard.innerHTML = `

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

        // View Details Event
        productCard.addEventListener("click", (e) => {
            if (!e.target.classList.contains("add-to-cart-btn")) {
                ProductPage.renderProduct(product);
            }
        });

        // Add to Cart Event
        const addToCartBtn = productCard.querySelector(".add-to-cart-btn");
        addToCartBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            this.addToCart(product);
        });

        return productCard;
    }

    static addToCart(product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProductIndex = cart.findIndex((item) => item.id === product.id);
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        this.updateCartCount();
        this.showToast(`${product.title} added to cart!`);
    }

    static updateCartCount() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
        const cartCountElement = document.getElementById("cart-count");
        cartCountElement.textContent = cartCount;
    }

    static filterProducts(category) {
        const allProducts = document.querySelectorAll("#product-grid > div");
        allProducts.forEach((productCard) => {
            const productCategory = productCard.querySelector("p.capitalize").textContent.toLowerCase();
            if (category === "all" || productCategory === category.toLowerCase()) {
                productCard.classList.remove("hidden");
            } else {
                productCard.classList.add("hidden");
            }
        });
    }

    static showToast(message) {
        const toast = document.createElement("div");
        toast.classList.add(
            "fixed",
            "bottom-5",
            "right-5",
            "bg-green-500",
            "text-white",
            "py-2",
            "px-4",
            "rounded",
            "shadow-lg",
            "z-50",
            "animate-slide-in"
        );
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add("animate-slide-out");
            toast.addEventListener("animationend", () => {
                toast.remove();
            });
        }, 3000);
    }

    static renderError(message) {
        this.container.innerHTML = `
            <div class="flex items-center justify-center h-screen">
                <div class="text-center">
                    <h1 class="text-3xl font-bold mb-4 text-red-600">Error</h1>
                    <p class="text-lg text-gray-700">${message}</p>
                </div>
            </div>
        `;
    }
}

class ProductPage {
    static container = document.querySelector("body");

    static renderProduct(product) {
        this.container.innerHTML = ""; // Clear existing content

        const navBar = HomePage.createNavBar();
        this.container.appendChild(navBar);

        const productDetail = document.createElement("div");
        productDetail.classList.add(
            "container",
            "mx-auto",
            "px-4",
            "pt-24", // To offset fixed navbar
            "pb-10",
            "flex",
            "flex-col",
            "md:flex-row",
            "gap-10"
        );

        productDetail.innerHTML = `
            <div class="md:w-1/2 flex justify-center">
                <img
                    class="w-full h-auto object-contain"
                    src="${product.image}"
                    alt="${product.title}"
                />
            </div>
            <div class="md:w-1/2">
                <h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">${product.title}</h1>
                <p class="text-xl text-gray-600 dark:text-gray-300 mb-4 capitalize">${product.category}</p>
                <div class="flex items-center mb-4">
                    <span class="text-yellow-500 text-xl mr-2">★ ${product.rating}</span>
                    <span class="text-gray-600 dark:text-gray-300">(${product.count} reviews)</span>
                </div>
                <p class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">$${product.price}</p>
                <p class="text-gray-700 dark:text-gray-300 mb-6">${product.description}</p>
                <button class="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md add-to-cart-btn">
                    Add to Cart
                </button>
            </div>
        `;

        // Add to Cart Event
        const addToCartBtn = productDetail.querySelector(".add-to-cart-btn");
        addToCartBtn.addEventListener("click", () => {
            HomePage.addToCart(product);
        });

        this.container.appendChild(productDetail);

        // Update cart count on initial load
        HomePage.updateCartCount();
    }

    static renderError(message) {
        this.container.innerHTML = `
            <div class="flex items-center justify-center h-screen">
                <div class="text-center">
                    <h1 class="text-3xl font-bold mb-4 text-red-600">Error</h1>
                    <p class="text-lg text-gray-700">${message}</p>
                </div>
            </div>
        `;
    }
}

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

document.addEventListener("DOMContentLoaded", () => {
    App.run();
});
