// === FETCH PRODUCTS FROM SERVER ===
async function fetchProducts() {
  try {
    const response = await fetch('products.js');
    const products = await response.json();
    renderProductList(products);
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
}

// === RENDER PRODUCTS ON PAGE ===
function renderProductList(products) {
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

// === STICKY HEADER ON SCROLL ===
function handleHeaderScroll() {
  const header = document.querySelector('header');
  if (window.scrollY > 30) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// === INITIALIZE PAGE ===
window.addEventListener("load", () => {
  // Use products variable from products.js directly here
  renderProductList(products);

  // === CAROUSEL SETUP ===
  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel-slide");
  const dotsContainer = document.querySelector(".carousel-dots");

  // Clear existing dots to avoid duplicates
  dotsContainer.innerHTML = '';

  // Create dots for each slide
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("carousel-dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentSlide = index;
      showSlide(index);
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".carousel-dot");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Carousel Buttons
  const nextBtn = document.querySelector(".carousel-btn.next");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
    setInterval(nextSlide, 4000); // Auto slide every 4s
  }

  // Show first slide
  showSlide(currentSlide);

  // Sticky Header
  window.addEventListener("scroll", handleHeaderScroll);
});
