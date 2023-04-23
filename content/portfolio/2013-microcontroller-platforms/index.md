---
title: "Microcontroller Platforms (2013-2017)"
date: 2014-05-01T12:00:00-08:00
draft: false
short_name: "microcontroller-platforms"
tags:
  - C
  - electrical
  - engineering management
  - firmware
  - Linux
  - program management
  - sensors
  - test

resources:
  - src: "Microcontroller_Platform.jpg"
    name: Microcontroller_Platform
  - src: "Microcontroller_Platform_tiny.jpg"
    name: Microcontroller_Platform_tiny

entry_media:
  - image:
      resource: "Microcontroller_Platform"
      lazyload: "Microcontroller_Platform_tiny"
      alt: "Photo of a Stellaris Launchpad development board from Texas Instruments"
---
Mindtribe is always looking for ways to build products faster. One such method is to invest in
intellectual property development that's ready for reuse on projects. To this end, we created
several microcontroller platforms with electrical reference designs and production-oriented firmware
codebases.

I led programs to create the following platforms:

* Corgi - A general-purpose microcontroller platform based upon the [TI TM4C12x](https://www.ti.com/microcontrollers/other-mcus/overview.html) (formerly Stellaris) Cortex-M4F processor line. We created a microcontroller motherboard that hosts daughterboards called "pups". Inspired by Arduino shields, the pups extend the platform's functionality with sensors, actuators, battery chargers, etc. The schematics/layouts are created in Altium using our production workflow, so reusing the work is trivial. I personally created a firmware codebase that demonstrates a driver model with example programs and supports a production build system with unit tests. This platform became an important part of Mindtribe's hiring and onboarding efforts. We use the system in interviews and new hires extend it to learn our development and production workflows.
* Flea - A Bluetooth LE microcontroller platform based upon the [Nordic Semiconductor nrf51822](https://www.nordicsemi.com/eng/Products/Bluetooth-low-energy/nRF51822) BLE microcontroller. Schematics and code were built according to our production workflow. This was a highly leveraged platform that kickstarted multiple client programs.
* CARL - A high-end microcontroller platform based upon the NXP i.MX6 ARM Cortex-A microcontroller. This platform runs Linux and is capable of video processing and streaming applications.
