---
layout: post
title: "Prep for Parallella's 64 Cores: Installing Go on Mac OS X"
date: 2013-06-22 12:58
comments: true
categories: [ Education, High Performance Computing, OS X, Parallella ]
---
<img src="/images/parallella.jpg" width="450" height="257" alt="Parallella 64-core supercomputer" title="Parallella 64-core supercomputer" align="right" imgcap="Parallella Board">

The idea of owning a 64-core parallel system for two hundred dollars (yes, $200.00) is exciting. [Parallella](http://www.parallella.org/introduction/) is working to make that happen, perhaps as early as August 2013. To prepare for that day, I've decided to introduce myself to the Go language. 

<!--more-->

###What is Go?
[The Go language](http://golang.org) is designed for parallel systems. Why does Go exist? One developer sums it up this way:

>Go was created at Google, by Google, for Google-size problems.<br/>~Dave Astels

Google writes software that runs on thousands of machines in parallel. As the number of concurrent operations increases, new challenges are encountered. Google addressed those challenges by creating Go.

###Why Does a Rubyist Learn Go?
The team at [WisdomGroup](http://wisdomgroup.com) writes web and mobile apps, mainly in Ruby. So why am I learning Go?

Because the best developers are polyglot. When we learn a new language, we cause ourselves to see old problems in new ways and we strengthen our ability to solve new problems. It's like cross-training for  athletes. In the end, we become better developers.

###How to Install Go on Mac OS X

<ol>
<li><a href="https://code.google.com/p/go/downloads/list">Download the binary of Go that matches your system</a> <i>but don't install it yet</i>. You will need to complete the rest of these steps before installation. For my 2010 i5-based 15-inch MacBook Pro, I chose <code>go1.1.1.darwin-amd64.pkg</code>. I was concerned about the reference to <code>amd64</code> in the name. But the description includes <code>Mac OS X (x86 64-bit)</code>, and the binary worked for me.</li>
<br/>
<li>If you are upgrading from a previous version of Go, you will need to remove the old Go directory. You can do this while the new binary is downloading in the background:</li>

```bash
$ rm -rf /usr/local/go
```

<li>Define the <code>GOROOT</code> and <code>GOPATH</code> environmental variables. My system uses <code>~/.bash_profile</code> to define environmental variables, so I added the following lines to the end of that file:

```bash
export GOROOT=/usr/local/go
export PATH=$PATH:$GOROOT/bin
export GOPATH=~/Code/gocode
```
Note: I'm using the default <code>GOROOT</code> variable, but your <code>GOPATH</code> may differ from mine. I store all of my source code in a subdirectory of home:<code>~/Code</code>. My complete Go directory structure is given below. By looking at my structure, you can adjust these steps to fit your system.</li>
<br/>
<li>Tell your terminal session to recognize the new environmental variables. You can either restart terminal, or if your environmental variables are in <code>~/.bash_profile</code> like mine, you can do the following:</li>

```bash
$ source ~/.bash_profile
```
<li>Run the package installation program, <code>go1.1.1.darwin-amd64.pkg</code>, that was downloaded in Step 1.</li>
</ol>

Now, let's Go for a test drive.

###Creating a Go Workspace
Before you can run a Go program on your system, you have to create a Go workspace. A workspace is a directory structure that contains source code and binaries that a Go program needs in order to compile and execute.

We can examine the Go Workspace on my system with the Unix <code>tree</code> command:

```bash
~/Code/gocode$ tree
.
└── src
    └── github.com
        └── rayhightower
            └── hello
                └── hello.go

4 directories, 1 file

~/Code/gocode$ 
```

Here's a brief description of the directories:

* Code = root directory for all source code on my system. Yours may differ.
* gocode = where I store all of the Go code on my system. I'm following the structure recommended by the Go documentation. I may alter this as I learn more about the language.
* src = source code
* github.com = directory named after the place where I store repos
* rayhightower = my GitHub profile name
* hello = directory named for our first Go application
* hello.go = the Go source file for our <code>Hello World</code> program

All structure below the <code>gocode</code> directory is mandated by Go.

###Writing 'Hello World!' in Go
Google's official installation instructions include a simple 'Hello World' program for testing the installation. A slightly modified version appears below:

```go
package main

import "fmt"

func main() {
    fmt.Printf("\n****** Hey Parallella enthusiasts: Learn Go! ******\n")
}
```

###Compiling and Running
We drop the code into a file called `hello.go` in the `hello` directory. To compile the program:

```bash
~/Code/gocode/src/github.com/rayhightower/hello$ go install

~/Code/gocode/src/github.com/rayhightower/hello$ 
```
If the Go compiler responds with a blank prompt (like above) then the program compiled successfully and a `bin` directory has been created inside the Go workspace. Run the `tree` command from the `gocode` directory to see how the structure has changed: 

```bash
~/Code/gocode$ tree
.
├── bin
│   └── hello
└── src
    └── github.com
        └── rayhightower
            └── hello
                └── hello.go

5 directories, 2 files

~/Code/gocode$ 
```

The newly created `bin/` directory contains our `hello` executable. And now, let's cut the suspense and _run the program_. To do so, change into the `bin/` directory and type `./hello`.

```bash
~/Code/gocode/src/github.com/rayhightower/hello$ cd ~/Code/gocode/bin

~/Code/gocode/bin$ ./hello

****** Hey Parallella enthusiasts: Learn Go! ******

~/Code/gocode/bin$ 
```
Success!

###It's Not Official, But It Makes Sense
As of this writing, Parallella does not officially support the Go language. So why go through all of this trouble? Because...

* A 64-core Parallella is just too cool to pass up. And it's open source.
* Go is designed for parallel systems. And it's open source.
* Open source devs are working on a Go compiler for Parallella right now. If you're reading this, and you're one of the devs, thank you!

The Go-Parallella match makes sense. It's always good to skate where the puck is going.

###Next Steps
Now it's time to explore the Go language. The real adventure begins when the 64-core Parallella arrives. Looking forward to it!

###Acknowledgements
I was inspired to explore Go by [Blake Smith's](https://twitter.com/blakesmith) presentation at [8th Light](http://www.meetup.com/ChicagoSC/events/120658422/). [Justin Love](http://twitter.com/wondible) introduced me to Parallella last month at ChicagoRuby.
