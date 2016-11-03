---
layout: post
title:  Getting Started With Clojure Koans
date:   2016-11-03
comments: true
tags: [ Clojure, Education ]
published: true
---

<img src="/images/clojure-logo.png" width="200" align="right" style="margin-left:10px;" alt="Clojure" title="Clojure">

Clojure is a dialect of the Lisp programming language that runs on the on the Java virtual machine (JVM).

One advantage of running on the JVM: Clojure apps can leverage the vast library of Java apps that already exist. If a company has invested heavily in Java, they can bring Clojure into the mix without having to re-write their tried and tested Java code.

This post shows how to start experimenting with Clojure on Mac OS X.

<!--more-->

### Install Leiningen

[Leiningen](http://leiningen.org/) is a build automation tool for Clojure projects. It offers a quick way to install Clojure and related tools. To install Leiningen on OS X, use [Homebrew](/blog/2014/02/12/homebrew-fundamentals/).

~~~ bash

~$ brew install leiningen
==> Downloading https://homebrew.bintray.com/bottles/leiningen-2.7.1.sierra.bottle.tar.gz
######################################################################## 100.0%
==> Pouring leiningen-2.7.1.sierra.bottle.tar.gz
==> Caveats
Dependencies will be installed to:
  $HOME/.m2/repository
To play around with Clojure run `lein repl` or `lein help`.

Bash completion has been installed to:
  /usr/local/etc/bash_completion.d

zsh completion has been installed to:
  /usr/local/share/zsh/site-functions
==> Summary
🍺  /usr/local/Cellar/leiningen/2.7.1: 8 files, 14.7M

~$ 

~~~

To confirm `leiningen` installation...

~~~ bash

~$ which lein
/usr/local/bin/lein

~$ 

~~~

And to determine which version of Leiningen you have installed...

~~~ bash

$ lein --version
Leiningen 2.7.1 on Java 1.8.0_101 Java HotSpot(TM) 64-Bit Server VM

$ 

~~~

Now that installation is complete, it's time to enjoy the Koans.

### Get and Run the Clojure Koans

The Clojure Koans were inspired by the Ruby Koans written by a stalwart of the software development community, [Jim Weirich](http://onestepback.org/). To get the Clojure Koans, clone the GitHub repo where they're located.

~~~ bash

$ git clone git://github.com/functional-koans/clojure-koans.git

$ 

~~~

From there, you can `cd` into the directory where you cloned the koans and run them.

~~~ bash

$ lein koan run
Starting auto-runner...
Considering /Users/rth/Code/Clojure/clojure-koans/src/koans/01_equalities.clj...

Now meditate upon /Users/rth/Code/Clojure/clojure-koans/src/koans/01_equalities.clj
---------------------
Assertion failed!
clojure.lang.ExceptionInfo: We shall contemplate truth by testing reality, via equality
(= __ true) {:line 6}, compiling:(/Users/rth/Code/Clojure/clojure-koans/src/koans/01_equalities.clj:4:1)

~~~

The `Assertion failed!` line tells us that Clojure is starting us off with a failing test. Some developers will leave a project with a failing test at then end of the day so that they have a clear place to start on the next day.

Every time you solve one of the riddles put forth by a koan, the corresponding test passes and you are directed to the next test. The Clojure Koans are a fun way to exercise and build Clojure muscles.

### Running a Clojure REPL

Clojure’s read-evaluate-print-loop (REPL) is a quick way to experiment with syntax on the fly. 

Leiningen enables us to run a Clojure  To do so:

~~~ bash

$ lein repl
nREPL server started on port 63259 on host 127.0.0.1 - nrepl://127.0.0.1:63259
REPL-y 0.3.7, nREPL 0.2.12
Clojure 1.8.0
Java HotSpot(TM) 64-Bit Server VM 1.8.0_101-b13
    Docs: (doc function-name-here)
          (find-doc "part-of-name-here")
  Source: (source function-name-here)
Javadoc: (javadoc java-object-or-class-here)
    Exit: Control+D or (exit) or (quit)
Results: Stored in vars *1, *2, *3, an exception in *e

user=>

~~~

