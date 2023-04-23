---
title: "Point and Shoot Video Camera (2007)"
date: 2007-11-01T12:00:00-08:00
draft: false
short_name: "point-and-shoot-video-camera"
tags:
  - algorithms
  - C
  - firmware
  - low power design
  - OTA update
  - sensors
  - USB
  - Verilog
  - video

resources:
  - src: "Pure_Digital_Flip_Mino_Copyright_Mindtribe.jpg"
    name: Pure_Digital_Flip_Mino_Copyright_Mindtribe
  - src: "Pure_Digital_Flip_Mino_Copyright_Mindtribe_tiny.jpg"
    name: Pure_Digital_Flip_Mino_Copyright_Mindtribe_tiny

  - src: "Pure_Digital_Flip_Mino_LCD_FPGA.jpg"
    name: Pure_Digital_Flip_Mino_LCD_FPGA
  - src: "Pure_Digital_Flip_Mino_LCD_FPGA_tiny.jpg"
    name: Pure_Digital_Flip_Mino_LCD_FPGA_tiny

  - src: "Pure_Digital_Flip_Mino_Prototype.jpg"
    name: Pure_Digital_Flip_Mino_Prototype
  - src: "Pure_Digital_Flip_Mino_Prototype_tiny.jpg"
    name: Pure_Digital_Flip_Mino_Prototype_tiny

entry_media:
  - image:
      resource: "Pure_Digital_Flip_Mino_Copyright_Mindtribe"
      lazyload: "Pure_Digital_Flip_Mino_Copyright_Mindtribe_tiny"
      alt: "Pure Digital Flip Mino"

  - image:
      resource: "Pure_Digital_Flip_Mino_LCD_FPGA"
      lazyload: "Pure_Digital_Flip_Mino_LCD_FPGA_tiny"
      alt: "Pure Digital Flip Mino FPGA development boards"

  - image:
      resource: "Pure_Digital_Flip_Mino_Prototype"
      lazyload: "Pure_Digital_Flip_Mino_Prototype_tiny"
      alt: "Pure Digital Flip Mino display prototype"
---
Pure Digital engaged Mindtribe to create a new, higher end version of their point and shoot digital video camera. This product existed before mobile phones were capable of video recording and was wildly successful due to its ease of use and intuitive software for editing and sharing video. Mindtribe was responsible for taking the new hardware design from concept through manufacturing while Pure Digital focused on the application and backend software.

I structured and ran the firmware development effort, while also writing firmware myself. We were developing on a COACH 10 microprocessor from [Zoran](https://en.wikipedia.org/wiki/Zoran_Corporation). This was the first revision of this microcontroller capable of recording video at the framerate and resolution that Pure Digital required, so we were highly incentivized to use it even though it was newly-released and unproven. We completed our electrical design based upon the new chip before the vendor had finished their own development board, so our first firmware task was to bring up a new BSP on our own hardware and debug it with the vendor&mdash;effectively proving out their silicon and software along with them. I got the video pipeline working and wrote drivers for all of the peripherals, including the imaging sensor and LCD.

We wanted to use a new, high quality LCD that wasn't directly compatible with the TFT interface on the COACH 10, so I created a smart signal adapter using a Lattice CPLD programmed in Verilog HDL. This converts the TFT signals to drive with the LCD and injects commands into the pixel stream to control the LCD's horizontal and vertical sync.

I also wrote the firmware for a Cypress CY8C21434 PSoC that handles both system power management and capacitive touch inputs for the user interface.
