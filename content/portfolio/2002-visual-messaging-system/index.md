---
title: "Visual Messaging System (2002)"
date: 2002-09-01T12:00:00-08:00
draft: false
short_name: "visual-messaging-system"
tags: applications, automotive, C, C++, CAN, firmware, graphics, Windows CE

resources:
- src: "BMW_Visual_Messaging_System.jpg"
  name: BMW_Visual_Messaging_System
- src: "BMW_Visual_Messaging_System_tiny.jpg"
  name: BMW_Visual_Messaging_System_tiny

entry_media:
- image:
    resource: "BMW_Visual_Messaging_System"
    lazyload: "BMW_Visual_Messaging_System_tiny"
    alt: "Example of a driver receiving information during a race via a visual messaging system"
---
The BMW Technology Office was working with a specialist to create optics for a heads up display in a racing helmet. They contacted Mindtribe to produce electronics for this helmet concept. The helmet would receive messages from a pit crew via a radio on the car's CAN bus. The helmet would then display graphics pertaining to the messages through the special optics. Drivers would be able to see both these graphics and the road simultaneously without refocusing their eyes.

To drive the VGA microdisplay attached to the optics, we specified a Pentium based [C2i-PR5-266](https://pfu-systems.eol.parts/products-c/c2i-pr5-266.htm) Single Board Computer (SBC) from PFUSystems. To connect to the CAN bus, we built a custom CAN-to-RS232 bridge using a Microchip PIC16F876 microprocessor and Philips (now NXP) PCA82C250N CAN transceiver. I wrote the firmware for the CAN bridge. I also configured and built the Windows CE BSP for the SBC and created a Windows CE application to display the graphics.
