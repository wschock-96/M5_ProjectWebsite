
// Validate Email Format
function validateEmail(email) {
    return email.includes('@') && email.includes('.') && email.length > 5;
}
console.log(validateEmail("test@sagemarket.com"));
  
// Suggest a Random Product of the Week
const products = [
    "Rosemary Sourdough",
    "Blackberry Jam",
    "Lavender Honey",
    "Cranberry Walnut Bread",
    "Peach Preserves"
];
  
function getFeaturedProduct() {
    const index = Math.floor(Math.random() * products.length);
    return products[index];
}
console.log(`Featured Product: ${getFeaturedProduct()}`);
  
// Calculates Total for Selected Items
const cartPrices = [7.00, 5.50, 6.75];
  
function calculateTotal(cart) {
    return cart.reduce((total, price) => total + price, 0).toFixed(2);
}
console.log(`Cart Total: $${calculateTotal(cartPrices)}`);
  
// Store Customer Feedback
let feedbackMessages = [];
  
function addFeedback(message) {
    feedbackMessages.push(message);
    return feedbackMessages;
}
console.log(addFeedback("Love the sourdough!"));
  
// Format a product listing string
function formatProductListing(name, type, price) {
    return `${name} | Type: ${type} | Price: $${price}`;
}
console.log(formatProductListing("Strawberry Jam", "Jam", "5.25"));

// Controls the NavBar fade effect
document.addEventListener("DOMContentLoaded", () => {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', function () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollTop > lastScrollTop) {
        navbar.classList.add('navbar-hidden');
      } else {
        navbar.classList.remove('navbar-hidden');
      }
  
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  });
  