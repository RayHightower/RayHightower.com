---
layout: post
title: "OpenROV Assembly Challenges"
date: 2014-08-19 16:44
comments: true
categories: [ BeagleBone Black, Community, IoT, Linux, Node, OpenROV ]
---

{% include image.html img="/images/openrov_rth.jpg" caption="OpenROV fully assembled." %}

I know this problem can be solved. I just haven’t figured it out yet, and I need help from the [OpenROV](http://openrov.com/) community to do so.

_Update: The OpenROV community delivered. Solution: [ESC Programming and Calibration for OpenROV](/blog/2014/08/21/esc-programming-and-calibration-for-openrov/)._

###Parts That Work
Software image updates on the Beaglebone Black work flawlessly thanks to scripts written by [Brian Adams](https://github.com/BrianAdams) and [Dominick Fretz](https://github.com/codewithpassion). The cockpit software shows a real-time image from the camera, the LED lights are super-bright, and the lasers hold steady at 10cm apart. My fully assembled OpenROV passes the water submersion test. Yes, it’s waterproof, thanks to O-rings and silicon-based lubricant!

What about the motors? The motors work, almost. Could it be the
electronic speed control (ESC) settings, calibration, or less than
perfect soldering? That's where I need help.

<!--more-->

###Summary of Symptoms
With the cockpit software running and attached to the OpenROV:

* If I turn on any of the three ESCs, two of the motors (vertical and port) start running at full blast. The starboard motor remains stationary.
* While the V and P motors continue to run at full blast, the starboard motor responds to the cockpit slider controls as expected: +1 makes S run full blast on one direction, -1 sends S full blast in the other direction, and 0 stops the S motor completely. During this exercise, V and P continue at full blast.
* Turning off the ESC stops the V and P motors.
* When I turn on any of the ESCs, the camera servo jumps slightly, about 10 degrees. And then the V and P motors run full blast.

When the cockpit software is not running (and the Google Chrome browser is completely closed):

* Turning on an ESC has no effect on the motors.
* The camera servo jumps slightly, about 10 degrees, as it did with the cockpit software running. But the motors remain stationary.

Interesting behavior!

###Double-Checking the ESC Settings

{% include image.html img="/images/esc_program_card.jpg" caption="ESC Program Card" %}
During troubleshooting, my first step was to double-check the electronic speed controller (ESC) settings. Setting the ESCs with the beep-and-button-push method was time consuming. And I was concerned that I may have made a mistake in counting the beeps.

Solution: I bought an ESC program card. Amazon sells them for less than fifteen dollars, well worth the price when you consider the peace of mind that the card brings. The program card shows each ESC setting with a clear 7-segment LED display, much easier than counting beeps!

According to the program card, all of the ESC settings are correct.

###Using a Power Supply Instead of Batteries
All of the time spent troubleshooting drained the OpenROV batteries. So I devised a way to apply power directly to the OpenROV without batteries.

{% include image.html img="/images/openrov_power_supply.jpg" caption="Directly connected to power supply." %}

The photo reveals the random condition of my work surface, so here's a verbal description of this hack:

* In the background, a power supply set to 12 volts
* `+` lead (red) connected to the `+` leads of the battery containers, via a wire acting as a Y-connector.
* `-` lead (black) connected to a ground terminal on the OpenROV controller board through a black jumper cable

I find that this hack works best if I connect the 12 volt setup first while the Topside Adapter is powered off. Applying power (via USB) to the Topside Adapter turns the entire assembly on. 

If you're reading this section and you know a better way for me to connect the power supply, please advise in the comments section below.

###Advice Welcome
I'm not sure where to look next to solve the challenge with the motors. Maybe I skipped a step somewhere during assembly? Advice welcome!

_Update: As noted at the beginning of this article, this problem has been solved. Solution: [ESC Programming and Calibration for OpenROV](/blog/2014/08/21/esc-programming-and-calibration-for-openrov/)._

