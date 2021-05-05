---
title: "OLED Keyboard (2005)"
date: 2005-10-01T12:00:00-08:00
draft: false
short_name: "oled-keyboard"
tags: applications, C, C++, firmware, graphics, USB

resources:
- src: "United_Keys_Keyboard.jpg"
  name: United_Keys_Keyboard
- src: "United_Keys_Keyboard_tiny.jpg"
  name: United_Keys_Keyboard_tiny

- src: "United_Keys_Keypad.jpg"
  name: United_Keys_Keypad
- src: "United_Keys_Keypad_tiny.jpg"
  name: United_Keys_Keypad_tiny

entry_media:
- image:
    resource: "United_Keys_Keyboard"
    lazyload: "United_Keys_Keyboard_tiny"
    alt: "United Keys OLED Keyboard"

- image:
    resource: "United_Keys_Keypad"
    lazyload: "United_Keys_Keypad_tiny"
    alt: "United Keys OLED Keypad"
---
Input device startup, United Keys, asked Mindtribe to create a prototype of a keyboard that features keys with context-aware OLED screens embedded in them. This very early precursor to the Touch Bar on Apple's current Macbook Pro allowed the keyboard to provide application-specific functions. Mindtribe created a functional prototype for United Keys' investor demonstrations.

I wrote C firmware for an Atmel AT91SAM764 ARM microcontroller to drive the LCDs and enumerate as a composite USB device that includes a keyboard and CDC interface (virtual serial port). The CDC interface provides the mechanism for exchanging image files to be displayed on the LCDs. I wrote a C++ Windows application to convert images to a format usable by the keyboard. I also wrote a C++ Browser Helper Object (BHO, aka Internet Explorer plugin) that our client used to demonstrate the keyboard's functionality. The BHO changes the functionality of the context-aware keys based upon the website that the user was currently visiting.
