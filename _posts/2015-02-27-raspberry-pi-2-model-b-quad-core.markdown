---
layout: post
title: "Raspberry Pi 2 Model B Quad Core"
date: 2015-02-27 21:04:11 -0600
comments: true
categories: [ Linux, Raspberri Pi ]
published: true
---
{% imgcap right /images/raspberry_pi_2_model_b.jpg Raspberry Pi 2 Model B %}
The [Raspberry Pi Foundation](http://www.raspberrypi.org/) has upped their entry in the single-board computer competition. Raspberry Pi 2 Model B boasts a quad core ARM CPU and 1GB of RAM. More important: Benchmarks show that the board is 6x faster than the previous model. And the performance bump has been achieved while the price remains low: Roughly $45.

Getting the board up and running is easier, too. You can buy a pre-built Linux image on micro SD. Or you can [download the New Out Of the Box (NOOBS) image](http://www.raspberrypi.org/downloads/) yourself. Depending on the speed of your internet connection, you can be up in running in less than an hour.
<!--more-->
### Easier Than Before
Special note about the NOOBS image: You don't need a special utility to burn an SD card like before. The steps are:

* Download the [NOOBS image](http://www.raspberrypi.org/downloads/) and unzip it.
* Format a micro SD card that's at lease 4GB in size.
* Drag the unzipped NOOBS files to the micro SD card.
* Insert the micro SD card into the Raspeberry Pi, apply power, and watch it boot.

Having done things [the old way](/blog/2012/12/03/ruby-on-raspberry-pi/), I was surprised that the process was so simple this time. Hats off to the Raspberry Pi Foundation for a great installation experience.

### Login Information
After the device boots, you will need login credentials. These have not changed from the previous version: 

``` bash

raspberripi login: pi
Password: raspberry

```

Note that the cursor will not move while you type the password.

Next, start the X Window environment.

``` bash
$ startx

```
And your desktop will look something like this.

{% imgcap middle /images/raspberry_pi_2_model_b_ruby.jpg Screenshot: Raspberry Pi 2 Model B %}


### Running Ruby, Rails
This incarnation of Raspberry Pi comes with Ruby 1.9.3 pre-installed. Of course, if you want to manage multiple versions of Ruby, [RVM is a great way to go](/blog/2013/05/16/upgrading-ruby-with-rvm/).

To install RVM, first run `gpg` to verify that you will get an uncorrupted (or un-tampored with) version of RVM.

``` bash

$ gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3

$ 

```

Next, install RVM.

``` bash
$ \curl -sSL https://get.rvm.io | bash -s stable

$ 

```

And finally, let the current terminal session know that RVM is installed
by typing the following at the command line.

``` bash

$ source /home/pi/.rvm/scripts/rvm

$ 

```

You can verify that RVM is installed by checking its version number like so...

``` bash

$ rvm --version
rvm 1.26.10 (master) by Wayne E. Seguin <wayneeseguin@gmail.com>, Michal Papis <mpapis@gmail.com> [https://rvm.io/]

$ 

```

### Installing Ruby Versions
To install the latest stable version of Ruby...

``` bash

$ rvm install ruby

$ 

```

RVM will download dependencies as part of the installation process. From there, you can create RVM gemsets and `gem install rails` or any other libraries you may need. More documentation can be found at [http://rvm.io](http://rvm.io).

