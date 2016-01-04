---
layout: post
title: "How to Make lunr.js and Jekyll Work Together (with Gotchas)"
date: 2016-01-04 04:03:11 -0500
comments: true
categories: [ Education, Git, LunrJS ]
published: true
---

[lunr.js](http://lunrjs.com) delivers fast search results because the entire search process happens in the browser. There is no network delay because the network never gets touched during the search.

<div class="video-container">
<img src="/images/lunrjs_jekyll_search.gif">
</div> 

<br/>
If you run a Jekyll-based blog, this post will tell you how to make lunr.js work for you. Gotchas (and solutions) are shared here.

<!--more-->

### Big Picture

Before we get into the details of `lunr.js`, let's review how it works from a big picture level. Here's the big picture:

* Before search happens, and every time the `$ jekyll build` process gets run, `lunr.js` grabs all of the text from all of the posts on the site and combines the text into a single file called `search_data.json`. 

* When the user visits your site, `search_data.json` gets downloaded in the background, along with the HTML, CSS, image, and other files that the user sees while viewing the site. `search_data.json` gets held on the user's machine, stored by the browser, until the `lunr.js` executable needs it.

* When the user makes a search request, the `lunr.js` executable in the browser seaches the `search_data.json` file. There's no need to request the file from the server because the browser already has it. Searches are fast because `lunr.js` only opens one file, and the file is already held by the browser.

Now, the details.

### Download lunr.min.js (Minified)

Visit [lunrjs.com](http://lunr.js.com) and download `lunr.min.js`, and store it in the `/js/` directory of your Jekyll project. The `min` designation means that the file is _minified_. `lunr.js` consists of several JavaScript files that you can download and view individually if you like. However, when it's time to execute, the minified file will load and run faster because it's a single, smaller file.

### Why We Care About Speed and File Size

Why do we care so much about speed? Why do we want to keep our file sizes small? Why does this matter, especially since computers keep getting faster?

Two words: Mobile devices. Users on a mobile device may or may not be using a high bandwidth connection when they visit your Jekyll site. Keeping everything small and fast makes the experience better for the user.



### Creating search_data.json

Create a file called `/search_data.json` at the root of your Jekyll
site, and fill it with the following `liquid` code:

{% highlight ruby %}

---
layout: null
---
{
  {% for post in site.posts %}

    "{{ post.url | slugify }}": {
      "title": "{{ post.title | xml_escape }}",
      "content"	 : "{{post.content | strip_html | strip_newlines | remove:  "	" | escape | remove: "\"}}",
      "url": " {{ post.url | xml_escape }}",
      "author": "{{ post.author | xml_escape }}",
      "categories": "{% for category in post.categories %}{{ category }}{% unless forloop.last %}, {% endunless %}{% endfor %}"
    }
    {% unless forloop.last %},{% endunless %}
  {% endfor %}

}

{% endhighlight %}




### Tokenization


### Creating the Search Form




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


