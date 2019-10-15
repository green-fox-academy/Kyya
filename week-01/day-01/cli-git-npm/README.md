# CLI, Git, NPM and JavaScript Expressions

## Materials and Resources

### Environment

- Download and install Git on your system.
  - Windows (*portable* is good however the *installed* version is better)
    - ensure you have the command-line, bash version also which you can find at
      <http://cmder.net/> or <https://git-scm.com/download/win>
  - Linux
    - `sudo apt-get install git` (Ubuntu)
    - `sudo yum install git` (Fedora)
  - Mac
    - <http://git-scm.com/download/mac> or `brew install git`
- Download and install
  [the latest LTS version of Node.js](https://nodejs.org/en/download/).

### CLI, Git

| Material                                                                                             |    Duration |
| :--------------------------------------------------------------------------------------------------- | ----------: |
| [Linux Terminal Tutorial Episode 1: Back to Basics](https://www.youtube.com/watch?v=2FiQSLdnBqA)     |       11:32 |
| [Command Line Bootcamp](https://rik.smith-unna.com/command_line_bootcamp) (It's interactive, but you need to enable the scripts that the browser disables. Usually in the top right corner in the URL line) | interactive |
| [Git Tutorial for Beginners: Command-Line Fundamentals](https://www.youtube.com/watch?v=HVsySz-h9r4) |       30:32 |
| [Pro Git: Chapter 1-2](https://git-scm.com/book/en/v2)                                               |        read |
| [git - the simple guide](http://rogerdudler.github.io/git-guide/)                                    |        read |
| [Try Git](https://try.github.io/)                                                                    | interactive |
| [Oh shit, git!](http://ohshitgit.com/)                                                               |       extra |

### JavaScript Expressions

| Material                                                                                                              | Duration |
| :-------------------------------------------------------------------------------------------------------------------- | -------: |
| [JavaScript Tutorial For Beginners 01 - Introduction](https://www.youtube.com/watch?v=qoSksQ4s_hg)                    |     3:40 |
| [JavaScript for Beginners 02 - What is JavaScript?](https://www.youtube.com/watch?v=VB7y0yxZjro)                      |     4:03 |
| [JavaScript Tutorial For Beginners 03 - Hello World! in JavaScript](https://www.youtube.com/watch?v=ranSYb-EhrU)      |     3:17 |
| [JavaScript Tutorial For Beginners #4 - Where to put your JS](https://www.youtube.com/watch?v=czlwRUeTCgw)            |     5:13 |
| [JavaScript Tutorial For Beginners #5 - Google Chrome Developer Tools](https://www.youtube.com/watch?v=JzZFccCEgGA)   |     4:51 |
| [JavaScript Tutorial For Beginners #6 - Basic JavaScript Syntax & Rules](https://www.youtube.com/watch?v=QLatPwsbDrQ) |     7:49 |
| [JavaScript Tutorial For Beginners #7 - JavaScript Variables](https://www.youtube.com/watch?v=u0Mq3FzpsmI)            |     8:59 |
| [JavaScript Tutorial For Beginners #8 - Basic Mathematical Operators](https://www.youtube.com/watch?v=_MC0Gw07w8M)    |     6:16 |
| [JavaScript Tutorial For Beginners #9 - Math Operator Short-hand](https://www.youtube.com/watch?v=Z1eV0RBRam0)        |     4:55 |
| [JavaScript Tutorial For Beginners #10 - Logging to the Console](https://www.youtube.com/watch?v=tH-q9QFNUdA)         |     3:38 |
| [JavaScript Tutorial For Beginners #11 - Booleans in JavaScript](https://www.youtube.com/watch?v=B4ZCFdrBmbE)         |     6:13 |

#### Useful

- [JavaScript Tutor - Visualize JavaScript code execution](http://pythontutor.com/javascript.html)
- [JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### NPM

| Material                                                                                 | Duration |
| :--------------------------------------------------------------------------------------- | -------: |
| [15.2: What is NPM? - Twitter Bot Tutorial](https://www.youtube.com/watch?v=s70-Vsud9Vk) |    13:26 |
| [npm Documentation](https://docs.npmjs.com/)                                             |    extra |

## Material Review

### CLI, Git

- `cd`
- `.` and `..`
- `pwd`
- `ls`
- `touch`
- `mkdir`
- `cp`
- `mv`
- `rm`
- command options
- `<` and `>` and `>>` and `|`
- `sort`
- `uniq`
- `grep`
- `sed`
- `git` `init`, `clone`, `add`, `rm`, `commit`, `push`, `pull`, `remote`, `fork`
- .gitignore

### NPM

- `npm init`
- `npm install`, `npm install -g <package>`, `npm install <package> --save`
- package.json, node_modules
- dependencies, devDependencies

### JavaScript Expressions

- Node.js
- strict mode
- comments
- `console`
- types
  - number
  - string
  - boolean
  - null
  - undefined
- operators
  - arithmetic
  - logical
  - comparison
  - assignment
  - typeof

## Workshop

Try to work without using your mouse or touchpad; only use it if there's no
other way (try to force yourself to learn the keyboard shortcuts; this improves
your productivity)

### Overview

- Command-line
  - setup the environment
  - basic terminal operations
  - manipulations
  - redirections
  - scripts
- Git
  - basics
  - workflow
  - getting used to
  - saving all your previous work
  - creating a website yaaay :)

### Command Line Basics

- open a terminal (with Git 😉)

#### Basic terminal operations

- check the current working directory
- check the files and directories in your working directory
- create an `epam-academy` directory
- change into the `epam-academy` directory
- check the files and directories in your working directory
- create an empty `index.html` file
- create an `images` directory
- create a `css` directory
- change into the `images` directory
- go back to the parent directory
- create at least one file to every directory

---

- fork the
  [git-lessons-repository](https://github.com/green-fox-academy/git-lesson-repository.git)
  - visit the page
  - fork it!
- clone your `git-lessons-repository` repository
  - `git clone <repository>`

#### Manipulations

- change into the project directory
- list the detailed file and directory information
- copy the `index.html` into `about.html`
- create a `temp_images` directory
- copy `1.jpg` and `2.jpg` into `temp_images` directory
- copy every jpg file into `temp_images` directory
- move `6.jpg` file from css into `images` directory
- delete `7.jpg` from `css` directory
- navigate up one directory from `project/css/` to `project/`

#### Redirections

- `echo` a string to a file
- `cat` a file content and redirect the content to another file
- redirect a file content to `cat` command
- count the words in `index.html`
- `cat` a file content and pipe to `wc`
- `sort` a file
- `sort` a file and redirect the input to a file
- remove the duplicated lines from `tasks.txt`
- `cat task.txt` and filter basic tasks
- `cat task.txt` and filter out with `-v` argument `the basic tasks`

### Git

#### Basics

- setup your environment
- `git config --global user.name "Your Name"`
- `git config --global user.email "yourname@example.com"`

---

- create a repository on [GitHub](https://github.com)
  - under the [green-fox-academy](https://github.com/green-fox-academy)
    organization and the repository name should be your GitHub username
- clone it to your system using the command line
- your working directory should look like this
  ```text
  epam-academy/
  -- **your-github-username**
      |-- week-01
      |   |-- day-01
      |   |-- day-02
      |   -- day-03
      -- week-02
          |-- day-01
          -- day-02
  ```

---

- change in to your `your-github-username` directory
- see the changes
- set to staged
- commit with a nice understandable commit message
  - it's nice if you can write commit messages to complete the following
  - "If this commit is applied it will..."
    - ...create my working directory for greenfox lessons
    - ...create a new directory for task 1
    - ...
- change in to your `week-01/day-01` directory
- create 5 directories and 5 files with content
- see the changes
- add these files as staged files
- use `git status` to check
- commit it with commit message
- change the content of two file
- set to staged
- use `git status`
- commit it with commit message
- `git pull`
- `git push origin master`
- check it on [GitHub](https://github.com)

---

- change the content of two file
- use `git status`
- remove from staged `git reset HEAD <filename>`

---

- change the content of two file
- use `git status`
- set to staged
- `git diff --staged` or `git diff --cached`
- commit it
- check it on GitHub

### JavaScript Expressions

### Printing to the terminal window

#### Hello World

```javascript
'use strict';

console.log('Hello world');
```

#### Exercises

- [01 - hello-me](hello-me/hello-me.js)
- [02 - humpty-dumpty](humpty-dumpty/humpty-dumpty.js)
- [03 - hello-others](hello-others/hello-others.js)

### Comments

```javascript
'use strict';

// single line comment

/*
 multi line
 comment block
*/
```

### Types

#### Print values with different types

```javascript
'use strict';
// Prints a string to the terminal window.
console.log('Hello, World!');

// Prints an integer to the terminal window.
console.log(42);

// Prints a floating point number to the terminal window.
console.log(3.141592);
```

#### Integers

```javascript
'use strict';

// Positive, negative and zero
console.log(42); // Prints 42
console.log(-1); // Prints -1
console.log(0); // Prints 0

console.log(12341234123412341234); // 12341234123412340000
// In JavaScript numbers are rounded over a limit
// The maximal number that is not rounded (the maximum safe integer) is: 9007199254740991
// The reasoning behind that number is that JavaScript uses double-precision floating-point format numbers
// Link: http://en.wikipedia.org/wiki/Double_precision_floating-point_format
```

#### Floats

```javascript
'use strict';

// Positive, negative and zero
console.log(3.1415); // Prints 3.1415
console.log(-1.5); // Prints -1.5
console.log(0.0); // Prints 0

// Leading and closing zero is not mandatory
console.log(.5); // Prints 0.5
console.log(5.0); // Prints 5
```

#### Number Operations

```javascript
'use strict';

// Arithmetic operations
console.log(1 + 1); // Prints 2
console.log(5 - 2); // Prints 3
console.log(3 * 4); // Prints 12
console.log(6 / 2); // Prints 3
console.log(5 / 2); // Prints 2.5
console.log(5 % 2); // Prints 1
```

#### Booleans

```javascript
'use strict';

// true, false
console.log(true); // Prints true
console.log(false); // Prints false

// Boolean Operators
// Negation
console.log(!true); // Prints false
console.log(!false); // Prints true

// And
console.log(true && true); // Prints true
console.log(true && false); // Prints false
console.log(false && true); // Prints false
console.log(false && false); // Prints false

// Or
console.log(true || true); // Prints true
console.log(true || false); // Prints true
console.log(false || true); // Prints true
console.log(false || false); // Prints false
```

#### Strings

```javascript
'use strict';

// String and special characters
console.log('apple'); // Prints apple
console.log('don\'t'); // Prints don't
console.log('"Everything you can imagine is real." - Picasso'); // Prints "Everything you can imagine is real." - Picasso

// String Operators
// Concatenation
console.log('tooth' + 'brush'); // Prints toothbrush

// Concat string with number
console.log('My favorite number is: ' + 8); // Prints My favorite number is: 8
console.log(`My favorite number is: ${8}`); // ES6, string template literal
```

#### Exercises

- [04 - introduce-yourself](introduce-yourself/introduce-yourself.js)
- [05 - two-numbers](two-numbers/two-numbers.js)
- [06 - coding-hours](coding-hours/coding-hours.js)

### Variables

#### Creating different variables for each type

```javascript
'use strict';

var a = 5;  // define a variable in <= es5
let b = 6;  // define a variable in > es5
const c = 7;  // define a constant value in > es5

// String
const welcome = 'Hello, World';
console.log(welcome);

// Boolean
const isAwesome = true;
console.log(isAwesome);

// Integer
const theMeaningOfLifeAndTheUniverseAndEverything = 42;
console.log(theMeaningOfLifeAndTheUniverseAndEverything);

// Floating point number
const pi = 3.141592;
console.log(pi);

// Assigning and creating a variable, (define its value)
let number = 12;

// Mutate a variable, (redefine its value)
number = 23;
```

#### Arithmetic Assignment Operators

```javascript
'use strict';

let a = 12;
a += 4;
console.log(a); // Prints 16

let b = 12;
b -= 4;
console.log(b); // Prints 8

let c = 12;
c *= 3;
console.log(c); // Prints 36

let d = 12;
d /= 3;
console.log(d); // Prints 4

let e = 12;
e %= 7;
console.log(e); // Prints 5

let f = 12;
f++;
console.log(f); // Prints 13

let g = 12;
g--;
console.log(g); // Prints 13

let h = 10;
console.log(h); // Prints 10
console.log(h++); // Prints 10
console.log(h); // Prints 11

let i = 10;
console.log(i); // Prints 10
console.log(++i); // Prints 11
console.log(i); // Prints 11
```

#### Exercises

- [07 - favorite-number](favorite-number/favorite-number.js)
- [08 - swap](swap/swap.js)
- [09 - bmi](bmi/bmi.js)
- [10 - define-basic-info](define-basic-info/define-basic-info.js)
- [11 - variable-mutation](variable-mutation/variable-mutation.js)
- [12 - cuboid](cuboid/cuboid.js)
- [13 - seconds-in-a-day](seconds-in-a-day/seconds-in-a-day.js)

### Nothings

```javascript
'use strict';

undefined;
null;
NaN;

null !== undefined;
NaN !== undefined;
null !== NaN;
NaN !== NaN

null == undefined;

typeof undefined; // 'undefined'
typeof null; // 'object'
typeof NaN; // 'number'

let alma;
alma; // undefined
alma + 1; // NaN
alma = null; // null
```

### Try some

- [npm-name-cli](https://github.com/sindresorhus/npm-name-cli)
- [tldr](https://github.com/tldr-pages/tldr)
- [pageres-cli](https://github.com/sindresorhus/pageres-cli)
- [brightness-cli](https://github.com/kevva/brightness-cli)
- [battery-level](https://github.com/gillstrom/battery-level)
- [share-cli](https://github.com/marionebl/share-cli)
- [moeda](https://github.com/thompsonemerson/moeda)

Check out
[agarrharr's awesome-cli-apps](https://github.com/agarrharr/awesome-cli-apps)
repository for more. (some might not be published on npm)
