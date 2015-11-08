---
layout: post
title: "Homebrew, Ruby, and Git"
date: 2013-12-06 17:30
comments: true
categories: [ Education, Git, Ruby ]
---
I encountered some interesting behavior between [Homebrew](http://brew.sh/) and Ruby this afternoon. I can describe what happened, but I don't yet understand why. Perhaps another member of the dev community can shed some light.

###Upgrading to Git 1.8.5
Earlier today I learned that Git 1.8.5 was available. So I decided to upgrade. Since I use Homebrew for package management, it was time for `$ brew doctor` and `$ brew update` as well.

```bash
$ brew doctor
Error: Homebrew doesn't know what compiler versions ship with your version
of Xcode (5.0.2). Please `brew update` and if that doesn't help, file
an issue with the output of `brew --config`:
  https://github.com/mxcl/homebrew/issues

Thanks!
Warning: Your Homebrew is outdated.
You haven't updated for at least 24 hours, this is a long time in brewland!
To update Homebrew, run `brew update`.

~/Code/Ruby/apps$ 
```

`$ brew doctor` has spoken. Time to update Homebrew.

<!--more-->

###Homebrew First. Git Later.
Updating Homebrew is as simple as `$ brew update`, right?

```bash
~$ brew update
Warning: Could not tap homebrew/dupes/ant over mxcl/master/ant
Warning: Could not tap homebrew/dupes/cvs over mxcl/master/cvs
Error: undefined method `to_sym' for nil:NilClass
Please report this bug:
    https://github.com/mxcl/homebrew/wiki/troubleshooting
/usr/local/Library/Homebrew/cmd/update.rb:123:in `report'
/usr/local/Library/Homebrew/cmd/update.rb:121:in `each_line'
/usr/local/Library/Homebrew/cmd/update.rb:121:in `report'
/usr/local/Library/Homebrew/cmd/update.rb:35:in `update'
/usr/local/Library/brew.rb:95:in `send'
/usr/local/Library/brew.rb:95

~/Code/Ruby/apps$ 
```
`$ brew update` choked. Further, Homebrew said that I should report a bug. But something smelled fishy. I decided to try running Homebrew under Ruby 2.0.0 instead of Ruby 1.9.3, the default on my system. Running [RVM](/blog/2013/05/16/upgrading-ruby-with-rvm/) makes bouncing between Ruby versions a snap.

```bash
~$ rvm use 2.0.0

```

That did the trick. `$ brew update` worked fine, and `$ brew doctor`
confirmed it.

```bash
~$ brew update
Updated Homebrew from 69a83176 to 691c72bf.

…
 
~$ brew doctor
Your system is ready to brew.

```
###Back to Git
Now that the yak is well-shaved, we're ready to upgrade Git.

```bash
~$ brew upgrade git
==> Upgrading 1 outdated package, with result:
git 1.8.5.1
==> Upgrading git
==> Downloading https://downloads.sf.net/project/machomebrew/Bottles/git-1.8.5.1.mountain_lion.bottle.tar.gz
######################################################################## 100.0%
==> Pouring git-1.8.5.1.mountain_lion.bottle.tar.gz
==> Caveats
The OS X keychain credential helper has been installed to:
  /usr/local/bin/git-credential-osxkeychain

The 'contrib' directory has been installed to:
  /usr/local/share/git-core/contrib

Bash completion has been installed to:
  /usr/local/etc/bash_completion.d

zsh completion has been installed to:
  /usr/local/share/zsh/site-functions
==> Summary
  /usr/local/Cellar/git/1.8.5.1: 1333 files, 30M
```

Mission accomplished. Git has been upgraded to 1.8.5.

```bash
~$ git --version
git version 1.8.5.1

~$ 
```

###Why This Matters
I'm posting this article as a note to my future self. Error messages sometimes lie. They don't mean to lie, but an error messsage can only give you its best guess based on what it _thinks_ is happening on your system. It's up to the developer to sniff out the rest of the clues.

After decades in this industry, I'm still learning this lesson :-)
