---
layout: post
title: "Using Spark Inspector With RubyMotion"
date: 2013-05-11 23:15
comments: true
categories: [Ruby, RubyMotion, iOS]
published: false
---
[Spark Inspector](http://sparkinspector.com) is a runtime debugger for iOS apps. It visually shows the windows and views of an iOS app so developers can see what's going on in real time. The tool was originally designed for devs using Xcode and Objective-C. This week, I learned that RubyMotion developers can use it too! Here's how.

<!--more-->

This article is based on a [gist posted by Ben Gotow](https://gist.github.com/bengotow/5552322).

####Pong Returns
We're getting a ton of mileage out of [Pong]() in these RubyMotion
posts! This time, we'll use Pong as our test app for Spark Inspector.

In the project's `Rakefile`, add lines 6 through 8 below:
```bash
Motion::Project::App.setup do |app|
  # Use `rake config' to see complete project settings.
  app.name = 'Pong-RM'

  # Next three lines added to support Spark Inspector
  app.vendor_project '/Applications/Spark Inspector.app/Contents/Resources/Frameworks/SparkInspector.framework', :static, :products => ['SparkInspector'], :force_load => true, :headers_dir => 'Headers'
  app.libs += ['/usr/lib/libz.dylib']
  app.frameworks += ['QuartzCore']
  
  ...

end
```
The purpose of these lines is to...

Add `SparkInspector.enableObservation` to the first line of the `application:didFinishLaunchingWithOptions:` method in
`app_delegate.rb`. This line serves to ...

```bash
class AppDelegate
  def application(application, didFinishLaunchingWithOptions:launchOptions)
    SparkInspector.enableObservation
    
    ...
  
    true
  end
```
