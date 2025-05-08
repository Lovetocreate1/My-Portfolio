console.log("script running...");

const sidebar = document.querySelector('.sidebar');
const cross = document.querySelector('.cross');
const ham = document.querySelector('.ham');
const hamburger = document.querySelector('.hamburger');

cross.style.display = 'none';

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('sidebarGo');
    if (sidebar.classList.contains('sidebarGo')) {
        cross.style.display = 'none';
        ham.style.display = 'inline';
    } else {
        ham.style.display = 'none';
        setTimeout(() => {
            cross.style.display = 'inline';
        }, 300); // Match your CSS transition
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');
    
    if (form) {
      console.log("Form found");
  
      form.addEventListener('submit', function (e) {
        e.preventDefault();  // Prevent default form submission
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
  
        console.log("Form Submitted:", { name, email, message });
  
        alert("Thank you for contacting me! I will get back to you soon.");
        form.reset();  // Reset the form
      });
    } else {
      console.log("Form not found");
    }
  });
  