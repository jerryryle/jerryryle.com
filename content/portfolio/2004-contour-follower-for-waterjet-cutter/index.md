---
title: "Contour Follower for Water Jet Cutter (2004)"
date: 2004-11-01T12:00:00-08:00
draft: false
short_name: "contour-follower-for-waterjet-cutter"
tags: C, communications protocols, firmware, sensors

resources:
- src: "Contour_Follower_Prototype.jpg"
  name: Contour_Follower_Prototype
- src: "Contour_Follower_Prototype_tiny.jpg"
  name: Contour_Follower_Prototype_tiny

- src: "Contour_Follower.jpg"
  name: Contour_Follower
- src: "Contour_Follower_tiny.jpg"
  name: Contour_Follower_tiny
- src: "Contour_Follower.mp4"
  name: Contour_Follower_mp4
- src: "Contour_Follower.ogv"
  name: Contour_Follower_ogv
- src: "Contour_Follower.webm"
  name: Contour_Follower_webm

entry_media:
- image:
    resource: "Contour_Follower_Prototype"
    lazyload: "Contour_Follower_Prototype_tiny"
    alt: "Contour Follower prototype unit"
- video:
    poster: "Contour_Follower"
    lazyload: "Contour_Follower_tiny"
    resource_mp4: Contour_Follower_mp4
    resource_webm: Contour_Follower_webm
    resource_ogv: Contour_Follower_ogv
---
Flow International, the inventor of and world leader in waterjet cutting solutions engaged Mindtribe to explore sensor technologies that would allow them to cut contoured materials. Like a laser, the water jet is focused and needs to remain at a constant distance from the material it is cutting. The ability to cut contoured material requires that the cutting machine can track the distance from the jet to the material as it cuts. The harsh environment and low-visibility in a waterjet cutter makes this a difficult problem. Mindtribe built a sensor head prototype that contacts the material and tracks distance using hall effect sensors.

I led the firmware effort for this design. The firmware runs on a Motorola (subsequently Freescale, now NXP) MC68HC908GR16 microcontroller. It samples and linearizes data from the Hall Effect sensors, applies calibration constants, and sends the sensor data to the waterjet cutter via RS485.
