---
layout: post
title: "CocoaConf Chicago Recap"
date: 2014-03-10 11:46
comments: true
categories: [ Community, iOS ]
---

{% include image.html img="/images/cocoaconf-2014.jpg" caption="Cool stuff from CocoaConf." %}

> One purpose of a conference is to help you to spot trends while there's still time to reap the benefits of being an early adopter. 
>&nbsp;<br/>
>~Brian Marick at [SCNA 2013](http://scna.softwarecraftsmanship.org/)

Early adopters on Apple's Mac OS X and iOS platforms flock to [CocoaConf](http://cocoaconf.com/), a multi-city conference for developers. Tickets are slightly easier to get than [WWDC](http://en.wikipedia.org/wiki/Wwdc); CocoaConf consistently sells out. 

CocoaConf's presenters are practicing developers, actively building real software every day. They come to CocoaConf to share their experiences in a wonderful upward-spiral of technical learning. Here are a few highlights from the latest CocoaConf, held March 7-8 near Chicago.

<!--more-->

###Customers Will Pay for Services
[Justin Williams](https://twitter.com/justin) kicked things off with a keynote titled _10 Things I Think I Think_. Williams recently acquired [Glassboard](http://glassboard.com/), so his developer skills are blended with the insights of a business owner. His list of ten included one approach to making money from mobile apps: Forget about selling a million copies in the App Store. Instead, create a service, charge a monthly fee for the service, and give the app away for free so customers can engage with the service. Engaged customers will continue to pay the monthly fee. When customers are served well, they will pay.

###Effective iOS 7 Networking

{% include image.html img="/images/afnetworking-charles.png" caption="Charles shows network connections." %}

Customer-focused mobile apps usually communicate with other software via the web. [Ben Scheirman](http://twitter.com/subdigital) shared his experiences in building iOS apps that communicate with web services. Several questions are raised when we build apps like this, namely:

* How do we include communication capabilities without sacrificing performance? 
* If the mobile app requests information from a web service, and the service is unavailable (or slow) how do we avoid frustrating the user? 

`NSURLSession`, introduced with iOS 7, lets us upload and download in the background. Users are kept happy because the app continues to function in the foreground. Scheirman's [slides](https://speakerdeck.com/subdigital/effective-network-programming-in-ios-7) and [sample code](https://github.com/subdigital/mods-2013) give more details.

It is also interesting to note what tools the presenters use in their
daily work. Scheirman uses [Charles](http://www.charlesproxy.com/)
to monitor network traffic between machines, and to track down hiccups.

###Xcode Walkabout

{% include image.html img="/images/xcode-git-commit.png" caption="Showing Git commit messages in Xcode." %}

Most of my iOS time is spent with [Vim](/blog/2013/01/12/why-i-use-vim/) and [RubyMotion](/blog/2012/10/29/building-ios-apps-with-ruby-motion/). I use Xcode mainly to learn things that I can apply to RubyMotion. Still, [Laura Savino](http://twitter.com/savinola)'s exploration of Xcode proved valuable. 

Like many developers on the Apple platforms, Savino has a love/hate relationship with Xcode. She almost titled her talk "stupid little buttons that don't even look like buttons." Savino summarized several years of Xcode immersion and pair programming into 60 minutes of little-known tips and tricks. For example, Xcode plays nicely with Git (you can even show commit messages within the IDE). And it's possible to use Vim key bindings while editing files.

###Sprite Kit

[Josh Smith](http://twitter.com/kognate)'s Sprite Kit presentation was full of gotcha-eliminating information. For example, the coordinate systems for Sprite Kit and UIKit are inverted. I'm sure this is documented somewhere, but I didn't know about it! The bottom line with Sprite Kit: We can add animation to our apps without doing all of the fundamental work. Saves time.

Slides and code are posted in a single [repo on GitHub](https://github.com/kognate/presentations). Worth looking at.

###Parallel Computing with OpenCL

The parallel computing talk by [Jeff Biggus](http://twitter.com/hyperjeff) was the most mind-blowing session of CocoaConf, for me. The presentation was exciting because it tied our current set of tools (like [GCD](https://developer.apple.com/library/ios/documentation/Performance/Reference/GCD_libdispatch_Ref/Reference/reference.html)) with high performance computing work currently underway at universities and at corporations like NVidia. When theory blends with application, great things can be achieved.

Biggus shared some of the work of [OpenCL](https://www.khronos.org/opencl/), a standard designed for cross-platform parallel computing. We care about parallel computing because...

* Moore's Law has just about run its course. 
* Engineers have packed transistors about as tightly as they can on silicon.

Unless we can figure out how to [rewrite the laws of physics](http://en.wikipedia.org/wiki/Montgomery_Scott), the next advances in computing performance will come from making processors work together without stepping on each other's toes.

###The Klein Family

2014 marks CocoaConf's third year in the Chicago area. The conference is run by Dave and Debbie Klein and their 14 children. [About The Family Behind CocoaConf](http://cocoaconf.com/family) gives details.

Thank you, Klein family, for another great CocoaConf!
