---
title: "Handheld Gestural Input Device Concept (2001)"
date: 2001-09-01T12:00:00-08:00
draft: false
short_name: "handheld-gestural-input-device"
tags: Adobe Flash, applications, C++, firmware, graphics, sensors, Windows CE

resources:
- src: "gestural_input_device.svg"
  name: gestural_input_device
- src: "gestural_input_device_tiny.jpg"
  name: gestural_input_device_tiny

entry_media:
- image:
    resource: "gestural_input_device"
    lazyload: "gestural_input_device_tiny"
    alt: "Illustration of person on a bus wildly gesturing with a mobile device--to the dismay of other passengers"
---
A consumer electronics company wanted to explore the use of gestural navigation in a handheld device. They wanted to see how it would feel if the device's screen acted more like a "window" to content underneath. That is, instead of scrolling the content with your finger, you moved the device itself in space over content that appeared to remain stationary underneath. To prototype this, we instrumented an [HP iPAQ](https://en.wikipedia.org/wiki/IPAQ) handheld device with gyroscopes and distance sensors. I wrote firmware to process the sensors and send the data to a Windows CE application that allows a user to navigate a section of a map by moving the iPAQ around. The first application version panned and zoomed a bitmap image of the map, which did not allow for enough zoom without looking "fuzzy". I then tried embedding an Adobe Flash player in the app to use vector-based content; however, this heavyweight component did not yield acceptable performance and felt too sluggish. I then tinkered with bitmap tiling to achieve better resolution within the iPAQ's limited resources, but ultimately wrote an SVG parser/renderer (none existed for Windows CE at the time) and dramatically improved the experience with lightweight vector graphics support.

This concept proved to be a very fun toy, but we thought it impractical for serious use. Our client concluded similarly.
