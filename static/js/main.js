/**
 * Copyright 2017-2022 by Jerry Ryle
 */

/*
    Prepare to run setup tasks once the document is ready.
 */
if (document.readyState === 'loading') {
    // Still loading. Set up a listener for when the document is ready.
    document.addEventListener('DOMContentLoaded', function() {
        setup();
    });
} else {
    // Document is ready. Perform setup.
    setup();
}

/* Run setup tasks once document is ready */
function setup() {
    setup_hamburger_auto_close();
    // , set up the tag filter, which will then try to scroll to any provided anchors after the
    // tag filter is ready and expanded.
    setup_tag_filter();

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
    // TagFilter class is created locally and captured via click handler closures for future use.
    const tag_filter = new TagFilter();

    // Iterate over the portfolio entries, locate the tags for each item, add them to the tag_filter, create
    // interactive tags for each portfolio entry, and replace the text tags with interactive tags.
    const portfolio_entries = Array.from(document.getElementsByClassName('container-portfolio'));
    portfolio_entries.forEach((portfolio_entry) => {
        const tag_elements = Array.from(portfolio_entry.querySelectorAll('.tags'));
        tag_elements.forEach((tag_element) => {
            const tags = split_and_normalize_tag_text(tag_element.textContent);

            tag_filter.addItemIDWithTags(portfolio_entry.getAttribute('id'), tags);

            tag_element.innerHTML = null;
            tags.forEach(function (tag) {
                const new_tag = document.createElement('a');
                new_tag.className = 'tag no-decorate';
                new_tag.text = tag;
                new_tag.href = '#';
                new_tag.addEventListener('click', function (event) {
                    handle_tag_click(event, tag_filter);
                });

                tag_element.append(new_tag);
            });
        });
    });

    tag_filter.updateFilter();

    const min_tag_size = 75;
    const max_tag_size = 175;
    const min_items = tag_filter.leastItems();
    const max_items = tag_filter.mostItems();

    const tag_filter_tags_element = document.querySelector('.tag_filter_tags');
    tag_filter_tags_element.innerHTML = null;
    tag_filter.allTags().forEach(function (tag) {
        const tag_size = scale_value(tag_filter.itemsForTag(tag).length, min_items, max_items, min_tag_size, max_tag_size);

        const new_tag_filter_element = document.createElement('a');
        new_tag_filter_element.className = 'tag no-decorate';
        new_tag_filter_element.text = tag;
        new_tag_filter_element.href = '#';
        new_tag_filter_element.style.fontSize = tag_size+'%';
        new_tag_filter_element.addEventListener('click', function (event) {
            handle_tag_click(event, tag_filter);
        });

        tag_filter_tags_element.append(new_tag_filter_element);
    });

    document.querySelector('#clear_filter').addEventListener('click', function (event) {
        tag_filter.clearSelection();
        apply_tag_filter(tag_filter);
        event.preventDefault();
    });

    apply_tag_filter(tag_filter);

    const tag_filter_element = document.querySelector('.tag_filter');
    tag_filter_element.style.display = 'block';

    /* Now that we've set up the tag filter and displayed it, scroll to any provided anchor. Any initial scroll will be
     off because of the added tag filter section. */
    if (window.location.hash) {
        const hash_element = document.querySelector(window.location.hash);
        if (hash_element) {
            window.scrollTo({
                top: getOffset(hash_element).top,
                behavior: 'smooth'
            });
        }
    }
    // $('.tag_filter').slideDown(function () {
    //     if (window.location.hash) {
    //         const hash_element = document.querySelector(window.location.hash);
    //         if (hash_element) {
    //             window.scrollTo({
    //                 top: getOffset(hash_element).top,
    //                 behavior: 'smooth'
    //             });
    //         }
    //     }
    // });
}

function getOffset (el) {
    const box = el.getBoundingClientRect();

    return {
        top: box.top + window.scrollY - document.documentElement.clientTop,
        left: box.left + window.scrollX - document.documentElement.clientLeft
    };
}

function handle_tag_click(event, tag_filter) {
    if (!event.target.classList.contains('tag_unavailable')) {
        const tag = event.target.text;
        const tag_enabled = tag_filter.toggleTagSelection(tag);
        apply_tag_filter(tag_filter);

        if (tag_enabled) {
            gtag('event', 'tag_'+tag+'_enabled', {
                'event_category' : 'filter',
                'event_label' : 'tag_'+tag
            });
        } else {
            gtag('event', 'tag_'+tag+'_disabled', {
                'event_category' : 'filter',
                'event_label' : 'tag_'+tag
            });
        }
    }
    event.preventDefault();
}

function apply_tag_filter(tag_filter) {
    const tags = Array.from(document.getElementsByClassName('tag'));
    tags.forEach((tag) => {
        const tag_text = tag.textContent;
        if (tag_filter.tagIsSelected(tag_text)) {
            tag.classList.remove('tag_unavailable');
            tag.classList.add('tag_selected');
        } else if (tag_filter.tagIsUnavailable(tag_text)) {
            tag.classList.remove('tag_selected');
            tag.classList.add('tag_unavailable');
        } else {
            tag.classList.remove('tag_unavailable', 'tag_selected');
        }
    });

    // Update filtered items
    tag_filter.excludedItems().forEach(function (item_id) {
        const item = document.querySelector('#' + item_id);
        item.style.display = 'none';
        // $('#' + item_id).slideUp();
    });
    tag_filter.includedItems().forEach(function (item_id) {
        const item = document.querySelector('#' + item_id);
        item.style.display = 'block';
        // $('#' + item_id).slideDown();
    });

    // Update result count
    const num_items = document.querySelector('#num_items');
    if (tag_filter.includedItems().length === 1) {
        num_items.textContent = '1 entry matches';
    } else {
        num_items.textContent = tag_filter.includedItems().length + ' entries match';
    }
}

function setup_hamburger_auto_close() {
    // Close the hamburger menu when someone clicks a menu item.
    // $('.navbar-collapse').on("click", "a:not([dropdown-toggle])", null, function () {
    //     $('.navbar-collapse').collapse('hide');
    // });
}
