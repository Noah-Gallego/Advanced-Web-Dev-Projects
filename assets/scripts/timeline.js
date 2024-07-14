"use strict";

const expandButtons = document.querySelectorAll('.expand-btn');

expandButtons.forEach(button => {
    button.addEventListener('click', function() {
        const content = this.parentElement.querySelector('.expanded-content');
        content.classList.toggle('show');
        if (content.classList.contains('show')) {
            this.textContent = 'Show Less';
        } else {
            this.textContent = 'Read More';
        }
    });
});




