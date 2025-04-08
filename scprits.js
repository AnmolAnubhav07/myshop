// Find all add-to-cart buttons
const buttons = document.querySelectorAll('.add-to-cart');

// When page loads, set up empty cart if not exists
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
}

// Add click event to each add-to-cart button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));
    
    // Get existing cart
    let cart = JSON.parse(localStorage.getItem('cart'));
    
    // Add new item
    cart.push({ name, price });
    
    // Save back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart count
    updateCartCount();

    alert("Item added to cart!");
  });
});

// Update cart counter
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem('cart'));
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = cart.length;
}

// When page loads, show correct cart count
updateCartCount();

// Render stars based on data-rating attribute
document.querySelectorAll('.rating').forEach(ratingDiv => {
  const rating = parseFloat(ratingDiv.getAttribute('data-rating'));
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  let stars = '⭐'.repeat(fullStars);
  if (halfStar) stars += '☆'; // half-star symbol
  ratingDiv.textContent = stars;
});

