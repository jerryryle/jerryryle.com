---
title: "Factory Provisioning Station for Encrypted Communications Device (2016)"
date: 2016-01-01T12:00:00-08:00
draft: false
short_name: "factory-provisioning-for-encrypted-communications-device"
tags:
  - cryptography
  - manufacturing
  - program management
  - Python
  - security
  - test

resources:
  - src: "test_stations.svg"
    name: test_stations
  - src: "test_stations_tiny.jpg"
    name: test_stations_tiny

entry_media:
  - image:
      resource: "test_stations"
      lazyload: "test_stations"
      alt: "Illustration of operators using factory test and provisioning stations"
---
The [Encrypted Communications Device](#encrypted-communications-device) project included a complicated cryptosystem that required the generation of a unique identifier and cryptographic keys for each device's printed circuit board assembly (PCBA). This provisioning step needed to be performed securely on the manufacturing line in Manila. For early engineering test builds at the contract manufacturer, my engineering team was able to manually perform the provisioning step and load the device firmware; however, we needed to build a station that minimally-trained operators could use during production. Through the contract manufacturer, I commissioned an electromechanical fixture to hold the PCBAs and make the appropriate connections to the product's microcontroller. It was up to my team to write the provisioning software that would use this fixture to allow operators to program PCBAs.

As our manufacturing build date drew near, it became clear that my team was understaffed and wasn't going to be able to complete the provisioning station software in time for our first production test build. Manually provisioning units would have been incredibly painful for my team and would have prevented us from achieving our goal of exercising the production-intent line. Because of this, and because I had relevant expertise, I jumped in and wrote the required software&mdash;largely during flights to/from Manila for other builds. The software:

* Provided an operator-friendly user interface
* Was capable of provisioning up to 4 PCBAs simultaneously
* Was secure&mdash;as defined by our client's security officer
* Could send encrypted provisioning results and statistics to our client

I wrote the software in Python and used [Kivy](https://kivy.org/) for the user interfaces. Data was stored in SQLite databases and encrypted for transport between the factory and our client using [gpg2](https://www.gnupg.org/)
