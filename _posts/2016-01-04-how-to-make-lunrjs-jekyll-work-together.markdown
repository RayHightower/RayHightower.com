---
layout: post
title: "How to Make lunr.js and Jekyll Work Together (with Gotchas)"
date: 2016-01-04 04:03:11 -0500
comments: true
categories: [ Education, Git, LunrJS ]
published: true
---

[lunr.js](http://lunrjs.com) delivers fast search results because from what the user sees, the entire search executes in the browser. There is no network delay because the network never gets touched.

<div class="video-container">
<img src="/images/lunrjs_jekyll_search.gif">
</div> 

<div class="video-container">
<iframe width="420" height="315" src="https://www.youtube.com/embed/nb_F4toYXfU?rel=0" frameborder="0" allowfullscreen></iframe>
</div> 
<br/>
If you run a Jekyll-based blog, this post will tell you how to make lunr.js work for you. Gotchas (and solutions) will be shared.

<!--more-->

### Gotchas

category vs categories
stripping away quotation marks
using a hybrid of search_data.json and posts.json

### Acknowledgements

Special to the following sources for their posts and code examples:

* [Jekyll Tips](http://jekyll.tips/tutorials/search/)
* [Josh Beam](http://frontendcollisionblog.com/javascript/jekyll/tutorial/2015/03/26/getting-started-with-a-search-engine-for-your-site-no-server-required.html)
* [Katy DeCorah](http://katydecorah.com/code/lunr-and-jekyll/)
* [Kurtis Kemple](http://iamnotarealprogrammer.com/adding-site-search-with-lunr/)
* [Official LunrJS documentation](http://lunrjs.com/).


