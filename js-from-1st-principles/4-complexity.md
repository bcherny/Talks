# Complexity

To preface this chapter: computational complexity theory is a giant, highly active area of research. This chapter is meant to let you dip your toes in the complexity pond - if you find this stuff interesting, check out the resources in the footnotes.

## What is computational complexity theory?

Let's say we have 2 functions, `f` and `g`:

```js
let f = xs => xs[0]
let g = xs => xs.map(_ => _ + 1)
```

Both of these functions take arrays of numbers. `f` returns the first element of the array you give it; `g` returns a new array consisting of all of the elements of the array you give it, incremented by 1.

How would you describe the performance of these functions?

Well, you could pass some value to each function (say, the array `[1, 2, 3]`), and time how long it takes to return a result. Here is a simple timing function you could use to do that:

```js
let time = fn => {
  let start = Date.now()
  fn()
  let end = Date.now()
  return end - start
}
time(() => f([1, 2, 3])) // 1
time(() => g([1, 2, 3])) // 3
```

`f` might return in 1 millisecond, and `g` might return in 3 milliseconds (in reality it will be way faster, this is just an illustration). Does this mean that `g` is 3 times slower than `f`?

Right: No, because the performance probably depends on the specific values you passed in.

What if we repeated this timing experiment for a bunch of inputs, and recorded how long it took each function to run:

| Input             | `time(f(Input))`  | `time(g(Input))`  |
|-------------------|-------------------|-------------------|
| `[]`              | 1                 | 1                 |
| `[1, 2, 3]`       | 1                 | 3                 |
| `[1, 2, ..., 10]` | 1                 | 10                |
| `[1, 2, ..., 1000]` | 1               | 1000              |

Based on these data, it's reasonable to conclude that:

- `f` always takes 1ms to run, regardless of its input
- `g`'s run time is linearly proportional to the length of its input

Thinking about performance this way ("how does time depend on input?") has some really nice properties:

- It's not tied to a specific input: instead, it describes performance over the full domain of possible inputs
- It's not tied to specific hardware: eg. `g` might take 3ms to run on my laptop for a given input, but it might take 4ms to run on your iPhone
- It's predictive: once we know how runtime scales with input size, we can predict runtimes for other inputs that we haven't timed

In fact, this way of thinking about performance is so useful that computer scientists gave it a name: *Big O Notation*.

> **Big O Notation**: A way to describe how an algorithm's performance varies with the size of its input. [2]

We can now use Big O to describe our functions `f` and `g`:

- `f` runs in *O(1)* time: its performance is always constant, and does not depend on the size of its input
- `g` runs in *O(n)* time: its performance is linear with the size of its input (we call that size *n*)

Here are some common Big Os that you will encounter:

| Big O   | Name          | Description                   |
|---------|---------------|-------------------------------|
| *O(1)*  | Constant      | Does not depend on input size |
| *O(log(n))* | Logarithmic | Grows with the log of the input size
| *O(n)*  | Linear        | Grows linearly with input size
| *O(n*<sup>*2*</sup>*)*  | Quadratic | Grows with the square of the input size
| *O(n*<sup>*3*</sup>*)*  | Polynomial | Grows with the cube of the input size
| *O(C*<sup>*n*</sup>*)*  | Exponential | Grows with some constant *C* raised to the power of the input size
| *O(n!)* | Factorial     | Grows with the factorial of the input size |

And the same thing in graph form - notice how fast some Big Os grow!

<!--![](illustrations/Complexity-Graph.svg)-->

Because of how quickly *O(n!)* and *O(C*<sup>*n*</sup>*)* grow, they are impractical for all but the tiniest inputs. For example, let's define a function `permute` that takes an array of numbers, and returns all permutations of that array:

```js
let flatten = xs => xs.reduce((a, b) => a.concat(b))
let omit = xs => x => xs.filter(_ => _ !== x)
let permute = xs => {
  switch (xs.length) {
    case 0: return []
    case 1: return xs
    default: return flatten(xs.map(x =>
      permute(omit(xs)(x)).map(_ => [x].concat(_))
    ))
  }
}
permute([1, 2]) // [[1, 2], [2, 1]]
```

**Exercise**: Show that `permute` has a complexity of *O(n!)*.

Let's estimate how long `permute` will take to run, assuming that each :

| Input size    | Output size    | Run time      |
|---------------|----------------|---------------|
| 0             | 0              | 1 ms          |
| 2             | 2              | 2 ms          |
| 4             | 24             | 24 ms         |
| 10            | 3628800        | 1 hour        |
| 20            | 2.4*10<sup>18</sup> | 77,095,595 years |

-------------------

[1] For example, here's a pathological case where half the time performance is constant, and half the time it's linear:

```js
let h = xs => Math.random() < 0.5 ? f(xs) : g(xs)
```

TODO: more discussion of above case ^

[2] A few notes:

- By convention, we ignore constants in Big O Notation (eg. instead of writing *O(2\*n)*, we just write *O(n)*)
- Big O usually refers to *worst case runtime* (because computer scientists are pessimists) [1]