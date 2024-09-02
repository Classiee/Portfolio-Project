let currentSectionIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.content-section');

    function checkVisibility() {
        sections.forEach(section => {
            const position = section.getBoundingClientRect();
            const floatingBox = section.querySelector('.floating-box');

            if (position.top < window.innerHeight && position.bottom >= 0) {
                section.classList.add('visible');
                if (floatingBox) {
                    floatingBox.classList.add('visible');
                }
            } else {
                section.classList.remove('visible');
                if (floatingBox) {
                    floatingBox.classList.remove('visible');
                }
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();  // Run once on load
});

function oneUp() {
    const sections = document.querySelectorAll('.content-section');
    if (currentSectionIndex > 0) {
        currentSectionIndex--;
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    }
}

function oneDown() {
    const sections = document.querySelectorAll('.content-section');
    if (currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    }
}


var clickableArea = document.getElementById('clickable-area');
var contactForm = document.getElementById('contact-form');


clickableArea.addEventListener('click', function(event) {
  
  event.stopPropagation();
  
  
  if (contactForm.classList.contains('hidden')) {
    contactForm.classList.remove('hidden');
  }
});


document.addEventListener('click', function(event) {
  var isClickInside = clickableArea.contains(event.target);

  if (!isClickInside && !contactForm.classList.contains('hidden')) {
    contactForm.classList.add('hidden');
  }
});
  
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
  
    
    alert('Form submitted!');
});

function submitForm() {
    var form = document.getElementById('contact-form');
    form.submit();
    
}