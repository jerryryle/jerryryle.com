---
title: "Scent Delivery System (2004)"
date: 2004-04-01T12:00:00-08:00
draft: false
short_name: "scent-delivery-system"
tags: applications, electrical, reverse engineering, Windows

resources:
- src: "scent_dispenser.svg"
  name: scent_dispenser
- src: "scent_dispenser_tiny.jpg"
  name: scent_dispenser_tiny

entry_media:
- image:
    resource: "scent_dispenser"
    lazyload: "scent_dispenser_tiny"
    alt: "Illustration of a machine dispensing skunk scent by blowing air across a live skunk towards a person watching TV"
---
A startup was working on a novel scent delivery system that could precisely deliver a puff of scent
to a targeted location in a room. This was intended for entertainment or advertising applications
where one might care to target a single individual instead of filling a room with scent. The startup
worked with Mindtribe to diagnose electrical noise in their system and improve the design.

I assisted with the electrical design overhaul and improvements to our client's Windows demonstration
application. Unfortunately, the client had lost the demonstration application's source code they had
previously written. Of course, this occurred days before a major demonstration of their technology
to investors and they needed to modify the app for the demonstration. I was able to reverse engineer
the application binary and patch it with the desired modifications in time for the demonstration.
When things calmed down after the big investor demo, I took a moment to teach our client how to use
a source control system to prevent future incidents of this nature.
