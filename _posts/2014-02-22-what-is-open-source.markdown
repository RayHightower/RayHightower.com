---
layout: post
title: "What Is Open Source?"
date: 2014-02-22 16:41
comments: true
categories: [ Education ]
---
{% imgcap right /images/linux-penguin.png The Linux penguin. %}
Entrepreneurs, especially those outside of software development, may find this article useful.

###When Performance Matters
Over seventy percent of the web servers on the planet run Linux, the open source operating system. Google, Facebook, and Amazon all run Linux. They bet their companies on this decision every day.

Given that thousands of successful companies have bet their livelihood on open source, an observer might ask these questions:

* What is open source?
* Why should one care about open source?
* How can a company profit from software that is given away for free?
<!--more-->
###Source Code, Executable Code
First, a few definitions. Source code is a human-modifiable form of software. It’s software as written by programmers. Source code must be translated into executable code (either compiled or interpreted) before a computer can run it.

Water is a useful metaphor for this discussion. Water can exist in three different states (steam, liquid, and ice) without changing its chemical properties. It’s still water. Likewise, software can exist as source code or executable code – it’s still software. We use water in one of its three states depending on whether we want to wash a car (liquid), cool a drink (ice), or clean a carpet (steam).

In the world of software, executable code is difficult for humans to read, but easily executed by computers. Source code is easily read and modified by humans, but computers cannot execute it. Source code must be compiled or interpreted before a computer can execute it.

###One Way Translation
Translating source code into executable code is a one-way street. Once a programmer has compiled source code into executable code, it is virtually impossible to convert it back into source code. You might think of a compiler as a blender that chops the food into a form easily digestible by the computer. After it’s chopped, the food never returns to its original form.

That’s why programmers always keep a copy of the source code handy. It might be necessary to make changes (fix bugs) and re-compile.

Trade secrets that are hidden in executable code can be easily read in source code. So developers go to great lengths to protect their source code, except in the open source community.

###Closed Source Tradition
Most of today’s business software is closed source. Two examples: Microsoft Office and Apple iWork. Both Microsoft and Apple consider the source code for their respective office suites to be highly confidential. You will never (legally) download the source code for a closed source product. Security is so tight at Microsoft, for example, that engineers are only allowed to view that portion of the source code that is relevant to their current project.

Contrast that against open source software. Open source products make the source code freely available for viewing, comments, and modification by the software community at large.

###Open Source Chaos?
But doesn't such openness lead to chaos? Intuitively, you would think so, but it doesn't. The culture of the open source community has its own rules of conduct that most members willingly follow. Rules are enforced by the community in ways that developers respond to.

It is difficult to imagine an apparently chaotic system that produces robust software. How counter-intuitive! But a long list of successful open source projects (available through your favorite search engine) shows that the method works. Eric S. Raymond explores open source cultural norms in his book [The Cathedral and the Bazaar](http://www.amazon.com/Cathedral-Bazaar-Musings-Accidental-Revolutionary-ebook/dp/B0026OR3LM).

###The Banking Metaphor
Some makers of security software believe that hiding their source code will prevent malcontents from finding vulnerabilities and exploiting them. Their reasoning is like that of a bank owner who keeps the building blueprints secret so thieves don’t know how to drill the safe from next door.

Other security experts disagree. They want many people (including malcontents) to view the code so that vulnerabilities can be discovered and patched early. Their philosophy could be summed up in a statement by the creator of Linux: 

>Given enough eyeballs, all bugs are shallow.
><br/>&nbsp; 
>~Linus Torvalds

In other words, when thousands of developers are working on the same project they are likely to be widely dispersed across the code. Wide coverage means that a given bug is more likely to be discovered by at least one developer.

In our banking metaphor, the open source company would be like a bank owner who wants many people to review the blueprints, find the weak spots, and fix security holes before the bank gets robbed.

###It’s Not All-or-Nothing
Choosing an open or closed source strategy is not an all-or-nothing decision. Google, the busiest search engine on the web, has bet the company on open source software. And yet their most strategic software, the secret mathematical engine that drives their search results, remains closed. So how does a company decide what to open and what to close?

Open source works when the upside of sharing outweighs the downside of exposed code. In the Google example, using and contributing to Linux gives Google a very stable operating platform at a relatively low cost. In effect they are leveraging the time and talent of thousands of developers around the world, while those developers are also leveraging Google’s expertise.

It doesn't matter that Google's competitors also benefit from that same stable Linux platform because Google differentiates itself through advanced search technology. By leveraging the community for assistance with the platform (Linux, Apache, and other tools), Google frees up engineering time and talent to focus on their secret sauce: Search methodology and mathematics.

###If Your Business Isn’t Software
So... If you don't run a software company, how can you benefit from open source?

There’s always a chance that open source won’t work for your company. Maybe you run an enterprise that doesn’t benefit from the web. In that case, your current software options may suit you just fine.

Of course, you may have already benefited from open source. There is at least a 70% chance that your company’s web site runs on Linux. If that’s the case, then rest assured that you’re running on a very stable and robust platform.

###Think Big, Start Small for ROI
If you really want to see ROI from open source, encourage your technical team (software developers, network support, etc.) to explore open source tools. Chances are that they’ve already experimented with open source and they’re waiting for an opportunity to do an official company project.

Start small, perhaps with an automated network monitoring project or a small database. As you explore the technology, new ideas will become apparent to you. View this as a way to accelerate and strengthen the software development process.

###Open Source and Automobiles
BMW is arguably the best automotive engineering company on the planet. Does BMW invent the wheel every time they design a new automobile? Absolutely not. BMW leverages thousands of years of "open source" wheel technology, and they focus their design energy in areas where they can make a difference: Engine, transmission, suspension, and luxury amenities. A similar model can be applied to software development. In fact, it already has.

###Suggested Reading
[The Cathedral and the Bazaar](http://www.amazon.com/Cathedral-Bazaar-Musings-Accidental-Revolutionary-ebook/dp/B0026OR3LM), by Eric S. Raymond. The author is both participant and anthropologist in the open source community.

_Note: An earlier version of this article was published at <a href="http://wisdomgroup.com">WisdomGroup.com</a>_.
