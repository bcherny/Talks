# async

So far we've been talking about code that runs synchronously (TODO: define). However, one of the coolest features of JavaScript is the way it handles *asynchronous* code.

For example, let's set some timers:

```js
setTimeout(() => console.log('10ms have elapsed'), 10)  // 1
setTimeout(() => console.log('20ms have elapsed'), 20)  // 2

console.log('timers set')                               // 3
```

The above code sets two timers: one triggers after 10ms, the other after 20ms.

In what order are the `console.log`s called?

Right: 3, then 1, then 2.

Remember how programs are executed from top to bottom, until every line of code that should be evaluated is? How is it that JavaScript knows to go back and run the callbacks on lines 1 and 2, even after line 3 ran and the program is done executing?

Right: Because it isn't actually done executing! We set two timers, which are quietly ticking in the background. Even though our program is done, because these timers are still ticking, JavaScript will not close the program [1]. After 20ms or so have elapsed and both timers have fired, then the program exits.

Makes sense? Good.

Time for a second example:

```js
setTimeout(() => console.log('Hello'), 0)
console.log('World')
```

What will get logged to the console - `'Hello'`, then `'World'`? Or `'World'`, then `'Hello'`?

Right: `'World'`, then `'Hello'`.

To understand why, we need to dive deeper into how the JS runtime works and how it interacts with the JS platform [2].

## Stacks + Queues = <3

JavaScript platforms provide some asynchronous APIs. These are not provided by JS itself (JS doesn't actually do async stuff itself!), but rather by your JS platform. Here are a few examples for browser and server:

| Browser           | Server (Node)       | Supported by Both |
|-------------------|---------------------|-------------------|
| `XMLHTTPRequest`  | `fs.read`           | `setInterval`     |
|  TODO             | `fs.write`          | `setTimeout`      |
|  TODO             | `http.get`          | `Promise.resolve` |

TODO: async/await, generators, promises, etc. are provided by JS - so JS must be aware of async right?


<!--Remember the call stack we talked about in chapter TODO? Well, when I said that's all there is to it, I lied. though almost every programming language has a call stack, JavaScript is one of a few languages that has an *additional* something called the *event queue*.-->

<!--How it works is this: JavaScript environments provide some asynchronous APIs. Here are a few examples for browser and server:



When you call one of these asynchronous functions,-->

<!--When one of these asynchronous functions gets called:

1. The function's synchronous code runs
2. The function's asynchronous code runs
3. When the async code is done (with its HTTP fetch, read from disk, or whatever), it generates an event and adds it to JavaScript's event queue.
4. When JavaScript is done running all of the program's synchronous code, it checks the event queue if there are any pending events. It sees the event generated in step 3, and fires the callback passed to the async function.-->

-----------------

[1] Technically, it's not JavaScript managing your program, it's the *platform* that uses the JavaScript runtime. In the timer example, it's NodeJS (or Chromium, or whatever platform you're using) that calls the timers' callbacks - JavaScript is none the wiser, it's just told by the platform that it shouldn't exit yet. TODO: fact check

[2] When I say "the JS platform" and "the JS runtime", what I mean is "your JS platform of choice" and "the JS runtime it uses". This could be V8 used by NodeJS, V8 used by Chromium, ChakraCore used by Microsoft Edge, etc.