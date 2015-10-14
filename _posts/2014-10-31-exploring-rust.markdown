---
layout: post
title: "Exploring Rust"
date: 2014-10-31 9:45
comments: true
published: false
categories: [ Other Languages ]
---
{% imgcap right /images/rust_logo.png Rust is fast. %}
>Rust is a work-in-progress and may do anything it likes up to and including eating your laundry.
>&nbsp;<br/>
><br/>~Disclaimer from the Rust home page

###Why Rust?
Rust is ...
<!--more-->
###Current Environment
All of the steps in this article were performed on a MacBook Pro running OS X Yosemite (10.10).

###Gotcha: Java 8 is Required
I was greeted with a [let me install Java] dialog box during my Rust installation. Having no idea why this dialog box popped up, I hit `cancel` and the installation failed. A quick Google search showed me the error of my ways, so my second `Rust`  installation proceeded normally.

Note that the `==> make` line seemed to execute for a long time (several minutes) during the installation, even after Java was installed. No indication of progress while make just sits there.

###Installation: Over 30 Minutes for Installation
###Long Installation Time, No Feedback
Something I haven’t seen written anywhere regarding Rust: Installation via Homebrew takes a long time with no indication that the command is making progress. The exact installation time on your machine may vary. For reference: I’m running a an early 2013 15” MacBook Pro with 16GB RAM and a 512GB SSD, and the installation took over 30 minutes.

``` bash
$ brew install rust
==> Downloading https://static.rust-lang.org/dist/rust-0.12.0.tar.gz
Already downloaded: /Library/Caches/Homebrew/rust-0.12.0.tar.gz
==> ./configure --prefix=/usr/local/Cellar/rust/0.12.0 --enable-clang
==> make
==> make install
🍺  /usr/local/Cellar/rust/0.12.0: 93 files, 196M, built in 33.7 minutes

~$ 

``` 

To confirm a successful installation…

``` bash
~$ which rustc
/usr/local/bin/rustc

~$ rustc --version
rustc 0.12.0-dev

~$ 
``` 


#Out-Takes

Looks like Homebrew isn’t the best way to install Rust.

