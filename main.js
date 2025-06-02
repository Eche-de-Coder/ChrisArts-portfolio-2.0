// Initialize Particles.js
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 90,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle"
        },
        "opacity": {
          "value": 0.5,
          "random": false
        },
        "size": {
          "value": 4,
          "random": true
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2.5,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "repulse": {
            "distance": 100,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          }
        }
      },
      "retina_detect": true
    }); 
 
 
  // Typing Effect for Hero Heading
    const typingText = document.getElementById('typing-text');
    const messages = ["Hi there!", "My Name Is Onuigbo Christian", "Graphic Designer", "Half Stack Developer"];
    let messageIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    function type() {
      const currentMessage = messages[messageIndex];
      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }
      typingText.textContent = currentMessage.substring(0, charIndex);
      let speed = isDeleting ? 50 : 100;
      if (!isDeleting && charIndex === currentMessage.length) {
        speed = 1500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % messages.length;
        speed = 500;
      }
      setTimeout(type, speed);
    }
    type();

// Hamburger Menu and Side Menu
  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("sideMenu");
  const closeMenu = document.getElementById("closeMenu");
  const menuOverlay = document.getElementById("menuOverlay");
    
function closeMenuHandler() {
  sideMenu.classList.remove("show-menu");
  menuOverlay.classList.remove("show-overlay");
  hamburger.classList.remove("open");
  hamburger.addEventListener("click", openMenu);
}

function toggleMenu() {
  const isOpen = sideMenu.classList.contains("show-menu");
  sideMenu.classList.toggle("show-menu");
  menuOverlay.classList.toggle("show-overlay");
  hamburger.classList.toggle("open");
}

hamburger.addEventListener("click", toggleMenu);


/*slide in animation*/
const elements = document.querySelectorAll('.slide-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

elements.forEach(el => observer.observe(el));

  // Animate Skill Progress Bars and update percentage text
    const skillProgressElements = document.querySelectorAll('.skill-progress');
    const skillsObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetPercent = parseInt(entry.target.getAttribute('data-percent'));
          entry.target.style.width = entry.target.getAttribute('data-percent');
      // Animate the percentage text
          const span = entry.target.parentElement.querySelector('.skill-percent');
          let currentPercent = 0;
          const interval = setInterval(() => {
            currentPercent++;
            span.textContent = currentPercent + '%';
            if (currentPercent >= targetPercent) {
              clearInterval(interval);
            }
          }, 10);
          skillsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    skillProgressElements.forEach(el => {
      el.style.width = '0';
      el.style.transition = 'width 1s ease';
      skillsObserver.observe(el);
    });
    
//Form submission
const form = document.getElementById('webhookForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name-input').value;
    const number = document.getElementById('number-input').value;
    const message = document.getElementById('message-input').value;
    
    const content = `**📩 New Message from Website**\n**👤 Name :** ${name}\n**☎️ PhoneNo :** ${number}\n**✉️ Message :** ${message}\n..\n..`;

    try {
      const response = await fetch('https://discord.com/api/webhooks/1379019915629035520/LBJQPlAiHdrsf4CYjefE8HbiQROXeDe8gPtbeKCSr_X8JQoyqafm0APSoG9fYtLoQvS_', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: content
        })
      });
    //Displaying success modal
      if (response.ok) {
        showSuccessModal()
        form.reset();
      } else {
        alert('Couldnt send message');
      }
    } catch (error) {
      alert('Check your connection and try again')
      console.error(error);
    }
  });
// Removing and adding the class .hidden  
// Call showSuccessModal() after a successful form submission
  function showSuccessModal() {
    document.getElementById("successModal").classList.remove("hidden");
  }
  function closeModal() {
    document.getElementById("successModal").classList.add("hidden");
  }

// 
 function showRedirect() {
   document.getElementById("redirectModal").classList.remove("hidden");
 }
 function closeRedirect() {
   document.getElementById("redirectModal").classList.add("hidden");
 }
