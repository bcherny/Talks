class: center, middle
# <img src="images/undux.png" width="50%" />
## By Boris Cherny
### @bcherny - github.com/bcherny
---
class: middle
# Plan
1. Problems
2. Solutions
3. Architecture
4. Usage
5. Flux & Redux, before & after
6. Reactivity
---
class: center, middle
## 1. Problems
---
<legend>1. Problems</legend>
- Globs of boilerplate
---
<legend>1. Problems</legend>
- Globs of boilerplate
- Really hard to type safely
---
<legend>1. Problems</legend>
- Globs of boilerplate
- Really hard to type safely
- Actions, creators, types, reducers, callers spread across lots of files
---
<legend>1. Problems</legend>
- Globs of boilerplate
- Really hard to type safely
- Actions, creators, types, reducers, callers spread across lots of files
- <font color="#ff005a">Makes easy things hard!</font>
---
class: center, middle
## 2. Solutions
---
<legend>2. Solutions</legend>
- ~~<font color="#999">Globs of boilerplate</font>~~ Near-zero boilerplate
- <font color="#999">Really hard to type safely</font>
- <font color="#999">Actions, creators, types, reducers, callers spread across lots of files</font>
- <font color="#999">Makes easy things hard!</font>
---
<legend>2. Solutions</legend>
- ~~<font color="#999">Globs of boilerplate</font>~~ Near-zero boilerplate
- ~~<font color="#999">Really hard to type safely</font>~~ 100% typesafe
- <font color="#999">Actions, creators, types, reducers, callers spread across lots of files</font>
- <font color="#999">Makes easy things hard!</font>
---
<legend>2. Solutions</legend>
- ~~<font color="#999">Globs of boilerplate</font>~~ Near-zero boilerplate
- ~~<font color="#999">Really hard to type safely</font>~~ 100% typesafe
- ~~<font color="#999">Actions, creators, types, reducers, callers spread across lots of files</font>~~ <br />Do everything right in your view
- <font color="#999">Makes easy things hard!</font>
---
<legend>2. Solutions</legend>
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
<img src="images/undux-flow-with-effects.png" width="80%" />
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
- React to changes to specific fields
- Or, react to a set of fields
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

*const {connect, createStore} = require('undux')

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
*const {withStore} = require('composerStore')

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
const {withStore} = require('composerStore')

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
const {withStore} = require('composerStore')

const Composer = withStore(
  class Composer extends React.Component {
    render() {
      const {store} = this.props
      return <>
        <Editor>
          <Avatar />
          <Textbox value={store.get('text')}
*                  onChange={value =>
*                    store.set('text')(value)
*                  } />
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
const {withStore} = require('composerStore')

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
const {withStore} = require('composerStore')

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
*   .subscribe(text => {
*
*   })
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
    .subscribe(text => {
*     if (text === '') {
*       store.set('isNextEnabled')(false)
*     } else {
*       store.set('isNextEnabled')(true)
*     }
    })
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
    .subscribe(text => {
      if (text === '') {
        store.set('isNextEnabled')(false)
      } else {
        store.set('isNextEnabled')(true)
      }
    })
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
    .subscribe(text => {
      if (text === '') {
        store.set('isNextEnabled')(false)
      } else {
        store.set('isNextEnabled')(true)
      }
    })
  return store
}

*module.exports.withEffects = withEffects
```
---
class: center
<legend>4. Usage</legend>
```jsx
// composerStore.js

const {connect, createStore} = require('undux')

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

const {connect, createStore} = require('undux')

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

const {connect, createStore} = require('undux')
*const {withEffects} = require('composerEffects')

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
<legend>4. Usage</legend>
<video controls="true" src="images/nuclide-template.mov" width="100%" />
---
class: center, middle
## 5. Flux & Redux, <br />before & after
---
class: center, middle
<legend>5. <u>Flux</u> & Redux, before & after</legend>
### Flux
---
class: center, middle
<legend>5. <u>Flux</u> & Redux, before & after</legend>
<img src="images/flux-flow.png" width="60%" />
---
class: center, middle
<legend>5. <u>Flux</u> & Redux, before & after</legend>
<img src="images/flux-flow-expanded-0.png" width="75%" />
---
class: center, middle
<legend>5. <u>Flux</u> & Redux, before & after</legend>
<img src="images/flux-flow-expanded-1.png" width="75%" />
---
class: center, middle
<legend>5. <u>Flux</u> & Redux, before & after</legend>
<img src="images/flux-flow-expanded-2.png" width="75%" />
---
class: center, middle
<legend>5. <u>Flux</u> & Redux, before & after</legend>
<img src="images/flux-flow-expanded-3.png" width="75%" />
---
<legend>5. <u>Flux</u> & Redux, before & after</legend>

## Eg. `FluxReduceStore`

| Role | File | LoC |
|-------|------|-----|
| **Action creators** | CompassionResourceActions.js | 69 |
| **Action types** | CompassionMessageContextTypes.js | 25 |
| **Container** | withCompassionResourceLocation.js | 42 |
| **Dispatcher** | CompassionResourceDispatcher.js | 19 |
| **Store** | CompassionResourceStore.js | 97 |
|  | <b><right>Total</right></b> | <b>252</b> |

---
<legend>5. <u>Flux</u> & Redux, before & after</legend>

## Eg. `FluxReduceStore`

| Role | File | LoC |
|-------|------|-----|
| **Action creators** | CompassionResourceActions.js | ~~69~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Action types** | CompassionMessageContextTypes.js | 25 |
| **Container** | withCompassionResourceLocation.js | 42 |
| **Dispatcher** | CompassionResourceDispatcher.js | 19 |
| **Store** | CompassionResourceStore.js | 97 |
|  | <b><right>Total</right></b> | <b>252</b> |
---
<legend>5. <u>Flux</u> & Redux, before & after</legend>

## Eg. `FluxReduceStore`

| Role | File | LoC |
|-------|------|-----|
| **Action creators** | CompassionResourceActions.js | ~~69~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Action types** | CompassionMessageContextTypes.js | ~~25~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Container** | withCompassionResourceLocation.js | 42 |
| **Dispatcher** | CompassionResourceDispatcher.js | 19 |
| **Store** | CompassionResourceStore.js | 97 |
|  | <b><right>Total</right></b> | <b>252</b> |
---
<legend>5. <u>Flux</u> & Redux, before & after</legend>

## Eg. `FluxReduceStore`

| Role | File | LoC |
|-------|------|-----|
| **Action creators** | CompassionResourceActions.js | ~~69~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Action types** | CompassionMessageContextTypes.js | ~~25~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Container** | withCompassionResourceLocation.js | ~~42~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Dispatcher** | CompassionResourceDispatcher.js | 19 |
| **Store** | CompassionResourceStore.js | 97 |
|  | <b><right>Total</right></b> | <b>252</b> |
---
<legend>5. <u>Flux</u> & Redux, before & after</legend>

## Eg. `FluxReduceStore`

| Role | File | LoC |
|-------|------|-----|
| **Action creators** | CompassionResourceActions.js | ~~69~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Action types** | CompassionMessageContextTypes.js | ~~25~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Container** | withCompassionResourceLocation.js | ~~42~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Dispatcher** | CompassionResourceDispatcher.js | ~~19~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Store** | CompassionResourceStore.js | 97 |
|  | <b><right>Total</right></b> | <b>252</b> |
---
<legend>5. <u>Flux</u> & Redux, before & after</legend>

## Eg. `FluxReduceStore`

| Role | File | LoC |
|-------|------|-----|
| **Action creators** | CompassionResourceActions.js | ~~69~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Action types** | CompassionMessageContextTypes.js | ~~25~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Container** | withCompassionResourceLocation.js | ~~42~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Dispatcher** | CompassionResourceDispatcher.js | ~~19~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Store** | CompassionResourceStore.js | ~~97~~ <font color="#006def" style="font-size:28px; line-height: 20px;">71</font> |
|  | <b><right>Total</right></b> | <b>252</b> |
---
<legend>5. <u>Flux</u> & Redux, before & after</legend>

## Eg. `FluxReduceStore`

| Role | File | LoC |
|-------|------|-----|
| **Action creators** | CompassionResourceActions.js | ~~69~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Action types** | CompassionMessageContextTypes.js | ~~25~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Container** | withCompassionResourceLocation.js | ~~42~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Dispatcher** | CompassionResourceDispatcher.js | ~~19~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Store** | CompassionResourceStore.js | ~~97~~ <font color="#006def" style="font-size:28px; line-height: 20px;">71</font> |
|  | <b><right>Total</right></b> | ~~<b>252</b>~~ <font color="#006def">71</font> |
<right><font color="#006def" style="font-size:28px; line-height: 20px;">70% LESS CODE</font></right>
---
<legend>5. <u>Flux</u> & Redux, before & after</legend>

## Eg. `FluxReduceStore` <br />+ data plugins

| Role | File | LoC |
|-------|------|-----|
| **Action creators** | AdBreakPortalActions.js | 231 |
| **Action types** | AdBreakPortalActionTypes.js | 33 |
| **Store** | AdBreakPortalInsightsStore.js | 219 |
|  | <b><right>Total</right></b> | <b>483</b> |
---
<legend>5. <u>Flux</u> & Redux, before & after</legend>

## Eg. `FluxReduceStore` <br />+ data plugins

| Role | File | LoC |
|-------|------|-----|
| **Action creators** | AdBreakPortalActions.js | ~~231~~ <font color="#006def" style="font-size:28px; line-height: 20px;">103</font> |
| **Action types** | AdBreakPortalActionTypes.js | 33 |
| **Store** | AdBreakPortalInsightsStore.js | 219 |
|  | <b><right>Total</right></b> | <b>483</b> |
---
<legend>5. <u>Flux</u> & Redux, before & after</legend>

## Eg. `FluxReduceStore` <br />+ data plugins

| Role | File | LoC |
|-------|------|-----|
| **Action creators** | AdBreakPortalActions.js | ~~231~~ <font color="#006def" style="font-size:28px; line-height: 20px;">103</font> |
| **Action types** | AdBreakPortalActionTypes.js | ~~33~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Store** | AdBreakPortalInsightsStore.js | 219 |
|  | <b><right>Total</right></b> | <b>483</b> |
---
<legend>5. <u>Flux</u> & Redux, before & after</legend>

## Eg. `FluxReduceStore` <br />+ data plugins

| Role | File | LoC |
|-------|------|-----|
| **Action creators** | AdBreakPortalActions.js | ~~231~~ <font color="#006def" style="font-size:28px; line-height: 20px;">103</font> |
| **Action types** | AdBreakPortalActionTypes.js | ~~33~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Store** | AdBreakPortalInsightsStore.js | ~~219~~ <font color="#006def" style="font-size:28px; line-height: 20px;">101</font> |
|  | <b><right>Total</right></b> | <b>483</b> |
---
<legend>5. <u>Flux</u> & Redux, before & after</legend>

## Eg. `FluxReduceStore` <br />+ data plugins

| Role | File | LoC |
|-------|------|-----|
| **Action creators** | AdBreakPortalActions.js | ~~231~~ <font color="#006def" style="font-size:28px; line-height: 20px;">103</font> |
| **Action types** | AdBreakPortalActionTypes.js | ~~33~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Store** | AdBreakPortalInsightsStore.js | ~~219~~ <font color="#006def" style="font-size:28px; line-height: 20px;">101</font> |
|  | <b><right>Total</right></b> | <b>~~483~~ <font color="#006def" style="font-size:28px; line-height: 20px;">204</font></b> |
<right><font color="#006def">60% LESS CODE</font></right>
<right><font color="#006def">(also: caught a bug)</font></right>
---
class: center, middle
<legend>5. Flux & <u>Redux</u>, before & after</legend>
### Redux
---
class: center, middle
<legend>5. Flux & <u>Redux</u>, before & after</legend>
<img src="images/redux-flow.png" width="60%" />
---
class: center, middle
<legend>5. Flux & <u>Redux</u>, before & after</legend>
<img src="images/redux-flow-expanded-0.png" width="80%" />
---
class: center, middle
<legend>5. Flux & <u>Redux</u>, before & after</legend>
<img src="images/redux-flow-expanded-1.png" width="80%" />
---
class: center, middle
<legend>5. Flux & <u>Redux</u>, before & after</legend>
<img src="images/redux-flow-expanded-2.png" width="80%" />
---
class: center, middle
<legend>5. Flux & <u>Redux</u>, before & after</legend>
<img src="images/redux-flow-expanded-3.png" width="80%" />
---
class: center, middle
<legend>5. Flux & <u>Redux</u>, before & after</legend>
<img src="images/redux-flow-expanded-4.png" width="80%" />
---
class: center, middle
<legend>5. Flux & <u>Redux</u>, before & after</legend>

## Eg. `SRTRouting`

| Role | File | LoC |
|-------|------|-----|
| **Action creators** | SRTRoutingActionCreators.js | 236 |
| **Action types** | SRTRoutingActionTypes.js | 38 |
| **Container** | SRTRoutingContainer.js | 88 |
| **Reducer** | SRTRoutingReducer.js | 50 |
| **Reducer** | SRTRoutingSaveRulesReducer.js | 44 |
| **Reducer** | SRTRoutingSearchReducer.js | 63 |
| **Store** | SRTRoutingStore.js | 59 |
| **Store types** | SRTRoutingSearchRecord.js | 25 |
|  | <b><right>Total</right></b> | <b>603</b> |
---
class: center, middle
<legend>5. Flux & <u>Redux</u>, before & after</legend>

## Eg. `SRTRouting`

| Role | File | LoC |
|-------|------|-----|
| **Action creators** | SRTRoutingActionCreators.js | ~~236~~ <font color="#006def" style="font-size:28px; line-height: 20px;">114</font> |
| **Action types** | SRTRoutingActionTypes.js | 38 |
| **Container** | SRTRoutingContainer.js | 88 |
| **Reducer** | SRTRoutingReducer.js | 50 |
| **Reducer** | SRTRoutingSaveRulesReducer.js | 44 |
| **Reducer** | SRTRoutingSearchReducer.js | 63 |
| **Store** | SRTRoutingStore.js | 59 |
| **Store types** | SRTRoutingSearchRecord.js | 25 |
|  | <b><right>Total</right></b> | <b>603</b> |
---
class: center, middle
<legend>5. Flux & <u>Redux</u>, before & after</legend>

## Eg. `SRTRouting`

| Role | File | LoC |
|-------|------|-----|
| **Action creators** | SRTRoutingActionCreators.js | ~~236~~ <font color="#006def" style="font-size:28px; line-height: 20px;">114</font> |
| **Action types** | SRTRoutingActionTypes.js | ~~38~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Container** | SRTRoutingContainer.js | 88 |
| **Reducer** | SRTRoutingReducer.js | 50 |
| **Reducer** | SRTRoutingSaveRulesReducer.js | 44 |
| **Reducer** | SRTRoutingSearchReducer.js | 63 |
| **Store** | SRTRoutingStore.js | 59 |
| **Store types** | SRTRoutingSearchRecord.js | 25 |
|  | <b><right>Total</right></b> | <b>603</b> |
---
class: center, middle
<legend>5. Flux & <u>Redux</u>, before & after</legend>

## Eg. `SRTRouting`

| Role | File | LoC |
|-------|------|-----|
| **Action creators** | SRTRoutingActionCreators.js | ~~236~~ <font color="#006def" style="font-size:28px; line-height: 20px;">114</font> |
| **Action types** | SRTRoutingActionTypes.js | ~~38~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Container** | SRTRoutingContainer.js | ~~88~~ <font color="#006def" style="font-size:28px; line-height: 20px;">78</font> |
| **Reducer** | SRTRoutingReducer.js | 50 |
| **Reducer** | SRTRoutingSaveRulesReducer.js | 44 |
| **Reducer** | SRTRoutingSearchReducer.js | 63 |
| **Store** | SRTRoutingStore.js | 59 |
| **Store types** | SRTRoutingSearchRecord.js | 25 |
|  | <b><right>Total</right></b> | <b>603</b> |
---
class: center, middle
<legend>5. Flux & <u>Redux</u>, before & after</legend>

## Eg. `SRTRouting`

| Role | File | LoC |
|-------|------|-----|
| **Action creators** | SRTRoutingActionCreators.js | ~~236~~ <font color="#006def" style="font-size:28px; line-height: 20px;">114</font> |
| **Action types** | SRTRoutingActionTypes.js | ~~38~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Container** | SRTRoutingContainer.js | ~~88~~ <font color="#006def" style="font-size:28px; line-height: 20px;">78</font> |
| **Reducer** | SRTRoutingReducer.js | ~~50~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Reducer** | SRTRoutingSaveRulesReducer.js | 44 |
| **Reducer** | SRTRoutingSearchReducer.js | 63 |
| **Store** | SRTRoutingStore.js | 59 |
| **Store types** | SRTRoutingSearchRecord.js | 25 |
|  | <b><right>Total</right></b> | <b>603</b> |
---
class: center, middle
<legend>5. Flux & <u>Redux</u>, before & after</legend>

## Eg. `SRTRouting`

| Role | File | LoC |
|-------|------|-----|
| **Action creators** | SRTRoutingActionCreators.js | ~~236~~ <font color="#006def" style="font-size:28px; line-height: 20px;">114</font> |
| **Action types** | SRTRoutingActionTypes.js | ~~38~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Container** | SRTRoutingContainer.js | ~~88~~ <font color="#006def" style="font-size:28px; line-height: 20px;">78</font> |
| **Reducer** | SRTRoutingReducer.js | ~~50~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Reducer** | SRTRoutingSaveRulesReducer.js | ~~44~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Reducer** | SRTRoutingSearchReducer.js | 63 |
| **Store** | SRTRoutingStore.js | 59 |
| **Store types** | SRTRoutingSearchRecord.js | 25 |
|  | <b><right>Total</right></b> | <b>603</b> |
---
class: center, middle
<legend>5. Flux & <u>Redux</u>, before & after</legend>

## Eg. `SRTRouting`

| Role | File | LoC |
|-------|------|-----|
| **Action creators** | SRTRoutingActionCreators.js | ~~236~~ <font color="#006def" style="font-size:28px; line-height: 20px;">114</font> |
| **Action types** | SRTRoutingActionTypes.js | ~~38~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Container** | SRTRoutingContainer.js | ~~88~~ <font color="#006def" style="font-size:28px; line-height: 20px;">78</font> |
| **Reducer** | SRTRoutingReducer.js | ~~50~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Reducer** | SRTRoutingSaveRulesReducer.js | ~~44~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Reducer** | SRTRoutingSearchReducer.js | ~~63~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Store** | SRTRoutingStore.js | 59 |
| **Store types** | SRTRoutingSearchRecord.js | 25 |
|  | <b><right>Total</right></b> | <b>603</b> |
---
class: center, middle
<legend>5. Flux & <u>Redux</u>, before & after</legend>

## Eg. `SRTRouting`

| Role | File | LoC |
|-------|------|-----|
| **Action creators** | SRTRoutingActionCreators.js | ~~236~~ <font color="#006def" style="font-size:28px; line-height: 20px;">114</font> |
| **Action types** | SRTRoutingActionTypes.js | ~~38~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Container** | SRTRoutingContainer.js | ~~88~~ <font color="#006def" style="font-size:28px; line-height: 20px;">78</font> |
| **Reducer** | SRTRoutingReducer.js | ~~50~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Reducer** | SRTRoutingSaveRulesReducer.js | ~~44~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Reducer** | SRTRoutingSearchReducer.js | ~~63~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Store** | SRTRoutingStore.js | ~~59~~ <font color="#006def" style="font-size:28px; line-height: 20px;">49</font> |
| **Store types** | SRTRoutingSearchRecord.js | 25 |
|  | <b><right>Total</right></b> | <b>603</b> |
---
class: center, middle
<legend>5. Flux & <u>Redux</u>, before & after</legend>

## Eg. `SRTRouting`

| Role | File | LoC |
|-------|------|-----|
| **Action creators** | SRTRoutingActionCreators.js | ~~236~~ <font color="#006def" style="font-size:28px; line-height: 20px;">114</font> |
| **Action types** | SRTRoutingActionTypes.js | ~~38~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Container** | SRTRoutingContainer.js | ~~88~~ <font color="#006def" style="font-size:28px; line-height: 20px;">78</font> |
| **Reducer** | SRTRoutingReducer.js | ~~50~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Reducer** | SRTRoutingSaveRulesReducer.js | ~~44~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Reducer** | SRTRoutingSearchReducer.js | ~~63~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Store** | SRTRoutingStore.js | ~~59~~ <font color="#006def" style="font-size:28px; line-height: 20px;">49</font> |
| **Store types** | SRTRoutingSearchRecord.js | ~~25~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
|  | <b><right>Total</right></b> | <b>603</b> |
---
class: center, middle
<legend>5. Flux & <u>Redux</u>, before & after</legend>

## Eg. `SRTRouting`

| Role | File | LoC |
|-------|------|-----|
| **Action creators** | SRTRoutingActionCreators.js | ~~236~~ <font color="#006def" style="font-size:28px; line-height: 20px;">114</font> |
| **Action types** | SRTRoutingActionTypes.js | ~~38~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Container** | SRTRoutingContainer.js | ~~88~~ <font color="#006def" style="font-size:28px; line-height: 20px;">78</font> |
| **Reducer** | SRTRoutingReducer.js | ~~50~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Reducer** | SRTRoutingSaveRulesReducer.js | ~~44~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Reducer** | SRTRoutingSearchReducer.js | ~~63~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| **Store** | SRTRoutingStore.js | ~~59~~ <font color="#006def" style="font-size:28px; line-height: 20px;">49</font> |
| **Store types** | SRTRoutingSearchRecord.js | ~~25~~ <font color="#006def" style="font-size:28px; line-height: 20px;">0</font> |
| <font color="#006def">60% LESS CODE</font> | <b><right>Total</right></b> | <b>~~603~~ <font color="#006def" style="font-size:28px; line-height: 20px;">241</font></b> |
---
class: center, middle
## 6. Reactivity
---
class: center, middle
<legend>6. Reactivity</legend>
### For example: Let's add a logger to composer.
---
<legend>6. Reactivity</legend>
```js
const withEffects: Plugin<State> = store => {
  store
    .on('text')
    .subscribe(text => {
      if (text === '') {
        store.set('isNextEnabled')(false)
      } else {
        store.set('isNextEnabled')(true)
      }
    })
  return store
}
```
---
<legend>6. Reactivity</legend>
```js
const withEffects: Plugin<State> = store => {
  store
    .on('text')
    .subscribe(text =>
*
    )
  return store
}
```
---
<legend>6. Reactivity</legend>
```js
const withEffects: Plugin<State> = store => {
  store
    .on('text')
    .subscribe(text =>
*      new ComposerTypedLogger
*        .setText(text)
*        .log()
    )
  return store
}
```
---
<legend>6. Reactivity</legend>
```js
const withEffects: Plugin<State> = store => {
  store
    .on('text')
*   .throttle(100)
    .subscribe(text =>
       new ComposerTypedLogger
         .setText(text)
         .log()
    )
  return store
}
```
---
<legend>6. Reactivity</legend>
```js
const withEffects: Plugin<State> = store => {
  store
    .on('text')
    .throttle(100)
*   .filter(text => text !== '')
    .subscribe(text =>
       new ComposerTypedLogger
         .setText(text)
         .log()
    )
  return store
}
```
---
<legend>6. Reactivity</legend>
```js
const withEffects: Plugin<State> = store => {
  store
    .on('text')
    .throttle(100)
    .filter(text => text !== '')
*   .map(text => text.toLowerCase())
    .subscribe(text =>
       new ComposerTypedLogger
         .setText(text)
         .log()
    )
  return store
}
```
---
<legend>6. Reactivity</legend>
```js
const withEffects: Plugin<State> = store => {

  return store
}
```
---
<legend>6. Reactivity</legend>
```js
*const {combineLatest} = require('rxjs')

const withEffects: Plugin<State> = store => {
* combineLatest(
*   store.on('text'),
*   store.on('video')
* )
  return store
}
```
---
<legend>6. Reactivity</legend>
```js
const {combineLatest} = require('rxjs')

const withEffects: Plugin<State> = store => {
  combineLatest(
    store.on('text'),
    store.on('video')
  )
* .subscribe(([text, video]) =>
*   new ComposerTypedLogger
*     .setText(text)
*     .setVideo(video)
*     .log()
* )
  return store
}
```
---
class: center, middle
# Thanks!
## Learn more: <font color="#006def">fburl.com/undux</font>
# &nbsp;
### Boris Cherny
### @bcherny / github.com/bcherny
