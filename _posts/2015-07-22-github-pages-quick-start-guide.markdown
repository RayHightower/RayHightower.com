---
layout: post
title: "GitHub Pages: Quick Start Guide"
date: 2015-07-22 15:07:37 -0500
comments: true
categories: [ Git ]
---
[GitHub Pages](https://pages.github.com/) lets any holder of a GitHub account host static HTML pages at no cost. The bigger benefit: Pages hosted at GitHub automatically become part of GitHub’s [content delivery network (CDN)](https://en.wikipedia.org/wiki/Content_delivery_network). People who visit your site will get faster page loads because of the CDN.

This article focuses on interacting with GitHub Pages via Git at the command line. The browser-based automatic page generator is already well-documented. Another purpose of this post: To put useful information about GitHub Pages all in one post, so I won't have to go hunting around next time I forget this procedure!

<!--more-->

### Quick Start
A quick way to launch a “Hello World!” page via GitHub Pages...

* Create a [GitHub](http://github.com) account for yourself.

* Create the repo where you want to publish a GitHub page. For example, `random-repo`. Be sure to make the repo public, and don't initialize it with a README file.

{% include image.html img="/images/github-create-random-repo.png" %}

* Clone the repo on your local machine.

* `cd` into the `random-repo` directory.

``` bash

$ git clone git@github.com:RayHightower/random-repo.git
Cloning into 'random-repo'...
warning: You appear to have cloned an empty repository.
Checking connectivity... done.


$ cd random-repo

$ 


```

{% include image.html img="/images/github-clone-random-repo.png" %}

Don't worry about the "cloned an empty repository" message. We'll add something very soon!

* Create and checkout the `gh-pages` branch in the repo.

* Create a file called `index.html` in the `gh-pages` branch.

* Using a text editor (or the fancy shortcut shown below) add the line "Hello World" to the `index.html` file.

``` bash

$ git checkout -b gh-pages

$ touch index.html

$ echo "Hello World">index.html

$ 

```

* Use `$ git add .` to add `index.html` to Git's history.

* Use `$ git commit` to commit changes.

* Use `$ git push` to push the `gh-pages` branch to GitHub.

``` bash

$ git add .

$ git commit -am 'initial commit'
[gh-pages (root-commit) 0d4a0ae] initial commit
 1 file changed, 1 insertion(+)
 create mode 100644 index.html

$ git push -u origin gh-pages
Counting objects: 3, done.
Writing objects: 100% (3/3), 236 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To git@github.com:RayHightower/random-repo.git
 * [new branch]      gh-pages -> gh-pages
Branch gh-pages set up to track remote branch gh-pages from origin.

$ 

```

* Open a web browser and navigate to `http://your-github-user-name.github.io/random-repo`. For the example in this article, use [http://rayhightower.github.io/random-repo](http://rayhightower.github.io/random-repo). You should see the words "Hello World" in the browser window. 

{% include image.html img="/images/github-browser-random-repo.png" %}

Congrats on your success!

GitHubber [Alyson La](https://www.youtube.com/watch?v=rRGrT0wsJxI&index=7&list=PLOnWKC1gI_ONnIjU_sQVsIGFWT06Kd3In) demonstrates these steps in a 4-minute video, with some creative variations.

### Hello World = Done. Enter Jekyll.
Now that `Hello World!` runs well, consider [Jekyll](/blog/2015/06/24/getting-started-with-jekyll/). Jekyll will generate your static pages based on the rules you setup in the Jekyll templates.

Enjoy GitHub Pages!
