---
title: "Robotic Hand Control (2006)"
date: 2006-12-01T12:00:00-08:00
draft: false
short_name: "robot-hand-control"
tags: applications, C++, communications protocols, motors

resources:
- src: "robot_hand.svg"
  name: robot_hand
- src: "robot_hand_tiny.jpg"
  name: robot_hand_tiny

entry_media:
- image:
    resource: "robot_hand"
    lazyload: "robot_hand_tiny"
    alt: "Illustration of a robotic hand doing a poor job of feeding cereal to a person--very inspired by a Simone Giertz video"
---
A company was working on a robotic hand prototype. While they were versed in kinematics and high-level motion control, they were unfamiliar with low-level programming and communication protocols.

I wrote a C++ application for windows that communicates with a motion controller over RS232 and uses high-level motion control scripts to drive the hand prototype.
