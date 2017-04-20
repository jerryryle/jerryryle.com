/**
 * Copyright 2017 by Jerry Ryle
 */

function TagFilter(entry_selector, entry_tag_selector, tag_class) {
    var entries = $(entry_selector);
    var entries_by_tag = {};
    var tag_instances_by_tag = {};

    // Iterate over the specified entries, located the specified tags for each entry and
    // gather a hash that maps tags to entries.
    entries.each(function () {
        var entry = $(this);
        entry.find(entry_tag_selector).each(
            function () {
                var entry_tags = $(this);
                var entry_tag_list = entry_tags.text().replace(/\s+/g, ' ').split(/,\s*/).map(function (element) {
                    return element.trim();
                }).sort(function (a, b) {
                    return a.toLowerCase().localeCompare(b.toLowerCase());
                });
                entry_tags.empty();

                entry_tag_list.forEach(function(element){
                    if (!entries_by_tag.hasOwnProperty(element)) {
                        entries_by_tag[element] = [];
                    }
                    entries_by_tag[element].push(entry);
                    var clickable_tag_instance = $('<a>', {
                        'class': tag_class,
                        'text' : element,
                        'href' : '#',
                        'click': function(event) {
                            event.preventDefault();
                        }
                    });
                    entry_tags.append(clickable_tag_instance);

                    if (!tag_instances_by_tag.hasOwnProperty(element)) {
                        tag_instances_by_tag[element] = [];
                    }
                    tag_instances_by_tag[element].push(clickable_tag_instance);
                });
            }
        );
    });

    this.entries_by_tag = entries_by_tag;
    this.tag_instances_by_tag = tag_instances_by_tag;
    console.log(this.tag_instances_by_tag);
}
