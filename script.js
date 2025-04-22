let cart = [];  // To store the products added to the cart

// Static product data (no fetch needed)
const products = [
  {
    id: 1,
    name: 'REAL MADRID HOME 24/25',
    price: 999,
    image: 'images/rma-home.jpg'
  },
  {
    id: 2,
    name: 'BARCELONA AWAY 24/25',
    price: 1999,
    image: 'images/barca-away.jpg'
  },
  {
    id: 3,
    name: 'RMA PINK KIT',
    price: 2999,
    image: 'images/rma-pink.jpg'
  }
];

// Render products
const productList = document.getElementById('product-list');

products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';

  // Create the product card HTML
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>₹${product.price.toFixed(2)}</p>
    <button class="add-to-cart" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
  `;

  // Append card to the product list
  productList.appendChild(card);

  // Handle Add to Cart button click
  card.querySelector('.add-to-cart').addEventListener('click', function () {
    const productToAdd = {
      name: this.dataset.name,
      price: parseFloat(this.dataset.price)
    };
    cart.push(productToAdd);

    // Update the cart count
    document.getElementById('cart-count').innerText = cart.length;
  });
});
