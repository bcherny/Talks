# Programs

Let's start simple: What is a computer program?

Right: Computer programs are files that contain text. There is nothing special about these files: you can create and edit them in Notepad (or TextEdit if you use a Mac), Microsoft Word, or any other text editing program. More commonly, people use text editors that are made specifically for editing source code. They have nice features like tabbed interfaces, highlighting text in a way that makes it easy to skim, etc.

By convention, be sure to give the text file that contains your program a file extension indicating the programming language it uses. For example, programs written in Haskell have the extension `.hs`, HTML uses `.html`, and Java uses `.java`. JavaScript uses `.js`. You might see some other variants of these (`.htm` for HTML, or `.es6` for JavaScript), but it's good style to stick to the canonical file extension for your given language. For JavaScript, that means sticking to `.js`.

Once you write a text file containing your program, you:

1. First use a *compiler* (itself a program!) to *compile* your program
2. Then use a *runtime* (another program) to *evalutate* (or, *run*) your program

In a lot of languages the compile and run steps are two separate commands (eg. C++, Java, Scala), but in JavaScript you run one command to both compile and run your program in a single step.

## Setting up your text editor

TODO

## The command line

TODO

## Setting up NodeJS

TODO

## Your first program

Let's write the world's simplest program:

1. Open up your text editor (Notepad, TextEdit, etc.)
2. Create a new file
3. Save that empty file as hello.js. You can save it anywhere you want - Desktop or Documents are a good option.

Congratulations! You just wrote your first JavaScript program (well, it doesn't do much, but it's still a program!).

To run it:

1. Open your favorite terminal
2. `cd` into the directory where you saved your file (Desktop, etc.)
3. Run it with `node ./hello.js`

## Your second program

Ok, let's edit our program so it does something:

1. Open hello.js in your text editor
2. Type `console.log(1 + 2)`
3. Save the file
4. Run it with `node ./hello.js`

You should see `3` show up in your console. Congratulations - you just wrote your second JavaScript program!

## Breaking it down

How does JavaScript evaluate programs, in general?

Right: From the top down.

Say this is your program:

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

But what happens when your code is more complicated than that?



In general, the JavaScript runtime will:

- Evaluate your program one line at a time
- Starting from the first line
- Until it hits the last reachable line

We can understand this more deeply if we look at a more complicated example:

## Your third program

Replace the contents of hello.js with this code:

```js
let f = x => x * 2
let g = y => f(y) + 1
let h = z => g(z) > 3
h(2)
```

What will `h(2)` evaluate to?

If it helps, you can substitue in values one step at a time, like you did in algebra class:

```js
// Step 1 - Substitute in h
let f = x => x * 2
let g = y => f(y) + 1
(z => g(z) > 3)(2)

// Step 2 - Substitute in g
let f = x => x * 2
(z => (y => f(y) + 1)(z) > 3)(2)

// Step 3 - Substitute in f
(z => (y => (x => x * 2)(y) + 1)(z) > 3)(2)

// Step 4 - Evaluate h(), binding z <- 2
(y => (x => x * 2)(y) + 1)(2) > 3

// Step 5 - Evaluate g(), binding y <- 2
(x => x * 2)(2) + 1 > 3

// Step 6 - Evaluate g(), binding x <- 2
(2 * 2) + 1 > 3

// Step 7 - Reduce
5 > 3

// Step 8 - Reduce
true
```

That is pretty close to how your favorite JS runtime would have evaluated that program. If you care, this process is called *substitution*, just like in math. TODO: confirm

Let's look at another example:

```js
// Returns the nth fibbonaci number TODO: spelling?
let fib = n => {
  switch (n) {
    case 0: return 0
    case 1: return 1
    default: return fib(n - 1) + fib(n - 2)
  }
}
fib(4)
```

Step by step:

```js
// Step 1 - Substitute in fib
(n => {
  switch (n) {
    case 0: return 0
    case 1: return 1
    default: return fib(n - 1) + fib(n - 2)
  }
})(4)

// Step 2 - Evaluate, binding n <- 4
switch (4) {
  case 0: return 0
  case 1: return 1
  default: return fib(n - 1) + fib(n - 2)
}

// Step 3 - Reduce
fib(3) + fib(2)

// Step 4 - Substitute in fib
(n => {
  switch (n) {
    case 0: return 0
    case 1: return 1
    default: return fib(n - 1) + fib(n - 2)
  }
})(3) + (n => {
  switch (n) {
    case 0: return 0
    case 1: return 1
    default: return fib(n - 1) + fib(n - 2)
  }
})(2)

// Step 5 - Evaluate and bind
() => {
  switch (3) {
    case 0: return 0
    case 1: return 1
    default: return fib(3 - 1) + fib(3 - 2)
  }
)
}() + (() => {
  switch (2) {
    case 0: return 0
    case 1: return 1
    default: return fib(2 - 1) + fib(2 - 2)
  }
})()

// Step 6 - Reduce
fib(2) + fib(1) + fib(1) + fib(0)

// Step 7 - Substitute in fib
(n => {
  switch (n) {
    case 0: return 0
    case 1: return 1
    default: return fib(n - 1) + fib(n - 2)
  }
})(2) + (n => {
  switch (n) {
    case 0: return 0
    case 1: return 1
    default: return fib(n - 1) + fib(n - 2)
  }
})(1) + (n => {
  switch (n) {
    case 0: return 0
    case 1: return 1
    default: return fib(n - 1) + fib(n - 2)
  }
})(1) + (n => {
  switch (n) {
    case 0: return 0
    case 1: return 1
    default: return fib(n - 1) + fib(n - 2)
  }
})(0)

// Step 8 - Evaluate and bind
(() => {
  switch (2) {
    case 0: return 0
    case 1: return 1
    default: return fib(2 - 1) + fib(2 - 2)
  }
})() + (() => {
  switch (1) {
    case 0: return 0
    case 1: return 1
    default: return fib(1 - 1) + fib(1 - 2)
  }
})() + (() => {
  switch (1) {
    case 0: return 0
    case 1: return 1
    default: return fib(1 - 1) + fib(1 - 2)
  }
})() + (() => {
  switch (0) {
    case 0: return 0
    case 1: return 1
    default: return fib(0 - 1) + fib(0 - 2)
  }
})()

// Step 9 - Reduce
fib(1) + fib(0) + 1 + 1 + 0

// Step 10 - Substitute in fib
(n => {
  switch (n) {
    case 0: return 0
    case 1: return 1
    default: return fib(n - 1) + fib(n - 2)
  }
})(1) + (n => {
  switch (n) {
    case 0: return 0
    case 1: return 1
    default: return fib(n - 1) + fib(n - 2)
  }
})(0) + 1 + 1 + 0

// Step 11 - Evaluate and bind
(() => {
  switch (1) {
    case 0: return 0
    case 1: return 1
    default: return fib(1 - 1) + fib(1 - 2)
  }
})() + (() => {
  switch (0) {
    case 0: return 0
    case 1: return 1
    default: return fib(0 - 1) + fib(0 - 2)
  }
})() + 1 + 1 + 0

// Step 12 - Reduce
1 + 0 + 1 + 1 + 0

// Step 13 - Reduce
3
```

Hard: Some of you may have noticed that we repeated some computations multiple times:

- `fib(2)` - 2 times
- `fib(1)` - 3 times
- `fib(0)` - 2 times

Can you figure out a way to improve on that, so that `fib` is called at most once with any given value? Hint: Find a way to save the return value the first time `fib` is called with each input, and return it (rather than recomputing) on subsequent calls. Second hint: Look up *memoization*.

TODO: Illustrate this with `fib`'s call tree?

------------------------

## Purity

This is by far the easiest type of function to work with. The thing that makes it so easy to reason about is that it is *pure*.

> *Purity*: A function is considered *pure* if its output depends only on its inputs.

Impure functions can be a lot harder to reason about. For example, here is a function whose output depends not just on its inputs, but also on a global state:

```js
let isFirstCall = true
let fn = x => {
  if (isFirstCall) {
    isFirstCall = false
    return x
  } else {
    return x * 2
  }
}
fn(3) // 3
fn(3) // 6
```

The first time you call `fn(3)` it gives `3`, but subsequent calls will give `6`! As an engineer looking at this code, it's not at all obvious why `fn` returns different things even though you call it with the same argument. And if you try to apply the substitution model you used above to reason through it, it won't work quite as expected!

Exercise: Try to apply the substitution model to this code - what went wrong, and why?

Instead, consider the purified version of the above code:

```js
let fn = isFirstCall => x => {
  if (isFirstCall) {
    return x
  } else {
    return x * 2
  }
}
fn(true)(3) // 3
fn(false)(3) // 6
```

Ah, much better! This way it's clear why `fn` returned different values: because you called it with different arguments!

## Side effects

Something else to beware of when writing functions is *side effects*:

> *Side effect*: Anything that is not pure computation (ie. substitution, binding, or reduction) is a side effect. Examples include logging to the console, rendering DOM elements, making network requests, and reading from the filesystem.

For example, let's look at `console.log`. It takes a `string` and returns `undefined`, but has the side effect of writing text to the console:

```js
let fn = x => console.log(x * 2)
fn(4)
```

If we apply the substitution model, the result doesn't quite capture what this function actually does:

```js
// Step 1 - Substitute in fn
(x => console.log(x * 2))(4)

// Step 2 - Evaluate fn(), binding x <- 4
console.log(8)

// Step 3 - Reduce console.log
undefined
```

Even though this code logged out `8` to the console, it reduced to `undefined`! Is `undefined` a good representation of what that code did?

Right: It's not. In some cases, substitution is not a good enough mental model to think about what a piece of code does. In this specific case, our function actually did two things:

1. It evaluated to `undefined`
2. It produced the side effect of logging to the console

Substitution only revealed (1) to us, but we had to intuit (2) ourselves by reading through the code and knowing ahead of time that `console.log` is impure.

Let's avoid getting into the weeds of side effects here, but the take home lesson is if your function has side effects, it makes it harder to reason about. Later on we'll talk about some ways to get rid of side effects, and some ways to better organize them.

## Scope

Let's look at how the JS runtime resolves variables in more detail.

Say this is your program:

```js
let a = x => {
  let y = x * 2
  return z => x + y + z
}
let b = a(1)
let c = b(2)
```

What does `c` evaluate to?

Right: It evaluates to `5`. Let's prove this by substituting:

```js
// Step 1 - Substitute in a and b
    let c = ((x => {
      let y = x * 2
      return z => x + y + z
    })(1))(2)

// Step 2 - Evaluate, binding x <- 1 TODO: is this kosher???
let c = ((() => {
  let y = 1 * 2
  return z => 1 + y + z
})())(2)

// Step 3 - Reduce
let c = (z => 1 + 2 + z)(2)

// Step 4 - Evaluate, binding z <- 2
let c = (() => 1 + 2 + 2)()

// Step 5 - Reduce
let c = 5
```

TODO...

The lesson is this: JavaScript looks up (*resolves*) variables inside-out. Ie. if a given variable is defined in the local scope, that definition will be used. Otherwise, the JS runtime traverses out one scope at a time, until it gets to the global scope; if one of these scopes defines the variable in question, that definition will be used; otherwise, the variable will resolve to `undefined`.

In pseudocode the algorithm looks like this:

```js
let scope = CURRENT_SCOPE
while (variable === undefined && scope !== GLOBAL_SCOPE) {
  if (variable in scope) {
    return variable
  } else {
    scope = parent(scope)
  }
}
```

> Technical remark: this algorithm for inside-out traversal is called *lexical scoping*. Alternative alogorithms also exist, including *dynamic scoping*. For a good intro, see [Appendix A](https://github.com/getify/You-Dont-Know-JS/blob/6109cfe/scope%20%26%20closures/apA.md) of Simpson's You Don't Know JS.

What is a "parent scope"?

Let's look at the last example again (annotated with line numbers this time):

```js
let a = x => {              // 1
  let y = x * 2             // 2
  return z => x + y + z     // 3
}                           // 4
let b = a(1)                // 5
let c = b(2)                // 6
```

We have three scopes in this code:

1. The top level scope, which includes definitions (*bindings*) for the variables `a`, `b`, and `c`. Let's call this scope `Scope G`.
2. The `a` function's scope, which includes a binding for the variable `x`. Let's call this `Scope A`
3. The scope for the anonymous function inside `a`, which includes a binding for the variable `z`. Let's call this `Scope B`

`Scope G` has no parent; it is the outermost, or *global* scope.
`Scope A`'s parent is `Scope G`.
`Scope B`'s parent is `Scope A`, and its grandparent is `Scope G`.

TODO: Add illustration

Let's walk through how the various variables in our program are resolved.