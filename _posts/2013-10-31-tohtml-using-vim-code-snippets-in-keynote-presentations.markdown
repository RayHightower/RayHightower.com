---
layout: post
title: ":TOhtml - Using Vim Code Snippets in Keynote Presentations"
date: 2013-10-31 16:13
comments: true
categories: [Education, Vim]
---
While finishing my presentation for the upcoming [Chippewa Valley Code Camp](http://chippewavalleycodecamp.com/), I decided to add some blocks of code to my slides. I forgot the name of the tool I used for my last slide deck, and it took several minutes of Google-fu to find it. 

Google led me back to `:TOhtml`. Whew! I'm documenting `:TOhtml` here to avoid wasting time with a future search.

<!--more-->

###Start With a Block of Code
Fire up Vim and drop the block of code you want to convert into a new Vim buffer. In this example, I've created a sample [RubyMotion](/blog/2012/10/29/building-ios-apps-with-ruby-motion/) OS X app, and I want to show the contents of the Rakefile.

```ruby
# -*- coding: utf-8 -*-
$:.unshift("/Library/RubyMotion/lib")
require 'motion/project/template/osx'

begin
  require 'bundler'
  Bundler.require
rescue LoadError
end

Motion::Project::App.setup do |app|
  # Use `rake config' to see complete project settings.
  app.name = 'EjectDisks'
  app.info_plist['LSUIElement'] = true
end
```

Next, visually select the lines you want to convert. You can do this with shift-V, or with the (gasp!) mouse. Or if you want to convert the entire file, enter `:TOhtml` in the command area. Vim will convert the highlighted text into HTML in a new buffer. Here's the result:

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<title>~/Code/Ruby/RubyMotion/EjectDisks/Rakefile.html</title>
<meta name="Generator" content="Vim/7.4">
<meta name="plugin-version" content="vim7.4_v1">
<meta name="syntax" content="ruby">
<meta name="settings" content="number_lines,use_css,no_foldcolumn,expand_tabs,line_ids,prevent_copy=">
<meta name="colorscheme" content="darkspectrum">
<style type="text/css">
<!--
pre { font-family: monospace; color: #efefef; background-color: #2a2a2a; }
body { font-family: monospace; color: #efefef; background-color: #2a2a2a; }
* { font-size: 1em; }
.String { color: #fce94f; }
.Statement { color: #ffffff; font-weight: bold; }
.PreProc { color: #ffffff; font-weight: bold; }
.LineNr { color: #535353; background-color: #202020; padding-bottom: 1px; }
.Comment { color: #8a8a8a; }
.Type { color: #8ae234; font-weight: bold; }
.Special { color: #e9b96e; }
.Identifier { color: #729fcf; }
.Constant { color: #ef5939; }
-->
</style>

<script type='text/javascript'>
<!--

/* function to open any folds containing a jumped-to line before jumping to it */
function JumpToLine()
{
  var lineNum;
  lineNum = window.location.hash;
  lineNum = lineNum.substr(1); /* strip off '#' */

  if (lineNum.indexOf('L') == -1) {
    lineNum = 'L'+lineNum;
  }
  lineElem = document.getElementById(lineNum);
  /* Always jump to new location even if the line was hidden inside a fold, or
   * we corrected the raw number to a line ID.
   */
  if (lineElem) {
    lineElem.scrollIntoView(true);
  }
  return true;
}
if ('onhashchange' in window) {
  window.onhashchange = JumpToLine;
}

-->
</script>
</head>
<body onload='JumpToLine();'>
<pre id='vimCodeElement'>
<span id="L1" class="LineNr"> 1 </span><span class="Comment"># -*- coding: utf-8 -*-</span>
<span id="L2" class="LineNr"> 2 </span><span class="Identifier">$:</span>.unshift(<span class="Special">&quot;</span><span class="String">/Library/RubyMotion/lib</span><span class="Special">&quot;</span>)
<span id="L3" class="LineNr"> 3 </span><span class="PreProc">require</span> <span class="Special">'</span><span class="String">motion/project/template/osx</span><span class="Special">'</span>
<span id="L4" class="LineNr"> 4 </span>
<span id="L5" class="LineNr"> 5 </span><span class="Statement">begin</span>
<span id="L6" class="LineNr"> 6 </span>  <span class="PreProc">require</span> <span class="Special">'</span><span class="String">bundler</span><span class="Special">'</span>
<span id="L7" class="LineNr"> 7 </span>  <span class="Type">Bundler</span>.require
<span id="L8" class="LineNr"> 8 </span><span class="Statement">rescue</span> <span class="Type">LoadError</span>
<span id="L9" class="LineNr"> 9 </span><span class="Statement">end</span>
<span id="L10" class="LineNr">10 </span>
<span id="L11" class="LineNr">11 </span><span class="Type">Motion</span>::<span class="Type">Project</span>::<span class="Type">App</span>.<span class="Statement">setup</span> <span class="Statement">do</span> |<span class="Identifier">app</span>|
<span id="L12" class="LineNr">12 </span>  <span class="Comment"># Use `rake config' to see complete project settings.</span>
<span id="L13" class="LineNr">13 </span>  app.name = <span class="Special">'</span><span class="String">EjectDisks</span><span class="Special">'</span>
<span id="L14" class="LineNr">14 </span>  app.info_plist[<span class="Special">'</span><span class="String">LSUIElement</span><span class="Special">'</span>] = <span class="Constant">true</span>
<span id="L15" class="LineNr">15 </span><span class="Statement">end</span>
</pre>
</body>
</html>
<!-- vim: set foldmethod=manual : -->
```

Save the new buffer as `~/Desktop/convertedstuff.html` or any other file name that you choose. In this case, I chose:

```
:w ~/Desktop/convertedrakefile.html
```

Open the converted file in a web browser.

{% include image.html img="/images/rakefile-browser.png" caption="Rakefile in Chrome." %} 

Copy and paste the text from the browser into Keynote.

###Washed Out Code?
If the code looks washed out when you paste it into Keynote, you have a few alternatives:

* Start with a different theme in Vim at the beginning, or
* Darken/lighten the background in Keynote by using the Keynote inspector.

###The Finished Slide
Here's what the finished product looks like. All the clarity of syntax-highlighted text. You can even adjust font size at will using the Keynote inspector. All set for the presentation.

{% include image.html img="/images/osxfinished.png" caption="The final snippet, in Keynote." %} 

###Easier Way?
Can this process be simplified? If you know the answer, feel free to mention it in the comments below. Thanks!
