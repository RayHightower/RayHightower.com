---
layout: post
title: "OS X and RubyMotion, Finishing Up"
date: 2013-11-11 19:03
comments: true
categories: [ OS X, RubyMotion ]
---
{% include image.html img="/images/show-package-contents.png" caption="" %} 

There is something I neglected to cover in a previous blog post, [Building an OS X App With RubyMotion](/blog/2013/11/01/building-an-os-x-app-with-rubymotion/). Once you've written the OS X app, where do you find the executable, and how do you add it to the `Applications` folder on the Mac?

Long-time Mac enthusiasts may already know how to do this. The information is included here for completeness.

###Find, Drag, and Drop
First thing to note: A Mac app named [random-app].app is actually a directory, even though it appears to be a file when viewed in the `Applications` folder. If you're curious, right-click on any app in the `Applications` folder and choose `Show Package Contents` from the speed menu.

<!--more-->

After compilation, RubyMotion puts all of the executables in the app's `build/` directory. Using Finder, drag the folder named `[your-app-name].app` into the `Applications` folder.

Or, if you prefer the command line…

```bash
$ cd [root-directory-of-your-app]
$ cp build/MacOSX-10.8-Development/[your-app-name].app /Applications
$
```

It doesn't really matter whether we copy the file or move it.  RubyMotion creates a new one with every build, when we type `rake`.

###Launch at Login
I want the EjectDisks utility to be always available, so it would be good to have it launch automatically at login. That behavior is managed in the `Users and Groups` preference pane, shown below:

{% include image.html img="/images/launch-at-login.png" caption="" %} 

Click the `+` sign, navigate to the app you want to launch at login time (in this case, EjectDisks) and select it. Done.
