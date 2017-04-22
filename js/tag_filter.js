/**
 * Copyright 2017 by Jerry Ryle
 */

function TagFilter() {
    this.items_by_tag = {};
    this.all_items = [];
    this.selected_tags = [];
    this.unavailable_tags = [];
    this.included_items = [];
    this.excluded_items = [];

    this.most_items_for_tag = 0;
    this.least_items_for_tag = 0;
}

TagFilter.prototype.addItemIDWithTags = function (item_id, tags) {
    var obj_this = this;
    tags.forEach(function (tag) {
        if (!obj_this.items_by_tag.hasOwnProperty(tag)) {
            obj_this.items_by_tag[tag] = [];
        }
        obj_this.items_by_tag[tag].push(item_id);
    });
    obj_this.all_items.push(item_id);
};

TagFilter.prototype.toggleTagSelection = function (tag) {
    if (this.tagIsSelected(tag)) {
        this.removeTagFromSelection(tag);
    } else {
        this.addTagToSelection(tag);
    }
};

TagFilter.prototype.addTagToSelection = function (tag) {
    if (!this.tagIsSelected(tag)) {
        this.selected_tags.push(tag);
    }
};

TagFilter.prototype.removeTagFromSelection = function (tag) {
    var tag_selected_index = $.inArray(tag, this.selected_tags);

    if (tag_selected_index >= 0) {
        this.selected_tags.splice(tag_selected_index, 1);
    }
};

TagFilter.prototype.clearSelection = function (tag) {
    this.selected_tags = [];
};

TagFilter.prototype.updateFilter = function () {
    var obj_this = this;

    this.most_items_for_tag = _.reduce(this.items_by_tag, function (most, tag) {
        return (tag.length > most) ? tag.length : most;
    }, 0);
    this.least_items_for_tag = _.reduce(this.items_by_tag, function (least, tag) {
        return (tag.length < least) ? tag.length : least;
    }, Number.MAX_VALUE);

    if (this.selected_tags.length > 0) {
        this.included_items = _.reduce(this.selected_tags, function (items, tag) {
            return _.intersection(obj_this.items_by_tag[tag], items);
        }, this.all_items);
        this.excluded_items = _.difference(this.all_items, obj_this.included_items);
        this.unavailable_tags = _.reduce(_.keys(this.items_by_tag), function (tags, tag) {
            if (_.intersection(obj_this.items_by_tag[tag], obj_this.included_items).length <=0) {
                tags.push(tag);
            }
            return tags;
        }, []);
    } else {
        // No tags are selected, include all items.
        this.included_items = this.all_items;
        this.excluded_items = [];
        this.unavailable_tags = [];
    }
};

TagFilter.prototype.tagIsSelected = function (tag) {
    return ($.inArray(tag, this.selected_tags) >= 0);
};

TagFilter.prototype.tagIsUnavailable = function (tag) {
    return ($.inArray(tag, this.unavailable_tags) >= 0);
};

TagFilter.prototype.includedItems = function () {
    return this.included_items;
};

TagFilter.prototype.excludedItems = function () {
    return this.excluded_items;
};

TagFilter.prototype.mostItemsForTag = function () {
    return this.most_items_for_tag;
};

TagFilter.prototype.leastItemsForTag = function () {
    return this.least_items_for_tag;
};

TagFilter.prototype.allTags = function () {
    return _.keys(this.items_by_tag).sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    })
};
