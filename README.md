// Website Description //

Cottifi is an artisan goods website that offers a variety of handmade products such as sourdough bread, homemade jams, and seasonal goods. 
The site features an elegant, responsive design with Bootstrap components to provide a user-friendly experience. It includes interactive 
features like a product carousel, accordion FAQ section, and contact form, alongside JavaScript functions that enhance the functionality of the site.


// Bootstrap Components //

Navbar: The navigation bar is built using Bootstrap's navbar component, which is fully responsive and collapses on smaller screens for a mobile-friendly layout.

Carousel: The homepage features a Bootstrap carousel that displays a series of images related to the brand's offerings (e.g., breads, jams, spices).

Cards: Bootstrap cards are used to display product categories with a title, description, and a button for more details. This allows for a neat and consistent presentation of products.

Accordion: The FAQ section uses the Bootstrap accordion to allow users to toggle through commonly asked questions.

Forms: The contact form is created using Bootstrap's form components, ensuring proper alignment, responsiveness, and style.

Tables: The product listings are presented in a Bootstrap-styled table with striped rows for easy readability.


// JavaScript Functions //

validateEmail(email): This function checks if an email string contains both "@" and "." characters and has a length greater than 5 characters, which is a simple validation for an 
                      email format.
  Future Integration: This function could be used in the contact form submission process to validate the email field before sending the data to the server.

getFeaturedProduct(): This function randomly selects a product from the products array and returns it. It showcases a random product each time it's called.
  Future Integration: You could use this function to display a featured product on the homepage or in the weekly newsletter. For example, it could be called when the page loads to 
                      display a product recommendation.

calculateTotal(cart): This function takes an array of cart prices and calculates the total price by summing all the values in the array.
  Future Integration: This could be integrated into a shopping cart feature. When a user adds products to their cart, the total price can be updated in real-time as they select items.

addFeedback(message): This function stores feedback messages in an array, allowing users to leave feedback, which can be stored and displayed later.
  Future Integration: This function could be extended to integrate with a backend database to store feedback persistently. It could be used in the "Get in Touch" form, where users 
                      can submit comments or reviews.

formatProductListing(name, type, price): This function returns a formatted string that presents a product's name, type, and price.
  Future Integration: This function could be used when displaying products in a product catalog or a shopping cart to maintain consistent formatting across the website.

Navbar Scroll Effect: This JavaScript code hides the navbar when the user scrolls down and reveals it when they scroll up. This feature adds a dynamic and smooth user experience, 
                      especially on long pages.
  Future Integration: The scroll effect could be extended to include animations or transitions to make the navbar's appearance and disappearance more polished. You could also 
                      integrate it with other dynamic features like sticky navigation or modal dialogs.

                      
