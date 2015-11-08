---
layout: post
title: "Petascale Tools Workshop 2013"
date: 2013-07-19 02:12
comments: true
categories: [ Education, High Performance Computing ]
published: true
---
The [Petascale Tools Workshop](http://www.paradyn.org/CSCADS2013/index.html) is for computer scientists who create tools that enable apps to run efficiently on the world's fastest supercomputers. Supercomputer performance is measured in petaflops: 10<sup><sup>15</sup></sup> floating point operations per second. That's blazing speed, thousands of times faster than the fastest MacBook Pro. 

<!--more-->

[WisdomGroup](http://WisdomGroup.com) was invited to attend the workshop because we have a client client, [Texas A & M University](http://www.wisdomgroup.com/case-studies/texas-am-university/), operating in the high performance computing (HPC) space. As the only non-PhD in the room, I was given a chance to exercise Pat Metheny's [be-the-worst](/blog/2013/07/17/pat-metheny-be-the-worst/) philosophy in the extreme. The result: I learned things that will help WisdomGroup to deliver better solutions for our clients, especially the TAMU team. 

###One Megawatt = $1,000,000.00
As with other disciplines of engineering, supercomputer design is all about managing trade-offs. If you increase the clock speed, how will that affect your electrical bill? If you increase the size of the cache, how much more will you spend on hardware?

Every Petascale Workshop presenter highlighted the toughest constraint: The cost of electrical power. High performance computers gulp electricity. The wattage numbers were all very abstract to me until one presenter layed out a direct one-to-one correspondence between electricity and money. _One megawatt of power used over the course of a year costs one million dollars._

Express a constraint in terms of money, and the abstractions melt away.

The debate between the scientists was vigorous yet respectful. After hearing the 1-to-1 rule of thumb, one audience member remarked, "I know how to genererate a megawatt for only $865,000." He then outlined his solution, a combination of coal, fossil fuels, and natural gas that would achieve the reduction. The more important point: Electricity is expensive.

###Re-Framing the Power Problem
There is another way to look at the power problem. Consider it from the perspective of performance, not power. Here's how one presenter put it: No matter where we build a supercomputer, we will only have a limited amount of power. Let's look at the maximum available power as a constraint and go from there.

Rubyists are familiar with the saying &#34;[constraints are liberating](http://gettingreal.37signals.com/ch03_Embrace_Constraints.php)&#34;, popularized by 37signals. Since power limitations are real constraints, our next step is to figure out how to extract the best results allowed within the constraints.

###Top Five
Supercomputer scientists are as competitive as olympic athletes. As of June 2013, the five fastest machines in the world are:

<center>
<table class="table table-condensed">
	<thead>
	<tr>
		<th width="50">Rank</th>
		<th width="75">Site</th>
		<th width="100" style="text-align: right;">Cores</th>
		<th width="75" style="text-align: right;">Rmax (PF/s)</th>
		<th width="75" style="text-align: right;">Power (MW)</th>
	</tr>
	</thead>

	<tr class="sublist odd">
		<td><span class="badge">1</span></td>
		<td>China</td>
		<td style="text-align: right;">3,120,000</td>
		<td style="text-align: right;">33.9</td>
		<td style="text-align: right;">17.8</td>
	</tr>

	<tr class="sublist even">
		<td><span class="badge">2</span></td>
		<td>USA</td>
		<td style="text-align: right;">560,640</td>
		<td style="text-align: right;">17.5</td>
		<td style="text-align: right;">8.2</td>
	</tr>

	<tr class="sublist odd">
		<td><span class="badge">3</span></td>
		<td>USA</td>
		<td style="text-align: right;">1,572,864</td>
		<td style="text-align: right;">17.2</td>
		<td style="text-align: right;">7.9</td>
	</tr>

	<tr class="sublist even">
		<td><span class="badge">4</span></td>
		<td>Japan</td>
		<td style="text-align: right;">705,024</td>
		<td style="text-align: right;">10.5</td>
		<td style="text-align: right;">12.6</td>
	</tr>

	<tr class="sublist odd">
		<td><span class="badge">5</span></td>
		<td>USA</td>
		<td style="text-align: right;">786,432</td>
		<td style="text-align: right;">8.6</td>
		<td style="text-align: right;">3.9</td>
	</tr>
</table>
</center>

&nbsp;<br/>
Scientists determine Rmax by running the [LINPACK](http://en.wikipedia.org/wiki/LINPACK_benchmarks) benchmark. [Top500.org](http://top500.org) has more information about the fastest
machines.

###Digging Deeper
Some of the biggest performance gains can be realized through more efficient software. Most supercomputers run some distribution of Linux. Some teams of researchers focus on ways to optimize the Linux kernel for supercomputing.

Optimization is not a one-size-fits all process. The scientists need to consder the type of applications being run, percentage of time spent on I/O, efficiency of algorithms, and so on. Each potential optimization choice is like a node on an ever expanding tree. The choices are endless, and the seasoned expert will know where to focus for the best results.

In the Ruby world, we might use tools like [New Relic](http://newrelic.com) or [Code Climate](http://codeclimate.com) to identify hot spots in our code, places where re-factoring can reduce CPU utilization or improve I/O. HPC tools tend to be highly customizable because the users are intimately familar with their own hardware. During a lunch conversation, one team of scientists shared how they suspected a defect in hardware counters used to measure the behavior of a supercomputer under study. The instincts of the scientists proved correct, and the errant counters were replaced.

###Conclusion
When smart people challenge each other to grow, great things happen. The scientists at the Petascale Tools Workshop were clearly helping each other to grow. The next few years in supercomputing will be exciting!

###Acknowledgements
I am grateful to the organizers of the Petascale Tools Workshop for hosting the event, and to the TAMU team for extending the invitation. Thank you both!
