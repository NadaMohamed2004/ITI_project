let cart = [];
let totalPrice = 0;

function addToCart(name, price, button) {
    let quantity = button.previousElementSibling.value;
    quantity = parseInt(quantity);

    if (quantity <= 0) {
        alert("Please enter a valid quantity!");
        return;
    }

    cart.push({ name, price, quantity });
    totalPrice += price * quantity;

    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.innerText = `${item.quantity}x ${item.name} - $${(item.price * item.quantity).toFixed(2)}`;
        cartList.appendChild(li);
    });

    document.getElementById("total-price").innerText = totalPrice.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    
    document.getElementById("checkout-form").classList.remove("hidden");
}

function confirmPurchase() {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let creditCard = document.getElementById("credit-card").value;

    if (!name || !address || !creditCard) {
        alert("Please fill in all details.");
        return;
    }

    alert(`Thank you, ${name}! Your order of $${totalPrice.toFixed(2)} has been placed successfully.`);

    // Reset everything
    cart = [];
    totalPrice = 0;
    updateCart();
    document.getElementById("checkout-form").classList.add("hidden");
}
