---
title: "Mobile Video Communications (2010)"
date: 2010-12-01T12:00:00-08:00
draft: false
short_name: "mobile-video-communications"
tags:
  - C
  - C++
  - communications protocols
  - engineering management
  - firmware
  - graphics
  - program management
  - USB
  - video
  - WiFi
  - wireless

resources:
  - src: "mobile_video_communications.svg"
    name: mobile_video_communications
  - src: "mobile_video_communications_tiny.jpg"
    name: mobile_video_communications_tiny

entry_media:
  - image:
      resource: "mobile_video_communications"
      lazyload: "mobile_video_communications_tiny"
      alt: "Illustration of a person on a telepresence robot about to be pranked by two coworkers with a tripwire"
---
A large electronics firm engaged Mindtribe to help them create a prototype of a mobile video communications device.

I helped manage the program, specify the system architecture, manage an application development consultant, and write video streaming firmware. We used a TI TMS320DM368 DaVinci digital media processor running Linux. We built drivers for the camera, LCD, and peripherals. We created a Linux BSP and SDK that included QT for the application developers and we integrated the newly-released SkypeKit SDK to support Skype video calling over WiFi.
