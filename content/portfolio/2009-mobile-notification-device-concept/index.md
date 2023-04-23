---
title: "Mobile Notification Device Concept (2009)"
date: 2009-11-01T12:00:00-08:00
draft: false
short_name: "mobile-notification-device-concept"
tags:
  - algorithms
  - C
  - firmware
  - graphics

resources:
  - src: "mobile_notification_device.svg"
    name: mobile_notification_device
  - src: "mobile_notification_device_tiny.jpg"
    name: mobile_notification_device_tiny

entry_media:
  - image:
      resource: "mobile_notification_device"
      lazyload: "mobile_notification_device_tiny"
      alt: "Illustration of a drone holding a sign that says, 'call mom', hovering near a person leaving a building"
---
A large consumer electronics company was creating a smart watch that would allow users to see incoming call and text information on their wrists. They asked Mindtribe to help with specific technical investigations and proofs of concept.

I helped develop OLED display drivers and optimized routines for scrolling and navigating graphical data on an OLED from a very resource constrained microcontroller. I delivered C code that demonstrates these routines, running on TI LM3S9B96 and LM3S1811 microcontrollers.
