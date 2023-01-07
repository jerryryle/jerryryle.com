/**
 * Copyright 2017-2023 by Jerry Ryle
 * License: https://github.com/jerryryle/jerryryle.com/blob/main/LICENSE.md
 */

"use strict";

export default class TagFilter {
    constructor(props) {
        this.items_by_tag = {};
        this.all_items = [];
        this.selected_tags = [];
        this.unavailable_tags = [];
        this.included_items = [];
        this.excluded_items = [];

        this.most_items_for_tag = 0;
        this.least_items_for_tag = 0;
    }

    addItemIDWithTags(item_id, tags) {
        const obj_this = this;
        tags.forEach(function (tag) {
            if (!obj_this.items_by_tag.hasOwnProperty(tag)) {
                obj_this.items_by_tag[tag] = [];
            }
            obj_this.items_by_tag[tag].push(item_id);
        });
        obj_this.all_items.push(item_id);
    };

    toggleTagSelection(tag) {
        if (this.tagIsSelected(tag)) {
            this.removeTagFromSelection(tag);
            return false;
        } else {
            this.addTagToSelection(tag);
            return true;
        }
    };

    addTagToSelection(tag) {
        if (!this.tagIsSelected(tag)) {
            this.selected_tags.push(tag);
            this.updateFilter();
        }
    };

    removeTagFromSelection(tag) {
        const tag_selected_index = this.selected_tags.indexOf(tag);

        if (tag_selected_index >= 0) {
            this.selected_tags.splice(tag_selected_index, 1);
            this.updateFilter();
        }
    };

    clearSelection() {
        this.selected_tags = [];
        this.updateFilter();
    };

    updateFilter() {
        const obj_this = this;

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
                if (_.intersection(obj_this.items_by_tag[tag], obj_this.included_items).length <= 0) {
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

    tagIsSelected(tag) {
        return this.selected_tags.includes(tag);
    };

    tagIsUnavailable(tag) {
        return this.unavailable_tags.includes(tag);
    };

    includedItems() {
        return this.included_items;
    };

    excludedItems() {
        return this.excluded_items;
    };

    mostItems() {
        return this.most_items_for_tag;
    };

    leastItems() {
        return this.least_items_for_tag;
    };

    itemsForTag(tag) {
        if (!this.items_by_tag.hasOwnProperty(tag)) {
            return [];
        }
        return this.items_by_tag[tag];
    };

    allTags() {
        return _.keys(this.items_by_tag).sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        })
    };

}
