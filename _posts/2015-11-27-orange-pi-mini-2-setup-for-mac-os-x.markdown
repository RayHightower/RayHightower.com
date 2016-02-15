---
layout: post
title: "Orange Pi Setup for Mac OS X"
date: 2015-11-27 14:03:11 -0500
comments: true
tags: [ Education, IoT ]
published: true
---

Raspberry Pi was the original low-cost single board computer. Competing products followed, including [Beaglebone Black](/blog/2014/01/02/beaglebone-black-ubuntu-part-1/), [Parallella](/blog/2015/08/22/madison-ruby-and-parallella/), and recently, [Orange Pi](http://www.orangepi.org/).

The official Orange Pi instructions assume that the user is working on a Windows-based machine. This blog post shows how to prepare an SD-card image using Mac OS X. As with all instruction sets on this blog, the [sudo disclaimer](/sudo-disclaimer/) applies.

<!--more-->

### Overview

Orange Pi runs [Lubuntu](http://lubuntu.net/), a lightweight version of the Ubuntu Linux distribution. The default credentials are:

* Username: `orangepi`
* password: `orangepi`

OrangePi boots really fast. I’m not sure whether this is due to the speed of the SD card, the lightness of the Lubuntu operating system, or both.

### Grab the Linux SD Image

Download the Lubuntu image from the [Orange Pi website](http://www.orangepi.org/downloadresources/). I'm using the Orange Pi 2 Mini 2. You will need to download the image that is appropriate for your particular Orange Pi.

### Decompress the Orange Pi Image File

The `xz` file compression utility is a handy way to decompress the Orange Pi image. `xz` installation is painless with [Homebrew](/blog/2014/02/12/homebrew-fundamentals/).

~~~ bash

$ brew install xz
==> Downloading https://homebrew.bintray.com/bottles/xz-5.2.1.yosemite.bottle.tar.gz
######################################################################## 100.0%
==> Pouring xz-5.2.1.yosemite.bottle.tar.gz
🍺  /usr/local/Cellar/xz/5.2.1: 59 files, 1.7M

~~~

You can then decompress the Lubuntu image file using `xz`.

~~~ bash

$ xz -d Lubuntu_1404_For_OrangePi2-mini2_v0_8_0_.img.xz

~~~

Once decompression is complete, the new file will have the `.imb` extension.


~~~ bash

$ ls -al
total 7168000
drwxr-xr-x    3 rth  staff         102 Nov  9 21:14 .
drwx---r-x+ 114 rth  staff        3876 Nov  9 21:25 ..
-rw-r-----    1 rth  staff  3670016000 Nov  9 21:08 Lubuntu_1404_For_OrangePi2-mini2_v0_8_0_.img

~~~

### Choose Your SD Card Target

This step is critical. When you write the Lubuntu image to your SD card, it's important to choose the correct SD card designation. Otherwise, you could overwrite the hard drive on your Mac.

Here's how to get the correct designation for the SD card. First use `diskutil list` to show all of the drives on your Mac.

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
   0:     FDisk_partition_scheme                        *7.9 GB     disk1
   1:                 DOS_FAT_32 NO NAME                 7.9 GB     disk1s1

~~~

From the `diskutil` report, we can see that the designation for the SD card is `/dev/disk1`. Unmount the SD card image.

~~~ bash

$ diskutil unmountDisk /dev/disk1
Unmount of all volumes on disk1 was successful

~~~

After you `unmount` the SD card, the `diskutil` report will appear unchanged. But we need to unmount the SD card so that we can write an image to it.

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
   0:     FDisk_partition_scheme                        *7.9 GB     disk1
   1:                 DOS_FAT_32 NO NAME                 7.9 GB     disk1s1

~~~
   
With the SD card unmounted, write Lubuntu image as follows.

~~~ bash

$ sudo dd if=Lubuntu_1404_For_OrangePi2-mini2_v0_8_0_.img of=/dev/disk1 bs=1m
Password:
3500+0 records in
3500+0 records out
3670016000 bytes transferred in 2366.903418 secs (1550556 bytes/sec)

~~~

`$ diskutil list` will let you view the new partitions After the image has been written.

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
   0:     FDisk_partition_scheme                        *7.9 GB     disk1
   1:                      Linux                         43.0 MB    disk1s1
   2:                      Linux                         3.6 GB     disk1s2

$ 

~~~

### Gotcha: The Disk You Inserted...

As soon as the disk image finished writing to the SD card, a dialog box popped up with the following error message: `The disk you inserted was not readable by this computer.`

What to do? Ignore the message, hit `eject`, and remove the SD card from your Mac. When you insert the microSD card into the OrangePi Mini 2, the board should boot immediately. No idea why the error message popped up, and your mileage may vary. Did the Mac suddenly realize that it had been formatting a Linux image all along? Who knows! The important thing: The new image boots the Orange Pi successfully.

### To Boot Your Orange Pi

Insert the micro-SD card into the Orange Pi's micro-SD card reader. Boot the Orange Pi, and it should come up farily rapidly. Congratulations!

### Next Steps

So far the Orange Pi seems to behave similar to the Raspberry Pi or Beaglebone Black, except the Orange feels faster. This blogger should include benchmarks in a future Orange Pi post.


