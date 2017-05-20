# async

```js
let remind = t => fn => {
  let id = setTimeout(fn, t)
  return () => cancelTimeout(id)
}

remind(10)(() => console.log('10ms have elapsed'))  // 1
remind(20)(() => console.log('20ms have elapsed'))  // 2

console.log('timers set')                           // 3
```

What does that code do?

Right: It sets two timers: one triggers after 10ms, the other after 20ms.

How about this - in what order are the `console.log`s called?

Right: 3, then 1, then 2.

So you remember how programs are executed from top to bottom, until every line of code that should logically be evaluated is? How is it that JavaScript knows to go back and run lines 1 and 2, even after 3 has run and the program has finished executing?

Right: Because it isn't actually done executing! Remember the call stack? Well, though almost every programming language has a call stack, JavaScript is one of a few languages that has an *additional* something called the *event queue*.

How it works is this: JavaScript environments provide some asynchronous APIs. Here are a few examples for browser and server:

| Browser           | Server (Node)       | Supported by Both |
|-------------------|---------------------|-------------------|
| `XMLHTTPRequest`  | `fs.read`           | `setInterval`     |
|  TODO             | `fs.write`          | `setTimeout`      |
|  TODO             | `http.get`          | `Promise.resolve` |

When one of these asynchronous functions gets called:

1. The function's synchronous code runs
2. The function's asynchronous code runs
3. When the async code is done (with its HTTP fetch, read from disk, or whatever), it generates an event and adds it to JavaScript's event queue.
4. When JavaScript is done running all of the program's synchronous code, it checks the event queue if there are any pending events. It sees the event generated in step 3, and fires the callback passed to the async function.
