---
title: "Desk Scheduling Device (2011)"
date: 2011-03-01T12:00:00-08:00
draft: false
short_name: "desk-scheduling-device"
tags:
- C
- communications protocols
- engineering management
- firmware
- low power design
- graphics
- program management
- USB
- wireless
- Zigbee

resources:
- src: "shared_desk_contention.svg"
  name: shared_desk_contention
- src: "shared_desk_contention_tiny.jpg"
  name: shared_desk_contention_tiny

entry_media:
- image:
    resource: "shared_desk_contention"
    lazyload: "shared_desk_contention_tiny"
    alt: "Illustration of two people with briefcases running for the last empty desk with two coworkers watching from their desks"
---
A design company engaged Mindtribe to help them develop a prototype for a desk scheduling device for office environments with shared desks. This was to be a small, low power, cost-effective, networked device that could be deployed to hundreds of desks in large enterprise environments.

I structured and managed this program. I worked closely with the client to understand and capture the requirements. Working with a project manager, I put together schedules and budgets for the program and worked with the team to evaluate unit costs as we underwent component selection.

We built a functional prototype that drove a display and communicated via Zigbee. We used a Renesas RX62N microcontroller, which offered a means of driving a TFT display without the expense of a full TFT interface.
