---
title: "Picoliter Dispenser for Medical Device Testing (2003)"
date: 2003-12-01T12:00:00-08:00
draft: false
short_name: "picoliter-dispenser"
tags: applications, C++, communications protocols, medical, Windows

resources:
- src: "Picoliter_Dispenser.jpg"
  name: Picoliter_Dispenser
- src: "Picoliter_Dispenser_tiny.jpg"
  name: Picoliter_Dispenser_tiny

entry_media:
- image:
    resource: "Picoliter_Dispenser"
    lazyload: "Picoliter_Dispenser_tiny"
    alt: "Photo of a picoliter print head and illustration of the piezo dispensing action"
---
A medical device startup needed to precisely dispense very tiny droplets of fluid for testing and
characterization of their product. They asked Mindtribe to help them drive a piezoelectric dispenser
for this purpose.

I created a Windows application that controls a 3NETICS PicoSpot piezoelectric dispensing head over
an RS485 link (via an off-the-shelf RS485 to RS232 adapter). The application gave our client fine
control over the quantity and location of the dispensed fluid.
