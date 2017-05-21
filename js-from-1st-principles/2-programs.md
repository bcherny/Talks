# Programs

Let's start simple: What is a computer program?

Right: Computer programs are files that contain text. There is nothing special about these files. You can create and edit them in Notepad (or TextEdit if you use a Mac), Microsoft Word, or any other text editing program. Though more commonly, people use text editors that are made specifically for editing source code. They have nice features like tabbed interfaces, highlighting text in a way that makes it easy to skim, etc.

By convention, be sure to give the text file containing your program a file extension indicating the language that it's in. For example, programs written in the Haskell language have the extension `.hs`, HTML uses `.html`, Java uses `.java`, and JavaScript uses `.js`. You might see some other variants of these (`.htm` for HTML, or `.es6` for JavaScript), but it's good style to stick to the canonical file extension for your given language. For JavaScript, that means sticking to `.js`.

Once you write a text file containing your program, you:

1. First use a *compiler* (itself a program!) to *compile* your program
2. Then use a *runtime* (another program) to *evalutate* (or, *run*) your program

In a lot of languages the compile and run steps are two separate commands (eg. C++, Java, Scala), but in JavaScript you run one command to both compile and run your program in a single step.

# Setting up your text editor

TODO

# The command line

TODO

# Setting up NodeJS

TODO

# Your first program

Let's write the world's simplest program:

1. Open up your text editor (Notepad, TextEdit, etc.)
2. Create a new file
3. Save that empty file as hello.js. You can save it anywhere you want - Desktop or Documents are a good option.

That's it! You wrote your first program (well, it doesn't do much, but it's still a program!).

To run it:

1. Open your favorite terminal
2. `cd` into the directory where you saved your file (Desktop, etc.)
3. Run it with `node ./hello.js`

TODO

## Top down

How are programs evaluated?

Right: From the top down. For example, let's say this is your program:

```js
1 + 2
3 + 4
5 + 6
```

How does the runtime evaluate it? Well, it goes line by line, starting with the first line:

```js
1 + 2
```

This evaluates to `3`, so the runtime continues:

```js
3 + 4
```

This evaluates to `7`, so again the runtime continues:

```js
5 + 6
```

This evaluates to `11`. Since the runtime has reached the end of the program, it exits.
