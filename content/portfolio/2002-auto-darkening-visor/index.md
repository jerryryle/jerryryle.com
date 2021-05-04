---
title: "Auto-darkening Visor (2002)"
date: 2002-08-01T12:00:00-08:00
draft: false
short_name: "auto-darkening-visor"
tags: automotive, C, firmware, sensors

resources:
- src: "BMW_Autovisor_System_Prototype.jpg"
  name: BMW_Autovisor_System_Prototype
- src: "BMW_Autovisor_System_Prototype_tiny.jpg"
  name: BMW_Autovisor_System_Prototype_tiny

- src: "BMW_Autovisor_LCD_Prototype.jpg"
  name: BMW_Autovisor_LCD_Prototype
- src: "BMW_Autovisor_LCD_Prototype_tiny.jpg"
  name: BMW_Autovisor_LCD_Prototype_tiny

entry_media:
- image:
    resource: "BMW_Autovisor_System_Prototype"
    lazyload: "BMW_Autovisor_System_Prototype_tiny"
    alt: "Auto-darkening visor system prototype"

- image:
    resource: "BMW_Autovisor_LCD_Prototype"
    lazyload: "BMW_Autovisor_LCD_Prototype_tiny"
    alt: "Person holding an LCD prototype for the auto-darkening visor"
---
The BMW Technology Office asked Mindtribe to help them create an auto-darkening motorcycle helmet visor for racing applications. The idea was to create a helmet with an LCD dimming element that could respond to rapidly changing lighting conditions such as when a rider entered or exited a tunnel.

I wrote firmware for an [Analog Devices ADUC812](http://www.analog.com/en/products/processors-dsp/microcontrollers/8052-core-products/aduc812.html) microcontroller that samples a photocell and very precisely generates a driving waveform for the auto-dimming LCD element. I wrapped this up into a firmware application that allowed the BMW Technology Office to use a set of switches and potentiometers to adjust system parameters during their testing.
