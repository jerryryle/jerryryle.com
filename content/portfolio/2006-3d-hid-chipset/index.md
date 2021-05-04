---
title: "Chipset and Reference Design for 3D Human Interface Device (2006)"
date: 2006-10-01T12:00:00-08:00
draft: false
short_name: "3d-hid-chipset"
tags: C, firmware, sensors, USB

resources:
- src: "3D_HID_Chipset.png"
  name: 3D_HID_Chipset
- src: "3D_HID_Chipset_tiny.jpg"
  name: 3D_HID_Chipset_tiny

entry_media:
- image:
    resource: "3D_HID_Chipset"
    lazyload: "3D_HID_Chipset_tiny"
    alt: "Schematic and timing diagram screenshots from a 3D HID chipset design"
---
Having achieved success in the gaming market with their {{<scrollanchor href="#3d-mouse">}}3D Mouse{{</scrollanchor>}}, Sandio wished to wrap up their IP from this product into an easily licensable design.

I worked with Sandio to select a cost-effective reference chipset based upon the Freescale (now NXP) MC9S08GT8A, the Cypress CY7C64215, and the Avago ADNS-6010 imaging sensor. I created an SDK and documentation to make it easy for 3rd parties to manufacture Sandio's reference design or integrate the technology into their own designs.
