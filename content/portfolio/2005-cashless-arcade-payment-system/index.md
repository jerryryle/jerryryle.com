---
title: "Cashless Arcade Game Payment System (2005)"
date: 2005-12-01T12:00:00-08:00
draft: false
short_name: "cashless-arcade-payment-system"
tags:
  - algorithms
  - C
  - communications protocols
  - firmware
  - graphics
  - networks
  - sensors

resources:
  - src: "Cashless_Arcade_Payment_System.jpg"
    name: Cashless_Arcade_Payment_System
  - src: "Cashless_Arcade_Payment_System_tiny.jpg"
    name: Cashless_Arcade_Payment_System_tiny

entry_media:
  - image:
      resource: "Cashless_Arcade_Payment_System"
      lazyload: "Cashless_Arcade_Payment_System_tiny"
      alt: "Photo of a cashless arcade payment system unit with an arcade in the background"
---
Ideal Software Systems makes cashless payment systems for the entertainment industry. They approached Mindtribe looking to overhaul their existing hardware's industrial design, reduce system cost, and add features. The device electrically interfaces with arcade games to replace coin acceptors and ticket dispensers. There's no standard for these and the build quality varies wildly, so our client's device had to offer configuration options that would handle numerous voltages, poorly-grounded signals, transients, etc. The device also needed to survive attempted vandalism and having Skee-Balls chucked at it.

I helped architect the new system and led the firmware development effort. The system was built around a [Rabbit 2000](https://www.digi.com/support/productdetail?pid=4667) microcontroller and we wrote firmware in C. One of our cost reduction measures was to replace a very expensive RS232 barcode scanner module with an inexpensive, largely mechanical module that did no onboard processing. This meant we needed to do the signal acquisition and barcode processing ourselves. Ease of barcode scanning and low cost were both key to the adoption of this system in arcades. Low cost meant that the cashless play cards were printed using extremely cheap technology, so the barcodes were of poor quality--often with gaps or blurred edges. I developed my own algorithms to maximize scan success by applying various error corrections to the scanned signal. With these, we were able to achieve scan success rates better than the original, expensive barcode module (as determined by user tests) at a fraction of the cost.

Along with barcode scanning, I wrote firmware to precisely measure and generate signals to fool the arcade games into thinking they were receiving quarters or dispensing tickets at the appropriate times and to display status on the device's graphical LCD.

The device also participated on a LAN to exchange data with Ideal's backend database. I wrote all of the the networking firmware for the new system and worked with Ideal to ensure the devices behave well when hundreds are deployed onto the same network.
