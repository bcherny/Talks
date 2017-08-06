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

**Data stored in your database**

(TODO: database image)
---
class: center, middle
## For example:

Data stored in your database

**A list of users you fetched from the server**

(TODO: network animation)
---
class: center, middle
## For example:

Data stored in your database

A list of users you fetched from the server

**The email address a user typed into your form ("crazy_about_poodles@yahoo.com")**

(TODO: typing animation)
---
class: center, middle
## For example:

Data stored in your database

A list of users you fetched from the server

The email address a user typed into your form ("crazy_about_poodles@yahoo.com")

**A chat conversation with your best friend**

(TODO: chat screenshot)
---
class: center, middle
## For example:

Data stored in your database

A list of users you fetched from the server

The email address a user typed into your form ("crazy_about_poodles@yahoo.com")

A chat conversation with your best friend

**An email thread with your coworkers**

(TODO: email screenshot)
---
class: center, middle
## For example:

Data stored in your database

A list of users you fetched from the server

The email address a user typed into your form ("crazy_about_poodles@yahoo.com")

A chat conversation with your best friend

An email thread with your coworkers

**The last Youtube video you watched**

(TODO: youtube video)
---
class: center, middle
## Every time you handle/process/store data, you make decisions about how to represent it.
---
class: center, middle
## For example, that chat conversation you had with your friend...
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
# 🤐☠️💀😵🤦‍♀️
---
class: middle
## Which data structure is right depends on your access pattern.
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
class: center, middle
<img src="images/LinkedList-Concept.png" width="100%">
---
class: center, middle
<img src="images/LinkedList-Concept-Cons.png" width="100%">
---
class: center, middle
<img src="images/LinkedList-Concept-Cons-Labels.png" width="100%">
---
#### Singly Linked List: What is a Linked List?
<img src="images/LinkedList.png" width="100%">

A Linked List is a series of `cons` cells, where a `cons` cell is either:
  - A value and `null`
  - A value and another `cons` cell

---
#### Singly Linked List: What is a Linked List?
<img src="images/LinkedList.png" width="100%">

A Linked List is a series of `cons` cells, where a `cons` cell is either:
  - **A value and `null`:**

  ```js
  cons(-3, null)
  ```

  - A value and another `cons` cell
---
#### Singly Linked List: What is a Linked List?
<img src="images/LinkedList.png" width="100%">

A Linked List is a series of `cons` cells, where a `cons` cell is either:
  - A value and `null`:

  ```js
  cons(-3, null)
  ```

  - **A value and another `cons` cell:**

  ```js
  cons(36, cons(-3, null))
  ```
---
#### Singly Linked List: What is a Linked List?
<img src="images/LinkedList.png" width="100%">

A Linked List is a series of `cons` cells, where a `cons` cell is either:
  - A value and `null`:

  ```js
  cons(-3, null)
  ```

  - A value and another `cons` cell:

  ```js
  cons(36, cons(-3, null))
  ```

  - **(This can go on as long as you want):**

  ```js
  cons(17, cons(9, cons(36, cons(-3, null))))
  ```
---
#### Singly Linked List: What is a Linked List?
<img src="images/LinkedList.png" width="100%">

```js
cons(17, cons(9, cons(36, cons(-3, null))))
```

This code represents the list `[17, 9, 36, -3]`.
---
class: center, middle
## What can we do with a Linked List?
---
#### Singly Linked List: What can we do with a Linked List?

Create a new list:

```js
function cons(value, next) {
  return {
    value: value,
    next: next
  }
}
```
---
#### Singly Linked List: What can we do with a Linked List?

Create a new list:

```js
function cons(value, next) {
  return {
    value: value,
    next: next
  }
}
```

Get the first item:

```js
function head(list) {
  return list
}
```
---
#### Singly Linked List: What can we do with a Linked List?

Create a new list:

```js
function cons(value, next) {
  return {
    value: value,
    next: next
  }
}
```

Get the first item:

```js
function head(list) {
  return list
}
```

Get the last item:

```js
function last(list) {
  while (list.next !== null) {
    list = list.next
  }
  return list
}
```
---
#### Singly Linked List: What can we do with a Linked List?

Add a value to the end:

```js
function push(list, value) {
  last(list).next = cons(value, null)
}
```

Add a value to the beginning:

```js
function unshift(list, value) {...}
```

Find the index of a value:

```js
function indexOf(list, value) {...}
```

Combine two lists:

```js
function concat(list1, list2) {...}
```

Remove a value <small>(hint: you'll also need `find(list, value)` and `parent(list, item)`)</small>:

```js
function remove(list, value) {...}
```
---
#### Singly Linked List: What can we do with a Linked List?

Add a value to the beginning:

```js
function unshift(list, value) {
  return cons(value, list)
}
```

Find the index of a value:

```js
function indexOf(list, value, index = 0) {
  if (list.value === value) {
    return index
  }
  if (list.next === null) {
    return -1
  }
  return indexOf(list.next, value, index + 1)
}
```
---
#### Singly Linked List: What can we do with a Linked List?

Combine two lists:

```js
function concat(list1, list2) {
  last(list1).next = list2
}
```

---
#### Singly Linked List: What can we do with a Linked List?

Remove a value:

<img src="images/LinkedList-Remove.png" width="100%">
---
#### Singly Linked List: What can we do with a Linked List?

Remove a value:

```js
function remove(list, value) {

  let item = find(list, value)
  if (item === null) {
    return list
  }

  let prev = parent(list, item)

  // case 1
  if (prev === undefined) {
    return item.next
  }

  // case 2 & 3
  prev.next = item.next
  return list
}
```
---
class: center, middle
## What's the performance?
---
#### Singly Linked List: Performance

| Operation                     | Method     | Performance  |
|-------------------------------|------------|--------------|
| Create a list of `n` items    | `cons`     | `O(n)`       |
| Get the first item            | `head`     | `O(1)`       |
| Get the last item             | `last`     | `O(n)`       |
| Add a value to the beginning  | `unshift`  | `O(1)`       |
| Add a value to the end        | `push`     | `O(n)`       |
| Find the index of a value     | `indexOf`  | `O(n)`       |
| Combine two lists             | `concat`   | `O(n)`       |
| Remove an item                | `remove`   | `O(n)`       |
---