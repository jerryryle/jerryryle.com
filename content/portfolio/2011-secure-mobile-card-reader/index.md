---
title: "Secure, Mobile Credit Card Reader (2011)"
date: 2011-05-01T12:00:00-08:00
draft: false
short_name: "secure-mobile-card-reader"
tags: C, communications protocols, cryptography, firmware, low power design, program management, security

resources:
- src: "Square_Reader_Copyright_Mindtribe.jpg"
  name: Square_Reader_Copyright_Mindtribe
- src: "Square_Reader_Copyright_Mindtribe_tiny.jpg"
  name: Square_Reader_Copyright_Mindtribe_tiny

- src: "Square_Reader_Inside_Copyright_Mindtribe.jpg"
  name: Square_Reader_Inside_Copyright_Mindtribe
- src: "Square_Reader_Inside_Copyright_Mindtribe_tiny.jpg"
  name: Square_Reader_Inside_Copyright_Mindtribe_tiny

entry_media:
- image:
    resource: "Square_Reader_Copyright_Mindtribe"
    lazyload: "Square_Reader_Copyright_Mindtribe_tiny"
    alt: "Square Reader front and side"

- image:
    resource: "Square_Reader_Inside_Copyright_Mindtribe"
    lazyload: "Square_Reader_Inside_Copyright_Mindtribe_tiny"
    alt: "Square Reader opened, showing internals"
---
Square engaged Mindtribe to help them create a secure and more reliable version of their mobile
credit card reader. We helped them take this from concept through production. The design needed to
be secure, but very low cost and very low power.

I structured and ran the firmware development effort for this reader. I worked with Square to
understand the security requirements and kicked off the production codebase. I then handed it off to
my team and managed the remainder of the development, overseeing our work and providing technical
expertise.

We managed to pack magnetic stripe signal capture, signal decoding, AES encryption (with chaining,
message authentication, and a nonce), tamper resistance, and data transmission into a tiny TI MSP430
with 8KB of flash and 256 *bytes* of RAM. We developed the encryption code with outside
security experts and had them audit our work for security purposes.

We worked with Square's security team to set up a factory programming workflow in China, including
secure key injection using a hardware security module.
