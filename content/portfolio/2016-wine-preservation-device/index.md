---
title: "Wine Preservation Device (2016)"
date: 2016-11-01T12:00:00-08:00
draft: false
short_name: "wine-preservation-device"
tags: 
- C
- engineering management
- firmware
- low power design
- program management
- sensors
resources:
- src: "wine_preservation.svg"
  name: wine_preservation
- src: "wine_preservation_tiny.jpg"
  name: wine_preservation_tiny

entry_media:
- image:
    resource: "wine_preservation"
    lazyload: "wine_preservation_tiny"
    alt: "Illustration of a fat cat in a top hat and monocle smoking a cigar and enjoying wine dispensed from a ridiculously complex wine apparatus"
---
Frustrated with the expense and ineffectiveness of existing consumer-oriented wine preservation solutions, a startup took an innovative approach to the problem. Mindtribe to helped them refine their existing prototype and prepare it for production.

I led a team of electrical and firmware engineers to evaluate and redesign their existing prototype. The product creatively uses a minimal set of sensors to observe the ambient conditions and chemical reactions that impact wine storage. We needed to unravel a complicated set of possible conditions and events to create robust, production-intent firmware. The product was powered by a single coin cell, so we had to ensure that both the electrical and firmware systems were designed for ultra low power. This system was built around an NXP Kinetis KL03 ARM Cortex-M0+ microcontroller.
