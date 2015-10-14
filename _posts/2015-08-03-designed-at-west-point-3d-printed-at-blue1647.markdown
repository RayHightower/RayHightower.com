---
layout: post
title: "Designed at West Point. 3D Printed at BLUE1647."
date: 2015-08-03 21:50:00 -0500
comments: true
categories: [ IoT, Parallella ]
---
{% imgcap middle /images/westpoint-parallella-green.jpg Designed at West Point. 3D-printed at BLUE1647 in Chicago. %}

Experimenting with [Parallella](/blog/2014/07/07/parallella-quick-start-guide-with-gotchas/)? Then you might need a way to protect it. The original acrylic cases are no longer available. Fortunately, 3D printing offers a solid alternative.

A highly-expandable 3D-printable case was designed by a team at the [United States Military Academy at West Point](http://westpoint.edu): Professor Suzanne J. Matthews and Master Machinist William (“Frank”) Blackmon. [Professor Matthews](http://www.suzannejmatthews.com/teaching.html) uses Parallella when teaching high-performance computing courses.
<!--more-->
### Simple, Expandable Design
The West Point case only has three parts! You combine the three parts at will to accommodate multiple Parallella cluster configurations. 

{% imgcap middle /images/westpoint-case-parts.jpg Three parts of the West Point case. %}

{% imgcap middle /images/westpoint_stacked_2.jpg Mix and match the parts. Stack at will. %}

### Internal Honeycomb Structure
Engineering details make a big difference in project like this. While the flat portions of the case are printing, the internal honeycomb structure is visible. I suspect that the honeycomb gives the panels greater strength while reducing costs and shortening the print time. Product engineering considers factors that users never see at the surface.

{% imgcap middle /images/parallella-case-honeycomb.jpg Internal honeycomb structure. %}

### 3D Printing Process (w/gotchas)
I asked Patrick Harris, CEO of [iMagine-it-Tech](http://imagine-it-tech.com), to guide me through the process. iMagine-it-Tech is based at [BLUE1647](http://blue1647.com). Here are a few lessons (with _gotchas_ to avoid):

* [Thingiverse](http://www.thingiverse.com/thing:892684) is a great resource for STereoLithography (STL) files.

* Whether you own your own 3D printer or not, grab a copy of the [MakerBot Desktop](http://www.makerbot.com/desktop) software. The software will let you view and manipulate STL files at will. Versions are available for Mac OS X, Windows, and Linux. 

* If the build plate has room for multiple copies of your object, print them. Here’s why: 3D-printing is in its infancy and results are less than perfect. If a part does not come out as designed, and you’ve printed multiple copies, you might have an extra to fall back on.

{% imgcap /images/multiple_locks.jpg Print multiple copies when space allows. %}

* Keep the build plate absolutely level. The build plate is the platform where MakerBot deposits material to form the 3D-printed object. If the build plate is even slightly skewed, you could end up with spaghettification, noodle-like strings of filament all over the place. Not fun.

{% imgcap /images/spaghettification.jpg Spaghettification (the noodle effect) is not fun. %}

* Print with the flat-side of the object down against the build plate. 3D printing does not do well with overhangs.

### After Printing
The Dremel Tool has become one of the most valuable tools in my maker kit. For this project, it was helpful to use the Dremel for edge-smoothing and screw-shortening.

{% imgcap /images/trim-rough-edges.jpg Trim rough edges with a Dremel and a razor blade. %}

### Screws Required
You can secure the Parallella circuit board to the bottom side of the case with four sheet metal screws, size #4. The 3/8" screws extended beyond the bottom of the case, so I trimmed them a bit with a Dremel.

{% imgcap middle /images/shorten-screws.jpg Sheet metal screws (#4). Left screw was shortened with a Dremel. %}

### Conclusion
This is the best 3D-printed case for Parallella that I have found so far, mainly because it is stackable and expandable. 

Professor Matthews continues to author instructional materials that focus on parallel processing, with Parallella as the learning tool of choice. I look forward to reading more of the materials.
