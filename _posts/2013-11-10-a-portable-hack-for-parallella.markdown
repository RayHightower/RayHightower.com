---
layout: post
title: "A Portable Hack for Parallella"
date: 2013-11-10 23:05
comments: true
categories: [BeagleBone Black, Education, High Performance Computing, Parallella, Raspberry Pi]
---

{% include image.html img="/images/parallella-portable.png" caption="Portability for Parallella-sized devices." %} 

[Beaglebone Black](/blog/2013/05/22/beaglebone-black-running-ruby-on-rails/), [Raspberry Pi](/blog/2012/12/03/ruby-on-raspberry-pi/), and [Parallella](/blog/2013/06/22/preparing-for-parallella-64-cores-installing-go-on-mac-os-x/) are three small, powerful Linux-based computers. But in order to make these devices truly portable, we need a way to carry a monitor and keyboard along. This article describes one hack that works.

###Inspiration in a Suitcase
The HP 5036 Microprocessor Lab gave me my first exposure to assembler language. I was eighteen, working my first software internship, and loving every minute of it. When I devised ways to complete my _regular work_ faster than management expected, I had some time on my hands. So I spent time learning assembler with the HP 5036.

<!--more-->

{% include image.html img="/images/hp-5036.png" caption="HP 5036 Microprocessor Lab" %} 

The entire 5036 fits in a suitcase... how cool is that! Here's how the 5036 works:

1. Start by writing assembler-level code by hand on paper.
2. Grab the reference book for the microprocessor running on the
   board, Intel 8080.
3. For each assembler-level command, find the corresponding 2-digit
   hexidecimal operation code.
4. Key the op code into the 5036 by hand. 
5. Run the program.

Working with the 5036 was addictive in a positive way. In a subsequent job, where I wrote assembler to drive hardware devices, I was ready.

###Portability Needed
Fast forward a few decades. We now have the Raspberry Pi, BeagleBone Black, and Parallella. Wonderful devices with one flaw in common: No portability. That's when I had a flashback to my days with the 5036.

I bought a $35 technician box from Home Depot and I ripped out the insides. Micro Center had 720p LCD monitors on sale for $90, so I bought one of those. I didn't want to spend the extra bucks for a 1080p LCD because you never know how something like this might work out! Finally, I topped everything off with a $25 keyboard/trackpad combo from Amazon.  The result appears in the photo at the top of this article. Special thanks to Ericka [last name unknown] from Home Depot who gave me tons of ideas on how to securely fasten the monitor to the case.

###Why?
Why did I spend the time and money to assemble this kit? It's all about learning. Devs learn more when we interact with other devs - people who are learning some of the same things that we're wrestling with. And sometimes the things we need to learn are too new for books.

By carrying my Raspberry Pi, BeagleBone Black, and Parallella with me in a portable unit, I can share my experiences with other devs and learn more in the process. Everybody wins when that happens.

###Thanks SCNA!
The organizers of [Software Craftsmanship North America (SCNA)](http://scna.softwarecraftsmanship.org/) gave me the opportunity to present this story as a lightning talk at the conference. Slides are here:
<center><script async class="speakerdeck-embed" data-id="b3558fd02cac0131cfc62a9baba32394" data-ratio="1.29456384323641" src="//speakerdeck.com/assets/embed.js"></script></center>
Thank you SCNA! As I shared with the other devs at SCNA, I will gladly post my mistakes and _gotchas_ here for people who want to build a unit like this. Let's build!
