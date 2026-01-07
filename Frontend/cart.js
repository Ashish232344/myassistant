// --------------------
// ADD TO CART FUNCTION
// --------------------
function addToCart(name, price){

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    price: price
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart ✅");
}


// --------------------
// SHOW CART PAGE ITEMS
// --------------------
function showCart(){

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let itemsDiv = document.getElementById("cart-items");
  let totalDiv = document.getElementById("total");

  // ✅ Safety check
  if(!itemsDiv || !totalDiv) return;

  itemsDiv.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    itemsDiv.innerHTML += `
      <div class="cart-item">
        <span>${item.name} – ₹${item.price}</span>
        <button onclick="removeItem(${index})">❌</button>
      </div>
    `;
  });

  totalDiv.innerHTML = "Total: ₹" + total;
}


// --------------------
// REMOVE SINGLE ITEM
// --------------------
function removeItem(index){

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  showCart();
}


// --------------------
// CLEAR FULL CART
// --------------------
function clearCart(){

  localStorage.removeItem("cart");

  showCart();
}
