---
layout: post
title:  Observation and Data Representation
date:   2016-04-10
comments: true
tags: [ Community, C, Go, Ruby ]
published: true
---

<img src="/images/snake_case_acr.png" width="250" align="right" style="margin-left:10px;">

What do we learn when we solve the same problem in Ruby, C, and Go? How might the solutions differ in flexibility, readibility, and performance?

The Hashrocket team presented a `snake_case` programming challenge during [Ancient City Ruby](http://ancientcityruby.com) last week. Nineteen attendees submitted correct solutions. Three of the solvers were selected at random to receive a prize: Raspberry Pi 3.

One of the solvers, [Jack Christensen](https://github.com/jackc) of [Hashrocket](http://hashrocket.com), gave a lightning talk about his approach. The contest called for a solution in Ruby. Jack added two more languages: C and Go.

<!--more-->

### The Challenge
Here's the challenge, as presented to the Ancient City Ruby audience:

>You've just arrived in sunny St. Augustine, and find yourself amazed by the visionary civic planning that would result in the area in which you now stand: a street grid exactly 10 blocks square.<br/>&nbsp;<br/>You're in the northwest corner of this 10 by 10 block area, and would like to take a scenic walk to the southeast corner, while only ever moving south or east.<br/>&nbsp;<br/>As you begin walking, you wonder to yourself, "how many different paths could I take from this northwest corner to the southeast corner?"<br/>&nbsp;<br/>You quickly note that if the downtown area were only a 2 block by 2 block grid, there would be 6 distinct paths from one corner to the other (see the diagram at the top of this post).<br/>&nbsp;<br/>So, how many distinct paths are there through the 10 by 10 downtown area?

We'll assume that the standard compass points apply to the map: North is at the top.

### Observation

Jack observed a few things about the scenic route:

* At each intersection, there are two directions that a traveler can choose while moving from start to finish along the scenic route: south or east.

* At the end of the walk, the traveler will have walked a total of ten (10) blocks south and ten (10) blocks east.

Any solution that nets 10 south plus 10 east will get the traveller to the end of the route.

### Data Representation

"Two choices... sounds like binary to me", Jack observed during his lightning talk. So he decided to represent each journey as a 20-bit binary number: 

* 1 bit (set to 1) for each of the 10 southward moves

* 1 bit (set to 0) for each of the 10 eastward moves

A successful journey will consist of exactly ten "1" bits and ten "0" bits. The 1s and 0s can be in any order.

This similar to a coin-flipping problem. The flipper flips a coin twenty times, recording heads or tails after each flip. How many different ways can we flip the coin so that the end result produces exactly ten heads and exactly ten tails?

### Start Small (2x2)

The binary model works with the small, 2x2 block example at the beginning of this post.

~~~ bash
0000
0001
0010
0011 (solution)
0100
0101 (solution)
0110 (solution)
0111
1000
1001 (solution)
1010 (solution)
1011
1100 (solution)
1101
1110
1111
~~~

There are six solutions represented in binary, the same number of solutions shown graphically in 2x2 block example.

### An Elegant Math Solution for 10x10

A mathematician, observing that we want to choose 10 bits from a fixed set of 20 bits, might use combinatorics:

<img src="/images/snake_case_calcs.png" style="margin-left:15px;margin-right:15px;" width="400" align="center" alt="snake_case calculations with combinatorics" title="snake_case calculations with combinatorics">

Any correct algorithm will give us the same result: `184,756` paths that fit the constraints of the challenge.

### Brute Force Solution in Ruby

A brute force solution will solve the problem by looking at every possible combination of bits, one by one. Easy for a small dataset like the 2x2 example. But for larger datasets, a brute force algorithm will consume more time.

Of course, brute force can be fun! Here's Jack's brute force solution in Ruby.

~~~ ruby

puts (0..(2**20)).count { |n| n.to_s(2).chars.count("1") == 10 }

~~~

This one-line program...

* Iterates over every integer from 0 to `2**20` (20-bits long),

* Converts the number into binary,

* Converts that binary number into a string,

* Counts the number of "1" characters in the string. 

* If the string contains exactly ten "1" characters, then that string gets counted as a solution path.

* The final count of solution paths is printed on the screen.

Brute force!

We can use OS X's `time` command to measure performance.

~~~ bash

$ time ruby main.rb
184756

real	0m3.129s
user	0m3.115s
sys	0m0.012s

$ 
~~~

Ruby found the correct result, `184756`, in just over three seconds.

### Brute Force in C

The rules of the contest say that the solution should be submitted in Ruby. Jack decided to try other languages. Clearly, the young man has a problem with authority!

Here's Jack's solution in C:

~~~ c
#include <stdio.h>
#include <stdint.h>

#define SQUARE_SIZE 10

int main() {
  int64_t paths = 0;
  for(int64_t i = 0; i < (int64_t) (1)<<(SQUARE_SIZE*2); i++) {
    int64_t bitCount = __builtin_popcount(i);
    if(bitCount == SQUARE_SIZE) {
      paths++;
    }
  }

  printf("%lld\n", paths);
  return 0;
}
~~~

How long does it take to find the solution in C? First, let's compile the program...

~~~ bash
$ gcc main.c -o main

$ 

~~~

...and run it using `time` to measure performance.

~~~ bash
$ time ./main
184756

real	0m0.009s
user	0m0.006s
sys	0m0.002s

$ 

~~~

Execution in nine milliseconds. Running close to the metal has its advantages! The C solution offers other benefits:

* Flexibility. If you want to solve a larger square, you know exactly what constant to change, `SQUARE_SIZE`.

* Readability. You can see exactly what's going on inside of the loop. At any given time, the varialbe `paths` stores the number of paths that the program has found, while `bitcount` stores the number of set bits in the current number under examination.


### Brute Force in Go

And now for the brute force Go solution.

~~~ go
package main

import (
	"fmt"

	"github.com/cznic/mathutil"
)

const squareSize = 10

func main() {
	var paths int64
	for i := uint64(0); i < uint64(1<<(squareSize*2)); i++ {
		bitCount := mathutil.PopCountUint64(i)
		if bitCount == squareSize {
			paths++
		}
	}

	fmt.Println(paths)
}
~~~

Before we compile and run the program, we need to grab a math library from `github.com/cznic/mathutil`. Here's how to do that.

~~~ bash

$ go get github.com/cznic/mathutil

$ 

~~~

Next, we compile the program. Note that `Go` is particular about directory structure. Unlike with `C`, the source file and the executable file reside in different directories by default, even with a small `Go` program. Therefore, the next few illustrations will include the full path of the directories where the commands are executed.

~~~ bash
~/Code/gocode/src/github.com/rayhightower/acr16$ go install

~/Code/gocode/src/github.com/rayhightower/acr16$ 

~~~

Next, switch to the directory where the new executable is located, and run it while using `time` to measure performance.

~~~ bash

~/Code/gocode/bin$ time ./acr16
184756

real	0m0.015s
user	0m0.009s
sys	0m0.004s

~/Code/gocode/bin$ 

~~~



### Conclusion



### IoT Call for Proposals: WindyCityThings

Are you working with the [Internet of Things](http://windycitythings.com)? Then you might like the [WindyCityThings IoT conference](http://windycitythings.com). The [call for proposals](https://wisdomgroup.wufoo.com/forms/windycitythings-2016-exhibit-speaking-proposals/) ends on April 15, 2016.  


### Potential Titles

Ruby, C, and Go: A comparison
Ruby vs C vs Go

