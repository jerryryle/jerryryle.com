---
title: "3D Mouse (2004)"
date: 2004-07-01T12:00:00-08:00
draft: false
short_name: "3d-mouse"
tags: C, firmware, sensors, USB

resources:
- src: "Sandio_3D_Mouse.jpg"
  name: Sandio_3D_Mouse
- src: "Sandio_3D_Mouse_tiny.jpg"
  name: Sandio_3D_Mouse_tiny

entry_media:
- image:
    resource: "Sandio_3D_Mouse"
    lazyload: "Sandio_3D_Mouse_tiny"
    alt: "Sandio 3D Mouse"
---
Input device startup, Sandio, had a dream of making 3D computer input cost-effective. Existing market solutions were expensive and complicated. Sandio's idea was to simplify the problem and provide a set of intuitive 3D manipulation controls using creative additions to a commodity mouse design. By adding three joysticks to a mouse design, Sandio was able to achieve straightforward 3D rotation and translation for minimal additional cost. Mindtribe helped Sandio take their design from concept through production with electrical, mechanical, and firmware support.

I led the firmware development effort and wrote production firmware for a [Cypress CY7C63413](http://www.cypress.com/part/cy7c63413c-pvxc) microcontroller, which provides both the 3D and the basic USB mouse functionality using an Agilent imaging sensor. On this project, I experienced the frustration of not being able to trust the compiler. The only available compiler for this microcontroller merrily generated invalid code for certain valid (and pedestrian) C constructs. My development cycle involved coding, compiling, and checking the assembly output listing for errors before bothering to try downloading and running the firmware. I don't recommend this, but I did manage to get the product shipped on time.
