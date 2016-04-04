---
layout: post
title:  Pine64 Quick Start Guide (with Gotchas)
date:   2016-04-04
comments: true
tags: 
published: true
---

<a href="/blog/2016/04/04/pine64-quick-start-guide-using-mac-os-x/"><img src="/images/pine64-desktop.png" align="center" alt="Pine64 desktop with WindyCityThings in the browser" title="Pine64 desktop with WindyCityThings in the browser"></a>

The [Pine64](http://pine64.org) is a single board computer with four 64-bit cores. The device runs Linux, and prices start at US$15.00.

This post tells how to get a brand new Pine64 up and running using Mac OS X for image download and creation. Gotchas are included. Finally, we will compare the Pine64 with another multi-core single board computer, [Parallella](/blog/2014/07/07/parallella-quick-start-guide-with-gotchas/).

<!--more-->

### Gotcha: Arch Linux w/2GB PineA64

_Problem:_ I chose to install `Arch Linux Image with XFCE4 Base on Longsleep Image 20160304-1` because I have limited experience with Arch, and this was a chance to try something new. Later I learned that this distro contains a DMA data transfer bug that affects the 2GB PineA64. That's my Pine! I will post an update after the bug has been resolved.

_Recommendation:_ Looks like there are two ways to avoid the DMA bug:

* Use a different Linux distro. Keep in mind that at least two distros have the same DMA bug, or...

* Use the Arch Linux distro, fully aware that you will encounter the same obstacles as me (described below).

### Download an Image Files

[Several Linux disk images](http://wiki.pine64.org/index.php/Pine_A64_Software_Release) are available for the Pine64. This list will probably grow over time.

The image will be archived in `.rar` format. RAR is used because it has a higher compression ratio than .zip, and `.rar` files can store full file permissions while compressed.

Apple's Mac OS X does not include a utility for de-compressing .rar files. So you will need to grab one.

### Install unrar

[Homebrew](/blog/2014/02/12/homebrew-fundamentals/) is an ideal way to install Unix utilities on Mac OS X. Once you have Homebrew on your Mac, install `unrar` like so:

~~~ bash

~$ brew install unrar
==> Downloading https://homebrew.bintray.com/bottles/unrar-5.3.11.yosemite.bottl
######################################################################## 100.0%
==> Pouring unrar-5.3.11.yosemite.bottle.tar.gz
🍺  /usr/local/Cellar/unrar/5.3.11: 5 files, 505.4K

~$ 

~~~

### Testing .rar Archive Health

To confirm that `unrar` is installed correctly and to test the health of your image file...

~~~  bash

$ unrar t arch-pine64-bspkernel-20160304-1-xfce4.rar

UNRAR 5.31 freeware      Copyright (c) 1993-2016 Alexander Roshal

Testing archive arch-pine64-bspkernel-20160304-1-xfce4.rar

Testing     arch-pine64-bspkernel-20160304-1-xfce4.img                OK
Testing     Readme.txt                                                OK
All OK

$ 

~~~

The message `All OK` is our green light!

### Extract the Image File

Use `unrar` to extract the image.

~~~ bash
$ unrar e arch-pine64-bspkernel-20160304-1-xfce4.rar

UNRAR 5.31 freeware      Copyright (c) 1993-2016 Alexander Roshal

Extracting from arch-pine64-bspkernel-20160304-1-xfce4.rar

Extracting  arch-pine64-bspkernel-20160304-1-xfce4.img                OK
Extracting  Readme.txt                                                OK
All OK

$ 

~~~

### Prepare the Micro SD Card

You'll need a micro-SD card for the Pine64 operating system. Here are the steps needed to prepare the micro-SD from the command line.

First, grab the disk designation of the SD card.

~~~ bash
$ diskutil list
/dev/disk0
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      GUID_partition_scheme                        *960.2 GB   disk0
   1:                        EFI EFI                     209.7 MB   disk0s1
   2:                  Apple_HFS MacSSD                  959.3 GB   disk0s2
   3:                 Apple_Boot Recovery HD             650.0 MB   disk0s3
/dev/disk1
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:     FDisk_partition_scheme                        *15.9 GB    disk1
   1:                 DOS_FAT_32 BOOT                    134.2 MB   disk1s1
   2:                      Linux                         15.8 GB    disk1s2

~~~

Next, unmount the SD card.

~~~ bash
$ diskutil unmountDisk /dev/disk1
Unmount of all volumes on disk1 was successful

$ 

~~~

Finally, write the extracted Linux image to the SD card.

~~~ bash
$ sudo dd if=arch-pine64-bspkernel-20160304-1-xfce4.img of=/dev/disk1 bs=1m
Password:

~~~

The `dd` command takes a _long_ time to run, over 29 minutes on my machine. Here's a quick run-through of the command options:

* `sudo` gives you [super powers](/sudo-disclaimer/). 

* `dd` is the "copy and convert" command. The letters "dd" have nothing to do with what the tool actually does. It's just a command name. And like so many things in computer science, the name might be based on a pun.

* `if=` specifies the input file. You can include the full path, or if the file is in your current directory, you can omit the path as shown in this example.

* `of=` specifies the output file. We know that the SD card is located at `/dev/disk` so that's where the results of this command are headed.  Note that your destination directory may differ from this one.

* `bs=` specifies the block size used for the destination file.

### Checking Progress While `dd` Burns the Image

The `dd` comand does not give any outward sign that it is making
progress. That can be a little uncomfortable because it takes a long
time for the command to run.
Here are two ways to check progress:

* Run the Mac Os X Activity Monitor, and look for a process called `dd`. Watch the `disk writes` number as it increases. You can even sort the processes in descending order by `disk writes`.

* In the terminal window where `dd` is running, hit `control-T` and
you'll see a progress report in the terminal window.


### Once `dd` is Complete

When `dd` is done, it outputs the following:

~~~ bash
$ sudo dd if=arch-pine64-bspkernel-20160304-1-xfce4.img of=/dev/disk1 bs=1m
Password:
load: 1.41  cmd: dd 5933 uninterruptible 0.00u 6.59s
731+0 records in
730+0 records out
765460480 bytes transferred in 302.578847 secs (2529788 bytes/sec)
3800+0 records in
3800+0 records out
3984588800 bytes transferred in 1540.553921 secs (2586465 bytes/sec)

~~~

From here, you can eject the SD card from your Mac and insert it the micro-SD card reader on the Pine64. Apply power to the Pine64 and... it boots!


### Login Credentials

Default username and password for this Linux image:

* user = root
* pw = root

### One Pine64 Obstacle

As of this writing, Midori and Firefox are not stable on my Pine64. Earlier this morning I learned about a DMA-to-Gigabit-Ethernet bug that might be related to browser stability. I'll post updates as I learn more.

### Pine64 vs Parallella

It is natural to compare Pine64 with [Parallella](/blog/2014/07/07/parallella-quick-start-guide-with-gotchas/). Both are multi-core, single board computers running Linux. After owning the Pine64 for just a few days, here are my first impressions:

* Pine64 feels fast. It boots faster than Parallella and it responds quicker to commands.

* Parallella's Linaro image comes with more software out-of-the-box. Vim, Emacs, and Git are all present on the Parallella Linux image. Not so with Arch image for Pine64.

* Pine64 has better hardware connections for power, HDMI, and USB. On the Pine64, all of these connections are standard, full-size. Further, you can connect a keyboard and mouse directly to the two USB ports on the Pine64 without using a USB hub. With Parallella, you need a micro-HDMI adapter, micro-USB adapter, and  USB hub to provide power for operating the keyboard and mouse. 

* Parallella has more cores. Each Parallella comes with 2 ARM cores plus 16 or 64 Epiphany RISC cores. The cores have architectural differences, so simply counting the number of cores is not an apples-to-apples comparison.

* Pine64 has 4k video. Parallella has 1080p HD video. 

* Pine64 has a version with 2GB of RAM. Maximum RAM on Parallella is 1GB.

* Parallella has a smaller form factor, which may make it more suitable for IoT projects like robots or drones. The Pine64 will require more space inside of any IoT device.

* Parallella uses 5 watts of power. Pine 64 uses 2.5 watts. 

* Parallella runs hot enough to require a heat sink, a fan, or both. Pine64 runs much cooler. No fan or heat sink required.

* Pine 64 has the clear advantage when it comes to price. My Pine64 with 2GB RAM was $36.00 including shipping & handling. Parallella's price range: $99 - $149.

### Bottom Line

The choice between Pine64 and Parallella depends on your design goals. For desktop usage, I would choose Pine64. For an embedded system that needs parallelism and perhaps an FPGA, I would go with Parallella.

Overall, I like the Pine64. I expect the browser (or DMA?) bug to be resolved soon. And it's good to have a new 64-bit platform where parallelism can be explored.
