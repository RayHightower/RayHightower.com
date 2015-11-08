---
layout: post
title: "SGI & Big Data"
date: 2014-02-17 14:46
comments: true
categories: [ Community, High Performance Computing ]
---

{% include image.html img="/images/sgi-logo-1990s.png" caption="SGI's logo from the 1990s." %}

[Silicon Graphics International Corporation (SGI)](http://sgi.com) computers rendered the special effects for the original [Jurassic Park](http://en.wikipedia.org/wiki/Jurassic_Park) movie. Computer enthusiasts coveted SGI machines throughout the 1990s. 

But success in the computer industry is fleeting. A few years after Jurassic Park, a convergence of tech advances (Moore's Law, x86 architecture, and Linux) made it possible for commodity PCs to perform as well as SGI's premium workstations. Wall Street traders and other power users abandoned workstations in favor of Linux-based PCs. High-end makers like SGI fell on hard times.

Today, SGI is fighting back. The company is blending x86, Linux, and (buzzword alert) big data to attack the high performance computing market. The vision was presented at this month's [Chicago ACM](http://www.meetup.com/chicagoacm/events/163287562/) meeting by Brian Freed, VP of Strategy for SGI.

<!--more-->

###What is Big Data?
Freed shared a definition of big data from [Edd Dumbill's O'Reilly Radar article](http://strata.oreilly.com/2012/01/what-is-big-data.html). Big data is characterized by volume (lots of it), variety (it's unstructured), and velocity (the data changes quickly).

In the words of the O'Reilly author...

>Big data is data that exceeds the processing capacity of conventional database systems. The data is too big, moves too fast, or doesn’t fit the strictures of your database architectures. To gain value from this data, you must choose an alternative way to process it.
>
> ~Edd Dumbill

Definitions are fine, but it's more important to understand _why_ a company might care about big data. Here are a few examples that Freed shared during the ACM meeting.

###Example: Fraud Detection with Big Data
Consider one challenge faced by credit card companies. When a credit card is presented for an online purchase, how does the authorizing body know if the charge is legitimate? Can legitimacy be determined in a timely fashion, before an impatient buyer abandons a slow seller for a quicker seller?  

Sellers who decide too quickly will suffer fraud. Sellers who decide too slowly will lose customers. The problem is amplified because millions of shoppers are clicking the "buy now" button simultaneously, and they all expect an answer _right now_.  

Traditional fraud detection systems could measure just a few potential fraud criteria within the allowed time window. SGI solves the problem with [Hadoop clusters](http://hadoop.apache.org/) running on SGI hardware. This big data design is able to examine each transaction deeper, and render a yes/no decision faster. Buyers are happier because they can complete a purchase faster. Companies are happier because fraud is reduced.

Big data helps credit card companies to make better authorization decisions in less time.

###Example: Auto Manufacturing
Some problems, like credit authorization, require a quick response.  Other problems, like manufacturing, require the problem solver to crunch large volumes of data.

Consider an auto manufacturer. Every system in the modern automobile is controlled by software on silicon. Where software runs, data can be collected. The data piles up rapidly over time.

Manufacturers have discovered some unexpected benefits of collecting so much data. For example, they can identify trends like common failures among components, and use that data to improve future components. They can spot hidden trends, like geographic issues related to extreme cold or heat, and then design parts that are specially equipped for the target environment.

For these particular manufacturing examples, handling huge volumes of data is more important than delivering a quick answer. Insights that lead to quality improvements can be delivered in hours, and that's fast enough for the designers. Before big data, many design decisions were driven by instinct and experience alone. Big data helps auto companies to make more informed decisions.

###Pitfalls of Big Data
One big pitfall is trying to use the big data _hammer_ for every _nail_ in sight, whether the solution fits the problem or not. It's the same hazard we face with any new technology. We run the risk of using a sledgehammer when a fly swatter would do. 

A few ways to avoid the pitfalls: Start small. Have goals. And, like any good agile software developer, iterate. In Freed's words...

>Successful implementation of big data is not an event. It is an iterative process where we continuously learn over time.

###About Chicago ACM
[The Chicago Chapter of the Association for Computing Machinery (Chicago ACM)](http://www.meetup.com/chicagoacm/) is on fire. December's meeting featured a supercomputing presentation by [Sharan Kalwani of Fermilab](/blog/2013/12/12/high-performance-computing-at-acm/). The February meeting was all about SGI's push into big data, and next month will focus on the Internet of Things (IoT). The organizers are assembling an exciting combination of events. Looking forward to more!
