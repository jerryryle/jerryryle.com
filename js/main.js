/**
 * Copyright 2017 by Jerry Ryle
 */

function setup_hamburger_auto_close()
{
    // Close the hamburger menu when someone clicks a menu item.
    $('.navbar-collapse').on("click", "a:not([dropdown-toggle])", null, function () {
        $('.navbar-collapse').collapse('hide');
    });
}

function setup_smooth_anchor_scrolling()
{
    // Use the jQuery Easing plugin to smoothly scroll the page on anchor link clicks
    $('a.anchor-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 500, 'easeInOutSine');
        event.preventDefault();
    });
}

$(function () {
    setup_hamburger_auto_close();
    setup_smooth_anchor_scrolling();
    new TagFilter('.container-portfolio', '.tags', 'tag');
});
