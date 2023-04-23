---
title: "Automotive Sensor Data Visualization (2001)"
date: 2001-11-01T12:00:00-08:00
draft: false
short_name: "automotive-sensor-visualization"
tags:
  - automotive
  - C
  - communications protocols
  - firmware
  - sensors

resources:
  - src: "automotive_sensor_visualization.svg"
    name: automotive_sensor_visualization
  - src: "automotive_sensor_visualization_tiny.jpg"
    name: automotive_sensor_visualization_tiny

entry_media:
  - image:
      resource: "automotive_sensor_visualization"
      lazyload: "automotive_sensor_visualization_tiny"
      alt: "Illustration of a navigation system displaying a useless visualization of whether or not a car has crashed as a car attempts to parallel park"
---
The BMW Technology Office was investigating new ways of presenting Park Distance Controller information. Existing systems used audio tones to inform drivers how close they were to adjacent cars when parking. These tones could compound an already stressful situation.

To get the data from the Park Distance Controller sensors, I wrote a complete protocol stack for BMW's K-Bus&mdash;a low-speed, proprietary bus over which non-critical automotive information is transmitted in BMWs. I then used this data to drive a display that demonstrates the BMW Technology Office's concept. The system is based upon a Motorola (subsequently Freescale, now NXP) MC68HC912 microcontroller.
