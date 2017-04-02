// Close the hamburger menu when someone clicks a menu item.
$('.navbar-collapse').on("click", "a:not([dropdown-toggle])", null, function () {
    $('.navbar-collapse').collapse('hide');
});

// Use the jQuery Easing plugin to smoothly scroll the page on anchor link clicks
$(function () {
    $('a.anchor-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 500, 'easeInOutSine');
        event.preventDefault();
    });
});
