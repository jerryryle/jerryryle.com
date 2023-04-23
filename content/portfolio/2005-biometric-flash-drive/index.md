---
title: "Biometric USB Flash Drive Concept (2005)"
date: 2005-07-01T12:00:00-08:00
draft: false
short_name: "biometric-flash-drive"
tags: 
- algorithms
- C
- cryptography
- firmware
- security
- sensors
- USB

resources:
- src: "biometric_flash_drive.svg"
  name: biometric_flash_drive
- src: "biometric_flash_drive_tiny.jpg"
  name: biometric_flash_drive_tiny

entry_media:
- image:
    resource: "biometric_flash_drive"
    lazyload: "biometric_flash_drive_tiny"
    alt: "Illustration of USB flash drives on a rack, presumably at the store. The packaging for the one biometric model ridicules the others for being less secure"
---
Biogy, a startup specializing in biometric technology, developed groundbreaking new algorithms that reduced the complexity&mdash;and thus the system cost&mdash;of scanning and matching fingerprints. They asked Mindtribe to help create a proof of concept device that incorporated their technology to secure the contents of a flash drive using fingerprints.

I created a proof of concept USB flash drive using an Atmel AT91FR4042 microcontroller and a Cypress SX2 high speed USB device interface. This built upon our previous work for Biogy's [Biometric Lock Module](#biometric-lock-module). I wrote firmware to make the hardware appear as a USB mass storage device whose contents are readable only when the correct fingerprint is scanned.
