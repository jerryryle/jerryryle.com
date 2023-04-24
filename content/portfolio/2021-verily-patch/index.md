---
title: "Verily Patch (2021)"
date: 2021-03-11T12:00:00-08:00
draft: false
short_name: "verily-patch"
tags:
  - medical
  - engineering management
  - leadership
  - firmware
  - mobile
  - iOS
  - Android
  - cloud
  - security
  - Bluetooth
  - C
  - OTA update

resources:
  - src: "VerilyPatch.jpg"
    name: verily_patch
  - src: "VerilyPatch_tiny.jpg"
    name: verily_patch_tiny

  - src: "VerilyPatchSize.jpg"
    name: verily_patch_size
  - src: "VerilyPatchSize_tiny.jpg"
    name: verily_patch_size_tiny

  - src: "VerilyPatchMobileApp.jpg"
    name: verily_patch_mobile_app
  - src: "VerilyPatchMobileApp_tiny.jpg"
    name: verily_patch_mobile_app_tiny

entry_media:
  - image:
      resource: "verily_patch"
      lazyload: "verily_patch_tiny"
      alt: "Verily Life Sciences Patch"

  - image:
      resource: "verily_patch_size"
      lazyload: "verily_patch_size_tiny"
      alt: "Verily Life Sciences Patch shown next to a quarter"

  - image:
      resource: "verily_patch_mobile_app"
      lazyload: "verily_patch_mobile_app_tiny"
      alt: "Verily Life Sciences Patch mobile app screenshots"
---
Verily Patch is a sensor-based, adhesive patch that regularly measures an individual’s body temperature. It includes a temperature sensing device and an adhesive liner, which is used to gently secure the device below the armpit. The device uses Bluetooth Low Energy (BLE) to transmit data to the corresponding mobile app for easy tracking of a user’s latest temperature reading. The app uses phone notifications to alert the wearer if their temperature rises above a threshold. Temperature is one of the most common signals of changes in health - by collecting temperature data frequently and accurately, Verily Patch is designed to support care broadly. The current model can be used for up to three months, the average length of the peak flu season.

My teams developed the Patch firmware, the iOS/Android mobile apps, and the cloud gateway that managed device security and ingested data. Verily's leadership prioritized this as a high-priority program in response to the COVID-19 pandemic in 2020. My team was busy with other programs at the time. To deliver on our business objectives:

* I began the proof-of-concept firmware development myself, which let us evaluate feasibility and generate partner interest. I wouldn't typically recommend that a senior engineering manager gap-fill with IC work; however, I knew that I had the bandwidth to both code and build the team and that, when it came to it, I prioritized building the team.
* I developed and executed a plan to roll a manager and developers off of lower-priority programs and have them kick off the production Patch software effort.
* I recruited additional contributors from across the company to complete the team.
* I matched individuals with growth opportunities, which helped with recruiting, morale, and motivation on this intense program.   
 
Our rapid action took this program from concept to production in less than a year. While the program was ultimately shelved as the pandemic waned and Verily focused its efforts on other businesses, [results from our initial study](https://school.wakehealth.edu/research/institutes-and-centers/center-for-healthcare-innovation/research/verily-patch) were promising.

The Patch photos above are courtesy of [Jon Grossman](http://www.jongrossman.com/patch), who led the Patch design.
