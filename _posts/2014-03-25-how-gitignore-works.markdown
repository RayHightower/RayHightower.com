---
layout: post
title: "How .gitignore Works"
date: 2014-03-25 18:20
comments: true
categories: [ Education, Git, OS X ]
---
Earlier today I ran into a Git issue within a RubyMotion project. I added a directory to the project's `.gitignore` file, but Git seemed to ignore my ignore. Expressed more clearly, Git continued to track a directory that I explicitly told it to ignore.

What?

Either there was a bug in Git, or my understanding of `.gitignore` was incomplete. It was time for me to dig in and learn more about `.gitignore`.

<!--more-->

###What I Learned About .gitignore
The root cause of my problem: Once Git has begun tracking a file or directory, adding it to `.gitignore` changes nothing. Git will continue to track the file unless we explicitly tell Git to stop tracking the file.

```bash
$ git rm --cached [filename]

$ 
```

Or, if you want to stop tracking an entire directory (like me in this case)...

```bash
$ git rm -r --cached [directoryname]

$ 
```

The `-r` flag will tell Git to stop tracking all of the sub-directories and files within `directoryname`, recursively.

Git was behaving exactly as designed. 

###Penalty
I should have known this a long time ago. My penalty: A public admission :-) 

