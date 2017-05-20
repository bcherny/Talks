# functions

Here's how we write functions:

```js
// basic fn
let f = x => x + 1

// 2 parameters
let g = x => y => x + y

// 3 parameters
let h = b => m => x => m * x + b
h(1)(2)(3) // 7
let fn = h(1)(2)
fn(3) // 7
```

Note: If you've programmed before, you'll notice that we're focusing on unary (or, 1-parameter) functions. Don't worry, that's on purpose.

Some syntax & terminology:

```js
let f = x => x + 1
```

- `let` declares a new variable
- The thing to the left of the `=>` (in this case, `x`) is the function's *parameter*
- The thing to the right of th `=>` (in this case, `x + 1`) is the function's *body*

### Let's look at a 2nd example..

```js
let sum2 = a => b => a + b
sum2(1)(2) // 3

let add1 = sum2(1)
add1(2)    // 3
```

```js
let sum3 = a => b => c => a + b + c
sum3(1)(2)(3) // 6

// we can also express sum3 in terms of sum2
let sum3 = a => b => c => sum2(sum2(a)(b))(c)
sum3(1)(2)(3) // 6

// same with sum4, etc.
let sum4 = a => b => c => d =>
  sum2(sum2(a)(b))(sum2(c)(d))
sum4(1)(2)(3)(4) // 10
```

What if we want to sum **any** number of numbers, rather than a fixed number (2, 3, 4, etc.)?

```js
let tail = _ => _.slice(1)
let sum = (...xs) => {                       // equivalent to `let xs = Array.prototype.slice(arguments)`
  switch (xs.length) {
    case 0: return 0
    default: return xs[0] + sum(...tail(xs)) // eg. if xs is [1, 2] then this will be sum(1, 2)
  }
}
sum(1, 2, 3)      // 6
sum(28, 7, -3, 4) // 36
```

Syntax:

- `_` is just a variable name, and has no special meaning in JavaScript
- `...` in front of a function parameter means that the function is *variadic* (it can take any number of arguments). The `...` *spreads* the arguments passed to the function, converting them to an array. For example, if we call `sum(1, 2, 3)`, then `...xs` inside the `sum` function will evaluate to `[1, 2, 3]`.
- `...` in front of a variable *spreads* that variable (in this case, we're spreading the array returned by `tail` into arguments that we then pass to the function `sum`).

Terminology: the number of arguments a function takes is called its "arity". A "unary" function takes 1 argument, a "2-ary" function takes 2 arguments, and so on. An "n-ary" (or, "variadic") function takes any number of arguments.

### How about a 3rd example?

```js
let tail = _ => _.slice(1)
let take = n => _ => _.slice(0, n)
let filter = fn => (...xs) => {
  switch (xs.length) {
    case 0: return []
    default: switch (fn(xs[0])) {
      case true: return take(0)(xs).concat(filter(fn)(...tail(xs)))
      case false: return filter(fn)(...tail(xs))
    }
  }
}
filter(_ => _ > 3)(1, 2, 3, 4, 5) // [4, 5]
```

### lifting

Our `sum` and `filter` functions have a lot in common. Let's lift out the common logic into a function we'll call `reduce`:

```js
let tail = _ => _.slice(1)
let reduce = fn => acc => (...as) => {
  switch (as.length) {
    case 0: return acc
    default: return reduce(fn)(fn(acc, as[0]))(...tail(as))
  }
}
```

We can then reimplement `sum` and `filter` in terms of `reduce`:

```js
let sum = reduce((a, b) => a + b)(0)
sum(1, 2, 3) // 6

let filter = fn => reduce((a, b) => fn(b) ? a.concat(b) : a)([])
filter(_ => _ < 2)(1, 2, 3) // [1]
```
