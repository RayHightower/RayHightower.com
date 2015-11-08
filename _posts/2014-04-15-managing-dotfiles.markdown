---
layout: post
title: "Managing Dotfiles"
date: 2014-04-15 17:13
comments: true
categories: [ Community, Linux, OS X ]
---
Dotfiles, the configuration files used by Unix-like machines, can become disorganized over time. Entropy rules! This article describes my recent attempt to bring order to dotfile chaos. The steps can be summarized as follows:

* Move the non-private dotfiles (dotfiles that will be viewed by others on Github) into a directory called `~/.dotfiles`.
* From the `home` directory, create a symbolic link to each dotfile in the `~/.dotfiles` directory.
* Use Git to manage the `~/.dotfiles` directory, and share it on GitHub.

Dotfiles are normally hidden when you try to view them in the Mac OS X Finder. To view them from the command prompt, use `$ ls -al`.

<!--more-->

```bash
~/.dotfiles[master]$ ls -al
total 40
drwxr-xr-x   8 rth  staff   272 Apr 14 01:44 .
drwxr-xr-x+ 71 rth  staff  2414 Apr 14 02:12 ..
-rwxr-xr-x   1 rth  staff  3455 Apr 13 16:01 .bash_profile
drwxr-xr-x  14 rth  staff   476 Apr 14 02:25 .git
-rw-r--r--   1 rth  staff  1649 Apr 13 16:44 .gitk
-rw-r--r--   1 rth  staff  1760 Apr 13 16:10 .irbrc
-rw-r--r--   1 rth  staff   118 Aug 22  2013 .zprofile
-rw-r--r--   1 rth  staff   375 Apr 14 01:44 README.mdown

~/.dotfiles[master]$ 
```

The [.bash_profile](https://github.com/RayHightower/.dotfiles/blob/master/.bash_profile) in this example has grown to include aliases, path specifications, and a script that shows the current Git branch as part of the command prompt. The file also contains two aliases useful for showing or hiding dotfiles in the Finder: `showdots` and `hidedots`.

###Putting Dotfiles in One Directory
Dotfiles are normally created in the user's home directory. For organization purposes, I moved my non-private dotfiles into a directory called `.dotfiles`, listed above. Unix makes this easy. First, move to the home directory and create `~/.dotfiles`.

```bash
~$ cd ~

~$ mkdir .dotfiles

~$ 

```

_Note: Dotfiles can sometimes include private information. If you don't want to share information in a particular dotfile, don't put it on GitHub!_

In this example, we'll only move one file, `.bash_profile`.

```bash

~$ cd .dotfiles/

$ mv ../.bash_profile .

$ 

```

###Symbolic Links
Symbolic links ensure that executables can find our dotfiles as needed. 

```bash

$ cd ~

$ ln -s ~/.dotfiles/.bash_profile

$ ls -al
total 8
drwxr-xr-x   3 rth  staff   102 Apr 14 19:48 .
drwxr-xr-x+ 73 rth  staff  2482 Apr 14 19:47 ..
lrwxr-xr-x   1 rth  staff    34 Apr 14 19:48 .bash_profile -> /Users/rth/.dotfiles/.bash_profile

$ 

```

In the above example, we created a symbolic link called `.bash_profile` to the real `~/.dotfiles/.bash_profile` located in the `.dotfiles` directory. That way, any program that's looking for the `.bash_profile` file in the home directory will find what it needs, even though the file is somewhere else.

###Why Use Git to Manage Dotfiles?
Git is a great tool for managing files that change over time. Dotfiles can change as we install new software or tweak our development environment. If we make a mistake, or if an installation script makes a mistake, we can use Git to roll back in history to a pre-mistake version of the dotfile.

###Don't Make All Dotfiles Public
There are some dotfiles that you don't want to share publicly. For example, `.bash_history` contains all of the commands that have been executed in the shell. Do you really want the world that you sometimes `$ ssh myuserid@[embarassingdomainname].com`? Probably not. If you think that a dotfile might contain personal or confidential information, no need to broadcast it.

###Learning More About Dotfiles
Most of my dotfiles, like `.bash_profile`, don't contain anything private. In fact, most of what I know about dotfiles has come from other developers via books, user groups, blogs, and spelunking through GitHub. Dotfile collections by [Hashrocket](https://github.com/hashrocket/dotmatrix) and [Thoughtbot](https://github.com/thoughtbot/dotfiles) are  especially good. My `~/.dotfiles` directory is available for public viewing on [GitHub](https://github.com/RayHightower/.dotfiles).

If you're doing something especially cool with your dotfiles, let's hear about it!
