---
layout: post
title: "Orange Pi Setup for Mac OS X"
date: 2015-11-27 14:03:11 -0500
comments: true
categories: [ Education, IoT ]
published: true
---
Raspberry Pi was the original low-cost single board computer. Competing products followed, including [Beaglebone Black](/blog/2014/01/02/beaglebone-black-ubuntu-part-1/), [Parallella](/blog/2015/08/22/madison-ruby-and-parallella/), and now [Orange Pi](http://www.orangepi.org/).

The official Orange Pi instructions assume that the user is working on a Windows-based machine. This blog post applies to Mac OS X.

### Overview
OS = [Lubuntu](http://lubuntu.net/)
Default credentials:

* Username: `orangepi`
* password: `orangepi`

OrangePi boots really fast. I’m not sure whether this is due to the speed of the SD card, the lightness of the Lubuntu operating system, or both.

Clock Speed??

<!--more-->

### Screenshots w/Scrot
The Orange Pi Linux image comes with [Scrot](/blog/2013/03/19/how-to-take-a-raspberry-pi-screenshot/), a tool for capturing screenshots. To use Scrot, 

To take a screenshot of the whole screen:

```bash
$ sudo scrot

```

By default, the screenshot will be stored in the current directory in a file named for the numerical date and time with a `.png` extension.

To take a screenshot after a 10-second delay:

``` bash

$ sudo scrot -d10

```

Ten seconds later, the image file will appear in the target directory.


### SCP: To Copy the Screenshots to Your Mac

The following commands worked on a MacBook Pro running OS X Yosemite. Your mileage may vary. And the [sudo disclaimer](/sudo-disclaimer/) applies.

``` bash

~$ scp orangepi@192.168.11.137:~/2015-11-10-125641_1280x720_scrot.png ~/Desktop/orange1.png
orangepi@192.168.11.137's password:
2015-11-10-125641_1280x720_scrot.png                                           100%  230KB 230.0KB/s   00:00

~$ 

```

### How to Burn the SD Card



### Grab the Linux SD Image

``` bash

$ brew install xz
==> Downloading https://homebrew.bintray.com/bottles/xz-5.2.1.yosemite.bottle.tar.gz
######################################################################## 100.0%
==> Pouring xz-5.2.1.yosemite.bottle.tar.gz
🍺  /usr/local/Cellar/xz/5.2.1: 59 files, 1.7M

$ xz -d Lubuntu_1404_For_OrangePi2-mini2_v0_8_0_.img.xz

$ ls -al
total 7168000
drwxr-xr-x    3 rth  staff         102 Nov  9 21:14 .
drwx---r-x+ 114 rth  staff        3876 Nov  9 21:25 ..
-rw-r-----    1 rth  staff  3670016000 Nov  9 21:08 Lubuntu_1404_For_OrangePi2-mini2_v0_8_0_.img

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

```

From the `diskutil` report, we can see that the designation for the SD
card is `/dev/disk1`. Unmount the SD card image.

``` bash
$ diskutil unmountDisk /dev/disk1
Unmount of all volumes on disk1 was successful

```

``` bash
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

```
   


``` bash

$ sudo dd if=Lubuntu_1404_For_OrangePi2-mini2_v0_8_0_.img of=/dev/disk1 bs=1m
Password:
3500+0 records in
3500+0 records out
3670016000 bytes transferred in 2366.903418 secs (1550556 bytes/sec)

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

```

### Gotcha: The Disk You Inserted...

As soon as the disk image finished writing to the SD card, a dialog box popped up with the following error message: `The disk you inserted was not readable by this computer.`

What to do? Ignore the message, hit `eject`, and remove the SD card from your Mac. When you insert the microSD card into the OrangePi Mini 2, the board should boot immediately. No idea why the error message popped up, and your mileage may vary. Did the Mac suddenly realize that it had been formatting a Linux image all along? Who knows! The important thing: The new image boots the Orange Pi successfully.

