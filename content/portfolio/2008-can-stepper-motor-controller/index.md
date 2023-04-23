---
title: "CAN Stepper Motor Controller (2008)"
date: 2008-10-01T12:00:00-08:00
draft: false
short_name: "can-stepper-motor-controller"
tags: 
- C
- CAN
- communications protocols
- electrical
- engineering management
- firmware
- motors
- program management

resources:
- src: "can_stepper_motor_controller.svg"
  name: can_stepper_motor_controller
- src: "can_stepper_motor_controller_tiny.jpg"
  name: can_stepper_motor_controller_tiny

entry_media:
- image:
    resource: "can_stepper_motor_controller"
    lazyload: "can_stepper_motor_controller_tiny"
    alt: "Illustration of a person on a go-cart that is powered by 16 stepper motors."
---
A medical device company building protein analysis tools engaged Mindtribe to help them build a
CAN-based motor controller that would be used to drive multiple motors within their products.

I structured and managed this program, which involved designing the motor control boards and writing
firmware for a Microchip PIC18F2682 Microcontroller to drive stepper motors based upon commands sent
over a CAN bus. Though I largely played a management role, I also lent firmware expertise and helped
out with the development.
