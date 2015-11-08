---
layout: post
title: "Unix for Ruby Developers"
date: 2012-12-24 16:50
comments: true
categories: [ Education, Linux, OS X, Ruby ]
published: true
---
<a href="http://workingwithunixprocesses.com/"><img src="/images/working-w-unix-processes.jpg" align="right" width="350" height="266"></a>
It is gratifying to know that learning something tangentially related to Ruby will, in fact, teach me more about Ruby. 

[_Working With Unix Processes_](http://workingwithunixprocesses.com/), by Jesse Storimer, is ostensibly about Unix internals. However, in reading this book, I have become more aware of how executables run on my favorite family of operating systems, which in turn gives me more insight into Ruby.

### Passing Arguments
For example, what happens when we pass arguments to a process, Ruby or otherwise? How do the arguments get there? Storimer offers a 1-line Ruby program called `argv.rb` that we can use to play with the ARGV array:

``` bash
~/Code/Ruby/apps/sandbox$ echo 'p ARGV' > argv.rb

~/Code/Ruby/apps/sandbox$ ruby argv.rb what results can we expect here
["what", "results", "can", "we", "expect", "here"]

~/Code/Ruby/apps/sandbox$ 

```
<!--more-->

Once we have our hands on the ARGV array, we can parse it and manipulate it at will.

### Grokking Forks
The section on forks contains a lot of mind-bending fun. The author offers some code to explain how forks work, but some concepts are only understandable when we write our own code. I had to write my own in order to raise my comfort level with forks. 

Here's what the code does:

* In the parent process, `fork` returns the `pid` of the child process.
* In the child process, `fork` returns `nil`.
* Therefore, the `if` block should be executed by the parent process...
* ...and the `else` block should be executed by the child process.

``` ruby
puts "Parent process pid (before fork) is #{Process.pid}.\n"

if fork
  current_process = Process.pid
  parent_process = Process.ppid
  printf "Entered the *if* block during Process #{current_process}."
  printf "\nThe parent of this process is #{Process.ppid}, which should be bash.\n\n"
else
  current_process = Process.pid
  parent_process = Process.ppid
  printf "Entered the *else* block during Process #{current_process}."
  printf "\nThe parent of this process is #{parent_process}, which should be the original of this process.\n\n"
end

```

Running the above Ruby code produces the following results:

``` bash
~/Code/Ruby/apps/sandbox$ ruby forking_around.rb 
Parent process pid (before fork) is 79703.
Entered the *if* block during Process 79703.
The parent of this process is 76751, which should be bash.

Entered the *else* block during Process 79704.
The parent of this process is 79703, which should be the original of this process.

```

Digging further: Let's look at the names that correspond to our
`pids`.

``` bash
~/Code/Ruby/apps/sandbox$ ps -p 79703
  PID TTY           TIME CMD

~/Code/Ruby/apps/sandbox$ ps -p 79704
  PID TTY           TIME CMD

~/Code/Ruby/apps/sandbox$ ps -p 76751
  PID TTY           TIME CMD
76751 ttys003    0:00.40 -bash

~/Code/Ruby/apps/sandbox$ 
```

We get zero data for the `pids` 79703 and 79704 because those processes terminated with the program `forking_around.rb`. However, 76751 shows `bash` because bash is still running.

The book is full of rich playground examples that go much deeper than this. Time slips away when I get rolling with this stuff!

### Errata Handling
The book is new so you can expect a few typos. If you run into problems with sample code, a quick Google search will lead you to the corrected text. For example, early in the book I had problems with a command that returns the maximum number of processes allowed on a system. Turns out there was a typo, and <a href="http://forums.pragprog.com/forums/261/topics/11191">the correction</a> was posted by the author himself on the publisher's errata page.

### Conclusion
I enjoyed reading _Working With Unix Processes_ because it replaces a belief in "the magic of Unix" with a sound understanding of Unix fundamentals. The book is clear and brief with plenty of examples. The author assumes that readers have at least a basic understanding of Ruby. After that, you only need a command line, IRB, and the willingness to explore.
