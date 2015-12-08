---
layout: post
title: "How to Run a Headless Parallella"
date: 2015-12-08 14:03:11 -0500
comments: true
categories: [ Education, IoT, Parallella ]
published: false
---

Running a system "headless" simply means running it without a display, keyboard, and mouse. Most servers run headless because you rarely need to interact with them directly. Once a server is configured and launched, it should, in theory, run indefiniately.

You might choose to run Parallella in a headless configuration if you have several of the devices that you want to run at the same time.

These instructions should work with other Linux/Unix systems with minor modifications depending on the distro.

<!--more-->

### Install XQuartz

Download and install [XQuartz](http://www.xquartz.org/) onto the Mac OS X machine. XQuartz will give your Mac the X Window environment needed for this process to work. No XQuartz, no Unix windows.

### Configure Host Machine (Parallella) to Allow X Over SSH

Open `/etc/ssh/ssh_config`

Two parameters in the `ssh_config` file need to be changed on the Parallella that you wish to connect to:

Be sure to read the [sudo disclaimer](/sudo_disclaimer) before executing the rest of these instructions. We’re using `sudo` in this case because `ssh_config` can only be modified with root priviledges.

``` bash

$ sudo vim /etc/ssh/ssh_config

```

Add the following lines to the bottom of the `ssh_config` file on the Parallella:

``` bash

   ForwardAgent yes
   ForwardX11 yes

```

And be sure to save the file.
And re-start the Parallella so that the new parameters can take effect (RTH: or do something else besides restart?).

### Confirm the X Window Connection

To test the new configuration, first log into the Parallella from the Mac using the `-X` flag like so:

``` bash

~$ ssh -X linaro@192.168.11.147
linaro@192.168.11.147's password:

```

And then run an X Window program like `xclock`.

``` bash

$ xclock

```

### Setting Up Xvfb

Xvfb is the X virtual frame buffer. It lets you view the Parallella’s frame buffer through X, either locally or remotely. To set it up, first install `Xvfb` on the Parallella.

``` bash

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

```

### Minor Gotcha

Note that the `X` in `Xvfb` is capitalized.

``` bash

$ which xvfb
xvfb: Command not found.

$ which Xvfb
/usr/bin/Xvfb

$

```


