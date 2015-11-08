---
layout: post
title: "When in Doubt, Rake Clean"
date: 2014-04-10 15:53
comments: true
categories: [ RubyMotion ]
---
Earlier today, I upgraded from RubyMotion `v 2.24` to `v 2.26`. Immediately after the upgrade, I attempted to run a RubyMotion app that I’m working on. The result?

```bash
$ rake

     Build ./build/iPhoneSimulator-7.1-Development
   Compile ./app/app_delegate.rb
   Compile ./app/views/score_label.rb
   Compile ./app/views/paddle_view.rb
      Link ./build/iPhoneSimulator-7.1-Development/pong-rm4.app/pong-rm4
Undefined symbols for architecture i386:

...

clang: error: linker command failed with exit code 1 (use -v to see invocation)
rake aborted!

$  

```

What happened? It just ran a few minutes ago, right before the upgrade! Was RubyMotion broken? Was it time to reach out to the Twitterverse or Stack Overflow for assistance?

Not yet.

<!--more-->

###Cooler Heads
Every time RubyMotion build an app, it stores the results in the `./build` directory. Since I had just done an upgrade, it was possible that remnants from a `v 2.24` build were interfering with my new `v 2.26` build. The solution?


```bash
$ rake clean

    Delete ./build

$  
```

And now the app runs fine. Crisis averted. Back to work!
