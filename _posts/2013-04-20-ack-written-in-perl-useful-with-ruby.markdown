---
layout: post
title: "Ack 2.0: Written in Perl, Useful With Ruby"
date: 2013-04-20 17:12
comments: true
categories: [Education, Linux, OS X, Rails, Ruby, Vim]
---
<img src="/images/ack.png" align="right" height="237" width="230" alt="Ack Linux Mac OS X" title="Ack Linux Mac OS X">

[Ack](http://beyondgrep.com/) is an open source command line tool that lets developers search large trees of source code very quickly. If you are looking for a method definition in a haystack of files, Ack will find that needle for you. Many devs regard Ack as a replacement for [grep](http://en.wikipedia.org/wiki/Grep).

The Elmhurst [ChicagoRuby](http://chicagoruby.org) meetings are always a source of unexpected learning. Today ChicagoRuby welcomed [Andy Lester](http://twitter.com/petdance), creator of Ack. Andy released Ack 2.0 two days ago. He shared some of the latest features in an impromptu demo.

<!--more-->

####Why Ack?
Have you ever been working on a project, only to be interrupted when you need to look for something? It could be a method name, a variable declaration, or a string of text in a comment. A minor distraction costs you the time it takes to search plus the time required to re-focus.

All of us are more productive when we stay _in the zone_. Ack helps devs to maintain focus and thereby produce better results.

####First, Install Perl
Ack requires the [Perl](http://en.wikipedia.org/wiki/Perl) programming language. Perl comes pre-installed on Mac OS X and most Linux distros. If you're running on a 'nix platform, you probably have Perl already.

Windows installations are beyond the scope of this article. If you're running Windows, you might consider a Linux VM for Ruby and Rails-related work.

####Installing Ack on Mac OS X
Installing Ack is so easy that it almost feels wrong: Grab Ack in a single Perl file and drop it in your `~/bin/` directory. That's it. 

Ack can also be installed via [Homebrew](http://mxcl.github.io/homebrew/), but I prefer the _drop it in ~/bin_ installation since everything is contained in one file. Here's a more detailed version of the steps:

1. If you don't have one already, create `~/bin/` as a subdirectory of your home directory.
2. Grab a the single-file copy of Ack from [http://beyondgrep.com/ ](http://beyondgrep.com/)
3. Drop the single-file copy of Ack into a file called `~/bin/ack`
4. Make sure that `$HOME/bin:` appears at the beginning of your `$PATH` environment variable.

At this point you should be running Ack v2.0 or later. To verify:

```bash
~/bin$ ack --version
ack 2.02 (git commit f3c8827)
Running under Perl 5.12.4 at /usr/bin/perl

Copyright 2005-2013 Andy Lester.

This program is free software.  You may modify or distribute it
under the terms of the Artistic License v2.0.

~/bin$
```

Installation complete. Now, let's take Ack for a spin.

####Using Ack at the Command Line
For a sample project, let's use `demo_app` from Michael Hartl's [Ruby on
Rails Tutorial](http://rubyonrailstutorial.com). Imagine that you want
to find every file in the project that references `user_id`. How would
you do that?
<img src="/images/ack_user_id.png" align="center" height="650" width="887" alt="Ack command line demo" title="Ack command line demo">

Fast, clear, and highlighted in color. Bonus: If you're a Vim user,
try [ack.vim](https://github.com/mileszs/ack.vim) if you want to run Ack
without leaving your editor.

####The Bottom Line
Ack helps devs to find things quicker without leaving the zone. Try it!

