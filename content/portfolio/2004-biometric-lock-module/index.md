---
title: "Biometric Lock Module (2004)"
date: 2004-09-01T12:00:00-08:00
draft: false
short_name: "biometric-lock-module"
tags:
  - algorithms
  - C
  - C++
  - cryptography
  - firmware
  - security
  - sensors

resources:
  - src: "biometric_lock_module.svg"
    name: biometric_lock_module
  - src: "biometric_lock_module_tiny.jpg"
    name: biometric_lock_module_tiny

entry_media:
  - image:
      resource: "biometric_lock_module"
      lazyload: "biometric_lock_module_tiny"
      alt: "Illustration of a person appearing dismayed as they realize they have no fingers to scan to open a door that has a biometric lock"
---
Biogy, a startup specializing in biometric technology, developed groundbreaking new algorithms that reduced the complexity&mdash;and thus the system cost&mdash;of scanning and matching fingerprints. They asked Mindtribe to help prepare their algorithms for production and to produce a hardware reference design that would showcase their technology. This design was to be a lock that could be opened or closed with the correct fingerprint.

I worked closely with the mathematician who developed the fingerprint algorithms to port them to embedded C code that runs on an Atmel AT91FR4042 microcontroller and acquires fingerprints via an Atmel AT77C101B thermal fingerprint sensor. To make theft of their intellectual property more difficult, Biogy wished to keep their firmware encrypted with AES in the microcontroller's flash. The fingerprint algorithms operate in several discrete and independent phases, so I divided the code up by phase, linked each into the same location in RAM using overlays, and wrote an elf encryption tool to encrypt each phase's compiled code. I built a runtime loader that would load the current phase's encrypted code from flash into RAM, decrypt it, perform the phase's function, and then zero RAM before proceeding to the next phase. Clearly this scheme isn't foolproof, but it increases the effort required to steal and reverse engineer the intellectual property.

I later built upon this work to create a [Biometric Flash Drive](#biometric-flash-drive) proof of concept for Biogy.
