---
title: "Warfare Training System (2005)"
date: 2005-08-01T12:00:00-08:00
draft: false
short_name: "warefare-training-system"
tags:
  - algorithms
  - C
  - C++
  - communications protocols
  - firmware
  - GPS
  - sensors
  - wireless

resources:
  - src: "warfare_training_system.svg"
    name: warfare_training_system
  - src: "warfare_training_system_tiny.jpg"
    name: warfare_training_system_tiny

entry_media:
  - image:
      resource: "warfare_training_system"
      lazyload: "warfare_training_system_tiny"
      alt: "Illustration of two people playing a video game with tanks"
---
SRI International built a system called DFIRST&trade; that uses GPS satellites, wireless communications, and digital terrain map displays to create an instrumented environment for combat unit training. This system allows a unit to run through a training exercise and then analyze it later in a video-game like setting. SRI awarded Mindtribe "Subcontractor of the Year" for our work in helping them realize this system.

I led a large development effort to create firmware for multiple interface systems that gather and fuse disparate sensor data and transmit it wirelessly to a base station. The sensors include GPS, accelerometers, gyroscopes, and inclinometers. Each interface system runs on battery power and provides a local UI for configuration and diagnostics. The systems incorporate numerous processors including PIC microcontrollers and x86 single board computers.
