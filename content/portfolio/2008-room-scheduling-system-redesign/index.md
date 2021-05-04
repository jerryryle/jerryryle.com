---
title: "Room Scheduling System Redesign (2008)"
date: 2008-12-01T12:00:00-08:00
draft: false
short_name: "room-scheduling-system-redesign"
tags: applications, firmware, communications protocols, Java, networks

resources:
- src: "RoomWizard_Copyright_Steelcase.jpg"
  name: RoomWizard_Copyright_Steelcase
- src: "RoomWizard_Copyright_Steelcase_tiny.jpg"
  name: RoomWizard_Copyright_Steelcase_tiny

entry_media:
- image:
    resource: "RoomWizard_Copyright_Steelcase"
    lazyload: "RoomWizard_Copyright_Steelcase_tiny"
    alt: "Photo of a Steelcase RoomWizard unit"
---
Steelcase embarked on an effort with IDEO to redesign their popular, but aging RoomWizard room scheduling device. This networked device was built around an older x86 architecture and included a hard drive that was prone to failure over time. Steelcase asked Mindtribe to re-architect the electrical and software system.

I led the software architecture. I determined that rewriting the software was not a worthwhile investment, considering the size of the effort. I delivered a report on how to reuse as much of the existing Java application as possible with the new processor platform. I also helped investigate and architect the addition of Zigbee for control of 3rd party devices from the RoomWizard.
