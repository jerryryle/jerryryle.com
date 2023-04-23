---
title: "Wireless Gestural Transfer Concept (2006)"
date: 2006-11-01T12:00:00-08:00
draft: false
short_name: "wireless-gestural-transfer-concept"
tags: 
- C
- communications protocols
- firmware
- sensors
- wireless

resources:
- src: "gestural_data_transfer.svg"
  name: gestural_data_transfer
- src: "gestural_data_transfer_tiny.jpg"
  name: gestural_data_transfer_tiny

entry_media:
- image:
    resource: "gestural_data_transfer"
    lazyload: "gestural_data_transfer_tiny"
    alt: "Illustration of a person hurling a phone at another person seated at a desk."
---
A design firm asked Mindtribe to help them explore the idea of transferring data with a gesture. The concept was intended to simplify the act of transferring a digital business card or a file between two people in close physical proximity by using a gesture to initiate the transfer.

I wrote C firmware for a Freescale (now NXP) MC9S08GB60 microcontroller that uses an accelerometer for gesture recognition and transfers data between devices using a Freescale MC13192 radio.
