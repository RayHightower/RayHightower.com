---
layout: post
title: "Octopress Search With lunr.js"
date: 2015-01-02 00:37
comments: true
categories: [ Education ]
published: false
---
Google Search stopped working on [RayHightower.com](), so it was necessary to find an alternative. Fortunately, there’s `lunr.js`. This article tells how to get lunr.js up and running, and why this particular tool happens to work for this blog.

###Why Lunr.js?
I don’t want to be dependent on a third party search tool any more. Any time the third party provider choose to change their API, search breaks on my site. But with my own tool, I control what gets upgraded and when. Things work more smoothly that way.
<!--more-->
###Getting Started


Clone the `octopress-lunr-js` directory.

``` bash

$ git clone 

$ 

```

Copy the contents of the `octopress-lunr-js` directory into the corresponding directories of your Octopress site. It’s possible to do this with a single Unix command, but _please_ test the command first on a dummy copy of your Octopress directory just to make sure you’re targeting the directory at the right level. Or, if you’re comfortable with `Git`, you can execute the command at random with full confidence that you can revert if necessary.

Note: You don’t want it to over-write config.yml

``` bash

~$ cd [your octopress directory]

~$ cp -rn ~/Code/JavaScript/octopress-lunr-js-search/ .

```

`cp` is the copy command. The `r` flag means copy the directory recursively, which means to copy everything as deep as the directory goes. The `n` flag means copy files from the original directory, but don’t clobber anything that’s already there.

When the copy is done, you can use `git` to view a list of the newly copied files.to change.


``` bash

~$ git status
On branch source
Your branch is ahead of 'origin/master' by 2135 commits.
  (use "git push" to publish your local commits)
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

     new file:   .gitmodules
     new file:   Guardfile
     new file:   LICENSE
     new file:   README.md
     new file:   plugins/ext.rb
     new file:   plugins/search_generator.rb
     new file:   source/_assets/javascripts/lib/URI.min.js
     new file:   source/_assets/javascripts/lib/handlebars.js
     new file:   source/_assets/javascripts/lib/jquery.min.js
     new file:   source/_assets/javascripts/lib/lunr.min.js
     new file:   source/_assets/javascripts/lunr_search.coffee
     new file:   source/_includes/custom/lunr-search/entries.html
     new file:   source/_includes/custom/lunr-search/search-form.html
     new file:   source/_includes/custom/lunr-search/search-results-template.html
     new file:   spec/javascripts/helpers/SpecHelper.coffee
     new file:   spec/javascripts/helpers/jasmine-jquery.js
     new file:   spec/javascripts/helpers/sinon-1.6.0.js
     new file:   spec/javascripts/lunr_search_spec.coffee
     new file:   spec/javascripts/support/jasmine.yml
     new file:   spec/javascripts/support/jasmine_helper.rb


~$

```

At this point it’s a good idea to `$ git commit`.

``` bash

~$ git commit -am 'copy files needed for lunr.js support'
[source c054b69] copy files needed for lunr.js support
 20 files changed, 7683 insertions(+)
 create mode 100644 .gitmodules
 create mode 100644 Guardfile
 create mode 100644 LICENSE
 create mode 100644 README.md
 create mode 100644 plugins/ext.rb
 create mode 100644 plugins/search_generator.rb
 create mode 100644 source/_assets/javascripts/lib/URI.min.js
 create mode 100644 source/_assets/javascripts/lib/handlebars.js
 create mode 100644 source/_assets/javascripts/lib/jquery.min.js
 create mode 100644 source/_assets/javascripts/lib/lunr.min.js
 create mode 100644 source/_assets/javascripts/lunr_search.coffee
 create mode 100644 source/_includes/custom/lunr-search/entries.html
 create mode 100644 source/_includes/custom/lunr-search/search-form.html
 create mode 100644 source/_includes/custom/lunr-search/search-results-template.html
 create mode 100644 spec/javascripts/helpers/SpecHelper.coffee
 create mode 100644 spec/javascripts/helpers/jasmine-jquery.js
 create mode 100644 spec/javascripts/helpers/sinon-1.6.0.js
 create mode 100644 spec/javascripts/lunr_search_spec.coffee
 create mode 100644 spec/javascripts/support/jasmine.yml
 create mode 100644 spec/javascripts/support/jasmine_helper.rb

~$

```

Edit `_config.yml` to tell Octopress to use `lunr.js` instead of the default Google search.

``` bash

# lunr.js support added 12/31/2014 by RTH
simple_search: #http://google.com/search
lunr_search: true

```

###Edit Navigation Template

Edit `source/_includes/navigation.html` to support `lunr.js`





###Gotchas: Gem Dependencies
I spent some time twiddling with dependencies in my `gemfile` before I could get `lunr.js` to work. Your mileage may vary depending on your particular version of Ruby, what you’re using to manage Ruby versions, etc.



###Conclusion

###Resources

[Yortz](https://github.com/yortz/octopress-lunr-js-search)
[dreamand.me](http://dreamand.me/web/fulltext-search-at-jekyll-site/)

