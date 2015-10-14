---
layout: post
title: "Looking Inside the Pygments Plugin"
date: 2014-12-31 16:18:29 -0600
comments: true
categories: [ Ruby ]
---
This blog uses [pygments.rb](https://rubygems.org/gems/pygments.rb) for syntax highlighting. Recently `pygments.rb` stopped working, so I had to dig inside to determine the problem and apply a solution.

Full disclosure: Pygments didn't simply stop working. I applied updates related to Octopress and Lunr.js, and then it stopped working. So the root cause is me! Rather than back-out the updates, I decided to push forward because Lunr.js will improve the search experience for visitors. Search options will be discussed in a future post.

###Starting With the Error Message
As with all [Octopress](http://octopress.org/) based blogs, the `$ rake generate` command creates a new set of static pages every time the command gets run. Normally the process is smooth. Here's the error message that resulted this morning.

``` bash

~$ rake generate

...

jekyll 2.0.3 | Error:  Pygments can't parse unknown language: </p>.

$ 

```

What unknown language? Something was fishy. Fortunately, `pygments` is an open source plugin. Solving the problem was non-trivial, but doable.
<!--more-->
###Exploring Pygments Internals
Google, Stack Overflow, and the Octopress documentation gave clues on where to explore. Adding a few lines to `source/plugins/pygments_code.rb` provided insights on what `pygments` was "thinking".

``` ruby

require 'pygments'
require 'fileutils'
require 'digest/md5'

PYGMENTS_CACHE_DIR = File.expand_path('../../.pygments-cache', __FILE__)
FileUtils.mkdir_p(PYGMENTS_CACHE_DIR)

module HighlightCode
  def self.highlight(str, lang)

    # Next three lines let us see what pygments "thinks".
    print "\n\nrth_str = #{str}"
    print "\nrth_lang = #{lang}"
    print "\nrth_file = #{__FILE__}\n\n"

    ...

end

```

###Observing the Results, Applying a Solution
Next step: Run `$ rake generate` and see what happens. Turns out that the lastest version of `pygments` halted for two reasons:

* Some of my older blog posts did not contain a space between the triple-backtick characters and the name of the language being highlighted. Earlier versions of `pygments` did not care, but the current version is a stickler.
* `pygments` appears to want a blank line between any triple-backtick line and any other text in the blog post.

Vim-fu allowed me to apply solutions with minimal manual work. And now `pygments` works well.

On to search, to be discussed in a future blog post.

