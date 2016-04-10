---
layout: post
title:  Observation and Data Representation
date:   2016-04-09
comments: true
tags: 
published: true
---
 
### snake_case at Ancient City Ruby

The Hashrocket team presented a `snake_case` programming challenge during Ancient City Ruby last week. Nineteen attendees submitted correct solutions. Three of the solvers were selected at random. Each winner received a Raspberry Pi 3.

<img src="/images/snake_case_acr.png" align="center">

One of the solvers, [Jack Christensen](https://github.com/jackc), gave a lightning talk about his approach. Jack solved the problem in three different languages: Ruby, C, and Go.

<!--more-->

### The Challenge
Here's the challenge, copied from the Ancient City Ruby site.

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

<img src="/images/snake_case_calcs.png" style="margin-left:15px;margin-right:15px;" width="500" align="center">

Any algorithm or technique we use should give us the same result: `184,756` paths that fit the constraints of the challenge.

### Brute Force Solution in Ruby


For the 10x10 solution...

### Solution in C

### Solution in Go

### Conclusion



### IoT Call for Proposals

Doing something interesting with the [Internet of Things](http://windycitythings.com)? Consider sharing your ideas at the WindyCityThings IoT conference in June. The [WindyCityThings call for proposals](https://wisdomgroup.wufoo.com/forms/windycitythings-2016-exhibit-speaking-proposals/) ends on April 15, 2016.  
