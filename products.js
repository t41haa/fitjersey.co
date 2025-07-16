const products = [
  {
    "id": 1,
    "name": "Real Madrid Home Jersey",
    "price": 999.99,
    "originalPrice": 1999.99,
    "rating": 4.8,
    "reviews": 341,
    "tags": ["🔥 BestSeller"],
    "description": "Official Real Madrid Home Jersey for the 24/25 season.",
    "image": "images/rma-home.jpg"
  },
  {
    "id": 2,
    "name": "Barcelona Away Jersey",
    "price": 1499.99,
    "originalPrice": 1999.99,
    "rating": 4.5,
    "reviews": 272,
    "tags": ["Recommended"],
    "description": "Official Barcelona Away Jersey for the 24/25 season.",
    "image": "images/barca-away.jpg"
  },
  {
    "id": 3,
    "name": "Real Madrid Pink Kit",
    "price": 1199.99,
    "originalPrice": 1799.99,
    "rating": 4.6,
    "reviews": 312,
    "tags": ["🔥 BestSeller"],
    "description": "Official Real Madrid Pink Kit.",
    "image": "images/rma-pink.jpg"
  },
  {
    "id": 4,
    "name": "Arsenal Away 24/25",
    "price": 1099.99,
    "originalPrice": 1599.99,
    "rating": 4.3,
    "reviews": 190,
    "tags": ["Recommended"],
    "description": "Premium stitched football jersey.",
    "image": "images/arsenal.webp"
  },
  {
    "id": 5,
    "name": "Classic Jersey",
    "price": 1199.99,
    "originalPrice": 1499.99,
    "rating": 4.4,
    "reviews": 150,
    "tags": ["🔥 BestSeller"],
    "description": "Premium stitched football jersey.",
    "image": "images/rma-home.jpg"
  },
  {
    "id": 6,
    "name": "Classic Jersey",
    "price": 1199.99,
    "originalPrice": 1499.99,
    "rating": 4.4,
    "reviews": 155,
    "tags": ["Recommended"],
    "description": "Premium stitched football jersey.",
    "image": "images/rma-home.jpg"
  },
  {
    "id": 7,
    "name": "Classic Jersey",
    "price": 1199.99,
    "originalPrice": 1499.99,
    "rating": 4.4,
    "reviews": 160,
    "tags": ["🔥 BestSeller"],
    "description": "Premium stitched football jersey.",
    "image": "images/rma-home.jpg"
  },
  {
    "id": 8,
    "name": "Classic Jersey",
    "price": 1199.99,
    "originalPrice": 1499.99,
    "rating": 4.4,
    "reviews": 165,
    "tags": ["Recommended"],
    "description": "Premium stitched football jersey.",
    "image": "images/rma-home.jpg"
  },
  {
    "id": 9,
    "name": "Classic Jersey",
    "price": 1199.99,
    "originalPrice": 1499.99,
    "rating": 4.4,
    "reviews": 170,
    "tags": ["🔥 BestSeller"],
    "description": "Premium stitched football jersey.",
    "image": "images/rma-home.jpg"
  },
  {
    "id": 10,
    "name": "Classic Jersey",
    "price": 1199.99,
    "originalPrice": 1499.99,
    "rating": 4.4,
    "reviews": 175,
    "tags": ["Recommended"],
    "description": "Premium stitched football jersey.",
    "image": "images/rma-home.jpg"
  },
  {
    "id": 11,
    "name": "Classic Jersey",
    "price": 1199.99,
    "originalPrice": 1499.99,
    "rating": 4.4,
    "reviews": 180,
    "tags": ["🔥 BestSeller"],
    "description": "Premium stitched football jersey.",
    "image": "images/rma-home.jpg"
  },
  {
    "id": 12,
    "name": "Classic Jersey",
    "price": 1199.99,
    "originalPrice": 1499.99,
    "rating": 4.4,
    "reviews": 185,
    "tags": ["Recommended"],
    "description": "Premium stitched football jersey.",
    "image": "images/rma-home.jpg"
  },
  {
    "id": 13,
    "name": "Classic Jersey",
    "price": 1199.99,
    "originalPrice": 1499.99,
    "rating": 4.4,
    "reviews": 190,
    "tags": ["🔥 BestSeller"],
    "description": "Premium stitched football jersey.",
    "image": "images/rma-home.jpg"
  },
  {
    "id": 14,
    "name": "Classic Jersey",
    "price": 1199.99,
    "originalPrice": 1499.99,
    "rating": 4.4,
    "reviews": 195,
    "tags": ["Recommended"],
    "description": "Premium stitched football jersey.",
    "image": "images/rma-home.jpg"
  },
  {
    "id": 15,
    "name": "Classic Jersey",
    "price": 1199.99,
    "originalPrice": 1499.99,
    "rating": 4.4,
    "reviews": 200,
    "tags": ["🔥 BestSeller"],
    "description": "Premium stitched football jersey.",
    "image": "images/rma-home.jpg"
  },
  {
    "id": 16,
    "name": "Classic Jersey",
    "price": 1199.99,
    "originalPrice": 1499.99,
    "rating": 4.4,
    "reviews": 205,
    "tags": ["Recommended"],
    "description": "Premium stitched football jersey.",
    "image": "images/rma-home.jpg"
  },
  {
    "id": 17,
    "name": "Classic Jersey",
    "price": 1199.99,
    "originalPrice": 1499.99,
    "rating": 4.4,
    "reviews": 210,
    "tags": ["🔥 BestSeller"],
    "description": "Premium stitched football jersey.",
    "image": "images/rma-home.jpg"
  },
  {
    "id": 18,
    "name": "Classic Jersey",
    "price": 1199.99,
    "originalPrice": 1499.99,
    "rating": 4.4,
    "reviews": 215,
    "tags": ["Recommended"],
    "description": "Premium stitched football jersey.",
    "image": "images/rma-home.jpg"
  },
  {
    "id": 19,
    "name": "Classic Jersey",
    "price": 1199.99,
    "originalPrice": 1499.99,
    "rating": 4.4,
    "reviews": 220,
    "tags": ["🔥 BestSeller"],
    "description": "Premium stitched football jersey.",
    "image": "images/rma-home.jpg"
  },
  {
    "id": 20,
    "name": "Classic Jersey",
    "price": 1199.99,
    "originalPrice": 1499.99,
    "rating": 4.4,
    "reviews": 225,
    "tags": ["Recommended"],
    "description": "Premium stitched football jersey.",
    "image": "images/rma-home.jpg"
  }
];
window.products = products; // ✅ Make products accessible globally
