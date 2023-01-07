/**
 * Copyright 2017-2022 by Jerry Ryle
 * License: https://github.com/jerryryle/jerryryle.com/blob/main/LICENSE.md
 */

"use strict";

export default class AnimatedSkyline {
    constructor(svg_element) {
        // The animation frame time in milliseconds.
        const frame_time = 100;

        // The maximum number of windows that can change in each animation frame.
        const max_windows_to_change_per_frame = 100;

        // The minimum lightness value ever assigned to a window.
        const min_window_lightness = 0;

        // The maximum lightness value ever assigned to a window.
        const max_window_lightness = 100;

        // The minimum lightness value for a window to be considered "on."
        const min_window_on_lightness = 20;

        /* Gather all window elements into an array. Each array element itself is an array containing the svg window
         * element and a boolean representing whether the window is currently off (false) or on (true). */
        const svg_window_layer = svg_element.contentDocument.querySelector("#Windows");
        const svg_windows = [...svg_window_layer.querySelectorAll("path, polygon, rect")].map(svg_window => {
            const lightness = this.random_range(min_window_lightness, max_window_lightness);
            svg_window.style.fill = this.window_color_with_lightness(lightness);
            if (lightness < min_window_on_lightness) {
                return [svg_window, false];
            } else {
                return [svg_window, true];
            }
        });

        setInterval(() => {
            // Choose a random number of windows to change
            const number_windows_to_change = this.random_range(
                1,
                Math.min(max_windows_to_change_per_frame, svg_windows.length));

            // Create a set of random, unique window indices to change
            const windows_to_change = new Set();
            while (windows_to_change.size < number_windows_to_change) {
                windows_to_change.add(this.random_range(0, svg_windows.length));
            }

            // Change the brightness of each window, toggling between "on" and "off" brightnesses
            windows_to_change.forEach(window_index => {
                const svg_window = svg_windows[window_index];
                if (svg_window[1]) {
                    // Turn the window "off" by picking a random lightness in the "off" range.
                    svg_window[0].style.fill = this.window_color_with_lightness(
                        this.random_range(
                            min_window_lightness,
                            min_window_on_lightness));
                    svg_window[1] = false;
                } else {
                    // Turn the window "on" by picking a random lightness in the "on" range.
                    svg_window[0].style.fill = this.window_color_with_lightness(
                        this.random_range(
                            min_window_on_lightness,
                            max_window_lightness));
                    svg_window[1] = true;
                }
            });
        }, frame_time);
    }

    /**
     * Returns a window color string with the specified lightness
     */
    window_color_with_lightness(lightness) {
        // This results in a yellow color of varying lightness.
        return `hsl(60,100%,${lightness}%)`;
    }

    /**
     * Returns a random number between min (inclusive) and max (exclusive)
     */
    random_range(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}
