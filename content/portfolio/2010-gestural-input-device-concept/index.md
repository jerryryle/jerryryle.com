---
title: "Gestural Input Device Concept (2010)"
date: 2010-04-01T12:00:00-08:00
draft: false
short_name: "gestural-input-device-concept"
tags:
  - algorithms
  - C
  - engineering management
  - firmware
  - program management
  - USB

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
An input device company asked Mindtribe to help them explore a novel way of providing low-cost
multi-touch input using capacitive sensing elements and a traditional single-touch touchpad.

I structured and managed a program to develop firmware for a Cypress CY8C24894 PSoC. This firmware
enumerates as a USB HID device and combines capacitive sensing elements and touchpad data to emulate
a multitouch input device.
