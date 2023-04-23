---
title: "Sports Watch (2008)"
date: 2008-07-01T12:00:00-08:00
draft: false
short_name: "sports-watch"
tags: 
- C
- firmware
- communications protocols
- low power design
- sensors
- wireless

resources:
- src: "sports_watch.svg"
  name: sports_watch
- src: "sports_watch_tiny.jpg"
  name: sports_watch_tiny

entry_media:
- image:
    resource: "sports_watch"
    lazyload: "sports_watch_tiny"
    alt: "Illustration of two people playing table tennis where one person is looking at cat photos on their phone while their watch plays for them"
---
An electronics manufacturer was building a new version of sports watch that worked with the Apple
iPod to control music and display sports activity information. The manufacturer was unhappy with the
performance of their existing product's design, so they engaged Mindtribe to help with the new
version.

I wrote firmware for a Silicon Laboratories [C8051F331](https://www.silabs.com/products/mcu/8-bit/c8051f33x/device.c8051f331) microcontroller that handles the sensors and watch display and transmits data wirelessly to the iPod using a Nordic [nRF2402](https://www.nordicsemi.com/eng/Products/2.4GHz-RF/nRF2402) radio. The firmware meets Apple's strict wireless communications timing specification and achieves the very low power consumption required for the battery-powered application.
