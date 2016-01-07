---
layout: post
title: "How to Record Screencasts With or Without QuickTime"
date: 2016-01-07 04:03:11 -0500
comments: true
categories: [ Community, Education ]
published: false
---

Live coding in front of an audience can be exciting, except when it's not. Make one typo during your demo and you could spend the rest of your time troubleshooting in front of hundreds of onlookers. How embarrassing!

### Feel the Pain and Fix It

I've been there, and it hurts. One day, after a painful live coding mishap in front of a live audience, I vowed to squash all typos by using video instead of live typing. This post includes two screen recording techniques that work for me.

<!--more-->

### Two Techniques

Screen recordings are faster and easier than I thought. This post includes two techniques for recording screen activity:

* Using Apple’s [QuickTime](http://www.apple.com/quicktime/), pre-installed on most Mac computers.
* Using a $150 HDMI recorder, the [Elgato Game Capture HD](https://www.elgato.com/en/gaming/gamecapture-hd)

### Using QuickTime

If you have a Mac with QuickTime installed, you have everything you need. Yes, there are other screencast tools out there. I use QuickTime because it’s simple and it comes pre-installed on the Mac.

1. Setup your desktop exactly as you want it to be recorded.

2. Go into your `Applications` folder and start QuickTime.

3. Choose File | New Screen Recording. Decide whether you want to include audio with your recording. I rarely include audio because most of my screen recordings are for live presentations where I will be present and speaking to the audience.

4. Specify the area of the screen that you want to record.

5. Click the Record button.

6. Do your demo. In this example, I’m doing something random in the terminal window. It doesn’t matter what you do, everything within the selected recording area will be recorded.

7. Click the Stop button when you’re done. _Gotcha: The first time I recorded, it took me several minutes to find the stop button! It’s on the top menu bar._

8. Save your video, and trim it as desired. In this case, I only wanted the first 19 seconds of the video.

### Shorter Videos are Better

Personally, I think that short (less than 30 seconds) videos are better for a live presentation. 30 seconds is enough time to demonstrate a point, but not so long that the audience gets bored. This [Parallella presentation](/blog/2015/08/22/madison-ruby-and-parallella/) includes multiple 30-second videos (some via QuickTime, others recorded with hardware) separated by other material.

### When QuickTime is Unavailable: HDMI Recorder

Best Buy sells an HDMI recorder for about a hundred bucks. It accepts HDMI input, sends HDMI output, and it sits between the source of your HDMI video and the monitor.

I banged my head against the wall for several days, looking at multiple video software solutions for Linux on the Parallella. None of the “solutions” worked as required. But the hardware solution, smaller than an iPhone and available for $150 at Best Buy, worked immediately.

<img src=/images/elgato_parallella_800.jpg alt="Parallella with Elgato Game Capture HD 60" >

So if you’re recording screen activity on Parallella running Linux, save yourself a headache and use the HDMI capture device.

### Bottom Line: More Engaging Presentations

