---
title: "Infrared Remote Control for iPod (2002)"
date: 2002-11-01T12:00:00-08:00
draft: false
short_name: "infrared-remote-control-for-ipod"
tags: assembly, C, firmware, manufacturing, sensors, test, wireless

resources:
- src: "Ten_Navipod.jpg"
  name: Ten_Navipod
- src: "Ten_Navipod_tiny.jpg"
  name: Ten_Navipod_tiny

- src: "Ten_Navipod_Test_Tool.jpg"
  name: Ten_Navipod_Test_Tool
- src: "Ten_Navipod_Test_Tool_tiny.jpg"
  name: Ten_Navipod_Test_Tool_tiny

entry_media:
- image:
    resource: "Ten_Navipod"
    lazyload: "Ten_Navipod_tiny"
    alt: "Ten Technologies Navipod units"

- image:
    resource: "Ten_Navipod_Test_Tool"
    lazyload: "Ten_Navipod_Test_Tool_tiny"
    alt: "Factory test tool for Ten Technologies Navipod manufacturing"
---
Consumer electronics startup, Ten Technology, engaged Mindtribe to create an infrared remote control for the iPod. This allows users to control their music collection from across the room. Ten's remote control has the honor of being the first "smart" iPod accessory and it pioneered Apple's official Made for iPod program that launched the market for smart accessories.

At the time, Apple did not yet have an official connected accessory program for the iPod. So, I used an oscilloscope and my knowledge of communications protocols to reverse engineer Apple's wired remote control. I then helped write the assembly code that receives IR remote commands and translates them into iPod control commands, running on a tiny [Microchip PIC12C508A](https://www.microchip.com/wwwproducts/en/PIC12C508A).

Ten Technology demonstrated their remote control prototype to Apple in the hopes of having it sold in Apple Stores. Apple was impressed with the polish and utility of the product. They gave us a tiny text file with the official protocol specification and told Ten that if they could revise the product to support an upcoming iPod model, Apple would not only carry Ten's product in the Apple Store, but they would mention it at the launch for the new iPod. And thus the Made for iPod program was born. We worked around the clock to revise the product and hit the launch.

In addition to working on the remote control itself, Mindtribe helped Ten through manufacturing and created manufacturing test tools for factory operator use. We built the test tools around the [Rabbit 2000](https://www.digi.com/support/productdetail?pid=4667) microcontroller and wrote the test firmware in a mixture of C and assembly.
