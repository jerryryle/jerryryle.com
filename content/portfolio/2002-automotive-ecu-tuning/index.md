---
title: "Automotive ECU Tuning (2002-2006)"
date: 2002-12-01T12:00:00-08:00
draft: false
short_name: "automotive-ecu-tuning"
tags: 
- assembly
- automotive
- firmware
- reverse engineering

resources:
- src: "ECU_Tuning_Disassembly.png"
  name: ECU_Tuning_Disassembly
- src: "ECU_Tuning_Disassembly_tiny.jpg"
  name: ECU_Tuning_Disassembly_tiny

- src: "ECU_Tuning_ADC_Setup.png"
  name: ECU_Tuning_ADC_Setup
- src: "ECU_Tuning_ADC_Setup_tiny.jpg"
  name: ECU_Tuning_ADC_Setup_tiny

entry_media:
- image:
    resource: "ECU_Tuning_Disassembly"
    lazyload: "ECU_Tuning_Disassembly_tiny"
    alt: "Screenshot of IDA Pro ECU disassembly"

- image:
    resource: "ECU_Tuning_ADC_Setup"
    lazyload: "ECU_Tuning_ADC_Setup_tiny"
    alt: "Handwritten notes on the ADC setup for an ECU"
---
Dinan is an automotive tuner that creates high quality, after-market performance modifications for
BMWs. Their work is highly-regarded and covered by a comprehensive warranty in cooperation with BMW
of North America. Unlike software-only tuners, Dinan focuses on hardware modifications that are
supported by tuning the Engine Control Unit's (ECU) firmware to accommodate the hardware
changes.

When Dinan started out in 1979, the founders were able to look at an ECU's flash dump in a hex editor
and spot the control tables that they needed to adjust to tune an engine for a modification. As
engines became more complex, looking at the data inside the code was no longer sufficient--they
needed to understand the code itself. Dinan asked Mindtribe to help them achieve this
understanding.

Using the disassembler, [IDA Pro](https://www.hex-rays.com/products/ida/index.shtml), I helped Dinan reverse engineer the ECU firmware for several BMW models, including ones that used multi-processor ECUs. I picked apart the assembly to gain an understanding of how Dinan would need to patch the firmware for a given hardware modification. In order to upload patched firmware to an ECU, I also had to reverse engineer the handshake that the ECU performed to authenticate an authorized uploader. Depending upon the car model, this varied from being based upon a simple CRC to requiring public-key based cryptographic signatures.
