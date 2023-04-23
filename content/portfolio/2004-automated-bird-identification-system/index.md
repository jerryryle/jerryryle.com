---
title: "Automated Bird Identification System (2004)"
date: 2004-06-01T12:00:00-08:00
draft: false
short_name: "automated-bird-identification-system"
tags:
  - algorithms
  - audio
  - firmware

resources:
  - src: "bird_recognition.svg"
    name: bird_recognition
  - src: "bird_recognition_tiny.jpg"
    name: bird_recognition_tiny

entry_media:
  - image:
      resource: "bird_recognition"
      lazyload: "bird_recognition_tiny"
      alt: "Illustration of a person using a computer to identify a bird in a tree. The computer is reporting that the bird is an emu."
---
An enthusiastic and technologically-minded [birder](https://www.newyorker.com/books/page-turner/the-difference-between-bird-watching-and-birding) was interested in creating a handheld device that could identify a bird's species by its song. This was before the age of smartphones and apps, so they contacted Mindtribe to explore the feasibility of creating a dedicated hardware device for this purpose.

I led the platform and software development aspect of this research. We flew to Cornell and MIT to meet with top researchers in this field (yes, there is a bird voice recognition field of study). I researched algorithms and processing requirements to understand the hardware cost and development effort for such a system.

Ultimately, our study concluded that an automated bird identification device would be too expensive for even a niche enthusiast market. And that, given that researchers were not achieving compelling results on desktop computers, the performance of an embedded system would be underwhelming. We delivered a comprehensive body of research along with the crushed dreams.
