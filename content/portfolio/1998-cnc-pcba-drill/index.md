---
title: "CNC PCBA Drill Software (1998)"
date: 1998-12-01T12:00:00-08:00
draft: false
short_name: "cnc-pcba-drill"
tags: applications, control systems, motors, Pascal, reverse engineering

resources:
- src: "ime_157.svg"
  name: ime_157
- src: "ime_157_tiny.jpg"
  name: ime_157_tiny

entry_media:
- image:
    resource: "ime_157"
    lazyload: "ime_157_tiny"
    alt: "Illustration of misbehaving NC drill"
---
Cal Poly has an amazing class, IME 157, that teaches students about electronic product manufacturing processes by having them build an electronic product themselves. In this class, students use CAD to capture a schematic and lay out a PCB. They then drill and etch the PCB, solder on the components, and build a simple sheet metal enclosure. At the end of the course, each student has created a working product such as a car alarm, strobe light, etc.

The IME 157 lab features a high-speed, Computer Numerical Control (CNC) drill for drilling PCBs. When I took the course, the software for this drill was an ancient command-line program that performed no error checking. If a student produced a drill file with errors, such as holes placed outside of the drillable area (very easy to do accidentally in the CAD package), the software would happily rev the drill table up to full speed and slam it into its end-stops. Repeatedly throughout the quarter&mdash;despite numerous warnings from the instructor&mdash;students would forget to check their drill files. The drill table would slam, the entire class would jump, and the instructor would run to fix the drill so that work could proceed.

Certain that I could overcome the CNC drill software's limitations, I volunteered to rewrite it and the instructor gave me access to the drill outside of class hours. Finding little documentation on the ancient [Delta Tau](http://www.deltatau.com) brand motion controllers, I reverse-engineered their protocol and wrote a completely new version of the control software in Pascal (my most proficient language at the time). This new software alerts users about invalid drill files, displays a graphical preview of the drill pattern before drilling so that students can visually inspect for alignment/scale problems, and improves overall drill time by optimizing the drill's motion path and S-curve profiles.

After completing the class myself, I went on to T.A. IME 157 for several quarters, becoming an expert in the OrCAD CAD package for PCBA design and continuing to find ways to improve the curriculum and materials.
