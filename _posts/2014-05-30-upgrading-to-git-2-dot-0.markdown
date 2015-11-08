---
layout: post
title: "Upgrading to Git 2.0"
date: 2014-05-30 11:33
comments: true
categories: [ Education, Git ]
---
{% include image.html img="/images/git_200.png" %} 
Developers of Git are making a serious effort to improve intuitiveness for first-time users. Of course, all users benefit from intuitive tools. When our tools _just work_, we spend less time sifting through documentation and more time solving problems for our customers.

<!--more-->

###How to Upgrade
If you’re on Mac OS X, make sure you’re using [Homebrew](/blog/2014/02/12/homebrew-fundamentals/). It’s the easiest way to install and manage Unix libraries on the Mac.

It’s usually a good idea to check your current version before upgrading.

```bash
$ git --version
git version 1.9.2

$ 

```
Next, make sure that Homebrew is current.

```bash
$ brew doctor

Warning: Your Homebrew is outdated.
You haven't updated for at least 24 hours, this is a long time in brewland!
To update Homebrew, run `brew update`.

$ 

```

My Homebrew was outdated, so I used `brew update` to grab the new packages.

```bash
$ brew update
Updated Homebrew from b46160b8 to afff2b23.
==> New Formulae
aces_container                    git-number                      picolisp
apache-spark                    homebrew/versions/mongodb24       probatron4j

...

$ 

```

Next, use Homebrew to upgrade Git.

```bash
$ brew upgrade git
==> Upgrading 1 outdated package, with result:
git 2.0.0
==> Upgrading git
==> Downloading https://downloads.sf.net/project/machomebrew/Bottles/git-2.0.0.mavericks.bottle.tar.gz
######################################################################## 100.0%
==> Pouring git-2.0.0.mavericks.bottle.tar.gz
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
🍺  /usr/local/Cellar/git/2.0.0: 1324 files, 31M

$ 
```

Finished. Let's check the Git version to confirm that the upgrade went properly.

```bash
$ git --version
git version 2.0.0

$ 

```

Future articles will examine the this latest version of Git in detail. For now, enjoy!
