# functions

Let's start by defining a function that sums two numbers:

```js
let sum2 = a => b => a + b
sum2(1)(2) // 3
```

We can use this function to define another function that adds `1` to whatever number you give it:

```js
let add1 = sum2(1)
add1(2) // 3
```

Some lingo: We call this implementing `add1` *in terms of* `sum2`.

What if we want a `sum3` function? No problem:

```js
let sum3 = a => b => c => a + b + c
sum3(1)(2)(3) // 6
```

**Exercise**: Implement `sum3` and `sum4` in terms of `sum2` [1].

You see the pattern here - can we write a function that sums *any* number of numbers, rather than a fixed number (2, 3, 4, etc.)?

No problem. First we'll need a `tail` function that takes an array, and returns a new array consisting of every element after the 0th element:

```js
let tail = _ => _.slice(1)

tail([1, 2, 3, 4] // [2, 3, 4]
tail([])          // []
```

- `_` is just a variable name, and has no special meaning in JavaScript. By convention, we use it in short functions where a descriptive variable name does not help the engineer reading the code understand what the function does.
- `[1, 2]` defines a new array of length 2, with 2 members: `1` and `2`.

Now we can define a `sum` function, that takes an array of numbers and returns their sum:

```js
let sum = xs => {
  switch (xs.length) {
    case 0: return 0
    default: return xs[0] + sum(tail(xs))
  }
}
sum([])             // 0
sum([1, 2, 3])      // 6
sum([28, 7, -3, 4]) // 36
```

- Read more about `switch` on [MDN](TODO).
- This function is *recursive*. That means it calls itself either directly or indirectly.

Let's use substitution to walk through what our `sum` function does when we call it with `[1, 2, 3]`:

```js
// Step 0
let sum = xs => {
  switch (xs.length) {
    case 0: return 0
    default: return xs[0] + sum(tail(xs))
  }
}
sum([1, 2, 3])

// Step 1 - Substitute sum
(xs => {
  switch (xs.length) {
    case 0: return 0
    default: return xs[0] + sum(tail(xs))
  }
})([1, 2, 3])

// Step 2 - Bind xs <- [1, 2, 3]
(() => {
  switch ([1, 2, 3].length) {
    case 0: return 0
    default: return [1, 2, 3][0] + sum(tail([1, 2, 3]))
  }
})()

// Step 3 - Reduce
[1, 2, 3][0] + sum(tail([1, 2, 3]))

// Step 4 - Reduce, Substitute tail
1 + sum((_ => _.slice(1))([1, 2, 3]))

// Step 5 - Bind _ <- [1, 2, 3], Reduce
1 + sum([2, 3])

// Step 6 - Substitute sum
1 + (xs => {
  switch (xs.length) {
    case 0: return 0
    default: return xs[0] + sum(tail(xs))
  }
})([2, 3])

// Step 7 - Bind xs <- [2, 3], Reduce
1 + [2, 3][0] + sum(tail([2, 3]))

// Step 8 - Reduce, Substitute tail
1 + 2 + sum((_ => _.slice(1))([2, 3]))

// Step 9 - Bind _ <- [2, 3], Reduce
1 + 2 + sum([3])

// Step 10 - Substitute sum
1 + 2 + (xs => {
  switch (xs.length) {
    case 0: return 0
    default: return xs[0] + sum(tail(xs))
  }
})([3])

// Step 11 - Bind xs <- [3], Reduce
1 + 2 + [3][0] + sum(tail([3]))

// Step 12 - Reduce, Substitute tail
1 + 2 + 3 + sum((_ => _.slice(1))([3]))

// Step 13 - Bind _ <- [3], Reduce
1 + 2 + 3 + sum([])

// Step 14 - Substitute sum
1 + 2 + 3 + (xs => {
  switch (xs.length) {
    case 0: return 0
    default: return xs[0] + sum(tail(xs))
  }
})([])

// Step 15 - Bind xs <- [], Reduce
1 + 2 + 3 + 0

// Step 16 - Reduce
6
```

**Exercise**: Implemement a recursive `uniq` function, that takes an array of numbers and returns the array without duplicates. For example, `uniq([1, 3, 2, 3])` should return `[1, 3, 2]` [2].

**Exercise (hard)**: Implement a recursive `min` function, that takes an array of numbers and returns the smallest value in the array. If the array is empty, return `undefined` [3].

### How about another example?

Let's implement a `filter` function that:

- Takes a predicate (a function that takes a value and returns a boolean) and an array
- Returns a new array consisting of just the elements from the passed-in array that satisfy the given predicate

```js
let take = n => _ => _.slice(0, n)
let filter = fn => xs => {
  switch (xs.length) {
    case 0: return []
    default: switch (fn(xs[0])) {
      case true: return take(0)(xs).concat(filter(fn)(tail(xs)))
      case false: return filter(fn)(tail(xs))
    }
  }
}
filter(_ => _ > 3)([1, 2, 3, 4, 5]) // [4, 5]
```

### Do you even _?

Our `min`, `sum`, `filter`, and `uniq` functions have a lot in common. All four of them iterate over an array, perform some computation, and return the computation's accumulated result.

Let's *lift* out the common logic into a function we'll call `reduce`:

```js
let reduce = fn => acc => xs => {
  switch (xs.length) {
    case 0: return acc
    default: return reduce(fn)(fn(acc, xs[0]))(tail(xs))
  }
}
```

- Here, `acc` is short for "accumulator".

We can then reimplement `filter` in terms of `reduce`:

```js
let filter = fn => reduce((a, b) => fn(b) ? a.concat(b) : a)([])
filter(_ => _ < 2)([1, 2, 3]) // [1]
```

**Exercise**: Reimplement `min`, `sum`, and `uniq` in terms of `reduce` [4].

Such is the power of *lifting*.

> **Lifting**: Pulling out repeated code into a unit that can be shared to avoid repetition.

When functions are pure and free of side effects, they lend themselves well to being reused; when the same thing is implemented multiple times across functions, it's good practice to lift that code out into its own function. As a rule of thumb, writing the same code across 2 functions is ok (as long as the code is reasonably short); after 3 usages, start thinking about lifting out common logic.

This reuse is important for a number of reasons:

1. Repetitive code is buggy - one function might implement some logic correctly, but another function may have missed an edge case.
2. Repetitive code is hard to read - TODO
3. Repetitive code leads to longer development times - TODO

-------------

[1]
```js
let sum3 = a => b => c => sum2(sum2(a)(b))(c)
sum3(1)(2)(3) // 6

let sum4 = a => b => c => d =>
  sum2(sum2(a)(b))(sum2(c)(d))
sum4(1)(2)(3)(4) // 10
```

[2] TODO: invert recursion + avoid accumulator
```js
let uniq = xs => (accumulator = []) => {
  switch (xs.length) {
    case 0: return accumulator
    default: return uniq(xs.slice(1))(
      accumulator.includes(xs[0])
      ? accumulator
      : accumulator.concat(xs[0])
    )
  }
}

uniq([1, 3, 2, 3])() // [1, 3, 2]
uniq([])()           // []
```

[3] TODO: Is this solution the optimal mix of perf and readability?
```js
let min = xs => {
  switch (xs.length) {
    case 0: return undefined
    case 1: return xs[0]
    case 2: return xs[0] < xs[1] ? xs[0] : xs[1]
    default:
      let mid = Math.floor(xs.length/2)
      return min(xs.slice(0, mid), xs.slice(mid))
  }
}
min([1, 2, -3, 4]) // -3
min([])            // undefined
```

[4]
```js
let min = reduce((a, b) => a !== undefined && a < b ? a : b)(undefined)
min([1, 2, -3]) // -3

let sum = reduce((a, b) => a + b)(0)
sum([1, 2, 3]) // 6

let uniq = reduce((a, b) => a.includes(b) ? a : [...a, b])([])
uniq([1, 3, 2, 3]) // [1, 3, 2]
```