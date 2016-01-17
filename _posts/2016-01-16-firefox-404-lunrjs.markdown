---
layout: post
title: "Firefox, 404, and lunr.js"
date: 2016-01-16 09:03:11 -0500
comments: true
categories: [ Education, JavaScript, Jekyll ]
published: true
---
The search function on this blog is powered by [lunr.js](/blog/2016/01/04/how-to-make-lunrjs-jekyll-work-together/). Two days ago I received the following post in the blog comments for the lunrjs article:

>Is it me or does it not work in Firefox?<br/>~Jason (last name unknown)

Of course lunrjs works with Firefox, right? I had tested the search page in Chrome and Safari before launch. But I took Firefox for granted. After all, Firefox is not MSIE, right?

"Haha!” said Firefox when I tried to run search. It threw up the “404” page. This post documents the problem and the solution.

<!--more-->

<img src=“/images/firefox_lunrjs_404.jpg” style=“”>

This post describes the path we took to the solution.

### Isolating the Problem

Through Google, Stack Overflow, and trial & error I isolated the problem to a single line of JavaScript code in `search.js`.

``` javascript

  // Event when the form is submitted
  $("#site_search").submit(function(){
      event.preventDefault(); // RTH: per Google, preventDefault() might be teh culprit in Firefox
      var query = $("#search_box").val(); // Get the value for the text field
      var results = window.idx.search(query); // Get lunr to perform a search
      display_search_results(results); // Hand the results off to be displayed
  });

```

When a web browser encounters this portion of the script, it will attempt to open a page instead of running the script on that page. The command `event.preventDefault();` is supposed to stop the page from opening so the script can run instead. Chrome and Safari handled this fine. Firefox did not. What could we do about it?

### Getting Help

Fortunately, a ChicagoRuby meeting was only one day away. ChicagoRuby is fortunate to have members who are passionate about exploring multiple languages, not just Ruby. After the meeting, I reproduced the problem for [Justin Love](https://twitter.com/wondible) and Darren Holland](https://twitter.com/cachesking). In addition to being a member of the ChicagoRuby organizer team, happens to be a JavaScript enthusiast and a co-organizer of the Chicago JavaScript group. Darren has strong skills in Ruby and JavaScript.

We managed to isolate the problem further through the strategic insertion of `alert` statements in `search.js`. We tested each iteration against Chrome and Firefox. Chrome continued to succeed. Firefox continued to fail.

### Collaboration and Solution

After several minutes of collaboration, Darren theorize that  `event.preventDefault();` was choking in Firefox because the `event` object had not been passed to it explicitly. Chrome and Safari were running the same JavaScript code, and they assumed that `event` meant `event` even though no object had been passed. But maybe Firefox wanted to be explicitly told what object was being passed?

One way to find out: We added `event` to the function definition as follows:

``` javascript

  $("#site_search").submit(function(event){

```

Next, we re-started the Jekyll server. And it worked!

### Lessons Learned

Key takeaways from this experience.

* Firefox, Chrome, and Safari handle JavaScript differently. Always be testing.
* Before asking for help, make sure you can re-produce the problem. Justin and Darren were able to wrap their heads around this challenge because the constraints and behavior were clearly defined.
* When smart people challenge each other to grow, great things happen. That’s the ChicagoRuby motto, and it is completely true, especially when we collaborate on a troubleshooting mission.

### About Git

Once again, Git proves to be awesome. We performed all of our troubleshooting steps in a separate branch called `firefox`. Advantages of this approach:

* The separate branch enabled us to experiment confidently and aggressively, knowing that we could always go back to square one (`master`) if troubleshooting caused serious damage.
* After we created a working solution in the `firefox` branch, we tested it throughly, and merged it into the `master` branch.
* While writing this article, re-creating the problem was as easy as checking out one of the broken commits in the `firefox` branch. The `master` branch remained pristine throughout.

### Thanks

Special thanks to the following people for turning this into a learning experience:

* [Jason (last name unknown)](https://disqus.com/by/jsonmone/) for bringing the problem to my attention via the blog comments.
* Darren Holland and Justin Love for collaborating on the solution.
