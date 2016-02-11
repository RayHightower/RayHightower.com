---
layout: post
title:  Git Config for Parallella
date:   2016-02-10
comments: true
tags: 
published: true
---
 
Git is the dominant version control system for open source software. When you first burn your Parallella image, git is installed, but it’s configured with the name, email address, and personal information for Andreas Olofsson, CEO of Adapteva. What’s the quickest way to change this, and why should you care?

### Finding the Current Git Config

To find the current Git user on your Parallella, `ssh` into the device or type the following from the console.

``` bash
linaro@linaro-nano:~$ cat ~/.gitconfig
[user]
    email = andreas@adapteva.com
    name = aolofsson
linaro@linaro-nano:~$

```

### Making the Config Your Own

``` bash
linaro@linaro-nano:~$ git config --global user.name "Pat Jones"
linaro@linaro-nano:~$ git config --global user.email patjones@example.com

```

And then verify the changes...

``` bash
linaro@linaro-nano:~$ cat ~/.gitconfig
[user]
    email = patjones@example.com
    name = Pat Jones
linaro@linaro-nano:~$

```
Success!
