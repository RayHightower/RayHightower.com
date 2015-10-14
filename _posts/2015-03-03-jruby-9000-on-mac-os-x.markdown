---
layout: post
title: "JRuby 9000 on Mac OS X"
date: 2015-03-03 14:42:57 -0600
comments: true
categories: [ Ruby ]
---
{% imgcap right /images/jruby_on_jvm.png JRuby. Ruby on the JVM. %}
Moore’s Law is about to run into a wall. Therefore, anything that software developers can learn about concurrency will be critical in coming years. Enter [JRuby 9000](http://www.jruby.org/).

### What is JRuby?
JRuby is an implementation of the Ruby programming language that runs on the Java virtual machine (JVM). Advantages of running on the JVM include:

* Reaping the performance benefits that come from decades of JVM tuning.
* The ability to call time-tested Java libraries from Ruby programs.
* The performance benefits that come from concurrency, built into the JVM.
<!-- more -->
### Installing JRuby 9000 on OS X
Grab the latest `.tar` file from [JRuby Downloads](http://jruby.org/download) and extract it by double-clicking on it. As of this writing, the latest version was `jruby-bin-9.0.0.0.pre1.tar.gz`.

Next, move the extracted files to `/opt/jruby/`. For example, if you downloaded the `.tar` file to your `~/Downloads` directory, this command will rename the extracted directory to `jruby/` in the process.

``` bash
$ sudo mv ~/Downloads/jruby-9.0.0.0.pre1/ /opt/jruby/
Password:

$ 

```
And finally, add the following line to `~/.bash_profile` (or where ever you choose to set your `$PATH` variable).

``` bash
export PATH="/opt/jruby/bin:$PATH"

```
### Testing the JRuby 9000 installation
To test the JRuby 9000 installation, re-start your terminal or use `$ source ~/.bash_profile`. And then

``` bash
$ jruby --version
jruby 9.0.0.0.pre1 (2.2.0p0) 2015-01-20 d537cab Java HotSpot(TM) 64-Bit Server VM 25.25-b02 on 1.8.0_25-b17 +jit [darwin-x86_64]

$ which jruby
/opt/jruby/bin/jruby

$ 

```

### Why not RVM?
Given that [I like RVM](/blog/2013/05/16/upgrading-ruby-with-rvm/), why didn’t I simply use RVM to install JRuby 9000? Answer: The instructions for installing _a pre-release version_ of JRuby via RVM were unclear to me. Extracting the executables and adding the directory to the `$PATH` was more grok-able. If your experience is different from mine, feel free to share in the comments below.

### Next Steps
Next steps include experiments with concurrency. JRuby concurrency experiments with the [18-core Parallella](/blog/2014/07/07/parallella-quick-start-guide-with-gotchas/) look especially interesting. More to come.
