---
layout: post
title: "RVM and Parallella: What a Difference a Shell Makes"
date: 2014-07-21 21:46
comments: true
categories: [ Linux, Parallella ]
---
[RVM](/blog/2013/05/16/upgrading-ruby-with-rvm/) is an effective way to manage Ruby versions on Linux or OS X. RVM was working well on my Ubuntu-based [Parallella](/blog/2014/07/07/parallella-quick-start-guide-with-gotchas/), until one day it stopped:

```bash
linaro-nano:~> rvm list
rvm: Command not found.
linaro-nano:~>

```
`rvm: Command not found.` Fortunately, [Zach Briggs](https://twitter.com/theotherzach) and I were pairing at a joint OpenHack - ChicagoRuby event when the problem occurred. Zach is an ideal pairing partner; troubleshooting was smooth because he was there. Time to investigate.

<!--more-->

###Explicit Path
After a few experiments, we discovered that we could run RVM by explicitly specifying the path to the executable:

```bash
linaro-nano:~> ~/.rvm/bin/rvm list

rvm rubies

   ruby-2.0.0-p481 [ armv7l ]

# Default ruby not set. Try 'rvm alias create default <ruby>'.

# => - current
# =* - current && default
#  * - default

linaro-nano:~>

```

Therefore, it appeared that the Ubuntu/Linux `$PATH` variable was being ignored. Google led us to consider the shell in use on the Parallella.

###Which Shell Is In Use?
The shell is just a program that lets humans talk to the Linux operating system through a command line interface. Several shell programs exist. Linux users tend to prefer one shell or another. The `$SHELL` environmental variable points to the one in use.

```bash
linaro-nano:~> echo $SHELL
/bin/tcsh
linaro-nano:~>

```

Very interesting. `tcsh` was the current Parallella shell. I'm more accustomed to `bash`. Could RVM prefer `bash` too? We changed one line of `/etc/passwd` to tell the Parallella to start with `bash` instead of `tcsh` and rebooted the Parallella.

```bash
linaro-nano:~> echo $SHELL
/bin/bash
linaro-nano:~>

```
...and now RVM works normally.


```bash
linaro-nano:~> rvm list

rvm rubies

   ruby-2.0.0-p481 [ armv7l ]

# Default ruby not set. Try 'rvm alias create default <ruby>'.

# => - current
# =* - current && default
#  * - default

linaro-nano:~>

```

###Consider Fish?
Right after this exercise, Zach and [Josh Cheek](http://twitter.com/josh_cheek) had a Twitter conversation about a shell called [fish](http://fishshell.com/). Something new and shiny to explore!

###Original Plan: Rubinius
Did I mention that we originally planned to install [Rubinius](/blog/2014/02/06/installing-rubinius-using-rvm/) on the Parallella? Where there are goals, there are yaks waiting to be shaved!

