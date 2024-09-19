"use strict";

class App {
    static async run() {
<<<<<<< HEAD
        
        Loader.show(); // Show loader while fetching products  : By Ahmed
        const products = await APIService.fetchProducts();
        Loader.hide(); // Hide loader once products are fetched : By Ahmed

=======
        Loader.show(); // Show loader while fetching products
        const products = await APIService.fetchProducts();
        Loader.hide(); // Hide loader once products are fetched
>>>>>>> a9a5049999fe9b3a8ac7dd98c749063cc0ad1d25
        HomePage.renderProducts(products);
    }
}

<<<<<<< HEAD

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
=======
>>>>>>> a9a5049999fe9b3a8ac7dd98c749063cc0ad1d25
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
<<<<<<< HEAD
    `;
=======
        `;
>>>>>>> a9a5049999fe9b3a8ac7dd98c749063cc0ad1d25
        this.container.appendChild(loaderDiv);
    }

    static hide() {
        const loaderDiv = document.getElementById("loader");
        if (loaderDiv) {
            loaderDiv.remove();
        }
    }
}

<<<<<<< HEAD


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
=======
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

>>>>>>> a9a5049999fe9b3a8ac7dd98c749063cc0ad1d25
    static _constructUrl(path) {
        return `${APIService.STORE_BASE_URL}/${path}`;
    }
}

<<<<<<< HEAD
/* --Modified By Ahmed ------------*/
=======
>>>>>>> a9a5049999fe9b3a8ac7dd98c749063cc0ad1d25
class HomePage {
    static container = document.querySelector("body");

    static renderProducts(products) {
<<<<<<< HEAD


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
=======
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
>>>>>>> a9a5049999fe9b3a8ac7dd98c749063cc0ad1d25
    }

    static createGridDiv() {
        const gridDiv = document.createElement("div");
<<<<<<< HEAD
        gridDiv.classList.add(
            "container", "mx-auto", "px-4", "grid",
            "grid-cols-1", "sm:grid-cols-2",
            "md:grid-cols-3", "lg:grid-cols-3",
            "gap-6", "mt-5"
=======
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
>>>>>>> a9a5049999fe9b3a8ac7dd98c749063cc0ad1d25
        );
        return gridDiv;
    }

    static createProductCard(product) {
<<<<<<< HEAD
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
=======
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
            // Adjust the selector to match the element holding the category
            const productCategory = productCard.querySelector("p.text-gray-500").textContent.toLowerCase();
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
>>>>>>> a9a5049999fe9b3a8ac7dd98c749063cc0ad1d25
    }
}

class ProductPage {
    static container = document.querySelector("body");
<<<<<<< HEAD
    static renderProduct(product) {
        ProductPage.container.innerHTML = `
      <div>
        ${product.title}
      </div>`;
    }
}

/*--- Modified by Ahmed  to add price, category, rating count ---*/
=======

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
        <div class="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-2xl transform transition-all duration-500 ease-in-out">
            <!-- Image and Details Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <!-- Image Section -->
                <div class="relative flex justify-center items-center">
                    <img 
                        style="max-height: 400px;"
                        class="object-contain transition-transform duration-300 hover:scale-105"
                        src="${product.image}" 
                        alt="${product.title}"
                    />
                    <!-- Sale Badge -->
                
                </div>
                <!-- Details Section -->
                <div class="flex flex-col justify-between">
                    <!-- Product Title -->
                    <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white mb-4 transition-colors duration-300 ease-in-out">
                        ${product.title}
                    </h1>
                    <!-- Product Category -->
                    <p class="text-lg text-gray-700 dark:text-gray-400 mb-4 capitalize transition-colors duration-300 ease-in-out">
                        Category: ${product.category}
                    </p>
                    <!-- Rating and Reviews -->
                    <div class="flex items-center mb-4">
                        <span class="flex items-center text-yellow-500 text-2xl mr-2">★ ${product.rating}</span>
                        <span class="text-gray-600 dark:text-gray-400 transition-colors duration-300 ease-in-out">
                            (${product.count} reviews)
                        </span>
                    </div>
                    <!-- Price with Discount -->
                    <div class="flex items-center mb-4">
                        <p class="text-2xl font-bold text-blue-600 dark:text-blue-400 mr-4 transition-colors duration-300 ease-in-out">
                            $${product.price}
                        </p>
                        <p class="text-lg text-gray-500 line-through dark:text-gray-600 transition-colors duration-300 ease-in-out">
                            $${(product.price * 1.2).toFixed(2)} 
                        </p>
                    </div>
                    <!-- Product Description -->
                    <p class="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300 ease-in-out">
                        ${product.description}
                    </p>
                    <!-- Add to Cart and Wishlist Buttons -->
                    <div class="grid grid-cols-2 gap-4">
                        <button class="bg-gradient-to-r add-to-cart-btn from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-6 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300 ease-in-out transform hover:scale-105">
                            Add to Cart
                        </button>
                        
                    </div>
                </div>
            </div>
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


>>>>>>> a9a5049999fe9b3a8ac7dd98c749063cc0ad1d25
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

<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", App.run);
=======
document.addEventListener("DOMContentLoaded", () => {
    App.run();
});


>>>>>>> a9a5049999fe9b3a8ac7dd98c749063cc0ad1d25
