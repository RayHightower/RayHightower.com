---
layout: post
title: "The Lambda Jam 2015 Experience"
date: 2015-07-20 09:41:04 -0500
comments: true
categories: [ Community, Functional Programming ]
---

{% include image.html img="/images/LambdaJam.png" caption="Lambda Jam 2015" %}

Working in software development is like being the proverbial kid in candy store. Every new language is a shiny and delicious thing. [Lambda Jam](http://lambdajam.com) (which bounces between Chicago and Melbourne) is a traveling candy store. And, like the kid in the candy store, I am sometimes distracted by tangential temptation.

Most of my time is spent running [WisdomGroup](http://wisdomgroup.com), where we focus on Ruby and Swift. We're object-oriented all the way. Given that, why would I want to attend a functional programming conference like Lambda Jam? For the brain-stretching experience. If your background is anything like mine, you might enjoy it, too. Here’s why.

<!--more-->

### Motivation: Parallelism and Concurrency
One immediate reason to explore FP: The impending end of Moore's Law.  For over half a century we've taken it for granted that we could double the number of transistors on a wafer every 18 months or so. But the laws of physics are catching up to us, and now we need to create new ways to boost computer performance. Two potential performance boosters: Parallelism and concurrency.

And yes, as Rob Pike points out, [Concurrency is Not Parallelism](https://www.youtube.com/watch?v=cN_DpYBzKso&list=PLOnWKC1gI_OPU8SDIBnCLHsgzNLSbnPJQ&index=8). Concurrency enables parallelism.

Certain features of FP reduce the pain of writing concurrent programs.  For example, data immutability will not allow two (or more) instances of the same process to over-write the same data. Developers trained to write serially-executing programs never have this concern. But if we want the benefits of concurrency, we need to acknowledge and attack a new set of challenges.

Side note: [Parallella](/blog/2014/07/07/parallella-quick-start-guide-with-gotchas/) offers one way to explore parallelism and concurrency in hardware. What a board!

### FP, Physics, and Calculus
[Conal Elliott](https://twitter.com/conal) kicked off Lambda Jam by making connections between FP, physics, and calculus. He shared why concurrent models are difficult to reason about. And then he shared methods of abstraction that we can use to overcome the difficulty. 

One abstraction tool, mentioned by Elliott and shared by some of the other presenters: Types. Ruby is a dynamically typed language, employing "duck typing" as needed. The flexibility that comes from duck typing sometimes leads to unintended consequences. A strongly typed language, like Haskell or Clojure, can make certain programming errors obvious before we put our code into production. 

### Haskell Tutorial
[Ranjit Jhala](https://twitter.com/ranjitjhala)'s Haskell tutorial offered a chance to put some FP ideas into practice. The idea of attending a Haskell tutorial was intimidating. But I went anyway, and I'm glad that I did. Jhala made the material accessible. I left the Haskell tutorial with some hands-on experience and a new appreciation for FP (in general) and Haskell in particular.

### Hallway Conversations
Serendipity is a huge benefit of any conference. I ran into a [DevMynd](http://devmyndsoftware.com) developer, [Peter Harkins](http://twitter.com/pushcx), who uses FP principles to make his Ruby code more robust. To learn more about this approach, check out [Jessica Kerr](https://www.windycityrails.org/videos/2013/#2)'s FP presentation at WindyCityRails 2013.

### The Venue: South Shore
Any recap of Lambda Jam 2015 would be incomplete without a description of the venue, [South Shore Cultural Center (SSCC)](http://www.chicagoparkdistrict.com/parks/South-Shore-Cultural-Center/). Some of you will remember SSCC as the venue for WindyCityRails 2012 and 2013. It's in the middle of a golf course, next to Lake Michigan. The retreat-type atmosphere is great for brain work. Hats off to the Lambda Jam organizers for the choice. I look forward to a return visit.

### Conclusion
Much of the FP material at Lambda Jam was over my head. And yet a great deal was accessible to me. As developers, we must always stretch ourselves to learn more; that's how we grow. Lambda Jam is great for stretching, and great for growth.
