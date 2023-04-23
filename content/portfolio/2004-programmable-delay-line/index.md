---
title: "Programmable Delay Line (2004)"
date: 2004-10-01T12:00:00-08:00
draft: false
short_name: "programmable-delay-line"
tags:
  - C
  - communications protocols
  - firmware
  - motors
  - networks

resources:
  - src: "Colby_Delay_Line_1.jpg"
    name: Colby_Delay_Line_1
  - src: "Colby_Delay_Line_1_tiny.jpg"
    name: Colby_Delay_Line_1_tiny

  - src: "Colby_Delay_Line_2.jpg"
    name: Colby_Delay_Line_2
  - src: "Colby_Delay_Line_2_tiny.jpg"
    name: Colby_Delay_Line_2_tiny

  - src: "Colby_Delay_Line_3.jpg"
    name: Colby_Delay_Line_3
  - src: "Colby_Delay_Line_3_tiny.jpg"
    name: Colby_Delay_Line_3_tiny

entry_media:
  - image:
      resource: "Colby_Delay_Line_1"
      lazyload: "Colby_Delay_Line_1_tiny"
      alt: "Colby Programmable Delay Line trombone assembly in shortest delay position"

  - image:
      resource: "Colby_Delay_Line_2"
      lazyload: "Colby_Delay_Line_2_tiny"
      alt: "Colby Programmable Delay Line trombone assembly in intermediate delay position"

  - image:
      resource: "Colby_Delay_Line_3"
      lazyload: "Colby_Delay_Line_3_tiny"
      alt: "Colby Programmable Delay Line trombone assembly in longest delay position"
---
Colby Instruments, the industry leader in high-precision programmable delay line instruments, needed to upgrade their design from an Intel 8085 microcontroller board that had been obsoleted and was no longer available. They asked Mindtribe to replace the controller with a [Rabbit 2000](https://www.digi.com/support/productdetail?pid=4667)-based module.

I supported the electrical redesign and led the firmware development effort. The delay line uses a stepper motor to adjust the length of an electromechanical "trombone" that physically alters the length of a signal path to precisely delay a signal. We were able to use the old firmware as a reference, but we built all new firmware in C for the new controller module. This included stepper motor drivers, an RS232-based user interfaces, and a [GPIB](https://en.wikipedia.org/wiki/IEEE-488) interface. We also added a LAN interface that supports the [National Instruments VISA protocol](https://www.ni.com/visa/) for instrument communication with LabVIEW.
