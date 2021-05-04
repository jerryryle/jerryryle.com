---
title: "USB Video Camera Driver (2004)"
date: 2004-12-01T12:00:00-08:00
draft: false
short_name: "usb-video-camera-driver"
tags: applications, C++, sensors, USB, video

resources:
- src: "usb_camera_driver.svg"
  name: usb_camera_driver
- src: "usb_camera_driver_tiny.jpg"
  name: usb_camera_driver_tiny

entry_media:
- image:
    resource: "usb_camera_driver"
    lazyload: "usb_camera_driver"
    alt: "Illustration of a computer telling a person that their camera driver cannot be found and asking them if they would like to try writing one"
---
An optics company built a new type of camera for aerospace and medical applications. They contacted Mindtribe to help them create a Windows device driver for the camera.

I developed a Windows WDM stream-class video capture driver for Windows XP and accompanying DirectX plug-ins/filters to make the camera easy to use with DirectX applications. I also developed a command-line program to control camera parameters.

During this project, I discovered that the WDM stream-class base driver had an undocumented "feature" that caused the video pipeline to stall if the pixel at 0,0 was true black (RGB value of 0). I diagnosed this by debugging into the compiled base driver from Windows and reverse engineering it from assembly. I'm still not certain why this occurred nor why it didn't seem to impact other cameras. I can only surmise that most cameras never produce true black due to their noise floor. The camera for which I was developing did produce true black at pixel 0,0 due to an in-camera graphical overlay feature that happened to put a black square in that corner.
