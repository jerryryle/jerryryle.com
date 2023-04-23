---
title: "Thermal Testing/Profiling Apparatus for Microprocessors (2002)"
date: 2002-10-01T12:00:00-08:00
draft: false
short_name: "thermal-testing-apparatus"
tags:
  - applications
  - C
  - C++
  - control systems
  - firmware
  - sensors

resources:
  - src: "AMD_Thermal_Tester.jpg"
    name: AMD_Thermal_Tester
  - src: "AMD_Thermal_Tester_tiny.jpg"
    name: AMD_Thermal_Tester_tiny

entry_media:
  - image:
      resource: "AMD_Thermal_Tester"
      lazyload: "AMD_Thermal_Tester_tiny"
      alt: "AMD Thermal testing hardware"
---
AMD worked with Mindtribe to build a precise thermal test platform for processor performance profiling under specific conditions. Mindtribe built a modular electrical system capable of controlling heating elements and sampling multiple thermocouples simultaneously. The system was built around the [Rabbit 2000](https://www.digi.com/support/productdetail?pid=4667) microcontroller.

I led the development team that created the firmware for this platform. This firmware handles data acquisition, logging, and control. I created a Windows application for downloading logged data and exporting it for offline analysis.
