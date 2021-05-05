---
title: "Automotive iPhone Integration (2009)"
date: 2009-06-01T12:00:00-08:00
draft: false
short_name: "automotive-iphone-integration"
tags: Android, applications, automotive, C, C++, communications protocols, iOS, Linux, networks

resources:
- src: "BMW_Mini_Connected_Copyright_Mindtribe.jpg"
  name: BMW_Mini_Connected_Copyright_Mindtribe
- src: "BMW_Mini_Connected_Copyright_Mindtribe_tiny.jpg"
  name: BMW_Mini_Connected_Copyright_Mindtribe_tiny

entry_media:
- image:
    resource: "BMW_Mini_Connected_Copyright_Mindtribe"
    lazyload: "BMW_Mini_Connected_Copyright_Mindtribe_tiny"
    alt: "BMW MINI Connected running on a MINI's head unit"
---
Anticipating a need for agility in automotive environments to keep up with the constant evolution of
consumer smartphone features, the BMW Technology Office approached Mindtribe to help architect a new
software platform that would rapidly integrate smartphone innovations into the automotive user
experience. This effort involved two major components.

First, both Apple and BMW had identified that head unit navigation and control of a music on a user's
phone was a major pain point for both users and automotive manufacturers. Apple had previously
exposed a massive API to allow accessories such as head units to browse a music collection on a
phone, retrieve album art, control playback, etc. This API was difficult for manufacturers to
consume, so the resulting experience was less than ideal and required users to learn a new,
unwieldy, interface for browsing their music collection.

Apple, BMW, and Mindtribe collaborated to develop what became known as iPod Out. This specification
allowed an iPhone to "push" a user interface directly to a head unit's display over a video link.
The iPod Out functionality that launched with iOS 4 gave automotive manufacturers a native Apple
music interface through a much simpler API. It allowed users to control their music via the Apple
user interface with which they were already familiar.

The second element that allowed for tighter phone integration in the car was a communications channel
between apps running on the phone and the car's head unit. BMW and Mindtribe worked to develop a
TCP/IP-based logical tunnel over the phone's physical USB connection to the car and a corresponding
protocol specification that would allow the head unit to exchange information with iOS Apps. While
our initial focus was primarily iOS, we simultaneously considered and proved feasibility on Android.
This functionality opened up a new generation of applications such as live driving tutorials that
can access the car's information as well as use the phone's sensor suite and network connectivity to
tell you how you could improve your driving.

For these efforts, I created an iPhone accessory protocol stack, Linux communications simulators, and
proof of concept demonstration applications. I worked with an iOS consultant to develop the
tunneling technology for the app/head unit data exchange. I worked with BMW's head unit supplier to
capture requirements so that these new technologies could be put into production.
