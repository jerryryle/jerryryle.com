/**
 * Copyright 2017 by Jerry Ryle
 */

// Try to prevent the window from scrolling to any provided anchors. We need to wait for the document to be ready first.
if (window.location.hash) {
    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 1);
}

// When the document is ready, set up the tag filter, which will then try to scroll to any provided anchors after the
// tag filter is ready and expanded.
$(document).ready(function () {
    setup_tag_filter();
});

function fix_hash_scroll() {
    if (window.location.hash) {
        $('html, body').stop().animate({
            scrollTop: $(window.location.hash).offset().top
        }, 500, 'easeInOutSine');
    }
}

function split_and_normalize_tag_text(tag_text) {
    return tag_text.replace(/\s+/g, ' ').split(/,\s*/).map(function (element) {
        return element.trim();
    }).sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    })
}

function scale_value(n_d0, min_d0, max_d0, min_d1, max_d1)
{
    return (((n_d0 - min_d0) * (max_d1 - min_d1)) / (max_d0 - min_d0)) + min_d1;
}

function setup_tag_filter() {
    var tag_filter = new TagFilter();

    // Iterate over the portfolio entries, locate the tags for each item, add them to the tag_filter, create
    // interactive tags for each portfolio entry, and replace the text tags with interactive tags.
    $('.container-portfolio').each(function () {
        var item = $(this);
        item.find('.tags').each(function () {
            var tag_element = $(this);
            var tags = split_and_normalize_tag_text(tag_element.text());

            tag_filter.addItemIDWithTags(item.attr('id'), tags);

            tag_element.empty();
            tags.forEach(function (tag) {
                tag_element.append(
                    $('<a>', {
                        'class': 'tag',
                        'text': tag,
                        'href': '#',
                        'click': function (event) {
                            handle_tag_click(event, tag_filter);
                        }
                    }));
            });
        });
    });
    update_filter(tag_filter);

    var min_tag_size = 75;
    var max_tag_size = 175;
    var min_items = tag_filter.leastItems();
    var max_items = tag_filter.mostItems();

    var tag_filter_tags_element = $('.tag_filter_tags');
    tag_filter_tags_element.empty();
    tag_filter.allTags().forEach(function (tag) {
        var tag_size = scale_value(tag_filter.itemsForTag(tag).length, min_items, max_items, min_tag_size, max_tag_size);
        tag_filter_tags_element.append(
            $('<a>', {
                'class': 'tag',
                'text': tag,
                'href': '#',
                'style': 'font-size:'+tag_size+'%;',
                'click': function (event) {
                    handle_tag_click(event, tag_filter);
                }
            }));
    });

    $('#clear_filter').click(
        function (event) {
            tag_filter.clearSelection();
            update_filter(tag_filter);
            event.preventDefault();
        });

    update_filter(tag_filter);
    $('.tag_filter').slideDown(function () {
        fix_hash_scroll();
    });
}

function handle_tag_click(event, tag_filter) {
    if (!$(event.target).hasClass('tag_unavailable')) {
        var tag = event.target.text;
        var tag_enabled = tag_filter.toggleTagSelection(tag);
        update_filter(tag_filter);

        if (tag_enabled) {
            ga('send', 'event', 'tag_'+tag, 'enabled');
        } else {
            ga('send', 'event', 'tag_'+tag, 'disabled');
        }
    }
    event.preventDefault();
}

function update_filter(tag_filter) {
    tag_filter.updateFilter();

    // Update tag status on all interactive tags
    $('.tag').each(function () {
        var tag = $(this).text();
        if (tag_filter.tagIsSelected(tag)) {
            $(this).removeClass('tag_unavailable').addClass('tag_selected');
        } else if (tag_filter.tagIsUnavailable(tag)) {
            $(this).removeClass('tag_selected').addClass('tag_unavailable');
        } else {
            $(this).removeClass('tag_unavailable tag_selected');
        }
    });

    // Update filtered items
    tag_filter.excludedItems().forEach(function (item) {
        $('#' + item).slideUp();
    });
    tag_filter.includedItems().forEach(function (item) {
        $('#' + item).slideDown();
    });

    // Update result count
    if (tag_filter.includedItems().length === 1) {
        $('#num_items').text('1 entry matches');
    } else {
        $('#num_items').text(tag_filter.includedItems().length + ' entries match');
    }

}

function setup_hamburger_auto_close() {
    // Close the hamburger menu when someone clicks a menu item.
    $('.navbar-collapse').on("click", "a:not([dropdown-toggle])", null, function () {
        $('.navbar-collapse').collapse('hide');
    });
}

function setup_smooth_anchor_scrolling() {
    // Use the jQuery Easing plugin to smoothly scroll the page on anchor link clicks
    $('a.anchor-scroll').bind('click', function (event) {
        var $anchor = $(this);
        // First, attempt to unhide the target portfolio entry in case it's currently filtered out. Get the
        // href of the anchor as a jquery object and find its parent, which will be the portfolio entry's div.
        var href = $anchor.attr('href');
        var $target = $(href).parent();
        // Display the target (faster than usual to make the original click feel responsive) and then scroll to it.
        $target.slideDown(100, function () {
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 500, 'easeInOutSine');
        });
        ga('send', 'pageview', location.pathname + href);
        event.preventDefault();
    });
}

$(function () {
    setup_hamburger_auto_close();
    setup_smooth_anchor_scrolling();
});
