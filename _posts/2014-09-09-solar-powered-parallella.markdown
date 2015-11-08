---
layout: post
title: "Solar Powered Parallella"
date: 2014-09-09 09:18
comments: true
categories: [ High Performance Computing, IoT, Parallella ]
---

{% include image.html img="/images/parallella_solar.jpg" caption="Give solar power to your Parallella with a few simple components." %}

This article describes a simple hardware hack: Making the [Parallella](/blog/2014/07/07/parallella-quick-start-guide-with-gotchas/) run on solar energy. 

Motivation: The fastest computers in the world gulp electricity at an alarming rate. For example, [Tianhe-2](http://www.top500.org/system/177999) at the National Super Computer Center in Guangzhou, China uses 17.8 megawatts of energy per year. In dollars, that’s roughly $17 million spent on electricity spent each year, depending on how the electricity is sourced.

Scientists at [Sandia National Laboratories](http://www.sandia.gov/) estimate that the earth's surface absorbs enough solar energy in ninety minutes to power every electrical device on the planet for a full year. A year's worth of energy in ninety minutes! Surely we can use some of that energy to power our supercomputers.

<!--more-->

###Observations
The solar Parallella idea was driven by a few observations:

* Parallella only needs five watts of power, five volts at 1 ampere. The device might spike at startup or during heavy calculations, but not by much.

* USB provides electrical power at five volts, typically less than 2 amperes. 

* Cell phone solar chargers are easy to find. These pocket-sized chargers provide power over USB.

Can a cell phone solar charger be hacked to power Parallella? Yes!

###Building the Hybrid Cable
Here's how to get started...

{% include image.html img="/images/parallella_usb_solar.jpg" caption="Making the connections." %}

* First, get an off-the-shelf solar device capable of providing 5 volts at 2 amperes. Many cell phone solar chargers will do this, but some will only provide 1 ampere of current. You will need 2 amperes. As of this writing, Amazon sells solar cell phone chargers for about $35.00. Note that the model shown in this article combines a photovoltaic panel with a lithium ion battery. Energy provided by the sun can be stored by the battery for later use.

* Cut open a USB cable to expose power (red), ground (black), and signal cables (green and white) as shown in the photo.

* Find an old AC adapter cable that fits the Parallella power connection. Cut it open to expose the power and ground wires as shown in the photo. 

* Solder the USB power to the old adapter power wire, and USB ground to the adapter's ground.

* Cover everything with heat shrink tubing or electrical tape. Heat shrink is preferred since it will last longer.

You're done! Plug everything in and watch your Parallella boot up. Note that this configuration will also power the Parallella's cooling fan.

{% include image.html img="/images/parallella_solar_complete.jpg" caption="Parallella running on solar power." %}

###Proof of Concept
It probably doesn’t make sense to call this a project. It's more of a proof of concept. Scaling up will cost money and time. But the benefits of solar energy, including cost savings and reduced carbon footprint, make this a worthwhile path to pursue.

