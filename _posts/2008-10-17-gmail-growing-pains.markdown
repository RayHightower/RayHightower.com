---
layout: post
title: "GMail Growing Pains"
date: 2008-10-17 00:22
comments: true
categories: [Business]
---
_Note: This article was originally posted on the [WisdomGroup](http://wisdomgroup.com) blog._

WisdomGroup is both a proponent and a [user of GMail](/blog/2007/12/10/gmail-vs-microsoft-exchange/). Of course, the service is not perfect, as proven during yesterday's GMail outage. "It's only affecting a small number of users" is hardly consolation when you're one of the affected users.

<!-- more -->

### Sys Admin Anger
One angry systems administrator posted this message in the [Google Apps Discussion Group](http://groups.google.com/group/hosted-the-basics/browse_thread/thread/4465cc3272db6728?hl=en)

>Since yesterday around at least 4:00pm my CEO cannot access his mail. He gets a 502 temporary error. Support keeps telling me it is affecting a small number of users. This is not a temporary problem if it lasts this long. It is frustrating to not be able to expedite these issues. I have to speak with the boss again and he's po'd. This is considered a mission critical issue here. We may have to make other arrangements. Apparently Google mail is not very reliable. I think I would have pushed for something else before we switched if I had known the level of unreliability. 

### Achieving 100% Uptime
In a perfect world, I could complete this sentence:

>Achieving 100% uptime is easy. All you have to do is...

Unfortunately, I don't know of a 100% uptime solution. Systems are imperfect because they're designed by imperfect humans. Good engineers design systems with multiple redundancies. Sometimes those redundancies fail.

### What Sys Admins Can Do
The GMail web client is outstanding. But when it fails, users can sometimes send/receive email through an old fat client like Microsoft Outlook or Apple Mail. Just point the fat client to GMail, and you're in business.

### What Google Can Do
The best thing a company can do in a time of failure: Communicate. Solve the problem, and make sure you're sharing updates with users on a regular basis. 

### Bring Email In House?
When GMail fails, it's tempting to wish for the good-old-days of the in-house mail server. "What moron moved us to external email?" is a common thought during an outage. But it's important to balance our thinking:

* With in-house email, you're responsible for everything. Uptime, malware, bandwidth, etc.
* Managing in-house email takes time. Time for regular maintenance. Time for troubleshooting when things go wrong.
* Managing in-house takes money. Money for software upgrades, anit-malware tools, and talented technical people.

Sometimes in-house email makes sense. In other cases, the time & energy spent on email management is better applied to business issues. It's important to weigh the options rationally, especially in a time of crisis.

By the way, in-house email systems are subject to the same "less than 100% uptime" rules as all other systems.
