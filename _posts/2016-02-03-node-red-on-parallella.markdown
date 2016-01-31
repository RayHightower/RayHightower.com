---
layout: post
title:  Node-RED on Parallella
date:   2016-02-03
comments: true
tags: 
published: false
---
 
Node-RED is a visual wiring tool for the Internet of Things. What does that mean, and why do we care?

When you’re building a project using physical components (atoms) instead of software (bits), physical constraints come into play. For example: Is that jumper cable long enough to connect the two contacts that need connecting? Or is it too long, requiring you to wrap the excess somewhere?

Solve the problem before

### Get the Latest Version of Node.js

``` bash

~/Code/nodejs$ node --version
v5.3.0

~/Code/nodejs$ brew upgrade node
==> Upgrading 1 outdated package, with result:
node 5.5.0
==> Upgrading node
==> Downloading https://homebrew.bintray.com/bottles/node-5.5.0.yosemite.bottle.tar.gz
######################################################################## 100.0%
==> Pouring node-5.5.0.yosemite.bottle.tar.gz
==> Caveats
Please note by default only English locale support is provided. If you need
full locale support you should:
  `brew reinstall node --with-full-icu`

Bash completion has been installed to:
  /usr/local/etc/bash_completion.d
==> Summary
🍺  /usr/local/Cellar/node/5.5.0: 3,135 files, 35.5M

~/Code/nodejs$ node --version
v5.5.0

~/Code/nodejs$

```

### Install Node-RED

``` bash
~/Code/nodejs$ npm install -g node-red
npm WARN deprecated i18next-client@1.10.3: you can use npm install i18next from version 2.0.0
/usr/local/bin/node-red-pi -> /usr/local/lib/node_modules/node-red/bin/node-red-pi
/usr/local/bin/node-red -> /usr/local/lib/node_modules/node-red/red.js

> bufferutil@1.2.1 install /usr/local/lib/node_modules/node-red/node_modules/bufferutil
> node-gyp rebuild

...

$
 ```

### Accept Incoming Network Connections?

<img src=“/images/node_red_connections.jpg” >

I chose “deny” because I’m only running Node-RED locally on my machine. YMMV.

### Using Node-RED

Open a browser and navigate to `http://localhost:1880`. Your browser will show the following:

### Sharing Node-RED Flows

