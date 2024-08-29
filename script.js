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
        this.container.classList.add("bg-gray-100", "p-6");

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
            "flex", "flex-col", "justify-between", "h-full"
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
        buttonDiv.innerHTML = `
            <a href="cart.html" class="bg-blue-500 text-white py-2 px-4 rounded">View Cart</a>
        `;
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
