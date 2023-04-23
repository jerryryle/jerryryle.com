---
title: "Secure, Mobile Point of Sale System (2012)"
date: 2012-02-01T12:00:00-08:00
draft: false
short_name: "secure-mobile-pos"
tags: 
- C
- communications protocols
- cryptography
- engineering management
- firmware
- hiring
- iOS
- low power design
- program management
- security
- USB

resources:
- src: "Square_Stand_Copyright_Mindtribe.jpg"
  name: Square_Stand_Copyright_Mindtribe
- src: "Square_Stand_Copyright_Mindtribe_tiny.jpg"
  name: Square_Stand_Copyright_Mindtribe_tiny

entry_media:
- image:
    resource: "Square_Stand_Copyright_Mindtribe"
    lazyload: "Square_Stand_Copyright_Mindtribe_tiny"
    alt: "Square Stand"
---
Square kicked Mindtribe off on their Point of Sale system design as we were wrapping up their [Secure Mobile Card Reader](#secure-mobile-card-reader). The system, known as the Square Stand, is intended to appeal to brick-and-mortar stores that need a more professional solution than the Mobile Card Reader offered. The Stand leverages an iPad for its display and connectivity and allows users to connect barcode scanners, cash drawers, and receipt printers through its USB hub.

I structured and ran this program from concept through manufacturing. By this time, Square had a sizable mechanical engineering team and a growing electrical team. Mindtribe led the firmware development, contributed to the electrical design, and supported the mechanical design. I provided cross-functional engineering management to keep the efforts in sync&mdash;often collocating at Square's office and working with Square's new VP of hardware to understand and manage the requirements and development effort.

I contributed significantly to the firmware itself, kicking off the production codebase that ran on an ST STM32F207VE ARM Cortex-M3 microcontroller. The Apple iPad does not directly support accessories such as receipt printers, so our firmware's primary job was to act as a USB host for the peripherals and shuttle data between them and the iPad using Apple's proprietary accessory protocol. We also advanced our work from the Mobile Card Reader project and built a new, secure, dual-sided magnetic stripe reader for the Stand.

I oversaw the work performed by Mindtribe and Square, managed an iOS consultant who helped us develop a stand SDK and test app, managed multiple hardware/software vendor relationships, and managed the Stand's security auditing. As we transitioned the Stand to production, I helped Square set up the manufacturing line at a contract manufacturer in Mexico, flying down repeatedly to ensure smooth builds to keep us on schedule.

During the Stand development, I helped Square interview, hire, and train their first firmware developers and left Square with a team that was capable of sustaining and evolving the product line.
