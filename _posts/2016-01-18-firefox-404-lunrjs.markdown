---
layout: post
title: "Firefox, 404, and lunr.js"
date: 2016-01-18 09:03:11 -0500
comments: true
tags: [ Education, JavaScript, Jekyll ]
published: true
---
<img src="/images/firefox-logo.png" align="right" style="margin-left:1em;">

The search function on this blog is powered by [lunr.js](/blog/2016/01/04/how-to-make-lunrjs-jekyll-work-together/). This post was inspired by a search question in the blog comments:

>Is it me or does it not work in Firefox?<br/><br/>~Jason (from the blog comments)

Of course lunr.js works with Firefox, right? I tested the search page in Chrome and Safari before launch. But I took Firefox for granted. The US Navy Seals have a saying: _Assumption is the mother of all [screw]-ups._

"Haha!” said Firefox when I tried to run search. It threw up the “404” page. This post documents the problem and the solution.

<!--more-->

<img src="/images/firefox_lunrjs_404.jpg" style="margin-bottom:2em; margin-left:2em; width:70%;" alt="Firefox 404 lunrjs search">

### Isolating the Problem

Through Google, Stack Overflow, and trial & error I isolated the problem to a single line of JavaScript code in `search.js`.

~~~ javascript
  $("#site_search").submit(function(){
      event.preventDefault(); // Problem.
      var query = $("#search_box").val();
      var results = window.idx.search(query);
      display_search_results(results);
  });
~~~

### Explaining the Problem

When a web browser encounters this function in the script, it will attempt to open a page instead of running the script on that page. The command `event.preventDefault();` is supposed to stop the page from opening so the script can run instead. Chrome and Safari handled this fine. But Firefox tried to open a non-existing page, and that led to the 404. What could we do about it?

### Getting Help

Fortunately, a ChicagoRuby meeting was only one day away. ChicagoRuby has many members who are passionate polygots, not just Rubyists.

After the meeting, I reproduced the problem for [Justin Love](https://twitter.com/wondible) and [Darren Holland](https://twitter.com/cachesking). In addition to being a co-organizer of ChicagoRuby, Justin is a JavaScript enthusiast and a co-organizer of the Chicago JavaScript group. Darren has strong skills in Ruby and JavaScript.

We managed to isolate the problem further by strategically inserting `alert` statements in `search.js`. We tested each iteration against Chrome and Firefox. Chrome continued to succeed. Firefox continued to fail. The `alert` statements helped us to verify the point of failure.

### Collaboration and Solution

After several minutes of collaboration, Darren theorized that `event.preventDefault();` was choking in Firefox because the `event` object was not explicitly passed. Chrome and Safari were running the same JavaScript code, and they assumed that `event` meant `event` even though no object had been passed. But maybe Firefox wanted to be explicitly told what object was being passed?

One way to find out: We added `event` to the function definition as follows:

~~~ javascript
  $("#site_search").submit(function(event){
~~~

Next, we re-started the Jekyll server. And it worked! Firefox browsers can use the [search page](/search) with great results. The problem wasn't in lunr.js. It was in a single line of `search.js`, the JavaScript file that communicates with lunr.js.

### Lessons Learned

Key takeaways from this experience:

* Firefox, Chrome, and Safari handle JavaScript differently. Always be testing.

* Before asking for help, make sure you can re-produce the problem. Justin and Darren were able to wrap their heads around this challenge because the constraints and behavior were clearly defined.

* When smart people challenge each other to grow, great things happen. That’s the ChicagoRuby motto, and it is completely true, especially when we collaborate on a troubleshooting mission.

### Git Rocks

Once again, Git proves to be awesome. We performed all of our troubleshooting steps in a separate branch called `firefox`. Advantages of this approach:

* The separate branch enabled us to experiment confidently and aggressively, knowing that we could always go back to square one (`master`) if troubleshooting caused serious damage.

* After we created a working solution in the `firefox` branch, we tested it thoroughly, and merged it into the `master` branch.

* While writing this article, re-creating the problem was as easy as checking out one of the broken commits in the `firefox` branch. The `master` branch remained pristine throughout.

### Acknowledgements

Special thanks to the following people for turning this into a learning experience:

* [Jason (last name unknown)](https://disqus.com/by/jsonmone/) for bringing the problem to my attention via the blog comments.

* Darren Holland and Justin Love for collaborating on the solution.
