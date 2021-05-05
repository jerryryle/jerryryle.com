---
title: "Microcorruption Capture The Flag (2014)"
date: 2014-07-01T12:00:00-08:00
draft: false
short_name: "microcorruption-ctf"
tags: assembly, firmware, reverse engineering, security

resources:
- src: "Microcorruption.png"
  name: Microcorruption
- src: "Microcorruption_tiny.jpg"
  name: Microcorruption_tiny

entry_media:
- image:
    resource: "Microcorruption"
    lazyload: "Microcorruption_tiny"
    alt: "Screen shot of the Microcorruption game's leaderboard and level chooser"
---
[Matasano Security](https://www.nccgroup.trust) (now part of NCC group) and [Square](https://squareup.com) teamed up to create [Microcorruption](https://microcorruption.com): an awesome Capture the Flag game that involves reverse engineering MSP430 assembly to unlock a virtual lock. Each level gets progressively harder as the fictitious lock vendor patches security holes and introduces new ones.

While this was more fun than professional, I used my reverse engineering skills, microcontroller
knowledge, and understanding of security exploits to complete the game and made it into the top 100
list in the Microcorruption hall of fame.
