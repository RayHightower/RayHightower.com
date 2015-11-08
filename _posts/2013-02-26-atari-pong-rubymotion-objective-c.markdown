---
layout: post
title: "Atari's Pong, Built With RubyMotion"
date: 2013-02-26 10:35
comments: true
categories: [Education, Objective-C, Ruby, RubyMotion, iOS]
published: true
---
<img src="/images/pong-rubymotion-objective-c.png" width="300" height="160" alt="Atari's Pong in RubyMotion and Objective-C" title="Atari's Pong in RubyMotion and Objective-C" align="right">
[Atari's Pong](http://en.wikipedia.org/wiki/Pong) is a classic video arcade game from the 1970s. Seeing Pong always gives me childhood flashbacks.

### Pong in Objective-C
I recently completed the [iOS Accelerated](http://mobilemakers.co/ios-accelerated) course at the [Mobile Makers Academy](http://mobilemakers.co/). For one of our homework assignments, we were asked to build a version of Pong that runs on iOS. Our instructor, [Don Bora](http://twitter.com/dbora), started us off with some skeleton code in Objective-C. Each student had to take Don's code and:

* Add paddles.
* Make the paddles move on their own.
* Make the ball bounce off the moving paddles.
* Keep score.
* Let one or two players control the paddles via touch.

<!-- more -->

### Questions to Consider
How do you determine whether the pixels of the ball have collided with the pixels of a paddle? What about wall collisions? When a collision occurs, where should the ball bounce next? As with any application, there are many details to consider. 

### Building Blocks
Of course, Don had already introduced the necessary skills in earlier lectures, labs, and homework. It was our job to put the pieces together. 

Members of the class paired with each other. We shared solutions and advice. In time, we each ended up with a working version of Pong in Objective-C. It's exciting to see a favorite childhood game running in the iOS simulator on your own machine, especially if you built the game yourself.

### Pong in RubyMotion
Since my day job revolves around Ruby, it made sense to re-write the exercise in [RubyMotion](http://rayhightower.dev/blog/2012/10/29/building-ios-apps-with-ruby-motion/). Here are video clips of my two solutions. The first was written in Objective-C during the Mobile Makers course. The second was written in RubyMotion.

<center><iframe name="pong-oc" width="560" height="315" src="http://www.youtube.com/embed/9LETiMdi9jQ?rel=0" frameborder="0" allowfullscreen></iframe></iframe></center>

<center><iframe name="pong-rm" width="560" height="315" src="http://www.youtube.com/embed/Lt-JKqiA_fg?rel=0" frameborder="0" allowfullscreen></iframe></center>

As expected, the two solutions look similar. Source code is on GitHub: 

* [Pong in Objective-C](http://github.com/rayhightower/pong-oc)
* [Pong in RubyMotion](http://github.com/rayhightower/pong-rm)

### RubyMotion Gotchas
I encountered a few RubyMotion snags during development:

* *Mouseovers Ingored*. Normally, when running the simulator with RubyMotion, you can mouse over an object in the simulator, hit the command key, and grab a handle to the object.  This behavior was absent in landcape mode with version 1.31 of RubyMotion. The release notes for version 1.33 mention that the problem has been solved. However, that was not my experience. 

* *Touch Events Ignored on Part of Screen*. For some reason, the simulator ignored touch events on the right side of the screen. When I programatically moved the right paddle closer to the left side of the screen, both paddles responded to touch events. Searches of Google and Stack Overflow reveal that others have encounterd the same issue with touch events, especially in landcape mode.

*Update (3/13/2013): The issue with touch events has been resolved, thanks to advice from Turki Al-Qusaimi in the comments below. Updated code has been pushed to the [master branch on GitHub](https://github.com/RayHightower/pong-rm).*

Of course, I introduced a few bugs of my own while developing the Pong game. At one point, the velocity of the ball increased every time a player scored. It made the game exciting! But I didn't know the cause of the acceleration, and good developers strive to maintain better control over their projects. 

I eventually found the acceleration problem: When using an NSTimer object to control animation, you have to invalidate the timer at the beginning of each cycle, or the animation will accelerate. That's a useful thing to know.

The rest of my work in RubyMotion went well, and I continue to enjoy the product. I plan to update the code once the touch event issues have been resolved.

### Why Play Games?
Why should a serious developer spend time writing games? I can think of a few reasons:

* Writing a game challenges our skills on many levels. In the case of Pong, we have to dust off our old physics and geometry textbooks to ensure that the ball bounces like a real ball.

* Writing a game lets us break out of our constraints. Devs who write business apps are very familiar with constraints.

* Because writing a game is fun.

Of course, the most important reason was given by a captain of the USS Enterprise NCC-1701:
>The more advanced the mind, the greater the need for the simplicity of play.
><br/>~James T. Kirk

### Room for Improvement
Building the Pong game was an interesting exercise in testing the capabilities of RubyMotion. Having done the work, I can look back and see some areas where I could improve the results. For example:

* Automated testing. These proof-of-concept exercises were done without automated testing. What is the best way to apply test driven development to a game? RubyMotion comes with a TDD framework, MacBacon. That would be a great subject for a future blog post.

* Better design. Each exercise looks like something from the 1970s! How would Pong function if it was created in 2013?

* Better collision detection. I'm using a built-in iOS method to detect ball collisions. The built-in detection works fine with the stationary walls, but not as well with the moving paddles. If I write a future version of Pong, I should also write a custom collision detection method.

### Comments and Pull Requests
[My team and I](http://wisdomgroup.com) build business apps. My gaming experience is limited. If you are a game developer, and if you see anything in my code that could be done better, your ideas are welcome. Feel free to submit a [pull request via GitHub](http://github.com/rayhightower/pong-rm), or you can drop a note in the comments below. Thanks!
