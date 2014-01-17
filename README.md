# muddy

Fork of (http://github.com/dannytatom/muddy/issues).


## Features

- Command History
- Aliases
- Triggers

## Installation & Usage

### Installation

    $ git clone git://github.com/momphis/muddy.git
    $ cd muddy
    $ npm install
    $ vim config/config.json
    $ node init.js &
    $ open http://localhost:6660

### Aliases

    ;alias add {go home} {invoke stone} # Add an alias
    ;alias rm {go home}                 # Remove an alias
    ;alias ls                           # List aliases

### Triggers

    ;trigger add {Your Selection:} {1} # Add a trigger
    ;trigger rm {Your Selection:}      # Remove a trigger
    ;trigger ls                        # List triggers

## muddy Copyright

Copyright (c) 2011 Danny Tatom. See LICENSE for details.
