---
layout: post
title: "Fixing MacVim on OS X Mavericks"
date: 2014-03-04 14:48
comments: true
categories: [ Education, OS X, Vim ]
---
Experience told me to delay upgrading to OS X Mavericks for as long as possible because the upgrade would likely break my dev environment. Sure enough, the upgrade broke [MacVim](/blog/2013/01/12/why-i-use-vim/).

```bash
~$ which mvim

~$ 
```

The 'nix `which` command returned a null response when asked about MacVim. Not cool, Mavericks! 

<!--more-->

Fortunately, I’m running [Homebrew](/blog/2014/02/12/homebrew-fundamentals/). After the standard `brew doctor` and `brew update`, the following resolved the MacVim problem:


```bash
~$ brew uninstall macvim
Uninstalling /usr/local/Cellar/macvim/7.4-70...

~$ 
```

followed by…

```bash
~$ brew install macvim
==> Downloading https://github.com/b4winckler/macvim/archive/snapshot-72.tar.gz
######################################################################## 100.0%
==> ./configure --with-features=huge --enable-multibyte --with-macarchs=x86_64 --enable-perlinterp --enable-rubyinterp --enable-tcli
==> make
==> Caveats
.app bundles were installed.
Run `brew linkapps` to symlink these to /Applications.
==> Summary
🍺  /usr/local/Cellar/macvim/7.4-72: 1799 files, 28M, built in 37 seconds

~$ 
```

And now…

```bash
~$ which mvim
/usr/local/bin/mvim

~$ 
```

Whew. Homebrew saves the day again!

