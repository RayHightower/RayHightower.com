---
layout: post
title:  Nvidia GPU Technology Conference 2019
date:   2019-03-27
comments: true
tags: [ GPU, Business ]
published: true
---

<img src="/images/autonomous_vehicles.jpg" width="600" align="center" alt="Nvidia GPU Technology Conference 2019 - Autonomous Vehicles" title="Nvidia GPU Technology Conference 2019 - Autonomous Vehicles" />

>What do people do when they have a terabyte of data coming in every day? They ignore it. Because they know there's another terabyte coming in tomorrow. Pretty soon, they’ll be infinitely behind!<br/>~Jensen Huang, CEO of Nvidia

The best humor contains a kernel of truth. Jensen Huang shared the above observation during his keynote at [Nvidia's GPU Technology Conference](https://blogs.nvidia.com/blog/2019/03/18/gtc-2019-datacenter-jensen-huang-keynote/) last week in San Jose, CA. The 9,000-person audience laughed knowingly!

Every industry has been hit by a tsunami of data, a tsunami offering advantages and challenges. Advantage: The volume of data means we can quantify our work and our decisions like never before. The challenge: Turning data into actionable information takes work. GTC 2019 was a gathering for people exploring ways to meet the challenge. This article offers a summary of the event.
<!--more-->
### GPUs: Quick History

Skip this section if you already know about GPUs.

The idea of a graphical processing unit has been around since at least the 1970s. For quality graphics, we need matrix mathematics performed at a high rate of speed. It made sense to delegate that work to specialized hardware so that the CPU can focus on general tasks. GPUs grew in popularity during the 1990s as personal computer prices dropped low enough to make them attractive to gamers. Gamers always want more power, so PC companies competed to meet the demand.

Any problem that can be expressed with matrix math is a candidate for GPU acceleration. Hardware companies began to pursue new markets for their rapidly improving GPUs, including:

* Geology. Especially petroleum exploration. Sound waves are sent into rock formations, the echos are recorded and displayed as images rendered by GPUs. Deposits of oil, minerals, water, and other resources are found this way.
* Autonomous driving. GPUs store information about the cars on the road as entries in a matrix. From there, GPUs provide data to enable decisions that keep people safe on the road.
* Medical imaging. Anything involving imaging is ripe for acceleration by GPUs.
* Gaming. Faster GPUs make the gaming experience more realistic. And when the gamers demand more performance, everybody wins.
* Entertainment. The current crop of GPUs make a new level of realism possible at an ever decreasing cost.

### Learning With Intent

GTC is expensive. So it was important for me to have a clear purpose before setting foot in the door. Further, GTC offers depth across a wide spectrum of material... overwhelming for anyone who tries to digest everything at once. Given these constraints, I only registered & paid for those portions of the conference that met my needs. My pre-conference objectives:

* To get some hands-on exposure to deep learning. I've read articles and watched presentations on the subject. Reviewed a book, [AI Superpowers](/blog/2019/03/11/ai-superpowers-by-kai-fu-lee/), which describes how deep learning will effect our planet socially and economically. Enough study, time to get the hands dirty.
* To learn more about the problems being solved by GPUs. I knew about medical imaging and autonomous driving. What about new solutions for people in business and other fields?
* To figure out how my 8th Light colleagues and I might use GPUs and [parallelism](/blog/2014/07/07/parallella-quick-start-guide-with-gotchas/) to solve problems for current and future clients. Parallelism has fascinated me for years, and my interest grows as the price barrier continues to fall.
* To meet people in the GPU space, to learn from them, and to (perhaps) add value to their work. One never knows how people might help each other.
* To let serendipity happen, and to allow myself to be surprised. This is my favorite part of any conference - learning things that I didn't know I didn't know.

### Hands-on With Deep Learning

Day one of my GTC experience was spent in a full-day deep learning, computer vision class. The class was lead by one of Nvidia's deep learning architects, [Alex Qi](https://www.linkedin.com/in/qiling/), an Enterprise Solutions Architect with Nvidia's deep learning team, led us through five exercises, each building on the previous one. Special thanks to [Mariofanna Milanova](https://www.linkedin.com/in/mariofanna-milanova-9a84865/), a professor of AI and computer vision at University of Arkansas, who provided help with a particularly thorny exercise. Key takaways:

* Models that are trained agains a large number of examples will make better predictions than models trained with fewer examples.
* The convolution integral that I learned in college is alive and well in convolutional neural networks. It's alwasy cool to see that the old concepts work, over & over again.
* Learning, in a neural network, is a non-linear process of forward and
backward propagation.
* Repetition in learning makes a difference, with humans and with deep learning networks.

There were a few technical glitches at the beginning of the session, mostly involving virtual machines at the cloud provider that didn't spin up. A few of us had to stop & start our connections multiple times in order to find a working VM.

The deep learning "cloud" is wonderful, but it might be some years before it achieves utility-level reliability.

Another problem with conducting a course like this with a cloud provider: Each student was only allowed to spin up one cloud instance at a time. This makes sense for financial reasons. Why spend money for multiple instances when (in theory) the student is only working on one exercise at a time. However, some students learn best when they can bounce back and forth between the examples in an _almost_ random fashion. Limiting students to only one instance at a time means you have to...

* Shut down the current instance, and wait (typically 5-10 seconds).
* Spin up the second instance, and wait (typically 5-10 seconds).

The delay is slow enough that train-of-thought is lost and learning is diminished.

Fortunately, GTC included a surprise that might make cloud reliability a moot point for future DLI courses.

### Surprise: Jetson Nano

<img src="/images/nvidia-jetson-nano-vs-raspberry-pi.jpg" width="600" align="center" alt="Nvidia Jetson Nano with Raspberry Pi" title="Nvidia Jetson Nano with Raspberry Pi" />

The Jetson Nano, announced during GTC 2019, is a single-board computer that's a little bit larger than a [Raspberry Pi](/blog/2018/03/28/quick-win-with-raspberry-pi-model-3/). It has four ARM cores, 128 Nvidia GPU cores, it runs Linux, and it sells for $99.

During the Nano annoucement, I immediately jumped on Amazon, Element14, Ada Fruit, _everywhere_ looking for a way to buy that board!  No such luck. Fortunately, Nvidia had the boards for sale right outisde the auditorium after the announcement. Plenty of inventory for everyone to go away happy.

Wouldn't it be cool for Nvidia to offer future Deep Learning Institute courses on the Jetson Nano instead of being dependent on a cloud provider's reliability?

Jetson Nano is especially attractive because it runs the entire CUDA-X suite of GPU applications. I am currently putting my board to the test, and you'll see a post on this blog very soon.

### Exhibitors: Solving Real-World Problems

<img src="/images/nvidia_gtc2019_exhibits.jpg" width="600" align="center" alt="Nvidia GTC 2019 - Exhibits" title="Nvidia GTC 2019 - Exhibits" />




### Dinner With Strangers

<img src="/images/dinner_with_strangers.jpg" width="600" align="center" alt="Nvidia GTC 2019 - Dinner With Strangers" title="Nvidia GTC 2019 - Dinner With Strangers" />

The most valuable part of any conference for me: Meeting people. Listening to people. Learning from people.

GTC took the networking a step further by offering a special program: _Dinner With Strangers_. Go to a booth and sign up for dinner with a bunch of people you've never met before. In addition to software developers and engineers, I met entrepreneurs, investment bankers, VCs, private investors, and a few people who were just wondering whether opportunities in the GPU market are for real. Next time I make it back to GTC, I will sign up for _Dinner With Strangers_ on day one.


### Academic Posters

<img src="/images/nvidia_gtc2019_academic_posters.jpg" width="600" align="center" alt="Nvidia GTC 2019 - Academic Posters" title="Nvidia GTC 2019 - Academic Posters" />


### GPU ROI

Jensen's keynote included 



### Conclusion




## Out-Takes

Even with my concerns, the course was worth the fee because the instructures exposed the class to useful new material.

ar. Other instructors covered the room, answering questions as they arose.  presented the concepts with clear examples.  She took ust through five exercises through


My concerns with the DL/CV class have nothing to do with the course material, and more to do with the setup of the lab environment.




