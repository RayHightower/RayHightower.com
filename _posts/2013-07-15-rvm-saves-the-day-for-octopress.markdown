---
layout: post
title: "RVM Saves the Day for Octopress"
date: 2013-07-15 14:29
comments: true
categories: [ Ruby ]
---
[Octopress](http://octopress.org) is a lean blogging engine that happens to power [RayHightower.com](http://rayhightower.com). Earlier today, after a quick update to the blog, I encountered the following:

```bash
$ rake generate
/Users/rth/.rvm/gems/ruby-1.9.3-p448@global/gems/bundler-1.2.4/lib/bundler/rubygems_integration.rb:187:in `stub_source_index170': uninitialized constant Gem::SourceIndex (NameError)
     from /Users/rth/.rvm/gems/ruby-1.9.3-p448@global/gems/bundler-1.2.4/lib/bundler/rubygems_integration.rb:353:in `stub_rubygems'
     from /Users/rth/.rvm/gems/ruby-1.9.3-p448@global/gems/bundler-1.2.4/lib/bundler/rubygems_integration.rb:250:in `replace_entrypoints'
     from /Users/rth/.rvm/gems/ruby-1.9.3-p448@global/gems/bundler-1.2.4/lib/bundler/runtime.rb:14:in `setup'
     from /Users/rth/.rvm/gems/ruby-1.9.3-p448@global/gems/bundler-1.2.4/lib/bundler.rb:116:in `setup'
     from /Users/rth/.rvm/gems/ruby-1.9.3-p448@global/gems/rubygems-bundler-1.1.0/lib/rubygems-bundler/noexec.rb:77:in `setup'
     from /Users/rth/.rvm/gems/ruby-1.9.3-p448@global/gems/rubygems-bundler-1.1.0/lib/rubygems-bundler/noexec.rb:89:in `<top (required)>'
     from /Users/rth/.rvm/rubies/ruby-1.9.3-p448/lib/ruby/site_ruby/1.9.1/rubygems/core_ext/kernel_require.rb:116:in `require'
     from /Users/rth/.rvm/rubies/ruby-1.9.3-p448/lib/ruby/site_ruby/1.9.1/rubygems/core_ext/kernel_require.rb:116:in `rescue in require'
     from /Users/rth/.rvm/rubies/ruby-1.9.3-p448/lib/ruby/site_ruby/1.9.1/rubygems/core_ext/kernel_require.rb:122:in `require'
     from /Users/rth/.rvm/gems/ruby-1.9.3-p448@octopress/bin/ruby_noexec_wrapper:9:in `<main>'

$
```

Not good. What happened?

<!--more-->

###The Problem
From the error message, it appeared that my current version of Bundler was incompatible with Octopress. Googling for the error message (a favorite trick) was unhelpful. Had to try a different line of attack.

###The Solution: Roll Back
Fortunately, I use [RVM](http://rayhightower.com/blog/2013/05/16/upgrading-ruby-with-rvm/). Currently installed versions of Ruby:

```bash
~$ rvm list

rvm rubies

   jruby-1.7.3 [ x86_64 ]
   macruby-0.12 [ i686 ]
   ruby-1.8.7-p334 [ i686 ]
   ruby-1.9.2-p290 [ x86_64 ]
   ruby-1.9.3-p448 [ x86_64 ]
=* ruby-2.0.0-p247 [ x86_64 ]

# => - current
# =* - current && default
#  * - default
```

Since `$ rake deploy` last worked with Ruby 1.9.2 on my machine, I decided to roll back to that point.

```bash
$ rvm use ruby-1.9.2-p290

```

Next, I built another `octopress` gemset to work with this version of Ruby, pointed to the gemset, and used Bundler to add the necessary gems.

```bash
$ rvm gemset create octopress
$ rvm gemset use octopress
$ bundle install
```

And now `$ rake generate` works as required.

```bash
$ rake generate
## Generating Site with Jekyll
identical source/stylesheets/screen.css
Configuration from /Users/rth/Code/Ruby/apps/rayhightower/_config.yml
Building site: source -> public
Successfully generated site: source -> public
```

Success!

###RVM Saves the Day
Once again, RVM lets me recover quickly by shifting to an earlier version of Ruby. What's the root cause of the problem? I don't know at this point. But for now, the blog is up & running!
