---
layout: post
title: "SICP Study Group"
date: 2015-02-18 15:15:25 -0600
comments: true
categories: [ Community, Education ]
---
{% imgcap right /images/sicp.jpg SICP %}
Veteran developer [Dave Astels](http://twitter.com/dastels) is leading a [Structure and Interpretation of Computer Programs (SICP) study group](https://www.eventbrite.com/e/sicp-chicago-w-dave-astels-tickets-15525870296) for the next ten months. The Massachusetts Institute of Technology uses SICP as the text for one of its early computer science courses. Session one of Dave’s group starts today at 6pm. For any developer who wants to ramp up in skill, the SICP study group is an excellent opportunity to do so.

MIT makes the [entire text of SICP](http://mitpress.mit.edu/sicp/) available online for free. Or you can buy a paper version of the book at Amazon.

Thank you [Brad’s Deals](http://www.bradsdeals.com/) and [Ken Walters](https://twitter.com/lostghost) for hosting the SICP group.
<!--more-->
### Installing Scheme on Mac OS X
Examples and exercises in SICP are written in Scheme, a dialect of the LISP programming language. As of this writing, installing `mit-scheme` via Homebrew _did not work for me_.

``` bash
~$ brew install mit-scheme
Error: No available formula for mit-scheme
Searching formulae...
Searching taps...
homebrew/x11/mit-scheme

~$ 

```

_Update: Some members of the SICP study group had success installing `mit-scheme` with Homebrew, while others (like me) did not. We did not determine why some of the Homebrew installations were successful. However, the non-Homebrew method described in this article seems to work across-the-board._

Alternative solution: Grab a pre-compiled binary from the [MIT/GNU Scheme](http://www.gnu.org/software/mit-scheme/) site. The `mit-scheme-9.2-x86-64.dmg` disk image was the right one for my early 2013 MacBook Pro. Your system may be different.

{% imgcap middle /images/gnu_float.png Opening the MIT/GNU Scheme disk image. %}

To install, drag the `MIT/GNU Scheme.app` icon into the Applications folder on the Mac.


### Setting Up Symlinks
Scheme is run from the command line. In order to make that work, we need to setup two symbolic links.

First, create a symbolic link called `mit-scheme-x86-64` in your home directory that links to the appropriate executable in the `/Applications` directory. In other words...

``` bash
$ sudo ln -s /Applications/MIT\:GNU\ Scheme.app/Contents/Resources /usr/local/lib/mit-scheme-x86-64
Password:

$ 

```

Next, setup a symlink that will let us simply type `scheme` when we want to use this version of the language...

``` bash
$ sudo ln -s /usr/local/lib/mit-scheme-x86-64/mit-scheme /usr/bin/scheme

$ 

```

Confirm that the links are in place by checking the `scheme` version number.

``` bash
$ scheme --version
MIT/GNU Scheme microcode 15.3
Copyright (C) 2014 Massachusetts Institute of Technology
This is free software; see the source for copying conditions. There is NO warranty; not even for
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

Image saved on Saturday May 17, 2014 at 2:39:25 AM
  Release 9.2 || Microcode 15.3 || Runtime 15.7 || SF 4.41 || LIAR/x86-64 4.118 || Edwin 3.116

Moriturus te saluto.

$ 

```

If you are like me, you will laugh at the gladiator message at the end of the version info.

### Better Way to Symlink?
Why not create a single symbolic link directly from the `Resources` directory to the `scheme` command in `/usr/bin`? I am not certain, but I suspect it has something to do with expectations within the Scheme interpreter. The interpreter may be expecting certain files to be in certain directories. I’ll update this article when I learn more.

### Running Scheme
To start the Scheme read-evaluate-print-loop (REPL)...

``` bash
$ scheme
MIT/GNU Scheme running under OS X
Type `^C' (control-C) followed by `H' to obtain information about interrupts.

Copyright (C) 2014 Massachusetts Institute of Technology
This is free software; see the source for copying conditions. There is NO warranty; not even for
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

Image saved on Saturday May 17, 2014 at 2:39:25 AM
  Release 9.2 || Microcode 15.3 || Runtime 15.7 || SF 4.41 || LIAR/x86-64 4.118 || Edwin 3.116

1 ]=> 


```
Exit the REPL by typing `CTRL-D`.

Looking forward to SICP tonight!

### Acknowledgement
Thanks [Jackson Isaac](https://jacksonisaac.wordpress.com/2014/03/25/installing-scheme-on-mac-os-x/) for the information about symlinks as used with this version of scheme.

