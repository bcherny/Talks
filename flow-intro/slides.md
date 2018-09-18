class: center, middle
# An introduction to Flow
## Boris Cherny
### @bcherny
---
class: center, middle
# <img src="images/flow-logo.png" style="margin:-25% 0 0 -20%;width:140%" />
---
class: middle
## Plan
1. The problem
2. The solution
3. How it works
4. Type system features
5. Common patterns
6. Common pitfalls
---
class: center, middle
## 1. The problem
---
<legend>1. The problem</legend>
```js
class MyComponent extends React.Component {
  state = {events: {}}
  render() {
    return <div>
      <p>Today is: {this.props.day}/{this.props.month}/{this.props.year}</p>
      <p>Today's events are:</p>
      <ul>{this.events.map(event => <li>{event.name}</li></ul>
      <MonthPicker year={this.props.year} month={this.props.moth} />
      <button onClick={this.refresh}>Refresh</button>
    </div>
  }
  async refresh = () => {
    const events = this.fetchEvents()
    this.setState({
      events: events
    })
  }
  fetchEvents() {
    new AsyncRequest().setURI('/uri')
      .setData({
        month: this.props.month,
        date: this.props.date,
        yer: this.props.yer
      })
      .setMethod('POST').exec();
  }
}
```
---
<legend>1. The problem</legend>
```js
class MyComponent extends React.Component {
* state = {events: {}}
  render() {
    return <div>
      <p>Today is: {this.props.day}/{this.props.month}/{this.props.year}</p>
      <p>Today's events are:</p>
*     <ul>{this.events.map(event => <li>{event.name}</li></ul>
*     <MonthPicker year={this.props.year} month={this.props.moth} />
      <button onClick={this.refresh}>Refresh</button>
    </div>
  }
  async refresh = () => {
*   const events = this.fetchEvents()
    this.setState({
      events: events
    })
  }
  fetchEvents() {
*   new AsyncRequest().setURI('/uri')
      .setData({
        month: this.props.month,
*       date: this.props.date,
*       yer: this.props.yer
      })
      .setMethod('POST').exec();
  }
}
```
---
class: center, middle
## 2. The solution
---
class: center, middle
# <img src="images/flow-logo.png" style="margin:-25% 0 0 -20%;width:140%" />
---
<legend>2. The solution</legend>
```js
// @flow

type Props = {|
  day: number,
  month: number,
  year: number
|}

type State = {|
  events: Array<{name: string}>
|}

class MyComponent extends React.Component<Props, State> {
  // ...
}
```
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
class: middle
<legend>3. How it works</legend>
Flow *unifies* your types
```js
function a(x) { // x must be a number or a string
  return x + 4  // the return type must be a number or a string
}
```
---
class: middle
<legend>3. How it works</legend>
Flow *unifies* your types
```js
function a(x) { // x must be a number | string
  return x + 4  // the return type must be a number | string
}
```
---
class: middle
<legend>3. How it works</legend>
Flow *unifies* your types
```js
function a(x) { // x must be a number | string
  return x + 4  // the return type must be a number | string
}

*a(42)
```
---
class: middle
<legend>3. How it works</legend>
Flow *unifies* your types
```js
function a(x) { // x must be a number
  return x + 4  // the return type must be a number
}

*a(42)
```
---
class: middle
<legend>3. How it works</legend>
Flow *unifies* your types
```js
function a(x) { // x must be a string
  return x + 4  // the return type must be a string
}

*a('foo')
```
---
class: middle
<legend>3. How it works</legend>
Flow *unifies* your types
```js
function a(x) { // x must be a number | string
  return x + 4  // the return type must be a number | string
}

*a(42)
a('foo')
```
---
class: middle
<legend>3. How it works</legend>
Flow *unifies* your types
```js
*function a(x: number): number { // x must be a number
  return x + 4  // the return type must be a number
}

a(42)
a('foo') // Error: Cannot call a with 'foo' bound to x because
         //        string is incompatible with number.
```
---
class: middle
<legend>3. How it works</legend>
Flow takes *control flow* into account
```js
function a(x: number | string): number | string {
  if (typeof x === 'number') {
    return x * 4 // x must be a number
  }
  return x.toUpperCase() // x must be a string
}

a(42) // number | string
a('x') // number | string
```
---
class: middle
<legend>3. How it works</legend>
Flow takes *control flow* into account
```js
function a(x: number | string): number | string {
  if (typeof x === 'number') {
    return x * 4 // x must be a number
  }
  return x.toUpperCase() // x must be a string
}

a(42) // number | string
a('x') // number | string
```
