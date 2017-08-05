class: center, middle

# ☙ Data Structures ☙

## A human-friendly introduction

### by Boris ([github.com/bcherny](https://github.com/bcherny))

---
class: center, middle
## Q: Why should I care about data structures?
---
class: center, middle
### Q: Why should I care about data structures?
## A: Because wherever there is data, there are data structures.
You just might not realize it.
---
class: center, middle
## Q: What do you mean by "data"?
---
class: center, middle
### Q: What do you mean by "data"?
## A: "Data" is anything that isn't source code.*
---
class: center, middle
## For example:

**A list of users you fetched from the server**

(TODO: network animation)
---
class: center, middle
## For example:

A list of users you fetched from the server

**The email address a user typed into your form ("crazy_about_poodles@yahoo.com")**

(TODO: typing animation)
---
class: center, middle
## For example:

A list of users you fetched from the server

The email address a user typed into your form ("crazy_about_poodles@yahoo.com")

**A chat conversation with your best friend**

(TODO: chat screenshot)
---
class: center, middle
## For example:

A list of users you fetched from the server

The email address a user typed into your form ("crazy_about_poodles@yahoo.com")

A chat conversation with your best friend

**An email thread with your coworkers**

(TODO: email screenshot)
---
class: center, middle
## For example:

A list of users you fetched from the server

The email address a user typed into your form ("crazy_about_poodles@yahoo.com")

A chat conversation with your best friend

An email thread with your coworkers

**The last Youtube video you watched**

(TODO: youtube video)
---
class: center, middle
### Every time you handle/process/store data, you make decisions about how to represent it.
---
class: center, middle
## For example, that chat conversation you had with your friend.
---
#### For example, that chat you had with your friend.

```js
let myMessages = [
  'hey',
  'whats up'
]

let theirMessages = [
  'yo',
  'not much',
  'you?'
]
```
---
#### For example, that chat you had with your friend.

```js
let myMessages = [
  { text: 'hey',      time: '2017-08-08 12:20:00' },
  { text: 'whats up', time: '2017-08-08 12:20:42' }
]

let theirMessages = [
  { text: 'yo',       time: '2017-08-08 12:20:25' },
  { text: 'not much', time: '2017-08-08 12:21:01' },
  { text: 'you?',     time: '2017-08-08 12:21:03' }
]
```
---
#### For example, that chat you had with your friend.

```js
let messages = [
  { text: 'hey',      time: '2017-08-08 12:20:00', sentBy: 'me'   },
  { text: 'yo',       time: '2017-08-08 12:20:25', sentBy: 'them' },
  { text: 'whats up', time: '2017-08-08 12:20:42', sentBy: 'me'   },
  { text: 'not much', time: '2017-08-08 12:21:01', sentBy: 'them' },
  { text: 'you?',     time: '2017-08-08 12:21:03', sentBy: 'them' }
]
```
---
#### For example, that chat you had with your friend.

```js
let messages = {
  'hey':      { time: '2017-08-08 12:20:00', sentBy: 'me'   },
  'yo':       { time: '2017-08-08 12:20:25', sentBy: 'them' },
  'whats up': { time: '2017-08-08 12:20:42', sentBy: 'me'   },
  'not much': { time: '2017-08-08 12:21:01', sentBy: 'them' },
  'you?':     { time: '2017-08-08 12:21:03', sentBy: 'them' }
}
```
---
#### For example, that chat you had with your friend.

```js
let messages = {
  '2017-08-08 12:20:00': { text: 'hey',      sentBy: 'me'   },
  '2017-08-08 12:20:25': { text: 'yo',       sentBy: 'them' },
  '2017-08-08 12:20:42': { text: 'whats up', sentBy: 'me'   },
  '2017-08-08 12:21:01': { text: 'not much', sentBy: 'them' },
  '2017-08-08 12:21:03': { text: 'you?',     sentBy: 'them' }
}
```
---
class: center, middle
## Q: What's the best data structure to store the chat conversation?
---
class: center, middle
### Q: What's the best data structure to store the chat conversation?
## A: It depends 😬
---
#### What's the best data structure to store the chat conversation...
### For reading chats in order?
---
#### What's the best data structure to store the chat conversation...
### For reading chats in order?

```js
let messages = [
  { text: 'hey',      time: '2017-08-08 12:20:00', sentBy: 'me'   },
  { text: 'yo',       time: '2017-08-08 12:20:25', sentBy: 'them' },
  { text: 'whats up', time: '2017-08-08 12:20:42', sentBy: 'me'   },
  { text: 'not much', time: '2017-08-08 12:21:01', sentBy: 'them' },
  { text: 'you?',     time: '2017-08-08 12:21:03', sentBy: 'them' }
]
```
---
#### What's the best data structure to store the chat conversation...
### For reading just my chats in order?
---
#### What's the best data structure to store the chat conversation...
### For reading just my chats in order?

```js
let myMessages = [
  { text: 'hey',      time: '2017-08-08 12:20:00' },
  { text: 'whats up', time: '2017-08-08 12:20:42' }
]

let theirMessages = [
  { text: 'yo',       time: '2017-08-08 12:20:25' },
  { text: 'not much', time: '2017-08-08 12:21:01' },
  { text: 'you?',     time: '2017-08-08 12:21:03' }
]
```
---
#### What's the best data structure to store the chat conversation...
### For looking up who sent a specific message?
---
#### What's the best data structure to store the chat conversation...
### For looking up who sent a specific message?

```js
let messages = {
  'hey':      { time: '2017-08-08 12:20:00', sentBy: 'me'   },
  'yo':       { time: '2017-08-08 12:20:25', sentBy: 'them' },
  'whats up': { time: '2017-08-08 12:20:42', sentBy: 'me'   },
  'not much': { time: '2017-08-08 12:21:01', sentBy: 'them' },
  'you?':     { time: '2017-08-08 12:21:03', sentBy: 'them' }
}
```
---
#### What's the best data structure to store the chat conversation...
### For looking up what message was sent at a specific time?
---
#### What's the best data structure to store the chat conversation...
### For looking up what message was sent at a specific time?

```js
let messages = {
  '2017-08-08 12:20:00': { text: 'hey',      sentBy: 'me'   },
  '2017-08-08 12:20:25': { text: 'yo',       sentBy: 'them' },
  '2017-08-08 12:20:42': { text: 'whats up', sentBy: 'me'   },
  '2017-08-08 12:21:01': { text: 'not much', sentBy: 'them' },
  '2017-08-08 12:21:03': { text: 'you?',     sentBy: 'them' }
}
```
---
#### What's the best data structure to store the chat conversation...
### For adding new messages?
---
#### What's the best data structure to store the chat conversation...
### For adding new messages?
# 🤐☠️💀😵🤦‍
---
class: middle
## Which data structure is right depends on your access pattern.
---
class: middle
> ## "To understand the performance implications of reading from, writing to, sorting, filtering, or otherwise manipulating your data structure, you must understand *why* your data structure has the perf characteristics it does."
> <span class="right">-Boris Cherny</span>
---
class: center, middle
## Lists
---
class: middle
```
                                 List
                         (abstract data type)
                        /                    \
                       /                      \
               Linked List                    Array
              /           \                  /     \
             /             \                /       \
          Singly         Doubly         Dynamic    Fixed
       Linked List     Linked List       Array     Array
```
---
class: middle
```
                                 List
                         (abstract data type)
                        /                    \
                       /                      \
               Linked List                    Array
              /           \                  /     \
             /             \                /       \
    ->    Singly   <-    Doubly         Dynamic    Fixed
    -> Linked List <-  Linked List       Array     Array
```
---
#### Singly Linked List
### What is a Linked List?
---
#### Singly Linked List: What is a Linked List?

It's a series of nested `cons` cells, where a `cons` cell is either:
  - A value and `null`
  - A value and another `cons` cell

---
#### Singly Linked List: What is a Linked List?

It's a series of nested `cons` cells, where a `cons` cell is either:
  - **A value and `null`:**

  ```js
  cons(17, null)
  ```

  - A value and another `cons` cell
---
#### Singly Linked List: What is a Linked List?

It's a series of nested `cons` cells, where a `cons` cell is either:
  - A value and `null`:

  ```js
  cons(17, null)
  ```

  - **A value and another `cons` cell:**

  ```js
  cons(17, cons(9, null))
  ```
---
#### Singly Linked List: What is a Linked List?

It's a series of nested `cons` cells, where a `cons` cell is either:
  - A value and `null`:

  ```js
  cons(17, null)
  ```

  - A value and another `cons` cell:

  ```js
  cons(17, cons(9, null))
  ```

  - **(This can go on as long as you want):**

  ```js
  cons(17, cons(9, cons(36, cons(-3, null))))
  ```
---
#### Singly Linked List: What is a Linked List?

<img src="images/LinkedList.png" width="100%" />

```js
cons(17, cons(9, cons(36, cons(-3, null))))
```

This code represents the list `[17, 9, 36, -3]`.
---
#### Singly Linked List
### What can we do with a Linked List?
---
#### Singly Linked List: What can we do with a Linked List?

Create a new list:

```js
function cons(left, right) {
  return {
    left: left,
    right: right
  }
}
```
---
#### Singly Linked List: What can we do with a Linked List?

Create a new list:

```js
function cons(left, right) {
  return {
    left: left,
    right: right
  }
}
```

Get the first value:

```js
function head(list) {
  return list.left
}
```
---
#### Singly Linked List: What can we do with a Linked List?

Create a new list:

```js
function cons(left, right) {
  return {
    left: left,
    right: right
  }
}
```

Get the first value:

```js
function head(list) {
  return list.left
}
```

Get the last value:

```js
function last(list) {
  while (list.right !== null) {
    list = list.right
  }
  return list.left
}
```
---
#### Singly Linked List: What can we do with a Linked List?

Add a value:

```js
function push(list, value) {
  last(list).right = cons(value, null)
}
```
---
#### Singly Linked List: What can we do with a Linked List?

Add a value:

```js
function push(list, value) {
  last(list).right = cons(value, null)
}
```

Find the index of a value:

```js
function indexOf(list, value) {
  // ?
}
```

Combine two lists:

```js
function concat(list1, list2) {
  // ?
}
```

Remove a value (`sublist` is a `cons`):

```js
function remove(list, sublist) {
  // ?
}
```

