---
layout: post
title: "Upgrading Ruby With RVM"
date: 2013-05-16 13:36
comments: true
categories: [Education, Rails, Ruby]
---
[Ruby Version Manager (RVM)](http://rvm.io) is one of my favorite tools in the Ruby ecosystem.  Reason: RVM lets me experiment with Ruby and Rails at will. I don't know about you, but my best experiments are full of risk so they eventually blow things up. When that happens, I can always recover the broken areas without wasting time on a full system restore.

Some devs choose to use another tool, [RBenv](https://github.com/sstephenson/rbenv), that serves a purpose similar to RVM. I began working with RVM before the other tools existed, and since it has always worked well for me, I have no reason to switch.

####Ruby 2.0.0-p195
The latest patch of Ruby 2.0.0, p195, was released two days ago. Time to take it for a spin. RVM lets devs upgrade Ruby and manage gemsets seamlessly. Here's how the process went.

<!--more-->

####Get the Latest RVM
Instructions for installing RVM are at [http://rvm.io](http://rvm.io).
If you already have RVM installed, you should confirm that you have the
latest version.

```bash
$ rvm get head
```

####Grab the Ruby Patch
With the latest RVM installed, you can upgrade to the latest Ruby
patch level.

```bash
$ rvm upgrade 2.0.0
Are you sure you wish to upgrade from ruby-2.0.0-p0 to ruby-2.0.0-p195? (Y/n): y
Installing new ruby ruby-2.0.0-p195
Searching for binary rubies, this might take some time.
```

The process took at least twenty minutes on my system. I don't have an exact time because I began working on other tasks during the upgrade, and when I looked back at the terminal window, the process was mostly complete, except for a few questions about gemsets...

```bash
Migrating gems from ruby-2.0.0-p0 to ruby-2.0.0-p195
Are you sure you wish to MOVE gems from ruby-2.0.0-p0 to ruby-2.0.0-p195?
This will overwrite existing gems in ruby-2.0.0-p195 and remove them from ruby-2.0.0-p0 (Y/n): y
Moving gemsets...
```
...and aliases, wrappers, and archiving my patchless Ruby 2.0.0.

```bash
Do you wish to move over aliases? (Y/n): y
Do you wish to move over wrappers? (Y/n): y
Do you also wish to completely remove ruby-2.0.0-p0 (inc. archive)? (Y/n): y
Removing ruby-2.0.0-p0........
Successfully migrated ruby-2.0.0-p0 to ruby-2.0.0-p195
Upgrade complete!

$ 
```

Upgrade complete. Now running the latest patch of Ruby 2.0.0-p195

```bash
~$ rvm list

rvm rubies

   macruby-0.12 [ i686 ]
   ruby-1.8.7-p334 [ i686 ]
   ruby-1.9.2-p290 [ x86_64 ]
 * ruby-1.9.3-p385 [ x86_64 ]
   ruby-2.0.0-p195 [ x86_64 ]

# => - current
# =* - current && default
#  * - default

```

As a final option, I chose to make this latest Ruby patch my default.

```bash

~$ rvm use ruby-2.0.0 --default
Using /Users/rth/.rvm/gems/ruby-2.0.0-p195

~$ rvm list

rvm rubies

   macruby-0.12 [ i686 ]
   ruby-1.8.7-p334 [ i686 ]
   ruby-1.9.2-p290 [ x86_64 ]
   ruby-1.9.3-p385 [ x86_64 ]
=* ruby-2.0.0-p195 [ x86_64 ]

# => - current
# =* - current && default
#  * - default

~$ 
```
And that's it.

