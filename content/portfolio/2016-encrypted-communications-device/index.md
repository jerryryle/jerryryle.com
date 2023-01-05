---
title: "Encrypted Communications Device (2015-2016)"
date: 2016-02-01T12:00:00-08:00
draft: false
short_name: "encrypted-communications-device"
tags: applications, audio, C, communications protocols, cryptography, electrical, firmware, hiring, injection molding, iOS, low power design, manufacturing, mechanical, OTA update, program management, security, test, ultrasonic welding, USB

resources:
- src: "encrypted_communications.svg"
  name: encrypted_communications
- src: "encrypted_communications_tiny.jpg"
  name: encrypted_communications_tiny

entry_media:
- image:
    resource: "encrypted_communications"
    lazyload: "encrypted_communications_tiny"
    alt: "Illustration of an encrypted conversation between people in New York and London"
---
A startup with deep security expertise was building an iPhone accessory that secured voice calls with
strong encryption. Because of our extensive experience with iPhone accessory development, they
reached out to Mindtribe to help them debug a problem with their communications stack.

I began this program by leading a team of firmware engineers to diagnose and solve our client's
firmware issues. We quickly squashed a number of bugs and demonstrated an end-to-end encrypted call
using their hardware prototypes. The client then expanded our scope to help them finish the product
development and take it through production. I became their acting VP of Engineering and managed a
combination of our team, their team, an electrical consultant, an audio consultant, an app
development firm, a security auditor, and a contract manufacturer in the Philippines. Together, we
refined the electrical, mechanical, and firmware designs through a series of prototypes. Due to the
product's mechanical complexity, security requirements, and the required level of polish, we needed
to closely support the contract manufacturer. I repeatedly traveled to Manila with my team to help
the manufacturer through a series of builds over six months.

I worked with the startup's CEO and sales team to plan the program around their launch and
fundraising needs. Because they lacked in-house technical critical mass, I also helped them with
their hiring efforts by screening and interviewing for them. When Mindtribe disengaged, I left them
with an engineering team capable of sustaining and evolving the product line.

During this program, I had the opportunity to dive deep into some interesting technologies such as
encryption (AES, elliptic curve, and Diffie-Hellman), random number generation, realtime audio
CODECs and DSP, hardware security, injection molding, and ultrasonic welding. The system was built
with an NXP Kinetis K61 ARM Cortex-M4F microcontroller and a Cirrus Logic DSP.

The [Factory Provisioning Station for Encrypted Communications Device](#factory-provisioning-for-encrypted-communications-device)
project below details more of our factory work for this program.
