class: center, middle
# <img src="images/undux.png" width="50%" />
## By Boris Cherny
### @bcherny - github.com/bcherny
---
class: middle
# Plan
1. Problems with Flux & Redux
2. How Undux solves these problems
3. Architecture
4. Usage
5. Flux, Redux, Relay: before & after
6. Scaling it
---
class: center, middle
## 1. Problems with Flux & Redux
---
<legend>1. Problems with Flux & Redux</legend>
- Globs of boilerplate
---
<legend>1. Problems with Flux & Redux</legend>
- Globs of boilerplate
- Really hard to type safely
---
<legend>1. Problems with Flux & Redux</legend>
- Globs of boilerplate
- Really hard to type safely
- Actions, creators, types, reducers, callers spread across lots of files
---
<legend>1. Problems with Flux & Redux</legend>
- Globs of boilerplate
- Really hard to type safely
- Actions, creators, types, reducers, callers spread across lots of files
- <font color="#ff005a">Makes easy things hard!</font>
---
class: center, middle
## 2. How Undux solves these problems
---
<legend>2. How Undux solves these problems</legend>
- ~~<font color="#999">Globs of boilerplate</font>~~ Near-zero boilerplate
- <font color="#999">Really hard to type safely</font>
- <font color="#999">Actions, creators, types, reducers, callers spread across lots of files</font>
- <font color="#999">Makes easy things hard!</font>
---
<legend>2. How Undux solves these problems</legend>
- ~~<font color="#999">Globs of boilerplate</font>~~ Near-zero boilerplate
- ~~<font color="#999">Really hard to type safely</font>~~ 100% typesafe
- <font color="#999">Actions, creators, types, reducers, callers spread across lots of files</font>
- <font color="#999">Makes easy things hard!</font>
---
<legend>2. How Undux solves these problems</legend>
- ~~<font color="#999">Globs of boilerplate</font>~~ Near-zero boilerplate
- ~~<font color="#999">Really hard to type safely</font>~~ 100% typesafe
- ~~<font color="#999">Actions, creators, types, reducers, callers spread across lots of files</font>~~ <br />Do everything right in your view
- <font color="#999">Makes easy things hard!</font>
---
<legend>2. How Undux solves these problems</legend>
- ~~<font color="#999">Globs of boilerplate</font>~~ Near-zero boilerplate
- ~~<font color="#999">Really hard to type safely</font>~~ 100% typesafe
- ~~<font color="#999">Actions, creators, types, reducers, callers spread across lots of files</font>~~ <br />Do everything right in your view
- ~~<font color="#999">Makes easy things hard!</font>~~ <br /><font color="#006def" style="font-size:48px">Makes hard things easy.</font>
---
class: center, middle
## 3. Architecture
---
class: center, middle
<legend>3. Architecture</legend>
<img src="images/undux-flow-with-effects.png" width="60%" />
---
class: middle
<legend>3. Architecture</legend>
<img src="images/single-node-view.png" height="130" />
- `React.Component`
- Reads from the <font color="red">store</font>
- Writes to the <font color="red">store</font>
---
class: middle
<legend>3. Architecture</legend>
<img src="images/single-node-store.png" height="130" />
- `createStore()`
- Updated by the <font color="green">view</font>
- Re-renders the <font color="green">view</font>
---
class: middle
<legend>3. Architecture</legend>
<img src="images/single-node-effects.png" height="130" />
- Subscribe to changes to specific fields
- Or, subscribe to a set of fields
- A reactive way to listen to changes
---
class: center, middle
## 4. Usage
---
class: center, middle
<legend>4. Usage</legend>
### Let's build composer.
---
class: center, middle
<legend>4. Usage</legend>
<img src="images/composer.png" width="100%" />
---
class: center, middle
<legend>4. Usage</legend>
### Step 1: Create a store
---
class: center
<legend>4. Usage</legend>
```ts
// composerStore.js
```
---
class: center
<legend>4. Usage</legend>
```ts
// composerStore.js

*const { createStore } = require('undux')
```
---
class: center
<legend>4. Usage</legend>
```ts
// composerStore.js

const { createStore } = require('undux')

*type State = {
* isNextEnabled: boolean,
* text: string
*}
```
---
class: center
<legend>4. Usage</legend>
```ts
// composerStore.js

const { createStore } = require('undux')

type State = {
  isNextEnabled: boolean,
  text: string
}

*const initialState: State = {
* isNextEnabled: false,
* text: ''
*}
```
---
class: center
<legend>4. Usage</legend>
```ts
// composerStore.js

const { createStore } = require('undux')

type State = {
  isNextEnabled: boolean,
  text: string
}

const initialState: State = {
  isNextEnabled: false,
  text: ''
}

*const store = createStore(initialState)
```
---
class: center
<legend>4. Usage</legend>
```ts
// composerStore.js

*const { connect, createStore } = require('undux')

type State = {
  isNextEnabled: boolean,
  text: string
}

const initialState: State = {
  isNextEnabled: false,
  text: ''
}

const store = createStore(initialState)

*module.exports.withStore = connect(store)
```
---
class: center, middle
<legend>4. Usage</legend>
### Step 2: Connect the store
---
class: center, middle
<legend>4. Usage</legend>
<img src="images/composer-annotated-3.png" width="100%" />
---
class: center
<legend>4. Usage</legend>
```jsx
// composer.react.js

class Composer extends React.Component {
  render() {
    return <>
      <Editor>
        <Avatar />
        <Textbox />
      </Editor>
      <Sproutbar />
      <Button />
    </>
  }
}
```
---
class: center
<legend>4. Usage</legend>
```jsx
// composer.react.js

*const Composer = withStore(
  class Composer extends React.Component {
    render() {
      return <>
        <Editor>
          <Avatar />
          <Textbox />
        </Editor>
        <Sproutbar />
        <Button />
      </>
    }
  }
*)
```
---
class: center
<legend>4. Usage</legend>
```jsx
// composer.react.js

const Composer = withStore(
  class Composer extends React.Component {
    render() {
*     const {store} = this.props
      return <>
        <Editor>
          <Avatar />
*         <Textbox value={store.get('text')} />
        </Editor>
        <Sproutbar />
        <Button />
      </>
    }
  }
)
```
---
class: center
<legend>4. Usage</legend>
```jsx
// composer.react.js

const Composer = withStore(
  class Composer extends React.Component {
    render() {
      const {store} = this.props
      return <>
        <Editor>
          <Avatar />
          <Textbox value={store.get('text')}
*                  onChange={store.set('text')} />
        </Editor>
        <Sproutbar />
        <Button />
      </>
    }
  }
)
```
---
class: center
<legend>4. Usage</legend>
```jsx
// composer.react.js

const Composer = withStore(
  class Composer extends React.Component {
    render() {
      const {store} = this.props
      return <>
        <Editor>
          <Avatar />
          <Textbox value={store.get('text')}
                   onChange={store.set('text')} />
        </Editor>
        <Sproutbar />
*       <Button disabled={!store.get('isNextEnabled')} />
      </>
    }
  }
)
```
---
class: center, middle
<legend>4. Usage</legend>
### ✨ Step 3: Effects ✨
---
class: center
<legend>4. Usage</legend>
```jsx
// composerEffects.js
```
---
class: center
<legend>4. Usage</legend>
```jsx
// composerEffects.js

*import type {Plugin} from 'undux'
*import type {State} from 'composerStore'
```
---
class: center
<legend>4. Usage</legend>
```jsx
// composerEffects.js

import type {Plugin} from 'undux'
import type {State} from 'composerStore'

*const withEffects: Plugin<State> = store => {
*
*}
```
---
class: center
<legend>4. Usage</legend>
```jsx
// composerEffects.js

import type {Plugin} from 'undux'
import type {State} from 'composerStore'

const withEffects: Plugin<State> = store => {
* store
*   .on('text')
}
```
---
class: center
<legend>4. Usage</legend>
```jsx
// composerEffects.js

import type {Plugin} from 'undux'
import type {State} from 'composerStore'

const withEffects: Plugin<State> = store => {
  store
    .on('text')
*   .subscribe(text =>
*
*   )
}
```
---
class: center
<legend>4. Usage</legend>
```jsx
// composerEffects.js

import type {Plugin} from 'undux'
import type {State} from 'composerStore'

const withEffects: Plugin<State> = store => {
  store
    .on('text')
    .subscribe(text =>
*     store.set('isNextEnabled')(text !== '')
    )
}
```
---
class: center
<legend>4. Usage</legend>
```jsx
// composerEffects.js

import type {Plugin} from 'undux'
import type {State} from 'composerStore'

const withEffects: Plugin<State> = store => {
  store
    .on('text')
    .subscribe(text =>
      store.set('isNextEnabled')(text !== '')
    )
* return store
}
```
---
class: center
<legend>4. Usage</legend>
```jsx
// composerEffects.js

import type {Plugin} from 'undux'
import type {State} from 'composerStore'

const withEffects: Plugin<State> = store => {
  store
    .on('text')
    .subscribe(text =>
      store.set('isNextEnabled')(text !== '')
    )
  return store
}

*module.exports.withEffects = withEffects
```
---
class: center
<legend>4. Usage</legend>
```jsx
// composerStore.js

const { connect, createStore } = require('undux')

type State = {
  isNextEnabled: boolean,
  text: string
}

const initialState: State = {
  isNextEnabled: false,
  text: ''
}

const store = createStore(initialState)

module.exports.withStore = connect(store)
```
---
class: center
<legend>4. Usage</legend>
```jsx
// composerStore.js

const { connect, createStore } = require('undux')

*export type State = {
  isNextEnabled: boolean,
  text: string
}

const initialState: State = {
  isNextEnabled: false,
  text: ''
}

const store = createStore(initialState)

module.exports.withStore = connect(store)
```
---
class: center
<legend>4. Usage</legend>
```jsx
// composerStore.js

const { connect, createStore } = require('undux')
*const { withEffects } = require('composerEffects')

export type State = {
  isNextEnabled: boolean,
  text: string
}

const initialState: State = {
  isNextEnabled: false,
  text: ''
}

*const store = withEffects(createStore(initialState))

module.exports.withStore = connect(store)
```
---
class: center, middle
<legend>4. Usage</legend>
### <font color="#006def" style="font-size:48px">Done.</font>
---
class: center, middle
## 5. Flux, Redux, Relay <br />before & after
---
class: center, middle
<legend>5. <u>Flux</u>, Redux, Relay before & after</legend>
### Flux
---
class: center, middle
<legend>5. <u>Flux</u>, Redux, Relay before & after</legend>
<img src="images/flux-flow.png" width="60%" />
---
class: center, middle
<legend>5. <u>Flux</u>, Redux, Relay before & after</legend>
<img src="images/flux-flow-expanded-0.png" width="75%" />
---
class: center, middle
<legend>5. <u>Flux</u>, Redux, Relay before & after</legend>
<img src="images/flux-flow-expanded-1.png" width="75%" />
---
class: center, middle
<legend>5. <u>Flux</u>, Redux, Relay before & after</legend>
<img src="images/flux-flow-expanded-2.png" width="75%" />
---
class: center, middle
<legend>5. <u>Flux</u>, Redux, Relay before & after</legend>
<img src="images/flux-flow-expanded-3.png" width="75%" />
---
<legend>5. <u>Flux</u>, Redux, Relay before & after</legend>

## Eg. `FluxReduceStore`

<small>
- **Action creators:** CompassionResourceActions.js (69 LoC)
- **Action types:** CompassionMessageContextTypes.js (25 LoC)
- **Dispatcher:** CompassionResourceDispatcher.js (19 LoC)
- **Store:** CompassionResourceStore.js (97 LoC)
- **Container:** withCompassionResourceLoCation.js (42 LoC)

</small>
---
<legend>5. <u>Flux</u>, Redux, Relay before & after</legend>

## Eg. `FluxReduceStore`

<small>
- **Action creators:** CompassionResourceActions.js (~~69~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> LoC)
- **Action types:** CompassionMessageContextTypes.js (~~25~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> LoC)
- **Dispatcher:** CompassionResourceDispatcher.js (~~19~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> LoC)
- **Store:** CompassionResourceStore.js (~~97~~ <font color="#006def" style="font-size:28px; line-height: 20px;">71</font> LoC)
- **Container:** withCompassionResourceLoCation.js (~~42~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> LoC)

</small>

## Before: 252 LoC

## <font color="#006def">After: 71 LoC (70% less!)</font>
---
class: middle
<legend>5. <u>Flux</u>, Redux, Relay before & after</legend>

## For example: `FluxReduceStore` <br />+ data plugins

- Action creators: `AdBreakPortalActions.js` (231 -> 103 LoC)
- Action types: `AdBreakPortalActionTypes.js` (33 -> 0 LoC)
- Store & container: `AdBreakPortalInsightsStore.js` (219 -> 101 LoC)

60% Less Code!
---
class: center, middle
<legend>5. Flux, <u>Redux</u>, Relay before & after</legend>
### Redux
---
class: center, middle
<legend>5. Flux, <u>Redux</u>, Relay before & after</legend>
<img src="images/redux-flow.png" width="60%" />
