"use strict";

class Cart {
    static container = document.getElementById("cart-table");
    static totalPriceElement = document.getElementById("total-price");

    static displayCartItems() {
        const cart = JSON.parse(localStorage.getItem('cart')) || {};
        let totalPrice = 0;

        this.container.innerHTML = ''; // Clear previous items

        // Create table structure
        const table = document.createElement("table");
        table.classList.add("min-w-full", "bg-white", "border", "border-gray-300", "rounded-lg", "overflow-hidden");

        // Create table header
        const header = document.createElement("thead");
        header.innerHTML = `
            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-6 text-left">Product</th>
                <th class="py-3 px-6 text-left">Price</th>
                <th class="py-3 px-6 text-left">Quantity</th>
                <th class="py-3 px-6 text-left">Total</th>
                <th class="py-3 px-6 text-left">Action</th>
            </tr>
        `;
        table.appendChild(header);

        // Create table body
        const body = document.createElement("tbody");
        for (const itemId in cart) {
            const item = cart[itemId];
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;

            const row = document.createElement("tr");
            row.classList.add("border-b", "border-gray-300", "hover:bg-gray-100");

            row.innerHTML = `
                <td class="py-3 px-6 flex items-center">
                    <img src="${item.image}" alt="${item.title}" class="w-16 h-16 object-cover rounded mr-4">
                    <span>${item.title}</span>
                </td>
                <td class="py-3 px-6">$${item.price.toFixed(2)}</td>
                <td class="py-3 px-6">
                    <div class="flex items-center">
                        <button class="border border-gray-300 px-2 py-1 rounded-l hover:bg-gray-200" onclick="Cart.changeQuantity('${itemId}', -1)">-</button>
                        <span class="px-3">${item.quantity}</span>
                        <button class="border border-gray-300 px-2 py-1 rounded-r hover:bg-gray-200" onclick="Cart.changeQuantity('${itemId}', 1)">+</button>
                    </div>
                </td>
                <td class="py-3 px-6">$${itemTotal.toFixed(2)}</td>
                <td class="py-3 px-6">
                    <button class="bg-red-500 text-white font-semibold py-1 px-3 rounded" onclick="Cart.removeItem('${itemId}')">Remove</button>
                </td>
            `;

            body.appendChild(row);
        }
        table.appendChild(body);
        this.container.appendChild(table);
        this.totalPriceElement.innerText = `Total: $${totalPrice.toFixed(2)}`;
    }

    static changeQuantity(itemId, change) {
        const cart = JSON.parse(localStorage.getItem('cart')) || {};
        if (cart[itemId]) {
            cart[itemId].quantity += change;
            if (cart[itemId].quantity <= 0) {
                delete cart[itemId]; // Remove item if quantity is 0
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            this.displayCartItems(); // Refresh the cart display
        }
    }

    static removeItem(itemId) {
        const cart = JSON.parse(localStorage.getItem('cart')) || {};
        delete cart[itemId];
        localStorage.setItem('cart', JSON.stringify(cart));
        this.displayCartItems(); // Refresh the cart display
    }
}

document.addEventListener("DOMContentLoaded", () => {
    Cart.displayCartItems();
});