// script.js
document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle the active class
            this.classList.toggle('active');

            // Get the associated content panel
            const content = this.nextElementSibling;

            // Toggle the max-height
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = '0';
            } else {
                content.style.maxHeight = content.scrollHeight + '10px';
                content.style.padding = '15px';
            }
        });
    });
});
