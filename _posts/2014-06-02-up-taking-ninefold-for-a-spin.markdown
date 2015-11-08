---
layout: post
title: "Taking Ninefold for a Spin"
date: 2014-06-02 18:47
comments: true
published: false
categories: [ Rails, Ruby ]
---
{% include image.html img="/images/ninefold-logo.png" %}
[Ninefold](https://ninefold.com/) is a Rails hosting platform based in Australia. The company is backed by [Maquarie Telcom](http://www.macquarietelecom.com/).

I first met the Ninefold team at RailsConf 2014 in Chicago. I'm in San Francisco this week for RubyMotion #Inspect and related events, so I took the time to stop by their San Francisco office. Now it's time to take the service for a spin.

<!--more-->

These experiments were conducted with Ruby 2.1.1 and Rails 4.0.4. Destructive testing has always been my best instructor, so I used [RVM](/blog/2013/05/16/upgrading-ruby-with-rvm/) to create a special gemset for Ninefold experiments.

```bash

$ rvm current
ruby-2.1.1@ninefold

$ 

```

The sandbox is ready. Let the games begin.

###Installing the Ninefold CLI
The Ninefold command line interface (CLI) installs as a Ruby gem.

```bash
$ gem install ninefold
Fetching: netrc-0.7.7.gem (100%)
Successfully installed netrc-0.7.7
Fetching: multipart-post-2.0.0.gem (100%)
Successfully installed multipart-post-2.0.0
Fetching: faraday-0.9.0.gem (100%)
Successfully installed faraday-0.9.0
Fetching: ninefold-1.6.0.gem (100%)
Building native extensions.  This could take a while...
Successfully installed ninefold-1.6.0
Parsing documentation for faraday-0.9.0
Installing ri documentation for faraday-0.9.0
invalid options: -SHN
(invalid options are ignored)
Parsing documentation for multipart-post-2.0.0
Installing ri documentation for multipart-post-2.0.0
Parsing documentation for netrc-0.7.7
Installing ri documentation for netrc-0.7.7
Parsing documentation for ninefold-1.6.0
Installing ri documentation for ninefold-1.6.0
Done installing documentation for faraday, multipart-post, netrc, ninefold after 1 seconds
4 gems installed

$ 

```

###Test the CLI Installation
Test the CLI installation by signing in to Ninefold from the commanbd line.

```bash
$ ninefold signin
Please, sign in
Username: rayhightower
Password:
✔︎  Done

$ 
```
`$ ninefold help` will show the list of available commands.

The Ninefold CLI is written in Ruby, open source, and available on GitHub. Those who want to contribute to CLI development can do so.

###Deploying an App
Deploying an app was so simple that I almost felt like Ninefold was tricking me. Apps can be deployed from GitHub, Bitbucket, or another private Git repo. To deploy...

1. Login to Ninefold and click the blue `Deploy` button.
1. Specify whether your app is coming from GitHub, Bitbucket, or
somethwere else (via generic Git URL).
1. Signin to GitHub and authorize Ninefold to access the repo you want to deploy. Ninefold will install a post-commit hook to enable automatic deployment in the future.

Prior to deploying my app, Ninefold looked through my gemfile and noticed that it was missing the `pg` gem. It recommended adding `pg` and running `$ bundle install` before attempting to deploy again. How cool is that! 

###Hiccups
I experienced one hiccup during my first deployment on Ninefold. As mentioned above, Ninefold recommended adding the `pg` gem to the app's gemfile before proceeding. The `pg` gem would not install until I uninstalled and reinstalled Postgresql. This wasn't a big deal since I'm using Homebrew, and the problem was probably due to an earlier Homebrew/Mavericks issue on my local machine. Fortunately, Homebrew enabled me to solve the problem in minutes.

###Costs Estimated in Advance
During deployment, Ninefold shows the estimated cost of running the app based on the configuration options chosen during deployment. We don't have to guess about the cost; the numbers are right there. Excellent move, Ninefold.



