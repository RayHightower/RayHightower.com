---
layout: post
title:  Nvidia Jetson Nano - Getting Started &amp; Avoiding Gotchas
date:   2019-05-01
comments: true
tags: [ GPU, Parallelism ]
published: true
---

<img src="/images/nvidia-jetson-nano-developer-kit.jpg" width="600" align="center" alt="Screenshot: Nvidia Jetson Nano Developer Kit" title="Screenshot: Nvidia Jetson Nano Developer Kit" />

The Nvidia Jetson Nano is a single board computer slightly larger than a Raspberry Pi. This Linux-powered device has 128 GPU cores that support CUDA, the Nvidia library that lets developers write GPU-accelerated code in high level languages. Further, the Nano's $99 price makes GPUs available for some cool hobbyist experiments. When powerful technology becomes available to hobbyists, exciting products (and even industries) can be born.

### Jetson Nano, Up & Running

This article will show the reader how to get started with the Jetson Nano as rapidly as possible. You will be able to:

* Burn an SD card with the appropriate Linux4Tegra image.
* Compile and run the GPU-accelerated demos that come with the image.
* Write, compile, and run a GPU-accelerated program using Nvidia's CUDA library.
* Measure the performance improvement that comes from GPU-accelerated code.
* Save time by avoiding some of the _gotchas_ that got me.

Let's get started!

<!--more-->

### Jetson Nano Product Highlights

Here are some Jetson Nano specs at a glance:

* 4 ARM cores + 128 GPU cores.
* Support for CUDA, the Nvidia library that lets you write GPU-accelerated code in high level languages like C, C++, Python, Java, Ruby.
* An array of general purpose input/output (GPIO) pins compatible with the pin configuration of the Raspberry Pi. Theoretically, if you have a robot powered by a Raspberry PI, you can add GPU acceleration by replacing the Pi with a Jetson Nano.
* A camera connector that's compatible with the standard Raspberry Pi camera.
* Operating system: Linux4Tegra, an Ubuntu-based distro customized by Nvidia.
* Price: $99.

### What is CUDA? Why does CUDA exist?

CUDA stands for Compute Unified Device Architecture. In the early days of GPU-accelerated computing, deveopers would need to study _how_ graphics acceleration works in order to adapt non-graphics problems to GPUs. CUDA adds a layer of abstraction so that you can write software for GPUs without studying the principles of computer graphics.

Nvidia created CUDA, so CUDA only runs on GPU products from Nvidia.

### Shut Up and Take My Money

The price/performance ratio of this device was so compelling that I tried to buy one while the product was still being announced on the [GTC stage](/blog/2019/03/28/nvidia-gpu-technology-conference-2019/). A true "shut up and take my money" moment.


roughly the size of features four ARM cores and 128 GPU cores. Makers of the board are on a mission to bring AI to everyone.

The Nvidia Jetson Nano is a full Linux computer, as shown in the above screenshot.

Nvidia announced...

### CUDA for All

CUDA is...



### Gotcha: WiFi Not Included

It was surprising to learn that the Jetson Nano did not come with
built-in Wifi, like the Raspberry Pi Model 3. To add WiFi to your Nano, here are a few options:

<img src="/images/intel-m2-for-jetson_nano.jpg" width="200" align="righht" alt="Intel M.2 card adds WiFi and Bluetooth to Jetson Nano" title="Intel M.2 card adds WiFi and Bluetooth to Jetson Nano" />
* M.2 Card. Similar to the WiFi/Bluetooth card found inside many laptop computers. Installing the card on the Nano is relatively simple. But adding antennas to the M.2 card caused me to question how/why M.2 devices are sold! Fortunately, there's an easier way to add WiFi to the Jetson Nano.

* 


### Gotcha: Running the Demos

Running the Nano's demos from their original directory will require you to use `sudo` for compilation and execution. Not a good use of sudo, in my opinion. To avoid this extra step, copy the demos into your `$HOME` directory like so:


```


```

Next, you can compile and run the `smoke` demo as follows:

```


```

Note that compilation can take a few minutes (or even as long as 30 minutes) for some of the demos. Compilation for GPU-accelerated programs requires these major steps:

* Compliing executables for the host. In the case of the Nano, this step users `gcc`, the GNU C Compiler, to target the four ARM-based cores where the Linux4Tegra operating system runs.
* Using `nvcc`, the Nvidia C compiler, to compile those parts of the code that will run on the GPU.
* Linking the two machine-readable files with the appropriate libraries to form a single object file that can be executed.




### How to Instal the M.2 Card


### How to Install a USB WiFi Adapter

First, be sure to get the Edimax WiFi adapater, available from Amazon.  This is the model recommended by an Nvidia engineer that I met at GTC 2019. The Nano recognizes the Edimax almost immediately; looks like drivers for the device are  included with the Linux4Tegra distro.


### Gotcha: Power Requirements





* Large form factor. Not a complaint, but an observation. The Jetson Nano is about 60% larger than the Raspberry Pi Model 3, and the Nano requires a larger heatsink.

More about the GPU and the Jetson Nano...


### Compiling and Running the Jetson Nano Demos

Demos

```
$ nvx_demo_video_stablizer
$ nvx_demo_motion_estimation

```




### Jetson Nano vs Raspberry Pi

<img src="/images/nvidia-jetson-nano-vs-raspberry-pi.jpg" width="600" align="center" alt="Nvidia Jetson Nano vs Raspberry Pi" title="Nvidia Jetson Nano vs Raspberry Pi" />

The Jetson Nano is a larger than a Raspberry Pi, but it’s still small enough to fit in your hand. That makes it well suited for robotics projects, like the Pi. 

GPIO pin configuration is the same as Raspberry Pi?? Verify this!


### Jetson Nano vs Parallella

The Jetson Nano might be more readily compared against the [Parallella](/blog/2014/07/07/parallella-quick-start-guide-with-gotchas/) board.

