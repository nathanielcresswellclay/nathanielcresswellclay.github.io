document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        document.getElementById('navbar').innerHTML = data;
  
        // Get the current page's filename
        const currentPage = window.location.pathname.split('/').pop();
  
        // Get all the links in the navbar
        const navLinks = document.querySelectorAll('#navbar a');
  
        // Loop through the links and add the 'current_page' class to the matching link
        navLinks.forEach(link => {
          if (link.getAttribute('href') === currentPage) {
            link.classList.add('current_page');
          }
        });
      })
      .catch(error => console.error('Error loading navbar:', error));
  });