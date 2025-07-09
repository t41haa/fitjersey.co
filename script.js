const products = [
  {
    id: 1,
    name: 'Real Madrid Home Jersey',
    price: 999.99,
    description: 'Official Real Madrid Home Jersey for the 24/25 season.',
    image: 'images/rma-home.jpg'
  },
  {
    id: 2,
    name: 'Barcelona Away Jersey',
    price: 1999.99,
    description: 'Official Barcelona Away Jersey for the 24/25 season.',
    image: 'images/barca-away.jpg'
  },
  {
    id: 3,
    name: 'Real Madrid Pink Kit',
    price: 2999.99,
    description: 'Official Real Madrid Pink Kit.',
    image: 'images/rma-pink.jpg'
  },
  {
    id: 4,
    name: 'Classic Jersey',
    price: 1199.99,
    description: 'Premium stitched football jersey.',
    image: 'images/rma-home.jpg'
  },
  {
    id: 5,
    name: 'Classic Jersey',
    price: 1199.99,
    description: 'Premium stitched football jersey.',
    image: 'images/rma-home.jpg'
  },
  {
    id: 6,
    name: 'Classic Jersey',
    price: 1199.99,
    description: 'Premium stitched football jersey.',
    image: 'images/rma-home.jpg'
  },
  {
    id: 7,
    name: 'Classic Jersey',
    price: 1199.99,
    description: 'Premium stitched football jersey.',
    image: 'images/rma-home.jpg'
  },
  {
    id: 8,
    name: 'Classic Jersey',
    price: 1199.99,
    description: 'Premium stitched football jersey.',
    image: 'images/rma-home.jpg'
  },
  {
    id: 9,
    name: 'Classic Jersey',
    price: 1199.99,
    description: 'Premium stitched football jersey.',
    image: 'images/rma-home.jpg'
  },
  {
    id: 10,
    name: 'Classic Jersey',
    price: 1199.99,
    description: 'Premium stitched football jersey.',
    image: 'images/rma-home.jpg'
  },
  {
    id: 11,
    name: 'Classic Jersey',
    price: 1199.99,
    description: 'Premium stitched football jersey.',
    image: 'images/rma-home.jpg'
  },
  {
    id: 12,
    name: 'Classic Jersey',
    price: 1199.99,
    description: 'Premium stitched football jersey.',
    image: 'images/rma-home.jpg'
  },
  {
    id: 13,
    name: 'Classic Jersey',
    price: 1199.99,
    description: 'Premium stitched football jersey.',
    image: 'images/rma-home.jpg'
  },
  {
    id: 14,
    name: 'Classic Jersey',
    price: 1199.99,
    description: 'Premium stitched football jersey.',
    image: 'images/rma-home.jpg'
  },
  {
    id: 15,
    name: 'Classic Jersey',
    price: 1199.99,
    description: 'Premium stitched football jersey.',
    image: 'images/rma-home.jpg'
  },
  {
    id: 16,
    name: 'Classic Jersey',
    price: 1199.99,
    description: 'Premium stitched football jersey.',
    image: 'images/rma-home.jpg'
  },
  {
    id: 17,
    name: 'Classic Jersey',
    price: 1199.99,
    description: 'Premium stitched football jersey.',
    image: 'images/rma-home.jpg'
  },
  {
    id: 18,
    name: 'Classic Jersey',
    price: 1199.99,
    description: 'Premium stitched football jersey.',
    image: 'images/rma-home.jpg'
  },
  {
    id: 19,
    name: 'Classic Jersey',
    price: 1199.99,
    description: 'Premium stitched football jersey.',
    image: 'images/rma-home.jpg'
  },
  {
    id: 20,
    name: 'Classic Jersey',
    price: 1199.99,
    description: 'Premium stitched football jersey.',
    image: 'images/rma-home.jpg'
  }
];
// Function to render product list
function renderProductList() {
  const productListContainer = document.getElementById('product-list');

  // Clear any existing items
  productListContainer.innerHTML = '';

  // Loop through and add each product card
  products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');

    productItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <h3>${product.name}</h3>
      <p><strong>Price:</strong> ₹${product.price.toFixed(2)}</p>
      <p>${product.description}</p>
      <a href="product.html?id=${product.id}" class="view-details">View Details</a>
    `;

    productListContainer.appendChild(productItem);
  });
}

// Render on page load
renderProductList();
