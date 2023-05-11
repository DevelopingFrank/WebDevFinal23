$(document).ready(function () {
    // Smooth scrolling animation
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        var target = $(this.getAttribute('href'));

        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Form handling
    $('#contact-form').on('submit', function (event) {
        event.preventDefault();

        // Add your form handling code here, e.g., AJAX request to your server
        console.log('Form submitted');
    });
});
