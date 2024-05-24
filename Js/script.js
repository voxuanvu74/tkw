document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form data
    var product = document.getElementById('product').value;
    var quantity = document.getElementById('quantity').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
  
    // Validate form data
    if (product === '' || quantity <= 0 || email === '' || address === '') {
      alert('Please fill in all the required fields.');
      return;
    }
  
    // Process the order
    console.log('Order details:');
    console.log('Product: ' + product);
    console.log('Quantity: ' + quantity);
    console.log('Email: ' + email);
    console.log('Address: ' + address);
  
    // Reset the form
    document.getElementById('order-form').reset();
  
    alert('Thank you for your order! We will contact you shortly.');
  });

  //Contact
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Validate form data
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all the required fields.');
      return;
    }
  
    // Process the form submission
    console.log('Contact form submitted:');
    console.log('Name: ' + name);
    console.log('Email: ' + email);
    console.log('Message: ' + message);
  
    // Reset the form
    document.getElementById('contact-form').reset();
  
    alert('Thank you for your message! We will get back to you soon.');
  });
  //menu
  var addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var itemName = this.parentNode.querySelector('h3').textContent;
    var itemPrice = this.parentNode.querySelector('.price').textContent;

    console.log('Added to cart:');
    console.log('Item: ' + itemName);
    console.log('Price: ' + itemPrice);

    alert('You added "' + itemName + '" to your cart!');
  });
});