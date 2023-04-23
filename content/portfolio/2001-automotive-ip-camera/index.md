---
title: "Automotive IP Camera (2001)"
date: 2001-10-01T12:00:00-08:00
draft: false
short_name: "automotive-ip-camera"
tags:
  - applications
  - automotive
  - C
  - communications protocols
  - firmware
  - Java
  - Linux
  - networks
  - sensors
  - USB
  - video

resources:
  - src: "BMW_IP_Camera.jpg"
    name: BMW_IP_Camera
  - src: "BMW_IP_Camera_tiny.jpg"
    name: BMW_IP_Camera_tiny

entry_media:
  - image:
      resource: "BMW_IP_Camera"
      lazyload: "BMW_IP_Camera_tiny"
      alt: "Agilent imaging sensor with multimeter probes"
---
The BMW Technology Office was exploring the integration of an IP-based LAN inside a car. Cars use
several CAN and other proprietary buses, which make it difficult to add new devices to a car's
network. Using a standardized LAN could open up new integration and interoperability possibilities.
As a part of their exploration, the BMW Technology Office asked Mindtribe to help develop an IP
video camera to stream video over an in-car LAN. For a demonstration, the video was to be streamed
simultaneously to a web browser on the car's head unit and to a laptop outside of the car.

At the time, IP-based video cameras were not commonplace. Though a few did exist, they were too large
to integrate into a car. Mindtribe built a tightly integrated IP camera using a new USB imaging
sensor from Agilent and a small embedded Linux computer based upon the [AXIS Communications
ETRAX 100LX](http://developer.axis.com/old/products/etrax100lx/) processor.

I specified and configured the embedded Linux computer, wrote a Linux device driver for the imaging
sensor, created a Linux streaming video service, and wrote a Java web applet to connect to the video
service and decode/display the streaming video. I learned that I should not make presumptuous
graphical design decisions and that large, multinational corporations have logo usage guidelines
that do not include their logo's use as a spinning loading icon while buffering video. The BMW
Technology Office gave me polite feedback and graphical assets to use in the logo's stead. They
received the end result with acclaim.
