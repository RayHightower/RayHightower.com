---
layout: post
title:  Git Config for Parallella
date:   2016-02-10
comments: true
tags: [ Git, Parallella ]
published: true
---
 
{% include image.html img="/images/git_200.png" %} 
[Git](http://git-scm.org) is the dominant version control system for open source software. When you first burn a [Parallella](/blog/2014/07/07/parallella-quick-start-guide-with-gotchas/) image, `git` is installed, but it’s configured with the name and email address for the CEO of Adapteva, makers of the Parallella. This article shows a quick way to update your Parallella's git config with your own information.

<!--more-->

### Why You Might Care

Every time `git` records one of your changes, it includes the name of the person who made the change. If you're the one improving the code on your Parallella, you might as well get credit for it, right?

### Finding the Current Git Config

To find the current Git user on your Parallella, use the following commands from the console (or you can use `ssh`).

~~~ bash
$ cat ~/.gitconfig

[user]
    email = [masked-email-address]@adapteva.com
    name = aolofsson

$ 

~~~

Here's an alternative way to view the git configuration...

~~~ bash
$ git config --list

user.email=[masked-email-address]@adapteva.com
user.name=aolofsson

$ 
~~~

The odds are one in 7 billion that you are this particular Andreas Olofsson :-)

### Making the Config Your Own

To update the `git` config with your own information...

~~~ bash
$ git config --global user.name "Pat Jones"
$ git config --global user.email patjones@example.com

~~~

And then verify the changes...

~~~ bash
$ cat ~/.gitconfig

[user]
    email = patjones@example.com
    name = Pat Jones

$ 

~~~

Success! 

