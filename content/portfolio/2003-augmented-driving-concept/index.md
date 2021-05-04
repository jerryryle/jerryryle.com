---
title: "Augmented Driving Experience Concept (2003)"
date: 2003-11-01T12:00:00-08:00
draft: false
short_name: "augmented-driving-concept"
tags: applications, automotive, C++, video, Windows

resources:
- src: "augmented_driving_concept.svg"
  name: augmented_driving_concept
- src: "augmented_driving_concept_tiny.jpg"
  name: augmented_driving_concept_tiny

entry_media:
- image:
    resource: "augmented_driving_concept"
    lazyload: "augmented_driving_concept_tiny"
    alt: "Illustration of a car projecting, upon the windshield, how many points various pedestrians are worth"
---
The BMW Technology Office in Palo Alto was researching new ways of presenting information to drivers using creative heads up display technologies.

I helped them explore one such concept by creating a streaming video system that projects live video onto physical surfaces with varying curvatures. I wrote a Windows application that uses DirectX technologies to map the video stream onto a virtual 3D object that can be manipulated to compensate for the curvature of the physical projection surface.
