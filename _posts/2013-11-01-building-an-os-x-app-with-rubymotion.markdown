---
layout: post
title: "Building an OS X App With RubyMotion"
date: 2013-11-01 00:15
comments: true
categories: [Ruby, RubyMotion]
---
{% include image.html img="/images/time-machine-backup-disks.png" caption="Redundancy rocks." %} 

[RubyMotion](/blog/2012/10/29/building-ios-apps-with-ruby-motion/)'s OS X support enabled me to solve a small problem yesterday.  Here's the story.

###Background on Backup
No matter how much money we spend on computers, the data we create is worth more. The best data protection employs several levels of redundancy.

My backup system starts with Apple's [Time Machine](http://www.apple.com/findouthow/mac/#timemachinebasics), which handles first level backups painlessly in the background. Time machine is even more effective when multiple disks are used. I like to combine that with online solutions. Redundancy is a good thing.

USB-attached drives work great with Time Machine. I found that Time Machine was inconsistent over WiFi, and when it failed, troubleshooting took too much time. That was a few years ago and things have probably improved since then. I've never had to troubleshoot a USB-attached Time Machine drive. USB just works. Except when it doesn't. And that's where RubyMotion proved helpful.

<!--more-->

###Disconnecting USB in a Hurry
My only problem with USB-attached drives comes when I need to leave my desk in a hurry. You may have seen this message before:

{% include image.html img="/images/disk-not-ejected-properly.png" caption="In a hurry to eject?" %} 

All three of my USB drives are attached through a single USB hub. Yanking the cable while running for a meeting is… bad! Forgetting to eject even one of the USB drives is also bad.

I solved the problem about a year ago by writing a command line tool that ejects all three drives with one double-click of an icon. Yesterday I deciced to improve my command line tool with RubyMotion.

###Ejecting in a Hurry
`EjectDisks` is a simple OS X program written with the RubyMotion toolchain for Mac OS X. It uses the `osx-status-bar-app-template` gem created by [Elliott Draper](https://github.com/kickcode/osx-status-bar-app-template). Here's a 10-second demo.

<center><iframe name="eject-disks-osx" src="//player.vimeo.com/video/78349497" width="560" height="315" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></center>

###The Code
The latest version of the EjectDisk code is on [GitHub](https://github.com/RayHightower/EjectDisks). The `app_delegate.rb` file appears below.

```ruby
class AppDelegate
  attr_accessor :status_menu

  def applicationDidFinishLaunching(notification)
    @app_name = NSBundle.mainBundle.infoDictionary['CFBundleDisplayName']

    @status_menu = NSMenu.new

    @status_item = NSStatusBar.systemStatusBar.statusItemWithLength(NSVariableStatusItemLength).init
    @status_item.setMenu(@status_menu)
    @status_item.setHighlightMode(true)
    @status_item.setTitle(@app_name)

    @status_menu.addItem createMenuItem("About #{@app_name}", 'orderFrontStandardAboutPanel:')
    @status_menu.addItem createMenuItem("Custom Action", 'pressAction')
    @status_menu.addItem createMenuItem("Eject Three Disks", 'ejectThreeDisks')
    @status_menu.addItem createMenuItem("Say Something", 'sayDroid')
    @status_menu.addItem createMenuItem("Sing", 'singSomething')
    @status_menu.addItem createMenuItem("Greetings", 'greetings')
    @status_menu.addItem createMenuItem("Quit", 'terminate:')
  end

  def createMenuItem(name, action)
    NSMenuItem.alloc.initWithTitle(name, action: action, keyEquivalent: '')
  end

  def pressAction
    alert = NSAlert.alloc.init
    alert.setMessageText "Action triggered from status bar menu"
    alert.addButtonWithTitle "OK"
    alert.runModal
  end

  def sayDroid
    %x(say -v cello droid)
  end

  def singSomething
    %x(say -v cello da da da da da da da da da da da da da da da da da da da da da da da da da da)
  end

  def greetings
    %x(say -v cello Greetings to the members of Chippewa Valley Code Camp &)
    alert = NSAlert.alloc.init
    alert.setMessageText "Greetings to the members of Chippewa Valley Code Camp!"
    alert.addButtonWithTitle "OK"
    alert.runModal
  end

  def ejectThreeDisks
    alert = NSAlert.alloc.init
    response = %x(/usr/sbin/diskutil eject SiiGBlack) + "\n"
    response += %x(/usr/sbin/diskutil eject Ultra3TB) + "\n"
    response += %x(/usr/sbin/diskutil eject WDSilver) + "\n"
    alert.setMessageText response
    alert.addButtonWithTitle "OK"
    alert.runModal
  end
end
```

###Next Steps
Not everything in the EjectDisks tool is business-related. Do we really need to include a greeting to the members of the [Chippewa Valley Code Camp](http://chippewavalleycodecamp.com/)?  Yes, we do!

On the serious side, the app should handle disk ejection as a background process. It's not good to tie up the system for a simple task. Look for a forked process in a future version of the app.

_Update: This article should have included instructions on how to run the executable on any Mac OS X system without having RubyMotion installed. The omission is corrected in a later blog post, [OS X and RubyMotion, Finishing Up](/blog/2013/11/11/os-x-and-rubymotion-finishing-up/)._
