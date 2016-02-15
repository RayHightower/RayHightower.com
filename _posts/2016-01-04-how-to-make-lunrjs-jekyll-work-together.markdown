---
layout: post
title: "How to Make lunr.js and Jekyll Work Together (with Gotchas)"
date: 2016-01-04 04:03:11 -0500
comments: true
tags: [ Education, Git, Jekyll, LunrJS ]
published: true
---

[lunr.js](http://lunrjs.com) delivers fast search results because the entire search process happens in the browser. There is no network delay because the network never gets touched during the search.

<img src="/images/lunrjs_jekyll_search.gif" style="width:70%; margin-left:2em; margin-bottom:2em;">

Speed is one reason why this blog uses lunr.js for search. If you run a [Jekyll-based blog](/blog/2016/01/02/jekyll-github-lunrjs/), this post will tell you how to make lunr.js work for you. Gotchas (and solutions) are shared within.

<!--more-->

### Big Picture

Before we get into the details, let's review how `lunr.js` works from a big picture perspective:

* Jekyll builds static pages whenever we run the `$ jekyll build` or `$ jekyll serve` commands. Long before a user runs a search, and every time the Jekyll site gets built, `lunr.js` combines all of the text from all of the blog posts into a single JSON file called `_site/search_data.json`. 

* `search_data.json` is a template that tells Jekyll how to generate `_site/search_data.json`. Both files are named `search_data.json`; they differ in content and directory location. The template, `search_data.json`, sits at the root of your local Jekyll directory. 

* You only need to create the `search_data.json` file at the root of your Jekyll directory. The generated JSON file, `_site/search_data.json`, does not exist until the first time you run the Jekyll build process. Samples of `_site/search_data.json` and `search_data.json` appear below.

* The generated JSON file, `_site/search_data.json`, gets re-generated (and overwritten) every time you run the Jekyll build process. That way, `lunr.js` will always have fresh data to search.

* When the user visits your Jekyll site, `_site/search_data.json` (the generated JSON file) gets downloaded in the background, along with the HTML, CSS, image, and other files that the user sees while viewing the site. The generated JSON file remains on the user's machine, stored by the browser.

* When the user makes a search request, the `lunr.js` executable in the browser searches the local copy of the generated JSON file, the one that was downloaded in the background. Searches are fast because `lunr.js` only looks at one local file.

Now, the details.

### Why JSON

Why does `lunr.js` store data in a JavaScript object notation (JSON) file? Primary reason: Speed. JSON files only contain keys and values. That's it.

For example, here's the JSON data for one blog post on this site: [IoT Without the Hype](/blog/2015/12/17/iot-without-the-hype/).

~~~ json

    "blog-2015-12-17-iot-without-the-hype": {
      "title": "IoT Without the Hype",
      "content"	 : "Every great technology started as a toy. People played with kites and paper airplanes for thousands of years before the Wright Brothers achieved powered flight. Ada Lovelace and Charles Babbage toyed with the analytical engine over a hundred years before the digital computer.Toys Become Useful ProductsToday, IoT enthusiasts fly toy drones, while professional photographers use similar devices to capture breathtaking photos. IoT youth groups build and compete with toy robots, while warehouse managers use industrial versions of the same robots to reduce costs and speed up delivery times.The Internet of Things is grown up and ready to do real work. All it needs is you.Slides and video appear below.LinuxBarbados: Thanks!Thank you to the LinuxBarbados organizers for the opportunity to participate in the discussion.",
      "url": " /blog/2015/12/17/iot-without-the-hype/",
      "author": "",
      "categories": "community, education, iot"
    }

~~~

Every blog post has an entry like the one shown above. Take a look at the [current `_site/search_data.json` file](/search_data.json) for RayHightower.com. This is what `lunr.js` searches to produce fast results for visitors.

Now, here's how to make lunr.js work for you.

### Download lunr.min.js (Minified)

Download `lunr.min.js` from [lunrjs.com](http://lunrjs.com) and store it in the `/js/` directory of your Jekyll project. The `min` designation means that the file is _minified_. `lunr.js` consists of several JavaScript files that you can download and view individually if you're curious. However, when it's time to execute, the minified file will load and run faster because it's a single, smaller file.

### Create /js/search.js

Create a file called `/js/search.js`. This is a JavaScript program that calls `lunr.js` for search results. You will need to customize `search.js` for your Jekyll site by specifying the file names and field names that you're using.

The following `/js/search.js` is currently in use at RayHightower.com. It's  customized for this site, and based on the resources listed at the end of this blog post. 

~~~ javascript

jQuery(function() {
  // Initialize lunr with the fields to be searched, plus the boost.
  window.idx = lunr(function () {
    this.field('id');
    this.field('title');
    this.field('content', { boost: 10 });
    this.field('author');
    this.field('categories');
  });

  // Get the generated search_data.json file so lunr.js can search it locally.
  window.data = $.getJSON('/search_data.json');

  // Wait for the data to load and add it to lunr
  window.data.then(function(loaded_data){
    $.each(loaded_data, function(index, value){
      window.idx.add(
        $.extend({ "id": index }, value)
      );
    });
  });

  // Event when the form is submitted
  $("#site_search").submit(function(event){
      event.preventDefault();
      var query = $("#search_box").val(); // Get the value for the text field
      var results = window.idx.search(query); // Get lunr to perform a search
      display_search_results(results); // Hand the results off to be displayed
  });

  function display_search_results(results) {
    var $search_results = $("#search_results");

    // Wait for data to load
    window.data.then(function(loaded_data) {

      // Are there any results?
      if (results.length) {
        $search_results.empty(); // Clear any old results

        // Iterate over the results
        results.forEach(function(result) {
          var item = loaded_data[result.ref];

          // Build a snippet of HTML for this result
          var appendString = '<li><a href="' + item.url + '">' + item.title + '</a></li>';

          // Add the snippet to the collection of results.
          $search_results.append(appendString);
        });
      } else {
        // If there are no results, let the user know.
        $search_results.html('<li>No results found.<br/>Please check spelling, spacing, yada...</li>');
      }
    });
  }
});

~~~


_Update: An earlier version of search.js did not work well with Firefox. Details on the problem and the solution: [Firefox, 404, and lunr.js](/blog/2016/01/18/firefox-404-lunrjs/)_

You will observe that `search.js` looks at fields defined by `search_data.json`. The `{ boost: 10 }` parameter tells lunr.js to give extra weight to words in the content section of each blog post. You might choose to boost a different field depending on what's most important on your blog or site.

### Create the search_data.json Template

Create a file called `/search_data.json` at the root of your Jekyll site, and fill it with the following:

{% highlight js %}{% raw %}
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
{% endraw %}{% endhighlight %}

Every time you run Jekyll's build process, Jekyll will use `/search_data.json` to determine where to look and what to grab as it generates `_site/search_data.json`.

### Create a Search Page

Next, you need to create a page where the user can execute a search. The search page for this blog is located at [http://rayhightower.com/search/](/search/). The following snippet displays the search box, search button, and search results:

~~~ html
---
layout: nonav
title: Search
---

Powered by <a href="/blog/2016/01/04/how-to-make-lunrjs-jekyll-work-together/">lunr.js</a>.

<br/>&nbsp;
<form action="get" id="site_search">
<center>
  <input style="font-size:20px;" type="text" id="search_box">
  <input style="font-size:20px;" type="submit" value="Go!">
</center>
</form>
<br/>&nbsp;
<br/>&nbsp;

<ul id="search_results"></ul>

<script src="/js/lunr.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="/js/search.js"></script>

~~~

And now you're done. At this point, you should be able to search your Jekyll-powered blog using lunr.js.

### Gotchas

Here are the _gotchas_ that I encountered while getting lunr.js to work. Hope this saves you time:

* The biggest _gotcha_ for me: Figuring out how all of the lunr.js pieces fit together. Some of the steps seem non-sensical until the "why" behind each step is known. That's why the beginning of this article addresses the big picture. Once the big picture is clear, everything else falls into place.

* The lunr.js examples that I found show how to point `search_data.json` toward blog posts, but not the other pages on the site. I need to include [About](/about/), [Speaking](/speaking/), and [If](/if-rudyard-kipling/) in my results. I hacked a solution in [`/search_data.json`](https://raw.githubusercontent.com/RayHightower/rayhightower.github.io/master/search_data.json). The hack works for now, but I'm sure there's a better way.

* The lunr.js engine appeared to ignore some results until I dug deper into the problem. For example, searching for the term "Cape Town" initially produced zero results, even though the term exists on the [Speaking](/speaking) page. To solve the problem, I cheated: I added a space after "Rubyfuza" and before `<br/>` on the Speaking page. This solution feels like a hack to me. If you know of a cleaner way, feel free to mention it in the comments below.

* An earlier version of `search.js` did not work well with Firefox. Details on the problem and the solution: [Firefox, 404, and lunr.js](/blog/2016/01/18/firefox-404-lunrjs/)

### Acknowledgements

Special to the following sources for their posts and code examples:

* [Oliver Nightingale](https://github.com/olivernn/lunr.js) - creator of
lunr.js.
* [Jekyll Tips](http://jekyll.tips/tutorials/search/) - solid tutorials
for Jekyll users.
* [Katy DeCorah](http://katydecorah.com/code/lunr-and-jekyll/), [Kurtis Kemple](http://iamnotarealprogrammer.com/adding-site-search-with-lunr/), and [Josh Beam](http://frontendcollisionblog.com/javascript/jekyll/tutorial/2015/03/26/getting-started-with-a-search-engine-for-your-site-no-server-required.html) - bloggers who filled some of the gaps in my Jekyll knowledge.
* [Official lunr.js documentation](http://lunrjs.com/) - the official
resource.

