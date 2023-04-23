---
title: "Smart Power Supply (2001)"
date: 2001-08-01T12:00:00-08:00
draft: false
short_name: "smart-power-supply"
tags: 
- applications
- audio
- C
- communications protocols
- electrical
- firmware
- manufacturing
- networks
- security
- test

resources:
- src: "CyberSwitching_Tricom_Front_And_Back_Copyright_Mindtribe.jpg"
  name: CyberSwitching_Tricom_Front_And_Back_Copyright_Mindtribe
- src: "CyberSwitching_Tricom_Front_And_Back_Copyright_Mindtribe_tiny.jpg"
  name: CyberSwitching_Tricom_Front_And_Back_Copyright_Mindtribe_tiny

- src: "CyberSwitching_Tricom_Front_With_And_Without_Lid_Copyright_Mindtribe.jpg"
  name: CyberSwitching_Tricom_Front_With_And_Without_Lid_Copyright_Mindtribe
- src: "CyberSwitching_Tricom_Front_With_And_Without_Lid_Copyright_Mindtribe_tiny.jpg"
  name: CyberSwitching_Tricom_Front_With_And_Without_Lid_Copyright_Mindtribe_tiny

- src: "CyberSwitching_Tricom_Interior_Copyright_Mindtribe.jpg"
  name: CyberSwitching_Tricom_Interior_Copyright_Mindtribe
- src: "CyberSwitching_Tricom_Interior_Copyright_Mindtribe_tiny.jpg"
  name: CyberSwitching_Tricom_Interior_Copyright_Mindtribe_tiny

entry_media:
- image:
    resource: "CyberSwitching_Tricom_Front_And_Back_Copyright_Mindtribe"
    lazyload: "CyberSwitching_Tricom_Front_And_Back_Copyright_Mindtribe_tiny"
    alt: "Front and back of a Cyber Switching Tricom unit"

- image:
    resource: "CyberSwitching_Tricom_Front_With_And_Without_Lid_Copyright_Mindtribe"
    lazyload: "CyberSwitching_Tricom_Front_With_And_Without_Lid_Copyright_Mindtribe_tiny"
    alt: "A Cyber Switching Tricom unit with and without a lid"

- image:
    resource: "CyberSwitching_Tricom_Interior_Copyright_Mindtribe"
    lazyload: "CyberSwitching_Tricom_Interior_Copyright_Mindtribe_tiny"
    alt: "The inside of a Cyber Switching Tricom unit"
---
[Cyber Switching](https://www.cyberswitching.com/) engaged Mindtribe to develop their first product: a smart power strip that would allow users to remotely monitor and control appliances.

Cyber Switching originally envisioned their product simply as a way to allow network administrators to reboot frozen routers remotely. As the program progressed and they spoke to customers, it became clear that the product needed to offer more. Luckily, Mindtribe's agile approach allowed us to keep up with Cyber Switching's evolving understanding of their market. We worked closely with them to help them understand feasibility and costs. We ultimately arrived at a product that could control appliances, but also monitor their power usage and provide alerts or even shut off power when configurable conditions were encountered.

The product offers three physical interfaces

* RS232 - compatible with legacy IT equipment, this interface provides a complete user interface for monitoring, control, and configuration.
* Telephone - this allows administrators to connect the unit to a phone line. They can then dial into it and control/monitor outlets via audio prompts and DTMF input. I worked with contracted voice talent to prepare the script and audio samples that would fit in our limited flash space.
* LAN - this interface allows the units to participate on networks via a number of protocols: HTTP, SNMP, SNTP, and Telnet

I helped with the electrical design of this product and wrote almost all of the firmware. This product was built around the [Rabbit 2000](https://www.digi.com/support/productdetail?pid=4667) microcontroller&mdash;the most accessible TCP/IP-enabled microcontroller at the time. While the microcontroller vendor provided some of the network protocol libraries, I extended most of them and built the SNMP agent from scratch. I also built a dynamic, embedded web page for the product that allowed for near realtime control/monitoring long before AJAX methods were established for doing such things. The microcontroller wasn't capable of TLS at the time; however, I extended the HTTP server with an [HTTP digest authentication](https://en.wikipedia.org/wiki/Digest_access_authentication) mechanism. This type of HTTP authentication was never widely adopted due to the rise of TLS, but it allowed Cyber Switching to provide a cost-effective authentication method that was more secure than sending the credentials in plaintext. At the time, this was above and beyond the industry standard for security in similar embedded devices and it became a selling point for the product that appealed to IT admins.

My codebase was leveraged to build over sixteen products during Cyber Switching's formative years.
