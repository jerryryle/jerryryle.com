---
title: "Chroma-key Toy Proof of Concept (2001)"
date: 2001-12-01T12:00:00-08:00
draft: false
short_name: "chroma-key-toy"
tags: algorithms, applications, C, C++, video

resources:
- src: "chroma_key.svg"
  name: chroma_key
- src: "chroma_key_tiny.jpg"
  name: chroma_key_tiny

entry_media:
- image:
    resource: "chroma_key"
    lazyload: "chroma_key_tiny"
    alt: "Illustration of person being green-screened into Paris with an attacking dinosaur"
---
A large toy company engaged Mindtribe to prototype a concept for a toy karaoke machine that would connect to a TV and use the toy's built-in camera to show the user against various, selectable backdrops while the user sang along to music.

I investigated various algorithms for chroma keying and background removal and evaluated their suitability for use in a very low-cost embedded system. I delivered a PC-based demonstration application that uses a webcam to demonstrate chroma keying and other forms of background removal algorithms that I wrote in C with a C++ application wrapper.
