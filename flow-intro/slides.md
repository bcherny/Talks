class: center, middle
# Flow: The 10-minute Intro
## By @bcherny
---
class: middle
## Outline
1. The problem
2. The solution
3. How it works
4. Features
5. Common patterns
6. Common pitfalls
---
class: center, middle
## 1. The problem
---
class: middle
<legend>1. The problem</legend>
```js
function MyComponent(props) {
  const [events, setEvents] = useState({})

  function refresh() {
    const events = fetchEvents()
    setEvents(events)
  }

  return <div>
    <p>Today is: {this.props.day}/{this.props.month}/{this.props.year}</p>
    <p>Today's events are:</p>
    <ul>{events.map(event => <li>{event.name}</li></ul>
    <MonthPicker year={props.year} month={props.moth} />
    <button onClick={refresh()}>Refresh</button>
  </div>
}
```
---
class: middle
<legend>1. The problem</legend>
```js
function MyComponent(props) {
* const [events, setEvents] = useState({})

  function refresh() {
    const events = fetchEvents()
    setEvents(events)
  }

  return <div>
*   <p>Today is: {this.props.day}/{this.props.month}/{this.props.year}</p>
    <p>Today's events are:</p>
*   <ul>{events.map(event => <li>{event.name}</li></ul>
*   <MonthPicker year={props.year} month={props.moth} />
*   <button onClick={refresh()}>Refresh</button>
  </div>
}
```
---
class: middle
<legend>1. The problem</legend>
```js
function confuseEngineer() {
  if (typeof arguments[0] === 'number') {
    return [3]
  } else if (typeof arguments[1] !== 'string') {
    return confuseEngineer(arguments[2])
  }
  return [] + 4
}
```
---
class: center, middle
## 2. The solution
---
class: center, middle
# <img src="images/flow-logo.png" style="margin:-25% 0 0 -20%;width:140%" />
---
class: center, middle
## 3. How it works
---
class: middle
<legend>3. How it works</legend>
`@flow` tells Flow to typecheck your file
```js
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @fbt {"project": "tribes"}
* * @flow
 * @format
 */

...
```
---
<legend>3. How it works</legend>
<span class="PadTop">Flow *unifies* your types\*</span>
```js
function a(x) {
  return x + 4
}
```
---
<legend>3. How it works</legend>
<span class="PadTop">Flow *unifies* your types\*</span>
```js
function a(x) { // x must be a number | string
  return x + 4  // the return type must be a number | string
}
```
---
<legend>3. How it works</legend>
<span class="PadTop">Flow *unifies* your types\*</span>
```js
function a(x) { // x must be a number
  return x + 4  // the return type must be a number
}

*a(42)
```
---
<legend>3. How it works</legend>
<span class="PadTop">Flow *unifies* your types\*</span>
```js
function a(x) { // x must be a string
  return x + 4  // the return type must be a string
}

*a('foo')
```
---
<legend>3. How it works</legend>
<span class="PadTop">Flow *unifies* your types\*</span>
```js
function a(x) { // x must be a number | string
  return x + 4  // the return type must be a number | string
}

*a(42)
a('foo')
```
---
<legend>3. How it works</legend>
<span class="PadTop">Flow *unifies* your types\*</span>
```js
*function a(x: number): number { // x must be a number
  return x + 4  // the return type must be a number
}

a(42)
a('foo') // Error: Cannot call a with 'foo' bound to x because
         //        string is incompatible with number.
```
---
<legend>3. How it works</legend>
<span class="PadTop">Flow takes *control flow* into account</span>
```js
function a(x: number | string): number | string {
* if (typeof x === 'number') {
    return x * 4 // x must be a number
  }
* return x.toUpperCase() // x must be a string
}

a(42) // number | string
a('x') // number | string
```
---
<legend>3. How it works</legend>
<span class="PadTop">Like Hack, Flow requires annotations for module exports</span>
```js
function a(x) {
  if (typeof x === 'number') {
    return x * 4
  }
  return x.toUpperCase()
}

*module.exports = a // Error: Missing type annotation for x.
*                  //        Missing type annotation at function return.
```
---
<legend>3. How it works</legend>
<span class="PadTop">Like Hack, Flow requires annotations for module exports</span>
```js
*function a(x: number | string): number | string {
  if (typeof x === 'number') {
    return x * 4
  }
  return x.toUpperCase()
}

module.exports = a

```
---
<legend>3. How it works</legend>
<span class="PadTop">We *strip* Flow types at runtime</span>
```js
// Before (in Nuclide)
*function a(x: number | string): number | string {
  if (typeof x === 'number') {
    return x * 4
  }
  return x.toUpperCase()
}

// After (in Sandbox & Prod)
*function a(x) {
  if (typeof x === 'number') {
    return x * 4
  }
  return x.toUpperCase()
}
```
---
class: center, middle
## 4. Features
---
<legend>4. Features</legend>
<span class="PadTop">Type annotations</span>
```js
function a(b: {|c: number|}): {|d: boolean|} {
  // ...
}
```

<small>Hack equivalent</small>
```js
class A {
  public function a(shape('c' => num) $b): shape('d' => bool) {
    // ...
  }
}
```
---
<legend>4. Features</legend>
<span class="PadTop">Type aliases</span>
```js
type MyType = number
type MyOther = string
```

<small>Hack equivalent</small>
```js
class A {
  const type MyType = num;
  const type MyOther = string;
}
```
---
<legend>4. Features</legend>
<span class="PadTop">Union types</span>
```js
type NumberOrStringOrBoolean = number | string | boolean
```
<small>Hack equivalent (sort of)</small>
```js
interface NumberOrStringOrBoolean {}
interface Number extends NumberOrStringOrBoolean {}
interface String extends NumberOrStringOrBoolean {}
interface Boolean extends NumberOrStringOrBoolean {}
```
---
<legend>4. Features</legend>
<span class="PadTop">Spread types</span>
```js
type User = {| userID: FBID |}
type Name = {| name: string |}
type UserWithName = {| ...User, ...Name |}

// Equivalent to:
type UserWithName = {| userID: FBID, name: string |}
```
<small>Hack equivalent (sort of)</small>
```js
interface User {
  public FBID $userID;
}
interface Name {
  public string $name;
}
trait UserWithName {
  require extends User;
  require extends Name;
}
```
---
<legend>4. Features</legend>
<span class="PadTop">Type queries</span>
```js
const user = {userID: 3}

type User = typeof user // {userID: number, [string]: any}
```

<small>Compiles to:</small>
```js
const user = {userID: 3}
```
---
<legend>4. Features</legend>
<span class="PadTop">Explicit type annotations</span>
```js
const n: number = 4

type User = {| userID: number |}
const user: User = {userID: 3}
```
---
<legend>4. Features</legend>
<span class="PadTop">Explicit type parameter annotations</span>
```js
function a<T>(x: T): T {
  return x
}

a<number>(4)
```
---
<legend>4. Features</legend>
<span class="PadTop">Literal types</span>
```js
type Day =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday'

const a: Day = 'Friday'
const b: Day = 'Sun' // Error: Cannot assign 'Sun' to b
```
---
<legend>4. Features</legend>
<span class="PadTop">Utility types</span>
```js
type User = {| name: string, userID: FBID |}

// Type of object's keys
type UserFields = $Keys<User>                // 'name' | 'userID'
const a: UserFields = 'name'                 // OK
const b: UserFields = 'name2'                // Error!

// Type of object's values
type UserTypes = $Values<User>               // string | FBID

// Type of a value at a specific key
type NameType = $ElementType<User, 'userID'> // FBID
```

<small>See https://flow.org/en/docs/types/utilities</small>
---
class: center, middle
## 5. Common patterns
---
<legend>5. Common patterns</legend>
<span class="PadTop">React components</span>
```js
type Props = {|
  a: number
|}

function MyComponent(props: Props) {
  const [a, useA] = useState(3)
  // ...
}
```
---
<legend>5. Common patterns</legend>
<span class="PadTop">React components</span>
```js
type Props = {|
  a: number
|}

function MyComponent(props: Props) {
  const [a, useA] = useState<$ReadOnlyArray<number>>([3])
  // ...
}
```
---
class: center, middle
## 6. Common pitfalls
---
<legend>6. Common pitfalls</legend>
<span class="PadTop"></span>
- Avoid `any`/`Function`/`Object`/`*` like 🔥

```js
// Bad
type A = any
type B = Object
type C = *
type D = Function

// Good
type A = mixed
type B = {|b: string|}
type C = mixed
type D = number => string
```

<small>We use `@flow strict-local` to enforce this.</small>
---
<legend>6. Common pitfalls</legend>
<span class="PadTop"></span>
- Avoid `{}`, use `{||}` instead
- Avoid `&`, use `...` instead

```js
// Bad
type A = {a: number}
type B = {b: string}
type C = A & B

// Good
type A = {|a: number|}
type B = {|b: string|}
type C = {|...A, ...B|}
```

<small>We have a lint rule to enforce this.</small>
---
<legend>6. Common pitfalls</legend>
<span class="PadTop"></span>
- Avoid `{}`, use `{||}` instead
- Avoid `&`, use `...` instead

| Flow | Hack |
|--|--|
| `{a: number}` | `shape('a' => num, ...)` |
| `{︳a: number︳}` | `shape('a' => num)` |
---
<span class="PadTop"></span>
## Thanks! 🎉

Flow docs: [flow.org](https://flow.org)
