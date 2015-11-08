---
layout: post
title: "How to Take a Raspberry Pi Screenshot"
date: 2013-03-19 20:43
comments: true
categories: [Linux, Raspberry Pi]
---
After you get a [Raspberry Pi](/blog/2012/12/03/ruby-on-raspberry-pi/) up and running, you may want to take a few screenshots so you can share the experience with others. Here's how.

<!--more-->

####Install Scrot
First, install the screenshot utility, `scrot`. Open up the LXTerminal
and type the following at the prompt:

```bash
$ sudo apt-get install scrot
```

####Use Scrot
To take a screenshot of the whole screen:
```bash
$ sudo scrot
```
By default, the screenshot will be stored in the current directory in a file named for the numerical date and time with a `.png` extension.

To take a screenshot after a 10-second delay:
```bash
$ sudo scrot -d10
```

####Learn More About Scrot
To display a list of Scrot commands:
```bash
$ sudo scrot -h
```
That's it!





