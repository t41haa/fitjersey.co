// === PRODUCTS ===
const products = [
  {
    id: 1,
    name: 'Real Madrid Home Jersey',
    price: 999.99,
    originalPrice: 1999.99,
    rating: 4.8,
    reviews: 341,
    tags: ['🔥 BestSeller'],
    description: 'Official Real Madrid Home Jersey for the 24/25 season.',
    image: 'images/rma-home.jpg'
  },
  {
    id: 2,
    name: 'Barcelona Away Jersey',
    price: 1499.99,
    originalPrice: 1999.99,
    rating: 4.5,
    reviews: 272,
    tags: ['Recommended'],
    description: 'Official Barcelona Away Jersey for the 24/25 season.',
    image: 'images/barca-away.jpg'
  },
  {
    id: 3,
    name: 'Real Madrid Pink Kit',
    price: 1199.99,
    originalPrice: 1799.99,
    rating: 4.6,
    reviews: 312,
    tags: ['🔥 BestSeller'],
    description: 'Official Real Madrid Pink Kit.',
    image: 'images/rma-pink.jpg'
  },
  {
    id: 4,
    name: 'Arsenal Away 24/25',
    price: 1099.99,
    originalPrice: 1599.99,
    rating: 4.3,
    reviews: 190,
    tags: ['Recommended'],
    description: 'Premium stitched football jersey.',
    image: 'images/arsenal.webp'
  },
  ...Array.from({ length: 16 }, (_, i) => ({
    id: 5 + i,
    name: 'Classic Jersey',
    price: 1199.99,
    originalPrice: 1499.99,
    rating: 4.4,
    reviews: 150 + i * 5,
    tags: i % 2 === 0 ? ['🔥 BestSeller'] : ['Recommended'],
    description: 'Premium stitched football jersey.',
    image: 'images/rma-home.jpg'
  }))
];

function renderProductList() {
  const productListContainer = document.getElementById('product-list');
  productListContainer.innerHTML = '';

  products.forEach(product => {
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    const tagHtml = product.tags?.map(tag => {
      const color = tag.includes('Recommended') ? '#3b82f6' : '#e60023';
      return `<span class="tag" style="background-color: ${color}; margin: 6px auto; display: inline-block;">${tag}</span>`;
    }).join('') || '';

    const productItem = document.createElement('div');
    productItem.classList.add('product-item');

    productItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <h3>${product.name}</h3>
      <div class="price">
        ₹${product.price.toFixed(2)}
        <span style="text-decoration: line-through; color: #888; margin-left: 8px;">₹${product.originalPrice.toFixed(2)}</span>
        <span style="color: green; margin-left: 6px;">(${discount}% OFF)</span>
      </div>
      <div class="rating">${product.rating} ⭐ <span style="color: gray; font-size: 0.9em;">| ${product.reviews}</span></div>
      <p>${product.description}</p>
      ${tagHtml}
      <a href="product.html?id=${product.id}" class="view-details">View Details</a>
    `;

    productListContainer.appendChild(productItem);
  });
}

// === CAROUSEL FUNCTIONALITY ===
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-slide");
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  const slides = document.querySelectorAll(".carousel-slide");
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  const slides = document.querySelectorAll(".carousel-slide");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// === STICKY HEADER ON SCROLL ===
function handleHeaderScroll() {
  const header = document.querySelector('header');
  if (window.scrollY > 30) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// === ON PAGE LOAD ===
window.addEventListener("DOMContentLoaded", () => {
  renderProductList();

  // Carousel Buttons
  const nextBtn = document.querySelector(".carousel-btn.next");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
    setInterval(nextSlide, 4000); // Auto slide every 4s
  }

  // Sticky Header
  window.addEventListener("scroll", handleHeaderScroll);
});
