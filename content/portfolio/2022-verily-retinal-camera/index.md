---
title: "Verily Retinal Camera (2022)"
date: 2022-09-08T12:00:00-08:00
draft: false
short_name: "verily-retinal-camera"
tags:
  - medical
  - engineering management
  - leadership
  - machine learning
  - video
  - cloud
  - C++
  - OTA update

resources:
  - src: "VerilyRetinalCameraFront.jpg"
    name: verily_retinal_camera_front
  - src: "VerilyRetinalCameraFront_tiny.jpg"
    name: verily_retinal_camera_front_tiny

  - src: "VerilyRetinalCameraSide.jpg"
    name: verily_retinal_camera_side
  - src: "VerilyRetinalCameraSide_tiny.jpg"
    name: verily_retinal_camera_side_tiny

entry_media:
  - image:
      resource: "verily_retinal_camera_front"
      lazyload: "verily_retinal_camera_front_tiny"
      alt: "Verily Retinal Camera Front View"

  - image:
      resource: "verily_retinal_camera_side"
      lazyload: "verily_retinal_camera_side_tiny"
      alt: "Verily Retinal Camera Side View"
---
The Verily Retinal Service combines an advanced camera with workflow software, making it easier for clinicians to conduct quality diabetic retinopathy screens. The lightweight and portable camera includes advanced lighting, stabilization, and Machine Learning technology that requires no dilation of the eye in most cases. These features allow a minimally-trained operator to take high-quality photos of a patient's retina, which will make this type of diagnostic imaging more accessible.

My teams developed the camera software (C++/Python), the camera operator UI (React/JS), and the cloud back-end (Go) that managed the fleet, ingested image data and metrics, stored the data, sent it to the diagnostic services, and interacted with the workflow software built by another team at Verily.

I inherited this program with a small and shrinking team, an unstable proof-of-concept hardware/software platform, no back-end, and a mandate to launch the product asap. With this ignoble start: 

* I rebuilt the team, starting by hiring a tech lead and an engineering manager. The tech lead evaluated the prototype Camera platform and proposed a path forward that reused as much as possible from the original design, while improving stability and readying it for production. The engineering manager focused on hiring the rest of the team and onboarding them to the program.
* I sketched a cloud architecture and socialized it with the team that was working on the workflow software so that we could begin making decisions and agree on division of responsibility. My team didn't have a cloud tech lead for the program yet, so I stepped in to play this role to keep the program moving forward until we could land a hire.
* I fought for a sane schedule, helping leadership understand the prototype nature of the existing system and the potential consequences of rushing it to market. In the end, both leadership and engineering were unhappy, which is the hallmark of a good compromise. Joking aside, we did deliver under extreme schedule pressure, but defended space for responsible choices and good engineering.
* I directed the team through numerous decisions and tradeoffs as the program proceeded.
 
Despite the many challenges, [we successfully launched the product with our first partner](https://verily.com/blog/first-patients-screened-with-verily-s-retinal-service-on-world-sight-day/) and the program continues to grow. I look forward to increased deployments of the system and a dramatic decline in preventable blindness from diabetic retinopathy.
