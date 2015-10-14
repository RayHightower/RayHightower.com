---
layout: post
title: "pgcli - Command Line Interface for PostgreSQL"
date: 2015-04-28 11:59:44 -0500
comments: true
published: true
categories: [ OS X, Rails, Ruby ]
---
Debugging is a fact of life when building apps with Rails or any other set of tools. All troubleshooting is easier when we can see what’s going on inside.

[pgcli](http://pgcli.com/) is a command line tool that lets devs examine PostgreSQL databases from the command line. `pgcli` offers more powerful features than `psql` (the default terminal front-end for PostgreSQL) such as:

* Autocompletion. In fact, `pgcli` autocompletion is smart enough to only show table names after `FROM` in a SQL statement.
* Syntax highlighting. Find gotchas quicker, just like you would in a text editor.

Debugging is easier when you can look inside the black box.
<!--more-->
### Installation
To install `pgcli` on Mac OS X, use [Homebrew](/blog/2014/02/12/homebrew-fundamentals/):

``` bash
$ brew install pgcli
==> Installing dependencies for pgcli: openssl, postgresql
==> Installing pgcli dependency: openssl
==> Downloading https://homebrew.bintray.com/bottles/openssl-1.0.2a-1.yosemite.b
######################################################################## 100.0%

# Homebrew installs dependencies as required...

==> Installing pgcli
==> Downloading https://homebrew.bintray.com/bottles/pgcli-0.16.3.yosemite.bottl
######################################################################## 100.0%
==> Pouring pgcli-0.16.3.yosemite.bottle.tar.gz
🍺  /usr/local/Cellar/pgcli/0.16.3: 423 files, 5.2M

$ 

```

Verify installation as follows:

``` bash
$ which pgcli
/usr/local/bin/pgcli

$ pgcli --version
Version: 0.16.3

$ 

```

### Using pgcli
To view a list of available `pgcli` commands:

``` bash

$ pgcli --help
Usage: pgcli [OPTIONS] [DATABASE] [USERNAME]

Options:
  -h, --host TEXT     Host address of the postgres database.
  -p, --port INTEGER  Port number at which the postgres instance is listening.
  -U, --user TEXT     User name to connect to the postgres database.
  -W, --password      Force password prompt.
  -w, --no-password   Never prompt for password.
  -v, --version       Version of pgcli.
  -d, --dbname TEXT   database name to connect to.
  --help              Show this message and exit.

$ 

```

To use `pgcli`:

``` bash

$ pgcli
Version: 0.16.3
Chat: https://gitter.im/amjith/pgcli
Mail: https://groups.google.com/forum/#!forum/pgcli
Home: http://pgcli.com
rth> \l

```

`\l` will list the databases available to this installation of PostgreSQL. Note that the `pgcli` command prompt shows the currently logged in username. To discover other commands, use `\?`.

As you experiment with `pgcli`, notice the command completion and the syntax highlighting. Big time savers relative to `psql`.

### Acknowledgements
Thanks [Attila Domokos](https://twitter.com/adomokos) and [Ken Walters](https://twitter.com/lostghost) for the tweets that led to this `pgcli` blog post.

