---
layout: post
title:  Quick Win With Raspberry Pi Model 3
date:   2018-03-28
comments: true
tags: [ Raspberry_Pi, IoT ]
published: true
---
<img src="/images/Raspberry_Pi_Cluster.jpg" width="360" height="225" align="center" alt="Raspberry Pi cluster controlled via VNC" title="Raspberry Pi cluster controlled via VNC" />

When we experiment with something new, it can be encouraging to achieve a _quick win_ early in the process. Achieving a quick win can give us that jolt of energy we need to keep us going past (and through) the inevitable roadblocks.

This post is designed to give you a quick win with the Raspberry Pi Model 3. Within this single article, you will learn how to:

* Download and install an operating system for your Raspberry Pi.
* Use SSH to control your Pi from a laptop, so you won't need an external monitor.
* Use VNC so that you can use your Pi’s GUI with without carrying a separate monitor.

### Choosing an SD Card

<img src="/images/micro_SD_cards.jpg" width="300" height="182" align="right" alt="Micro SD Cards" title="Micro SD Cards" />

As of this writing, the best micro SD cards for the Pi are Class 10 (indicated by the number `10` surrounded by a circle). I've always had success with the SanDisk Ultra Plus. Other cards might work just as well, but this is the one that has always performed for me.

Depending on the configuration of your laptop, you might need an adapter to read your card.




### Getting the Raspberry Pi Operating System

You can purchase the Raspberry Pi operating system pre-installed on an SD card. Adafruit and Amazon are two retailers who sell the OS this way.

Or you can download the operating system from the [Raspberry Pi site](http://raspberrypi.org). Buying the pre-installed card will save you time, but you might not get the latest versions of the software. It's easier to keep OS images up-to-date online.


### Burning the SD Card



### Booting the Raspberry Pi for the First Time



### Finding Your Pi's IP Address

<img src="/images/fing.jpg" width="300" height="312" align="right" alt="Fing network scanner for Android" title="Fing network scanner for Android" />

If you're using a password-protected WiFi network, you will need to connect to the network before the next steps work for you.

After you're connected to WiFi, your Pi will grab an IP address using the dynamic host configuration protocol (DHCP). And then you'll be able to grab your Pi's IP address.

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

### How to Install VNC

How do you install VNC on the Pi? Well, with the latest version of the Pi operating system, you don't have to. It's already there. Of course, you will need to enable it.

To enable VNC, go back into `$ sudo raspi-config`, find VNC, and enable it. The steps are similar to the ones we followed to enable SSH.





### Using VNC







### Out Takes
The Raspberry Pi remains at the top of the heap of single-board computers. Other single-board computers may have more cores or more power or a lower price. But the Pi remains on top largely due to the community of support that surrounds the device.
