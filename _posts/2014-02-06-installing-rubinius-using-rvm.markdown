---
layout: post
title: "Installing Rubinius Using RVM"
date: 2014-02-06 18:17
comments: true
categories: [ Ruby ]
---
{% include image.html img="/images/rubinius.png" %}
[Rubinius](http://rubini.us/) is an implementation of the Ruby language designed for concurrency. The lead developer of Rubinius, [Brian Shirai](http://twitter.com/brixen), will present Rubinius at ChicagoRuby on March 4, 2014. ChicagoRuby will follow-up with a Rubinius-themed hack night on March 12th. [Details](http://www.meetup.com/ChicagoRuby/events/114749352/).

To prepare for the Rubinius events, some people may choose to install Rubinius locally. RVM makes the process smooth.

<!--more-->

###RVM Recap
[Ruby Version Manager (RVM)](http://rayhightower.com/blog/2013/05/16/upgrading-ruby-with-rvm/) is an awesome tool that enables developers to:

* install multiple versions of Ruby on one system,
* bounce between the different versions, and 
* to do all of that with minimal headaches. 

Similar tools exist, but RVM is the one that has always worked for me.  If you don't have RVM installed, detailed installation instructions can be found at [http://rvm.io](http://rvm.io).

###Get the Latest RVM
These instructions work on Mac OS X v10.8.5. The same steps will probably work on Linux, except for the references to Homebrew.

First, make sure you're running the latest version of RVM.

```bash
$ rvm get head
Downloading https://get.rvm.io
Downloading https://github.com/wayneeseguin/rvm/archive/master.tar.gz

Upgrading the RVM installation in /Users/rth/.rvm/
    RVM PATH line found in /Users/rth/.bashrc /Users/rth/.zshrc.
    RVM sourcing line found in /Users/rth/.bash_profile /Users/rth/.zprofile.
    Migrating environment ruby-1.9.2-p290 to use with 'gem-wrappers' gem.

     …

     Installing gem-wrappers gem in 3 gemsets.
Upgrade of RVM in /Users/rth/.rvm/ is complete.

     …

In case of problems: http://rvm.io/help and https://twitter.com/rvm_io

RVM reloaded!

$ 
```

###Next, Install Rubinius
As of this writing, Rubinius can operate in 1.8 language mode (the default) or 1.9 language mode. Installing in 1.9 mode requires an additional command line flag, shown below.

```bash
$ rvm install rbx --1.9


```

###Testing the Rubinius Installation
First, let's make sure that RVM shows the new Rubinius (rbx) installation.

```bash
$ rvm list

rvm rubies

=> rbx-2.2.4 [ x86_64 ]
   ruby-1.9.2-p290 [ x86_64 ]
 * ruby-1.9.3-p484 [ x86_64 ]
   ruby-2.0.0-p353 [ x86_64 ]

# => - current
# =* - current && default
#  * - default


$ 
```

It's always good to have multiple ways to verify information.

```bash
$ ruby --version
rubinius 2.0.0.n37 (1.9.3 6d611c7a 2014-02-06 JI) [x86_64-darwin12.5.0]

$ 
```

And now, let's do a quick "Hello World" test drive using the Rubinius
version of `irb`.

```bash
$ irb
rbx-2.2.4 :001 > p 'Hello World, from Rubinius'
"Hello World, from Rubinius"
 => "Hello World, from Rubinius"
rbx-2.2.4 :002 > quit

$ 
```

###Post Installation Notes
The installation script found two outdated Homebrew-installed packages on my system: `automake` and `openssl`. It would have been better for me to upgrade Homebrew and related packages _before_ installing Rubinius.

Why install Rubinius? Why do we care about concurrency? These are two questions I expect to explore through my new Rubinius installation. 

###Come Hack With Rubinius
If March 2014 finds you in the Chicago area, you're invited to visit ChicagoRuby for some back-to-back Rubinius action. See [http://meetup.com/chicagoruby](http://www.meetup.com/ChicagoRuby/events/114749352/) for details. 
