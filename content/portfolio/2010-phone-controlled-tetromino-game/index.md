---
title: "Phone-controlled Tetromino Game (2010)"
date: 2010-01-01T12:00:00-08:00
draft: false
short_name: "phone-controlled-tetromino-game"
tags: Adobe Flash, applications, C++, communications protocols, Windows

resources:
- src: "Window_Game.png"
  name: Window_Game
- src: "Window_Game_tiny.jpg"
  name: Window_Game_tiny

entry_media:
- image:
    resource: "Window_Game"
    lazyload: "Window_Game_tiny"
    alt: "Article clipping from the Palo Alto Weekly with a photo of people playing Mindtribe's window game"
---
When Mindtribe moved into a new office on University Avenue on Palo Alto, we found ourselves with a
large, very visible window. We decided to create an interactive sign that would advertise our
existence and engage passersby.

Working with a graphic designer, I built a tetromino-style game in Adobe Flash. I wrapped this Flash
game with a Windows application that connected to a modem, answered calls, provided DTMF control
over the game, took a photo of the player using a webcam, and posted high scores to our website.

The high scores were keyed to a player's caller ID. I built out a web backend that allowed users to
"claim" their scores by entering their phone numbers and providing their names. These went into a
moderation queue before being publicly displayed on our website.
