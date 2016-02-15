---
layout: post
title: "How to Run a Headless Parallella"
date: 2015-12-08 14:03:11 -0500
comments: true
tags: [ Education, IoT, Parallella ]
published: true
---

### Why Headless? 

Running a computer "headless" means running it with no display, no keyboard, no mouse. The only directly attached cables are power and a network connection. 

Why would you run a computer headless? Headless configurations are typically used in a data center with hundreds of servers and limited space. Since a well-running server rarely needs direct interaction, you can save space (and money) by skipping the monitor/mouse/keyboard installation, and only connecting these devices when needed.

<!--more-->

Even better: Don't connect via USB/HDMI. Why spend time walking to a server and connecting via USB when you can connect electronically over the network? Headless servers rock!

This post tells how to connect to a headless Parallella from a Mac. The procedure should work with other Linux/Unix systems with minor minor modifications, depending on the distribution in use.

### Install XQuartz

(You can skip this step if you're connecting from a Unix or Linux system. Linux/Unix already have X Window installed. Mac OS X does not.)

If you only want to run terminal-based programs via `ssh`, you will not need to install XQuartz. Since Parallella's GUI programs are X Window based, installing XQuartz will let you run the Parallella's GUI programs on your Mac.

Mac OS X is a variation of Unix, but it does not include the Unix X Window environment. Download and install [XQuartz](http://www.xquartz.org/) onto the Mac OS X machine. XQuartz will give your Mac the X Window environment needed for this process to work.

### Configure Host Machine (Parallella) to Allow X Over SSH

The file `/etc/ssh/ssh_config` controlls the behavior of the SSH server on the Parallella. By default, SSH does now allow X Window information to flow to/from the Parallella. To enable X Window support, here's what you have to do.

(Be sure to read the [sudo disclaimer](/sudo-disclaimer) before executing the rest of these instructions. We’re using `sudo` in this case because `ssh_config` can only be modified with root priviledges.)

First, Open `/etc/ssh/ssh_config` in a text editor like Vim. You'll need to use `sudo` so that the file system allows you to write the file after you modify it.

~~~ bash

$ sudo vim /etc/ssh/ssh_config

~~~

Two parameters in the `ssh_config` file need to be changed on the Parallella host. Add the following lines to the bottom of the `ssh_config` file on the Parallella:

~~~ bash

   ForwardAgent yes
   ForwardX11 yes

~~~

Save the file and re-start the Parallella so that the new parameters can take effect.

### Confirm the X Window Connection

To test the new configuration, first log into the Parallella from the Mac using the `-X` flag (note that "X" is capitalized) like so:

~~~ bash

~$ ssh -X linaro@[IP address of the Parallella]
linaro@[IP address of the Parallella]'s password:

~~~

And then, from a Mac terminal window, run an X Window program like `xclock`.

~~~ bash

$ xclock

~~~

The GUI `XClock` should appear on your Mac display. Success!

### Setting Up Xvfb

`Xvfb` is the X virtual frame buffer. It lets you view the Parallella’s frame buffer through X, either locally or remotely. To set it up, first install `Xvfb` on the Parallella.

~~~ bash

$ sudo apt-get install xvfb
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following NEW packages will be installed:
  xvfb
0 upgraded, 1 newly installed, 0 to remove and 0 not upgraded.
Need to get 629 kB of archives.
After this operation, 1351 kB of additional disk space will be used.
Get:1 http://ports.ubuntu.com/ubuntu-ports/ trusty/main xvfb armhf 2:1.15.1-0ubuntu2 [629 kB]
Fetched 629 kB in 1s (406 kB/s)
Selecting previously unselected package xvfb.
(Reading database ... 83530 files and directories currently installed.)
Preparing to unpack .../xvfb_2%3a1.15.1-0ubuntu2_armhf.deb ...
Unpacking xvfb (2:1.15.1-0ubuntu2) ...
Processing triggers for man-db (2.6.7.1-1) ...
Setting up xvfb (2:1.15.1-0ubuntu2) ...

~~~

### Minor Gotcha

Here's something weird. When you install `Xvfb` on the Parallella via `sudo apt-get`, the `x` is lower case. But after installation, when you run the program from the Parallella's command line, the `X` in `Xvfb` is capitalized.

~~~ bash

$ which xvfb
xvfb: Command not found.

$ which Xvfb
/usr/bin/Xvfb

$ 

~~~

I don't know why this is true. I only know that it caught me. Now it won't catch you!


### Eliminating Barriers to Entry

I am grateful to other members of the Parallella community who write
articles and blog posts about their experiences with the device.
Together, we are working to make parallel programming accessible
to as many people as possible. Maybe you will contribute next? I look forward to reading about your work with Parallella and parallel programming in general.


