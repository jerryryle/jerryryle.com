---
title: "Noise Canceling Headset (2004)"
date: 2004-08-01T12:00:00-08:00
draft: false
short_name: "noise-canceling-headset"
tags: C, communications protocols, firmware, reverse engineering

resources:
- src: "Jawbone_Headsets_Copyright_Mindtribe.jpg"
  name: Jawbone_Headsets_Copyright_Mindtribe
- src: "Jawbone_Headsets_Copyright_Mindtribe_tiny.jpg"
  name: Jawbone_Headsets_Copyright_Mindtribe_tiny

- src: "Jawbone_Headset_Internals_Copyright_Mindtribe.jpg"
  name: Jawbone_Headset_Internals_Copyright_Mindtribe
- src: "Jawbone_Headset_Internals_Copyright_Mindtribe_tiny.jpg"
  name: Jawbone_Headset_Internals_Copyright_Mindtribe_tiny

entry_media:
- image:
    resource: "Jawbone_Headsets_Copyright_Mindtribe"
    lazyload: "Jawbone_Headsets_Copyright_Mindtribe_tiny"
    alt: "Jawbone Bluetooth headsets"

- image:
    resource: "Jawbone_Headset_Internals_Copyright_Mindtribe"
    lazyload: "Jawbone_Headset_Internals_Copyright_Mindtribe_tiny"
    alt: "Jawbone Bluetooth headset internals"
---
Jawbone engaged Mindtribe to develop their first noise-canceling headsets. Before creating their iconic Bluetooth headsets, Jawbone showcased their noise-canceling technology via wired headsets. These connected to Nokia phones as smart accessories that&mdash;in addition to allowing users to hear each other clearly&mdash;could answer calls, change volume, etc.

I worked with Jawbone to reverse engineer the Nokia accessory protocols and write firmware for a Microchip PIC16F84A to allow the Jawbone headset to appear as a Nokia accessory.

Mindtribe also took Jawbone's first Bluetooth model through production. Our involvement was largely mechanical production support, but I helped out with firmware architecture consulting and audio device drivers for factory testing.
