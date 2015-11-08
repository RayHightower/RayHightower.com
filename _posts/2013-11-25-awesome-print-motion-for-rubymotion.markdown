---
layout: post
title: "awesome_print_motion for RubyMotion"
date: 2013-11-25 15:08
comments: true
categories: [ iOS, Ruby, RubyMotion ]
---
###The Problem
Let's say we're building a version of Atari's [Pong in RubyMotion](/blog/2013/02/26/atari-pong-rubymotion-objective-c/). We're debugging an issue with the paddles; they don't line up the way we want them to. Time to examine the playing field via the RubyMotion console.

```bash
pong-rm $ rake
```

Mouse over the playing field and `Command-click` to grab the entire playing field object in the RubyMotion console. Confirm that you grabbed the object by typing `self` at the console prompt.

```ruby
(UIView(#9d820c0, [[0.0, 0.0], ...)> self

=> UIView(#9d820c0, [[0.0, 0.0], [480.0, 320.0]]), child of UIView(#c876920)
```

And then, to see what objects are on the playing field, use
`self.subviews` to show the subviews array of the current object.

```ruby
(UIView(#9d820c0, [[0.0, 0.0], ...)> self.subviews
=> [UIView(#9d82430, [[357.0, 175.0], [50.0, 50.0]]), child of
UIView(#9d820c0), PaddleView(#9d82580, [[410.0, 190.0], [20.0, 100.0]]),
child of UIView(#9d820c0), PaddleView(#9d82970, [[10.0, 190.0], [20.0,
100.0]]), child of UIView(#9d820c0), ScoreLabel(#9d82a80, [[110.0, 9.0],
[20.0, 42.0]], text: "1"), child of UIView(#9d820c0),
ScoreLabel(#9d83c90, [[350.0, 9.0], [20.0, 42.0]], text: "0"), child of
UIView(#9d820c0)]
(UIView(#9d820c0, [[0.0, 0.0], ...)>
```

This blob of text is difficult for the human brain to parse. Now, let's try it with the `awesome_print_motion` gem.

<!--more-->

```ruby
(UIView(#9d820c0, [[0.0, 0.0], ...)> ap(self.subviews)
[
    [0] UIView(#9d82430, [[308.0, 118.0], [50.0, 50.0]]), child of UIView(#9d820c0),
    [1] PaddleView(#9d82580, [[410.0, 190.0], [20.0, 100.0]]), child of UIView(#9d820c0),
    [2] PaddleView(#9d82970, [[10.0, 190.0], [20.0, 100.0]]), child of UIView(#9d820c0),
    [3] ScoreLabel(#9d82a80, [[110.0, 9.0], [39.0, 42.0]], text: "61"), child of UIView(#9d820c0),
    [4] ScoreLabel(#9d83c90, [[350.0, 9.0], [20.0, 42.0]], text: "0"), child of UIView(#9d820c0)
]
=> nil
(UIView(#9d820c0, [[0.0, 0.0], ...)>

```

Much easier to read. The structure of the `subviews` array is clear. Each element of the array has an easy-to-read index. Debugging time is reduced.

###How to Install awesome_print_motion
RubyMotion uses bundler. So we start by refering to `awesome_print_motion` in our gemfile.

```ruby
gem 'awesome_print_motion'
```

In the app's `Rakefile`, there are two possible ways to proceed. The preferred way is to use the following lines to tell the app to require every gem mentioned in Bundler's Gemfile:

```ruby
begin
  require 'bundler'
  Bundler.require
rescue LoadError
end
```

The older way is to manually add a `require` statement to the Rakefile.

```ruby
require 'ap'
```
Personally, I prefer the newer way because it automatically
requires all of the gems mentioned in the `Gemfile`. The odds of a
typo-induced error are reduced.

###How to Use awesome_print_motion
To use the new gem, start the app and explore away. Any time you want to
run output through the `awesome_print_motion` gem, send the code as a
parameter to the `ap` method like so...

```ruby
> ap(self.subviews)
```
... and the output will be easier to read.

###Acknowledgements
Thank you [Michael Dvorkin](http://www.dvorkin.net/) for adding RubyMotion support to your [awesome_print](http://rubygems.org/gems/awesome_print) gem.
