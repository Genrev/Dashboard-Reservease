function showCurrentDate() {
    const now = new Date(); // Create a new date object with the current date and time
    const options = { month: 'long', day: 'numeric', year: 'numeric' }; // Define options for date format
    const formattedDate = now.toLocaleDateString('en-US', options); // Format the date according to the specified options

    // Display the formatted date in the console
    // You can replace 'console.log' with code to display the date in your web page
    console.log(formattedDate);

    // Example: Display the date in a webpage element with the ID 'dateDisplay'
    document.getElementById('dateDisplay').innerText = formattedDate;
}

// Call the function to display the date
showCurrentDate();

$(document).ready(function () {
    // Initialize the carousel
    $('#myCarousel').carousel();
});

(function ($) { "use strict"; var fullHeight = function () { $('.js-fullheight').css('height', $(window).height()); $(window).resize(function () { $('.js-fullheight').css('height', $(window).height()); }); }; fullHeight(); $('#sidebarCollapse').on('click', function () { $('#sidebar').toggleClass('active'); }); })(jQuery);






