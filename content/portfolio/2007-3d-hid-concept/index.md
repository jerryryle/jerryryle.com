---
title: "3D Human Interface Device Concept (2007)"
date: 2007-10-01T12:00:00-08:00
draft: false
short_name: "3d-hid-concept"
tags: C, firmware, sensors, USB

resources:
- src: "placeholder.svg"
  name: placeholder
- src: "placeholder_tiny.jpg"
  name: placeholder_tiny

entry_media:
- image:
    resource: "placeholder"
    lazyload: "placeholder_tiny"
    alt: "Placeholder illustration of a person in a museum looking at a picture that says, 'image coming soon'"
---
Having achieved success in the gaming market with their {{<scrollanchor href="#3d-mouse">}}3D Mouse{{</scrollanchor>}}, Sandio began exploring new 3D input device concept that used a fusion of multiple touchpads to provide precise and intuitive 3D control of virtual objects.

I structured and managed the electrical and firmware development effort for this program. The firmware was written in C for a Cypress CY7C64215 microcontroller. It appears as a USB HID device and translates the touchpad input into 3D control.
