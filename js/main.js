/**
 * Copyright 2017 by Jerry Ryle
 */

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
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 500, 'easeInOutSine');
        event.preventDefault();
    });
}

function split_and_normalize_tag_text(tag_text) {
    return tag_text.replace(/\s+/g, ' ').split(/,\s*/).map(function (element) {
        return element.trim();
    }).sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    })
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

    var tag_filter_tags_element = $('.tag_filter_tags');
    tag_filter_tags_element.empty();
    tag_filter.allTags().forEach(function (tag) {
        tag_filter_tags_element.append(
            $('<a>', {
                'class': 'tag',
                'text': tag,
                'href': '#',
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
    $('.tag_filter').slideDown();
}

function handle_tag_click(event, tag_filter) {
    if (!$(event.target).hasClass('tag_unavailable')) {
        var tag = event.target.text;
        tag_filter.toggleTagSelection(tag);
        update_filter(tag_filter);
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

$(function () {
    setup_hamburger_auto_close();
    setup_smooth_anchor_scrolling();
    setup_tag_filter();
});
