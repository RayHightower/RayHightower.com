---
layout: post
title: "Using RubyMotion With Xcode's Interface Builder"
date: 2012-10-18 18:34
comments: true
categories: [iOS, RubyMotion, Xcode]
---

### Executive Summary
[RubyMotion](http://www.rubymotion.com/) is a Mac application that lets developers write iOS apps in Ruby. It's possible to create the user interface for the app entirely within RubyMotion or with a Ruby gem like [Teacup](https://github.com/rubymotion/teacup). But what about devs who prefer Interface Builder?

This article will show how to use Xcode's Interface Builder to create a basic UI for a RubyMotion application.

<!-- more -->

<img src="/assets/fizzbuzzrm.png" width = "200" align = "right" alt="Interface Builder with RubyMotion" title="Interface Builder with RubyMotion">

### Our Sample App: FizzBuzz
For this example we will build an iOS app that calculates and displays the fizzbuzz function. As a refresher, here's the fizzbuzz algorithm:

1. Count integers starting with 1 and incrementing as high as the user wants to go.
2. If the integer to be displayed is a multiple of 3, display "fizz" instead.
3. If the integer to be displayed is a multiple of 5, display "buzz" instead.
4. If the integer to be displayed is a multiple of both 3 and 5 (i.e. a multiple of 15) display "fizzbuzz".

The bare-bones UI appears at right. The plus sign increments the counter, minius decrements it, and the label area shows "Begin" at the beginning.


### First, Build the RubyMotion App
We start by building the fizzbuzz app in RubyMotion.

<code>
$ motion create fizzbuzzrm
</code>

The code for the finished app can be found on [GitHub](http://github.com/rayhightower/fizzbuzzrm).

### Build the UI in Interface Builder
Next, build the UI in Xcode's Interface Builder.

After completing the interface, we will need to asign tags to each element so that the UI knows how to communicate with RubyMotion. Scroll down to View|Tag in the rightmost colum (screenshot below). In this example, I assigned the tags 1, 2, 3, and 4 to the label, plus button, minus button, and reset, respectively.

<img src="/assets/tag1.png" alt="Interface Builder With RubyMotion" title="Interface Builder with RubyMotion">

Save the IB file in the <code>/resources</code> directory of your RubyMotion project. In my example, I called the file

<code>fbib.xib</code>. RubyMotion will compile the .xib file next time you run the rake command to build the app.

### Connecting the .xib file to the RubyMotion App
Let's head back to the RubyMotion app so we can tell RubyMotion how to interact with the IB file. Note that we specify the name of the IB file on the second line of the <code>loadView</code> method.

``` ruby
  def loadView
    views = NSBundle.mainBundle.loadNibNamed "fbib", owner:self, options:nil
    self.view = views[0]
    @counter = 0
    @view_handle = self.view
  end
```

The <code>viewDidLoad</code> method is where we assign buttons to their corresponding methods, and we specify how the app should behave when each button is pressed.

``` ruby
  def viewDidLoad
    @label = view.viewWithTag 1
    plus_button = view.viewWithTag 2
    minus_button = view.viewWithTag 3
    reset_button = view.viewWithTag 4
    # background_area = view.viewWithTag 5

    plus_button.addTarget(self, action:'plusTapped:', forControlEvents:UIControlEventTouchUpInside)
    minus_button.addTarget(self, action:'minusTapped:', forControlEvents:UIControlEventTouchUpInside)
    reset_button.addTarget(self, action:'resetTapped:', forControlEvents:UIControlEventTouchUpInside)
    # background_area.addTarget(self, action:'backgroundTapped:', forControlEvents:UIControlEventTouchUpInside)
  end
```

And finally, let's define a method for each button.

``` ruby
  def plusTapped(sender)
    @counter += 1
    @label.text = FizzBuzzViewController.fbcalc(@counter).to_s
  end

  def minusTapped(sender)
    @counter -= 1
    @label.text = FizzBuzzViewController.fbcalc(@counter).to_s
  end

  def resetTapped(sender)
    @counter = 0
    @label.text = "Begin"

    rotate_background(@view_handle)

  end

  def rotate_background(view_handle)
    @color_index ||= 0

    case @color_index
    when 0
      @view_handle.backgroundColor = UIColor.redColor
    when 1
      @view_handle.backgroundColor = UIColor.greenColor
    when 2
      @view_handle.backgroundColor = UIColor.blueColor
    when 3
      @view_handle.backgroundColor = UIColor.yellowColor
    end

    @color_index = (@color_index +1) % 4
  end
```

### Rake
Run <code>$ rake</code> to compile and execute the app.

Note the surprise when you hit the Reset button in the app. This surprise is one reason why you should always have a designer on your dev team!

### Conclusion
The more familiar I become with RubyMotion, the more I learn that there are multiple ways to do things, especially when it comes to UI. If you have ideas or suggestions for a different approach, feel free to dash me a message through the <a href="/contact">Contact Form</a>. Thanks!
