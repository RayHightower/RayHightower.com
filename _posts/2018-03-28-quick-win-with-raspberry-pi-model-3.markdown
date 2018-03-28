---
layout: post
title:  Quick Win With Raspberry Pi Model 3
date:   2018-03-28
comments: true
tags: [ Raspberry_Pi, IoT ]
published: true
---
<img src="/images/Raspberry_Pi_Cluster.jpg" width="360" height="225" align="center" alt="Raspberry Pi cluster controlled via VNC" title="Raspberry Pi cluster controlled via VNC" />

When we experiment with something new, it can be encouraging to achieve a _quick win_ early in the process. Achieving a quick win can give us that jolt of energy we need to break through the inevitable roadblocks.

This post is designed to give you a quick win with the Raspberry Pi Model 3. Points covered:

* How to download and install an operating system for your Raspberry Pi.
* Using SSH to control your Pi from a laptop, so you won't need an external monitor.
* Using virtual network computing (VNC) to control your Pi's GUI without attaching a monitor.

<!--more-->

### Getting the Raspberry Pi Operating System

You can purchase the Raspberry Pi operating system pre-installed on an SD card. Adafruit and Amazon are two retailers who sell the OS this way.

Or you can download the operating system from the [Raspberry Pi site](http://raspberrypi.org). Buying the pre-installed card will save you time, but you might not get the latest versions of the software. It's easier to keep OS images up-to-date online.

### Choosing an SD Card

<img src="/images/micro_SD_cards.jpg" width="300" height="182" align="right" alt="Micro SD Cards" title="Micro SD Cards" />

As of this writing, the best micro SD cards for the Pi are Class 10 (indicated by the number `10` surrounded by a circle). I've always had success with the SanDisk Ultra Plus. Other cards might work just as well, but this is the one that has always performed for me.

Depending on the configuration of your laptop, you might need an adapter to read your card.

### Burning the SD Card

There's a GUI for burning a Raspberry Pi OS. I prefer the command line because the shell always works, while GUIs can be subject to operating system updates. Therefore, the command line method will be described here.

First, grab the disk designation of the SD card.

~~~ bash
$ diskutil list
/dev/disk0
   #:                    TYPE NAME              SIZE       IDENTIFIER
   0:   GUID_partition_scheme                  *960.2 GB   disk0
   1:                     EFI EFI               209.7 MB   disk0s1
   2:               Apple_HFS MacSSD            959.3 GB   disk0s2
   3:              Apple_Boot Recovery HD       650.0 MB   disk0s3
/dev/disk1
   #:                    TYPE NAME              SIZE       IDENTIFIER
   0:  FDisk_partition_scheme                  *15.9 GB    disk1
   1:              DOS_FAT_32 BOOT              134.2 MB   disk1s1
   2:                   Linux                   15.8 GB    disk1s2

~~~

Next, unmount the SD card.

~~~ bash
$ diskutil unmountDisk /dev/disk1
Unmount of all volumes on disk1 was successful

$ 

~~~

Finally, write the extracted Raspberry Pi image to the SD card.

~~~ bash
$ sudo dd if=2017-11-29-raspbian-stretch.img of=/dev/disk1 bs=1m
Password:

~~~

The `dd` command takes a _long_ time to run, over 29 minutes on my machine. Here's a quick run-through of the command options:

* `sudo` gives you [super powers](/sudo-disclaimer/). 

* `dd` is the "copy and convert" command. The letters "dd" have nothing to do with what the tool actually does. It's just a command name. And like so many things in computer science, the name might be based on a pun.

* `if=` specifies the input file. You can include the full path, or if the file is in your current directory, you can omit the path as shown in this example.

* `of=` specifies the output file. We know that the SD card is located at `/dev/disk` so that's where the results of this command are headed.  Note that your destination directory may differ from this one.

* `bs=` specifies the block size used for the destination file.

### Checking Progress While `dd` Burns the Image

The `dd` command does not give any outward sign that it is making progress. That can be a little uncomfortable because it takes a long time for the command to run. Here are two ways to check progress:

* Run the Mac Os X Activity Monitor, and look for a process called `dd`. Watch the `disk writes` number as it increases. You can even sort the processes in descending order by `disk writes`.

* In the terminal window where `dd` is running, hit `control-T` and you'll see a progress report in the terminal window.


### Once `dd` is Complete

When `dd` is done, you can eject the SD card from your Mac and insert it the micro-SD card reader on the Raspberry Pi. Apply power to the Pi and... it boots!

### Login Credentials

Default username/password:

* user = pi
* pw = raspberry

### Finding Your Pi's IP Address

<img src="/images/fing.jpg" width="300" height="312" align="right" alt="Fing network scanner for Android" title="Fing network scanner for Android" />

If you're using a password-protected WiFi network, you will need to connect the Pi so that it can obtain an IP address.

After you're connected to WiFi, your Pi will grab an IP address using the dynamic host configuration protocol (DHCP). You'll need the IP address in order to control your Pi via SSH or VNC.

A few ways to find the IP address of your Raspberry Pi:

* Go into the network configuration on your Pi and see what IP address
it grabbed (it defaults to DHCP).
* Use the `$ ifconfig` command at your Pi's command prompt. Ignore any
IP address that it gives you starting with `169.n.n.n` or `127.n.n.n`
(where n = any integer between 0 and 255). 
* Use a network scanner.

Using a network scanner is more fun because you get to see other devices on the network, too. For our purposes, almost any network scanner will do. I like to use [Fing](https://play.google.com/store/apps/details?id=com.overlook.android.fing&hl=en) on my Android phone, available through Google Play.

### Using SSH to Log In

At this point, you can try to ssh into your Pi from a laptop that's on the same subnet. Do that, and you'll get the following:

~~~
~$ ssh 10.10.1.167
ssh: connect to host 10.10.1.167 port 22: Connection refused

~$

~~~

By default, SSH is disabled on the Pi. Here's how to enable SSH on the Raspberry Pi.

1. Open a terminal window on your PI.
2. Open the Raspberry Pi Software Configuration Tool with the command `$ sudo raspi-config`.
3. Scroll down to Interfacing Options.
4. Choose SSH.
5. In response to `Would you like the SSH server to be enabled?` choose `Yes`.
6. The Pi will tell you that SSH has been enabled. 

Now when you try to SSH into the Pi...

~~~
~$ ssh pi@10.10.1.167
The authenticity of host '10.10.1.167 (10.10.1.167)' can't be established.
ECDSA key fingerprint is SHA256:P0VM/ohkn++qSA5qRIaDqfwVdSUgjMfDaU/ubAnW5mY.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '10.10.1.167' (ECDSA) to the list of known hosts.

pi@10.10.1.167's password:
Linux raspberrypi 4.9.59-v7+ #1047 SMP Sun Oct 29 12:19:23 GMT 2017 armv7l

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/&nbsp;/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Tue Mar 27 04:17:08 2018

SSH is enabled and the default password for the 'pi' user has not been changed.
This is a security risk - please login as the 'pi' user and type 'passwd' to set a new password.

pi@raspberrypi:~ $

~~~

Success! Of course, given the security warning, we might want to change the default password on the Pi.

### Gotcha: Some Non-Working VNC Clients

Once upon a time, it was possible to use the following VNC clients on macOS:

* Safari.
* Finder.
* TightVNC.
* TigerVNC.

These VNC clients no longer work no longer work on macOS High Sierra. In some cases, the missing functionality is intentional; I'm betting that Apple had security reasons for removing VNC capability from Finder and Safari. For TightVNC and TigerVNC, the authors may have found it difficult to navigate security restrictions in the latest Mac operating system.

Fortunately, we have [RealVNC]().

Download the RealVNC client and install it as you would any other Mac
software. 

<img src="/images/Raspberry_Pi_Cluster.jpg" width="360" height="225" align="center" alt="Raspberry Pi cluster controlled via VNC" title="Raspberry Pi cluster controlled via VNC" />




### How to Install the VNC Server

How do you install the VNC server on the Pi? Well, with the latest version of the Pi operating system, you don't have to. It's already there. Of course, you will need to enable it.

To enable VNC, go back into `$ sudo raspi-config`, find VNC, and enable it. The steps are similar to the ones we followed to enable SSH.

### Finding a VNC CLient for the Mac

### TightVNC Client


### TigerVNC Client

TigerVNC is a VNC client that runs on macOS. It requires XQuartz, the tool that provides X11 support on macOS.

If you already have XQuartz installed on your Mac (perhaps for other software that requires it) then you can install TigerVNC with the following:

~~~

$ brew install tiger-vnc


~~~

Otherwise, install XQuartz (using [Homebrew](/blog/2014/02/12/homebrew-fundamentals/)) like so.

~~~

$ brew cask install xquartz
==> Satisfying dependencies
==> Downloading https://dl.bintray.com/xquartz/downloads/XQuartz-2.7.11.dmg
######################################################################## 100.0%
==> Verifying checksum for Cask xquartz
==> Installing Cask xquartz
==> Running installer for xquartz; your password may be necessary.
==> Package installers may write to any location; options such as --appdir are ignored.
Password:
==> installer: Package name is XQuartz 2.7.11
==> installer: Installing at base path /
==> installer: The install was successful.
🍺  xquartz was successfully installed!

$

~~~

XQuartz installation took about 10 minutes on my machine. Your mileage may vary.

After XQuartz installation, Homebrew installed TigerVNC without any problems.

### How to Start TigerVNC

To start TigerVNC...

~~~

$ vncviewer

~~~

And you'll get a window asking for the IP address of the VNC server (our Raspberry Pi).

<img src="/images/vncviewer.png" width="360" height="225" align="center" alt="VNC Viewer" title="VNC Viewer" />









### Using VNC







### Out Takes
The Raspberry Pi remains at the top of the heap of single-board computers. Other single-board computers may have more cores or more power or a lower price. But the Pi remains on top largely due to the community of support that surrounds the device.
