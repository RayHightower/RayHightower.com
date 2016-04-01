---
layout: post
title:  Pine64 Quick Start Guide
date:   2016-04-01
comments: true
tags: 
published: true
---

<a href="/blog/2016/04/01/pine64-quick-start-guide-using-mac-os-x/"><img src="/images/pine64-desktop.png" align="center"></a>

The [Pine64](http://pine64.org) is a single board computer with four 64-bit cores. The device runs Linux, and prices start at US$15.00.

This guide tells how to get a brand new Pine64 up and running using Mac OS X for image download and creation. Of course, the standard [sudo disclaimer](/sudo-disclaimer/) applies.

<!--more-->

### Download the Image File

First, grab the Linux image file that's tailored for the Pine64. As of this writing, the image is [available here](). If that link is outdated, visit [Pine64.org](http://pine64.org) and look for a download link.

Download the image file. It will be archived in `.rar` format.  RAR is used because it has a higher compression ratio than .zip, and `.rar` files can store full file permissions while compressed.

Apple's Mac OS X does not include a utility for de-compressing .rar files. So you will need to grab one.

### Install unrar

[Homebrew](/blog/2014/02/12/homebrew-fundamentals/) is an ideal way to install Unix utilities on Mac OS X. Once you have Homebrew on your Mac, install URar like so:

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

~/Downloads/Pine64$ 

~~~

The message `All OK` means that everything is good with the image and `unrar`.

### Extract the Image File

~~~ bash

~/Downloads/Pine64$ unrar e arch-pine64-bspkernel-20160304-1-xfce4.rar

UNRAR 5.31 freeware      Copyright (c) 1993-2016 Alexander Roshal

Extracting from arch-pine64-bspkernel-20160304-1-xfce4.rar

Extracting  arch-pine64-bspkernel-20160304-1-xfce4.img                OK
Extracting  Readme.txt                                                OK
All OK

~/Downloads/Pine64$ 

~~~

~~~ bash
~/Downloads/Pine64$ diskutil list
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

~/Downloads/Pine64$ diskutil unmountDisk /dev/disk1
Unmount of all volumes on disk1 was successful

~/Downloads/Pine64$ 

~~~


~~~ bash

~/Downloads/Pine64$ sudo dd if=arch-pine64-bspkernel-20160304-1-xfce4.img of=/dev/disk1 bs=1m
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

~~~ bash

 
 



~~~



### Once `dd` is Complete

When `dd` is done, it outputs the following:

~~~ bash
~/Downloads/Pine64$ sudo dd if=arch-pine64-bspkernel-20160304-1-xfce4.img of=/dev/disk1 bs=1m
Password:
load: 1.41  cmd: dd 5933 uninterruptible 0.00u 6.59s
731+0 records in
730+0 records out
765460480 bytes transferred in 302.578847 secs (2529788 bytes/sec)
3800+0 records in
3800+0 records out
3984588800 bytes transferred in 1540.553921 secs (2586465 bytes/sec)

~~~

From here, you can ejec the SD card from your Mac and insert it the micro-SD card reader on the Pine64. Apply power to the Pine64 and... it boots!


### Comparaing Pine64 vs Parallella

It is natural to compare Pine64 with Parallella. Both are multi-core,
single board computers running Linux. After owning the Pine64 for just a
few hours, here are my first impressions:

* Pine64 feels fast. It boots faster than Parallella and it responds quicker to commands. I'll run benchmarks in coming weeks.

* Parallella comes with more software out-of-the-box. Vim, Emacs, and Git are all present on the Parallella Linux image. Not so with Pine64.

* Pine64 has better hardware connections for power, HDMI, and USB. On the Pine64, all of these connections are standard, full-size. Further, you can connect a keyboard and mouse directly to the two USB ports on the Pine64 without using a USB hub. With Parallella, you need a micro-HDMI adapter, micro-USB adapter, and  USB hub to provide power for operating the keyboard and mouse. 

* Parallella has the clear advantage in number of cores. Each model comes with 2 ARM cores plus 16 or 64 Epiphany RISC cores.

* Pine64 has 4k video. Parallella has 1080p HD video. 

* Pine64 has a version with 2GB of RAM. Maximum RAM on Parallella is 1GB.

* Parallella has a smaller form factor, which may make it more suitable for IoT projects like robots or drones. The Pine64 will require more space inside of any IoT device.

* Pine 64 has the clear advantage when it comes to price. My Pine64 with 2GB RAM was $36.00 including shipping & handling. 




RemixOS
===

~~~ bash

~/Downloads/Pine64$ unrar t RemixOS_pine64_B2016022702_1000MB_LAN_Beta.rar

UNRAR 5.31 freeware      Copyright (c) 1993-2016 Alexander Roshal


Testing archive RemixOS_pine64_B2016022702_1000MB_LAN_Beta.rar

Testing     pine64_B2016022702_1000MB_LAN.img                         OK
All OK

~/Downloads/Pine64$ 

~~~


~~~ bash

~/Downloads/Pine64$ diskutil list
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
   2:                      Linux                         7.3 GB     disk1s2

~/Downloads/Pine64$ diskutil unmountDisk /dev/disk1
Unmount of all volumes on disk1 was successful

~/Downloads/Pine64$ sudo dd if=RemixOS_pine64_B2016022702_1000MB_LAN_Beta.ra

~/Downloads/Pine64$ unrar e RemixOS_pine64_B2016022702_1000MB_LAN_Beta.rar

UNRAR 5.31 freeware      Copyright (c) 1993-2016 Alexander Roshal


Extracting from RemixOS_pine64_B2016022702_1000MB_LAN_Beta.rar

Extracting  pine64_B2016022702_1000MB_LAN.img                         OK
All OK

~~~


~~~ bash

~/Downloads/Pine64$ sudo dd if=pine64_B2016022702_1000MB_LAN.img of=/dev/disk1 bs=1m
Password:

~~~

~~~ bash
~/Downloads/Pine64$ sudo dd if=pine64_B2016022702_1000MB_LAN.img of=/dev/disk1 bs=1m
Password:
745+1 records in
745+1 records out
781754368 bytes transferred in 511.460877 secs (1528473 bytes/sec)

~/Downloads/Pine64$ ls -al
total 12000640
drwxr-xr-x   8 rth  staff         272 Mar 31 20:03 .
drwx---r-x+ 35 rth  staff        1190 Mar 31 19:39 ..
-rw-r--r--@  1 rth  staff   304464420 Mar 31 19:51 Pinea64_android_lollipop_20151210.rar
-rw-r--r--   1 rth  staff         404 Mar  7 22:51 Readme.txt
-rw-r--r--@  1 rth  staff   365109314 Mar 31 19:52 RemixOS_pine64_B2016022702_1000MB_LAN_Beta.rar
-rw-r--r--   1 rth  staff  3984588800 Mar  7 20:40 arch-pine64-bspkernel-20160304-1-xfce4.img
-rw-r--r--@  1 rth  staff   708398653 Mar 31 15:55 arch-pine64-bspkernel-20160304-1-xfce4.rar
-rw-r--r--   1 rth  staff   781754368 Feb 28 14:43 pine64_B2016022702_1000MB_LAN.img

~/Downloads/Pine64$ 

~~~


~~~ bash

~/Downloads/Pine64$ unrar e Pinea64_android_lollipop_20151210.rar

UNRAR 5.31 freeware      Copyright (c) 1993-2016 Alexander Roshal


Extracting from Pinea64_android_lollipop_20151210.rar

Extracting  sun50iw1p1_android_r18_uart0_1210.img                     OK
All OK

~/Downloads/Pine64$ 

~~~

### Login Credentials

The default usernames and passwords for this Linux image are:

* user = root, pw = root
* user = root, pw = root
* user = root, pw = root



