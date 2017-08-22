class: center, middle

# ☙ Why <img src='images/ts.svg' width='100px' style='margin-bottom: -10px;' /> ☙
## (and not JavaScript)

### by Boris
### [boris@lease.ly](mailto:boris@lease.ly)
### [github.com/bcherny](https://github.com/bcherny)

---
class: center
# 1
## Atwood's Law

> "Any application that can be written in JavaScript, will eventually be written in JavaScript."

<small class='right'>https://blog.codinghorror.com/the-principle-of-least-power/</small>
---
class: center
# 2
<img src='images/js-dead.png' width='100%' />
---
class: center
# 3
<img src='images/dt.png' width='100%' />
---
class: center
# 4
<img src='images/coolts.png' width='100%' />
---
class: center, middle
# 1. atwood's law
---
#### 1. atwood's law
<img src='images/atom.png' style='float: left; width: 50%' />
<img src='images/vscode.png' style='float: right; width: 50%' />
<img src='images/vimjs.png' style='float: right; width: 50%' />
---
#### 1. atwood's law
<img src='images/gta.png' style='float: left; width: 50%' />
<img src='images/quake.png' style='float: right; width: 50%' />
---
#### 1. atwood's law
<img src='images/jvmjs.png' style='float: left; width: 50%' />
<img src='images/webkitjs.png' style='float: right; width: 50%' />
---
#### 1. atwood's law
<img src='images/win95.png' style='float: left; width: 50%' />
<img src='images/runtimejs.png' style='float: right; width: 50%' />
<img src='images/nodeos.png' style='float: left; width: 50%' />
---
#### 1. atwood's law
<img src='images/gitlet.png' style='float: left; width: 50%' />
<img src='images/pypy.png' style='float: right; width: 50%' />
---
class: center, middle
# 2. js is dead
---
#### 2. js is dead

### Because of: Dart, Kotlin, GopherJS, ScalaJS, Elm, PureScript, GHCJS, Fable, Reason, ClojureScript, CoffeeScript, Emscripten, LiveScript, Kaffeine, MoeScript, Ki, Jisp, Ham, GorillaScript, RedScript, TypeScript, Flow, LiteScript, TaJaS, JavaScript++, Mascara, Roy, Swym, ActionScript, BuckleScript, Opal, RubyJS, Pyjamas, Shen, LuvvieScript, ElixirScript, Perlito, P2JS, GWT, STJS, Ceylon, JSC, Script#, Wisp, Fargo, Whalesong, ESLisp, Ralph, Amber, Clamato, Haxe, Nim
---
#### 2. js is dead
## Q: Why compile-to-JS?
---
#### 2. js is dead
## Q: Why compile-to-JS?
## A: Because:

```js
for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}
// 4
// 4
// 4
// 4
```
---
#### 2. js is dead
## Q: Why compile-to-JS?
## A: Because:

```js
[] + []
// ""
```
---
#### 2. js is dead
## Q: Why compile-to-JS?
## A: Because:

```js
[42] == 42
// true
```
---
#### 2. js is dead
## Q: Why compile-to-JS?
## A: Because:

```js
typeof null
// "object"
```
---
#### 2. js is dead
## Q: Why compile-to-JS?
## A: Because:

```js
.1 + .2 === .3
// false
```
---
#### 2. js is dead
## Q: Why compile-to-JS?
## A: Because:

```js
9999999999999999
// 10000000000000000
```
---
#### 2. js is dead
## Q: Why compile-to-JS?
## A: Because:

```js
Math.max()              // Infinity
Math.min()              // -Infinity
Math.max() > Math.min() // false
```
---
#### 2. js is dead
## Q: Why compile-to-JS?
## A: Because:

```js
function myFunction() {}
myFonction() // runtime error
```
---
class: center, middle
# 3. Typings
---
#### 3. typings
BuckleScript: 29
---
#### 3. typings
BuckleScript: 29

Flow: 304
---
#### 3. typings
BuckleScript: 29

Flow: 304

Elm: 558 ish
---
#### 3. typings
BuckleScript: 29

Flow: 304

Elm: 558 ish

ScalaJS: 662
---
#### 3. typings
BuckleScript: 29

Flow: 304

Elm: 558 ish

ScalaJS: 662

**TypeScript: 3,481**
---
#### 3. typings
BuckleScript: 29

Flow: 304

Elm: 558 ish

ScalaJS: 662

**TypeScript: 3,481**

**Reason: Use DefinitelyTyped or FlowTyped**
---
#### 3. typings
BuckleScript: 29

Flow: 304

Elm: 558 ish

ScalaJS: 662

**TypeScript: 3,481**

**Reason: Use DefinitelyTyped or FlowTyped**

**Dart: Use DefinitelyTyped**
---
#### 3. typings
BuckleScript: 29

Flow: 304

Elm: 558 ish

ScalaJS: 662

**TypeScript: 3,481**

**Reason: Use DefinitelyTyped or FlowTyped**

**Dart: Use DefinitelyTyped**

**Kotlin: Use DefinitelyTyped**
---
#### 3. typings
BuckleScript: 29

Flow: 304

Elm: 558 ish

ScalaJS: 662

**TypeScript: 3,481**

**Reason: Use DefinitelyTyped or FlowTyped**

**Dart: Use DefinitelyTyped**

**Kotlin: Use DefinitelyTyped**

(NPM: 537,436)
#😵😵😵
---
class: center, middle
# 4. <img src='images/ts.svg' width='100px' style='margin-bottom: -10px;' /> is awesome.
---
#### <img src='images/ts.svg' width='20px' style='margin: 0 1px -2px 0;' /> is awesome.
### Powerful structural types
```ts
function bark(animal: { bark(): string }) {
  ...
}
```
---
#### <img src='images/ts.svg' width='20px' style='margin: 0 1px -2px 0;' /> is awesome.
### Mixins
```ts
interface Barks {
  bark(): string
}

interface Walks {
  walk(steps: number): boolean
}

class Dog implements Barks, Walks {...}
```
---
#### <img src='images/ts.svg' width='20px' style='margin: 0 1px -2px 0;' /> is awesome.
### Flowed types, discriminated unions
```ts
function setHTML(html: string) {
  let element = document.querySelector('#app')

  if (element == null) {
    return
  }

  element.innerHTML = html
}
```
---
#### <img src='images/ts.svg' width='20px' style='margin: 0 1px -2px 0;' /> is awesome.
### JSX
```ts
let Button = () =>
  <button className='Button' />
```
---
#### <img src='images/ts.svg' width='20px' style='margin: 0 1px -2px 0;' /> is awesome.
### Product & sum types
```ts
type Language = 'English' | 'Japanese'

function greet(language: Language) {
  switch (language) {
    case 'English': return 'Hello!'
    case 'Japanese': return 'Konichiwa!'
  }
}
```
---
#### <img src='images/ts.svg' width='20px' style='margin: 0 1px -2px 0;' /> is awesome.
### Constrained & parametric polymorphism
```ts
type PossibleColors = 'Black' | 'Brown' | 'Red'

class Dog<Color extends PossibleColors> { }

let a = new Dog<'Red'>()  // Ok
let b = new Dog<'Blue'>() // Error
```
---
#### <img src='images/ts.svg' width='20px' style='margin: 0 1px -2px 0;' /> is awesome.
### Literal types (incomplete Flow support, incomplete Haskell support, Dotty)
```ts
function first(array: [3]) {
  return array[0]
}

first([3]) // Ok
first([7]) // Error
```
---
#### <img src='images/ts.svg' width='20px' style='margin: 0 1px -2px 0;' /> is awesome.
### Read-only types (no Flow support)
```ts
function handle(event: MouseEvent) {
  event.which = 3 // Error
}
```
---
#### <img src='images/ts.svg' width='20px' style='margin: 0 1px -2px 0;' /> is awesome.
### Mapped types (Adris's dependent types??)
```ts
interface MyObject {
  a: number
  b: string
  c: boolean
}

let myObject: MyObject = {
  a: 42,
  b: 'foo',
  c: true
}

function value<K extends keyof MyObject>(key: K): MyObject[K] {
  return myObject[key]
}

value('c') // boolean
```
---
#### <img src='images/ts.svg' width='20px' style='margin: 0 1px -2px 0;' /> is awesome.
### Higher kinded types?? ([TypeScript/issues/1213](https://github.com/Microsoft/TypeScript/issues/1213))
```ts
interface Monad<T<*>> {
  map<A, B>(f: (a: A) => B): T<A> => T<B>
  lift<A>(a: A): T<A>
  join<A>(tta: T<T<A>>): T<A>
}
```
---
class: center, middle
# Thanks
### [boris@lease.ly](mailto:boris@lease.ly)
### [github.com/bcherny](https://github.com/bcherny)