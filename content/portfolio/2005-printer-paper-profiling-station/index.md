---
title: "Printer Paper Profiling Test Station (2005)"
date: 2005-11-01T12:00:00-08:00
draft: false
short_name: "printer-paper-profiling-station"
tags: 
- algorithms
- C
- communications protocols
- firmware
- graphics
- motors

resources:
- src: "paper_test_station.svg"
  name: paper_test_station
- src: "paper_test_station_tiny.jpg"
  name: paper_test_station_tiny

entry_media:
- image:
    resource: "paper_test_station"
    lazyload: "paper_test_station_tiny"
    alt: "Illustration of a paper test station that has detected a smashed spider trapped in the paper"
---
Mindtribe developed a test tool for a large printer manufacturer. This tool profiled and characterized specific aspects of a new printer paper they were developing.

I led a firmware development effort to write firmware for a [Rabbit 2000](https://www.digi.com/support/productdetail?pid=4667) microcontroller that drives stepper motors, samples photosensors, processes and logs data, transfers data to a PC via RS232, and provides a graphical user interface via an LCD and keypad.
