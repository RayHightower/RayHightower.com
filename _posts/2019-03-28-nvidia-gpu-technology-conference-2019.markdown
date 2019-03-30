---
layout: post
title:  Nvidia GPU Technology Conference 2019
date:   2019-03-28
comments: true
tags: [ GPU, Business ]
published: true
---

<img src="/images/autonomous_vehicles.jpg" width="600" align="center" alt="Nvidia GPU Technology Conference 2019 - Autonomous Vehicles" title="Nvidia GPU Technology Conference 2019 - Autonomous Vehicles" />

>What do people do when they have a terabyte of data coming in every day? They ignore it, because they know there's another terabyte coming in tomorrow. Pretty soon, they’ll be infinitely behind!<br/>~Jensen Huang, CEO of Nvidia

The best humor contains a kernel of truth. [Jensen Huang](https://www.linkedin.com/in/jenhsunhuang/) shared the above observation during his keynote at [Nvidia's GPU Technology Conference](https://blogs.nvidia.com/blog/2019/03/18/gtc-2019-datacenter-jensen-huang-keynote/) last week in San Jose, CA. The 9,000-person audience laughed knowingly!

Every industry has been hit by a tsunami of data, a tsunami offering advantages and challenges. Advantage: The volume of data means we can quantify our work and our decisions like never before. The challenge: Turning data into actionable information takes work. GTC 2019 was a gathering for people exploring ways to meet the challenge. This article offers a summary of the event.
<!--more-->
### GPUs: Quick History

Skip this section the history is already familiar to you.

The idea of a graphical processing unit has been around since at least the 1970s. For quality graphics, we need matrix mathematics performed at a high rate of speed. It made sense to delegate that work to specialized hardware so that the CPU can focus on general tasks. GPUs grew in popularity during the 1990s as personal computer prices dropped low enough to make them attractive to gamers. Gamers always want more power, so PC companies competed to meet the demand.

Any problem that can be expressed with matrix math is a candidate for GPU acceleration. Hardware companies began to pursue new markets for their rapidly improving GPUs, including:

* Geology. Especially petroleum exploration. Sound waves are sent into rock formations, the echoes are recorded and displayed as images rendered by GPUs. Deposits of oil, minerals, water, and other resources are found this way.
* Autonomous driving. GPUs store information about the cars on the road as entries in a matrix. From there, GPUs provide data to enable decisions that keep people safe on the road.
* Medical imaging. Anything involving imaging is ripe for acceleration by GPUs.
* Gaming. Faster GPUs make the gaming experience more realistic. And when the gamers demand more performance, everybody wins.
* Entertainment. The current crop of GPUs make a new level of realism possible at an ever decreasing cost.

### GPU ROI Example: Pixar

Jensen's keynote included an ROI chart for one of Nvidia's customers, Pixar.

<img src="/images/nvidia_gtc2019_pixar_roi.jpg" width="600" align="center" alt="Nvidia GTC 2019 - Academic Posters" title="Nvidia GTC 2019 - Academic Posters" />

Highlights from this ROI example:

* RTX is Nvidia's Ray Tracing Accelerator, based on their GPU technology.
* Pixar spent 38 hours and $250,000 to render a particular scene with their old system.
* With the newer, faster Nvidia RTX Server, Pixar can render the same scene in 6 hours at a cost of $30,000.
* The power savings over five years is enough for Pixar to buy another RTX Server.

Faster turnaround at a lower cost. Enough to make any CFO smile.

### Learning With Intent

GTC is expensive. Therefore it was important for me to have a clear purpose before setting foot in the door. Further, GTC offers depth across a wide spectrum of material... overwhelming for anyone who tries to digest everything at once. Given these constraints, I only registered & paid for those portions of the conference that met my needs. My pre-conference objectives:

* To get some hands-on exposure to deep learning. I've read articles and watched presentations on the subject. Reviewed a book, [AI Superpowers](/blog/2019/03/11/ai-superpowers-by-kai-fu-lee/), which describes how deep learning will change our planet socially and economically. Enough study, time to get the hands dirty.
* To learn more about the problems being solved by GPUs. I knew about medical imaging and autonomous driving. What about new solutions for people in business and other fields?
* To figure out how my 8th Light colleagues and I might use GPUs and [parallelism](/blog/2014/07/07/parallella-quick-start-guide-with-gotchas/) to solve problems for current and future clients. Parallelism has fascinated me for years, and my interest grows as the price barrier continues to fall.
* To meet people in the GPU space, to learn from them, and to (perhaps) add value to their work. One never knows how people might help each other.
* To let serendipity happen, and to allow myself to be surprised. This is my favorite part of any conference - learning things that I didn't know I didn't know.

### Hands-on With Deep Learning

Day one of my GTC experience was spent in a full-day deep learning, computer vision class. The class was led by [Alex Qi](https://www.linkedin.com/in/qiling/), an Enterprise Solutions Architect with Nvidia's deep learning team. The instructor led us through five exercises, each building on the previous one. Special thanks to [Mariofanna Milanova](https://www.linkedin.com/in/mariofanna-milanova-9a84865/), professor of AI and computer vision at the University of Arkansas, who helped with a particularly thorny exercise. Key take-aways:

* Models that are trained against a large number of examples will make better predictions than models trained against fewer examples. Experience is a great teacher with humans and with neural networks.
* The convolution integral that was taught at universities decades ago is alive and well in convolutional neural networks. It's always cool to see the old concepts at work.
* Learning, in a neural network, is a non-linear process of forward and backward propagation. Remarkably like human learning.
* Repetition in learning makes a difference, with humans and with deep learning networks.

One challenge: Each student was only allowed to spin up one exercise (including one [Jupyter Notebook](https://jupyter.org/) and one cloud instance) at a time. This makes sense for financial reasons. Why spend money for multiple instances when the student is only working on one exercise at a time? However, some students (like me) learn best in a non-linear fashion. We bounce back and forth between the examples absorbing information from multiple sources until it clicks.

But the linear, lock-step, one instance at a time approach forces the student to do the following if they learn by bouncing around...

* Shut down the current instance, and wait (typically 5-10 seconds) for the shutdown to complete.
* Spin up the second instance, and wait (typically 5-10 seconds) for the spin-up to complete.

That delay is a killer. Train-of-thought gets lost and learning is diminished. Linear learning is too slow, especially in a world of parallelism.

Fortunately, the DLI instructors were excellent. Even with the cloud instance issues, the professionalism of the instructors turned the class into a good use of time and money.

### The Jetson Nano Surprise

<img src="/images/nvidia-jetson-nano-vs-raspberry-pi.jpg" width="600" align="center" alt="Nvidia Jetson Nano with Raspberry Pi" title="Nvidia Jetson Nano with Raspberry Pi" />

The Jetson Nano (shown at left in the photo) is a single-board computer that's a little bit larger than a [Raspberry Pi](/blog/2018/03/28/quick-win-with-raspberry-pi-model-3/) (at right). The Nano has four ARM cores, 128 Nvidia GPU cores, it runs Ubuntu Linux, and it sells for $99.

During the Nano announcement, I immediately jumped on Amazon, Element14, Ada Fruit, _everywhere_ looking for a way to buy that board!  No such luck at the time; too soon! Fortunately, Nvidia had the boards for sale right outside the auditorium after the keynote. Plenty of Jetson Nano inventory for everyone to go away happy.

Wouldn't it be cool for Nvidia to offer future Deep Learning Institute courses on the Jetson Nano instead of being dependent on a cloud provider's reliability?

Jetson Nano is especially attractive because it runs the entire CUDA-X suite of GPU applications. I am currently putting my board to the test, and you'll see a post on this blog very soon.

### Exhibitors: Solving Real-World Problems

<img src="/images/nvidia_gtc2019_exhibits.jpg" width="600" align="center" alt="Nvidia GTC 2019 - Exhibits" title="Nvidia GTC 2019 - Exhibits" />

Every major computer hardware player was represented at GTC: IBM, Lenovo, Dell, HP, Cisco. Every major cloud player was present: Amazon, Google, Microsoft. Absent: Apple. This struck me as strange because Apple uses Nvidia GPUs in their high-end products.

Interesting note re laptop operating systems: Most attendees and exhibitors were running Microsoft Windows. Ubuntu Linux was the second most-dominant operating system, followed by macOS. Maybe my judgment is skewed because I have attended mostly web and mobile development conferences in recent years, where 95% of the attendees use macOS. Looks like powerful things are happening in Redmond, Washington. Especially in the GPU space.

Also on display: Jetson Nano, configured as a JetBot. Check out the video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/Uwbv8v-ai6E?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In the video, the Jetson Nano "sees" the edge of the table surface and other obstacles, and it avoids them. The JetBot learned how to identify edges and obstacles through a deep learning algorithm running on the Nano. Nvidia made all of the software for this demo open source. Check out the GitHub repo for details: [https://github.com/NVIDIA-AI-IOT/jetbot](https://github.com/NVIDIA-AI-IOT/jetbot).

### Incubating and Investing

Nvidia realizes that they're selling picks & shovels to gold miners, and they've taken steps to invest in those ventures they consider promising. [Nvidia Inception](https://www.nvidia.com/en-us/deep-learning-ai/startups/) is an incubator, and [Nvidia GPU Ventures](https://www.nvidia.com/en-us/about-nvidia/gpu-ventures/) invests money with select ventures.

### Dinner With Strangers

<img src="/images/dinner_with_strangers.jpg" width="600" align="center" alt="Nvidia GTC 2019 - Dinner With Strangers" title="Nvidia GTC 2019 - Dinner With Strangers" />

The most valuable part of any conference for me: Meeting people. Listening to people. Learning from people.

GTC took the networking a step further by offering a special program: _Dinner With Strangers_. Go to a booth and sign up for dinner with a bunch of people you've never met before. In addition to software developers and engineers, I met entrepreneurs, investment bankers, VCs, private investors, and a few people who were just wondering whether opportunities in the GPU market are for real. Next time I make it back to GTC, I will sign up for _Dinner With Strangers_ on day one.


### Academic Posters

<img src="/images/nvidia_gtc2019_academic_posters.jpg" width="600" align="center" alt="Nvidia GTC 2019 - Academic Posters" title="Nvidia GTC 2019 - Academic Posters" />

Academic posters filled the hallways between the exhibit hall and the lecture rooms. There wasn't enough time to review all of the posters. But the ones I saw covered an amazing level of detail in a tiny space. GTC awarded $5,000 to the creator of the best academic poster, determined via voting by the conference attendees.

### Conclusion

If you are interested in GPUs, parallelism, or any field that can benefit from the two, then I would encourage you to explore Nvidia's GPU Technology Conference. Look at the agenda in advance and decide whether you want to attend the sessions, DLI workshops, or just the exhibits. The exhibits alone are worth the trip, especially when you consider the people you meet in the process. And be sure to sign up for _Dinner With Strangers_. Congrats, Nvidia, on a well-executed event.
