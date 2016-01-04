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
Speed is one reason why this blog runs lunr.js. [Try it here](/search/). If you run a Jekyll-based blog, this post will tell you how to make lunr.js work for you. Gotchas (and solutions) are shared within.

<!--more-->

### Big Picture

Before we get into the details, let's review how `lunr.js` works from a big picture perspective:

* Jekyll builds static pages whenever we run the `$ jekyll build` or `$ jekyll serve` commands. Long before a user runs a search, and every time the Jekyll site gets built, `lunr.js` combines all of the text from all of the blog posts into a single JSON file called `_site/search_data.json`. 

* `search_data.json` is a template that tells Jekyll how to generate `_site/search_data.json`. Both files are named `search_data.json`; they differ in content and directory location. The template, `search_data.json`, sits at the root of your local Jekyll directory. 

* You only need to create the `search_data.json` file at the root of your Jekyll directory. The generated JSON file, `_site/search_data.json`, does not exist until the first time you run the Jekyll build process. Samples of `_site/search_data.json` and `search_data.json` appear below.

* The generated JSON file, `_site/search_data.json`, gets re-generated (and overwritten) every time you run the Jekyll build process. That way, `lunr.js` will always have fresh data to search.

* When the user visits your Jekyll site, `_site/search_data.json` (the generated JSON file) gets downloaded in the background, along with the HTML, CSS, image, and other files that the user sees while viewing the site. The generated JSON file remains on the user's machine, stored by the browser.

* When the user makes a search request, the `lunr.js` executable in the browser seaches the local copy of the generated JSON file. There's no need to request the file from the server because the browser already downloaded it in the background. Searches are fast because `lunr.js` only opens one local file.

Now, the details.

### Why JSON

Why does `lunr.js` store data in a JavaScript object notation (JSON) file? My guess: Speed. JSON files only store keys and values. No fluff.

For example, let's look at a blog post from this site: [IoT Without the Hype](/blog/2015/12/17/iot-without-the-hype/). It gets generated like this in `_site/search_data`:

``` json

    "blog-2015-12-17-iot-without-the-hype": {
      "title": "IoT Without the Hype",
      "content"	 : "Every great technology started as a toy. People played with kites and paper airplanes for thousands of years before the Wright Brothers achieved powered flight. Ada Lovelace and Charles Babbage toyed with the analytical engine over a hundred years before the digital computer.Toys Become Useful ProductsToday, IoT enthusiasts fly toy drones, while professional photographers use similar devices to capture breathtaking photos. IoT youth groups build and compete with toy robots, while warehouse managers use industrial versions of the same robots to reduce costs and speed up delivery times.The Internet of Things is grown up and ready to do real work. All it needs is you.Slides and video appear below.LinuxBarbados: Thanks!Thank you to the LinuxBarbados organizers for the opportunity to participate in the discussion.",
      "url": " /blog/2015/12/17/iot-without-the-hype/",
      "author": "",
      "categories": "community, education, iot"
    }

```

Here's the [entire `_site/search_data.json` file](/search_data.json) for RayHightower.com. This is the file that `lunr.js` searches to produce fast results for you.

Now, if you want to make lunr.js work for you, here's how to do it.

### Download lunr.min.js (Minified)

Download `lunr.min.js` from [lunrjs.com](http://lunrjs.com) and store it in the `/js/` directory of your Jekyll project. The `min` designation means that the file is _minified_. `lunr.js` consists of several JavaScript files that you can download and view individually if you're curious. However, when it's time to execute, the minified file will load and run faster because it's a single, smaller file.

### Create search_data.json

Create a file called `/search_data.json` at the root of your Jekyll site, and fill it with the following `liquid` code:


<figure class="highlight"><pre><code class="language-text" data-lang="text">

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

</code></pre></figure>

The `/search_data.json` file tells Jekyll where to look and what to grab as it generates `_site/search_data.json`.

### Create a Search Page

Next, you need to create a place for the user to execute a search. The search page for this blog is located at [http://rayhightower.com/search/](http://rayhightower.com/search/) and it contains the following:

``` html

```



### Tokenization






### Gotchas

Here are the _gotchas_ that I encountered while getting lunr.js to work. Hope this saves you time:

* The biggest _gotcha_ for me: Figuring out where the lunr.js files should go, and figuring out what each file should contain. That's why the beginning of this article spends so much time describing the big picture. Once the big picture is clear, everything else falls into place.

* The lunr.js documentation that I found shows how to build search data from blog posts, but not from the other pages on the site. I wanted to include [About](/about/), Speaking, and If in my results. I hacked my way to making it work in [`/search_data.json`](). Feel free to share if you know a cleaner way.

The second _gotcha_: Dealing with special characters in `_site/search_data.json` to ensure that lunr.js produces good search results. For example, searching for the term "Cape Town" initally produced zero results, even though the term exists on the [Speaking](/speaking) page for the site. To solve the problem, I had to cheat: I added a space after "Rubyfuza" on the Speaking page. This solution feels like a hack to me, so if you know of a cleaner way, feel free to mention it in the comments below.


category vs categories
stripping away quotation marks
using a hybrid of search_data.json and posts.json

### Acknowledgements

Special to the following sources for their posts and code examples:

* [Oliver Nightingale](https://github.com/olivernn/lunr.js) - creator of
lunr.js.
* [Jekyll Tips](http://jekyll.tips/tutorials/search/) - solid tutorials
for Jekyll users.
* [Katy DeCorah](http://katydecorah.com/code/lunr-and-jekyll/), [Kurtis Kemple](http://iamnotarealprogrammer.com/adding-site-search-with-lunr/), and [Josh Beam](http://frontendcollisionblog.com/javascript/jekyll/tutorial/2015/03/26/getting-started-with-a-search-engine-for-your-site-no-server-required.html) - bloggers who filled some of the gaps in my Jekyll knowledge.
* [Official LunrJS documentation](http://lunrjs.com/) - the official
resource.

# Out-Takes

### Why We Care About Speed and File Size

Why do we care so much about speed? Why do we want to keep our file sizes small? Why does this matter, especially since computers keep getting faster?

Two words: Mobile devices. Users on a mobile device may or may not be using a high bandwidth connection when they visit your Jekyll site. Keeping everything small and fast makes the experience better for the user.

