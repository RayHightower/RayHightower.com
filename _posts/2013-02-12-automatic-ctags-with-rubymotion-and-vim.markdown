---
layout: post
title: "Automatic ctags with RubyMotion and Vim"
date: 2013-02-12 19:35
comments: true
categories: [iOS, OS X, Ruby, RubyMotion, Vim]
---
[RubyMotion](/blog/2012/10/29/building-ios-apps-with-ruby-motion/) includes a `rake` task that generates [Exuberant Ctags](http://ctags.sourceforge.net/whatis.html). To generate tags, run the following in the root directory of a RubyMotion project.

``` bash
$ rake ctags
```

### Make Ctags Better With Automation
Ctags make writing code more efficient. But we shouldn't have to type `$ rake ctags` every time we create a new RubyMotion project. This article shows how to use a shell script to generate ctags automatically every time you create a new RubyMotion app. 

<!-- more -->

### How Ctags Save Time
Ctags can save you time. For example, when creating a new class called `HomeViewController` that inherits from `UIViewController`, typing the first view characters of the superclass will produce the drop-down shown below.
<img src="/images/uiviewcontroller.png" align="center" width="800" height="433" title="ctags RubyMotion Vim" alt="ctags RubyMotion Vim">

RubyMotion's implementation of ctags includes support for built-in iOS classes like UIViewController. The code completion and drop-downs offered by ctags will reduce keystrokes and errors, freeing the developer to focus on solving harder problems.

### Creating the Script
Here's the script. You can use any name that suits you. My script is called `mmotion.command` (with two m's at the beginning to distinguish it from the standard `motion` command) and it's in the `~/bin/` directory.

``` bash
#!/bin/bash
# Create a RubyMotion app, change into the app's directory, and run ctags.
# Written by Raymond T. Hightower on February 12, 2013

echo "Creating a new RubyMotion app called:" $1
motion create $1
cd $1
echo "Creating ctags for the new RubyMotion app..."
rake ctags
echo "Opening the new app in Vim..."
mvim .
echo "To use the RubyMotion console, cd into the new directory:" $1
```
All of the work is done by by four lines. The remaining lines are comments or 'echos' that tell the user what's happening while the script is running.

### Running the Script
If `~/bin/` is in the `$PATH`, you can run the script with the following line command:
``` bash
$ mmotion.command [app name]
```

Of course, we can still do better by leveraging the power of aliases in `~/.bash_profile`.

### Adding an Alias to ~/.bash_profile
Dropping an alias into `~/.bash_profile` streamlines the process even more. You can use any alias you want as long as it doesn't confilct with another command. Here's what my alias looks like:

``` bash
alias mmotion="mmotion.command"
```

### Taking the Script for a Spin
Now we can build a new RubyMotion app called `NewApp` with these results:

``` bash
~/Code/Ruby/RubyMotion$ mmotion NewApp
Creating a new RubyMotion app called: NewApp
    Create NewApp
    Create NewApp/.gitignore
    Create NewApp/Rakefile
    Create NewApp/app
    Create NewApp/app/app_delegate.rb
    Create NewApp/resources
    Create NewApp/spec
    Create NewApp/spec/main_spec.rb
Creating ctags for the new RubyMotion app...
Opening the new app in Vim...
To use the RubyMotion console, cd into the new directory: NewApp

~/Code/Ruby/RubyMotion$ 
```

After the bash script ends, it lands in the directory from which it was originally run, no matter what directories it changed to during execution. This script will open the new app in Vim when it's done.

From here, you can `$ cd NewApp` and type `rake` to run the app in the iOS simulator.

### Feedback Welcome
If you notice any glitches with this approach, feel free to send me a "heads up" via the [contact](/contact/) form on this site or in the blog comments below. 
