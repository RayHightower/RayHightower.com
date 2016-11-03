---
layout: post
title:  Getting Started With Clojure Koans
date:   2016-11-03
comments: true
tags: 
published: true
---
Clojure is a dialect of the Lisp programming language. It runs on the on the Java virtual machine (JVM). One advantage of running on the JVM: Clojure apps can leverage the vast library of Java apps that already exist.
Companies that already have a large base of Java apps can bring Clojure into the mix without having to re-write any of the tried and tested Java code.

This post offers a quick way to get started with Clojure on Mac OS X.

<!- more ->

### Install Leiningen


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

Confirm `leiningen` installation.

~~~ bash

~$ which lein
/usr/local/bin/lein

~$ 

~~~


To start running the Koans.

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

The `Assertion failed!` line tells us that Clojure is starting us off with a failing test...


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

