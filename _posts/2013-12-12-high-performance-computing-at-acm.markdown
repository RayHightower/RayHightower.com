---
layout: post
title: "High Performance Computing at ACM"
date: 2013-12-12 22:22
comments: true
categories: [ Community, Education, High Performance Computing ]
---

{% include image.html img="/images/cray-1.jpg" title="Cray-1 at the Swiss Federal Institute of Technology." caption="Cray-1 at the Swiss Federal Institute of Technology." %}

>Anyone can build a fast CPU. The trick is to build a fast system. 
>&nbsp;<br/>
>~ Seymour Cray

The Chicago chapter of the Association for Computing Machinery ([Chicago ACM](http://www.chicagoacm.org/)) hosted a lecture titled _Supercomputing and You_ yesterday evening. The talk was delivered by [Sharan Kalwani](http://www.linkedin.com/in/sharankalwani) of [Fermilab](http://www.fnal.gov/). Kalwani's background blends mechanical engineering and computer science with decades of high performance computing experience.

###10x => High Performance Computing
Kalwani began his talk by drawing a distinction between _supercomputing_ and _high performance computing (HPC)_. Supercomputing is the buzzword that everyone knows, but the word implies that the designers are focused only on improving CPU performance. Such narrow focus could cause us to ignore important subsystems. For example, if engineers focus strictly on CPU performance, applications that are CPU-bound will quickly encounter I/O bottlenecks. High performance computing takes the entire system into account: CPU, I/O, cache, memory... anything that can influence performance. 

<!--more-->

This article will use the terms _supercomputing_ and _high performance computing_ interchangably because we are discussing the field in general. In an engineering document, the distinction would be more important.

By definition, supercomputers perform at least ten times faster than the current state-of-the art. The definition is a moving target. The processor in today's smartphone would have been considered a high performance computer a decade ago.

###The First Supercomputer
[Seymour Cray](http://www.cray.com/) is regarded as the father of the supercomputer. Cray cobbled together the first supercomputer using off-the-shelf components of the day and his unique ideas about computer architecture. 

For example, Cray observed that the speed of an electrical signal was one bottleneck in computer performance. Electrical signals travel at the speed of light. Light can travel roughly one foot in one nanosecond.  Therefore, Cray decided that all internal cables in his new system would be less than a foot in length. No input would need to wait more than a nanosecond for a signal.

The 1972-era Cray supercomputer ran at a clock speed of 80MHz. It used a 64-bit word size. As a point of comparison, a 1972-era business mainframe ran at 4MHz with a 16-bit word size.
 
###Supercomputers... So What?
Why do we need to spend time and money on high performance computers?  How does the general public benefit?

HPC enables us to solve problems that elude typical computers. For example:

* *Auto safety testing*. Kalwani spent several years using HPC to run simulated crash tests for General Motors. A physical crash test, one in which the car is destroyed, costs $500k per car. The same test can be run in a simulator for $5k. Engineers still need to test a physical car at the end of the testing cycle, but the number of cars destroyed is drastically reduced. The business advantage of HPC-simulated tests is clear.
* *Nuclear testing*. It is very expensive (measured both in dollars and in human lives) to test a nuclear power plant. Fortunately, scientists know enough about nuclear behavior to create realistic simulations. Testing via simulation helps to manage costs and reduce accidents.
* *Weather forecasting*. The first supercomputers needed three days to predict the weather for _tomorrow_. What good is a 2-day-old weather forecast? A good forecast can save lives by telling people to evacute before a life-threatening natural disaster. Today's supercomputers can produce accurate weather forecasts while the reader still has time to take action.
* *Bioinformatics*. When scientists can reliably simulate drug behavior before live human testing, medical treatments can be improved and lives can be saved.
* *Energy exploration*. As long as people depend on fossil fuels, new sources need to be discovered in a timely and cost-effective way.  Supercomputers can process seismic data quickly and with sufficient granularity to tell prospectors where to drill.

The bottom line: High performance computers deliver a return on investment that far outweighs their cost.

###Trickle Down Technology
Many of the advances that we enjoy on today's laptops were invented by HPC architects. Kalwani shared one example: Cray invented the solid state disk (SSD) when mechanical disk drives proved to be a bottleneck. Can you imagine what an SSD must have cost in 1982 when it was invented? Today, SSDs are standard equipment on many laptops.

###Who Has the Fastest Supercomputer?
[Top500.org](http://top500.org/) lists the fastest supercomputers on the planet, ordered by number of floating point operations per second (FLOPS). The race to be the fastest is highly competitive, so check the list for the latest champion.

There are those who believe that the Top 500 list is missing a few names. Some governments or companies might not want to publicize their HPC skills. 

###Speed vs. Power
Supercomputers gulp electricity. Rule of thumb: One megawatt of electricity used over the course of one year costs $1 million. The fastest supercomputer in the world uses 17 megawatts of electricity, so its owners have an annual electric bill of $17 million dollars.

[The Green 500](http://green500.org) list recognizes the most energy efficient supercomputers in the world. 

###The Fourth Paradigm
Kalwani closed the historical section of his talk with a discussion of [The Fourth Paradigm](http://research.microsoft.com/en-us/collaboration/fourthparadigm/) of discovery. The concept comes from a collection of essays published by Microsoft Press. As of this writing, a free PDF of the book is available from [Microsoft Research](http://research.microsoft.com/en-us/collaboration/fourthparadigm/).

The book's introduction posits that there have been four paradigms of human scientific discovery:

* *Empirical*. Started a thousand years ago. Science was all about describing natural phenomena.
* *Theoretical*. Started a few hundred years ago. Scientific understanding is achieved via models and generalizations.
* *Computational*. Started a few decades ago. Scientists seek understanding by simulating complex phenomena using computer models.
* *Data Exploration (eScience)*. Starting now. Scientists now have the technology to capture and store huge quantities of data, inexpensively and indefinitely. Software will "look" for trends in the data using statistical models. The software will identify trends in the data, and point them out for further investigation.

One example of the Fourth Paradigm in action: Recent discoveries of sub-atomic particles were initiated by eScience. Software running on high performance computers identified trends, and the scientists followed up with deeper investigation. Discoveries followed after that.

Businesses have led the way in extracting trends from mountains of data. This path offered limited results for scientists because computers were too slow to handle scientific data in a timely fashion. Partial differential equations eat many CPU cycles!

High performance computing opens up a new universe of data insight for scientists and engineers.

###The Future of HPC
Kalwani ended the talk by looking into his crystal ball and telling us about the future of HPC. A few trends on the horizon:

* Power consumption issues will dominate discussions. High performance computers are terribly inefficient. Either we need to find a free, unlimited supply of energy (unlikely) or we must design supercomputers that gulp less power.
* GPGPUs. General purpose graphics processing units are already used for non-graphics applications, like Bitcoin mining. As more applications are discovered for the devices, faster GPGPUs will follow.
* ARM. Advanced Risc Machine processors use less power and their performance continues to increase. Could ARM hold the key to power reduction in high performance computing?
* Rex Parallella. Fresh from last month's [Supercomputing Conference](http://sc13.supercomputing.org/): [Rex Computing](http://www.rexcomputing.com/) is using [Parallella](http://www.parallella.org/) boards to build low-energy high performance computing clusters.
* Quantum computing. Kalwani ran out of time as he was covering this item, but he shared enough to spark my interest. He explained quantum computing by using an analogy: Quantum computing is to digital computing as digital computing is to the abacus. The degree of advancement is that dramatic. [D-Wave](http://www.dwavesys.com/) is one company exploring this area.

###Conclusion
Thank you Sharan Kalwani for presenting, and thank you [Chicago ACM](http://www.chicagoacm.org/) for hosting.

###Acknowledgements
The photo at the top of the article shows a Cray-1, the first supercomputer, on display at the [Swiss Federal Institute of Technology (EPFL)](http://www.epfl.ch/) in Lausanne. Some of the original panels have been replaced with plexiglass.
