class: center, middle
# <img src="images/undux.png" width="50%" />
## By Boris Cherny
### @bcherny - github.com/bcherny
---
class: middle
# Plan
1. Problems with Flux & Redux
2. How Undux solves these problems
3. The Undux architecture
2. What can I do with it?
3. Flux, Redux, Relay: before & after
4. Scaling it
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
## 3. The Undux architecture
---
class: center, middle
<legend>3. The Undux architecture</legend>
<img src="images/undux-flow-with-effects.png" width="60%" />
---
class: middle
<legend>3. The Undux architecture</legend>
<img src="images/single-node-view.png" height="130" />
- `React.Component`
- Reads from the <font color="red">store</font>
- Writes to the <font color="red">store</font>
---
class: middle
<legend>3. The Undux architecture</legend>
<img src="images/single-node-store.png" height="130" />
- `createStore()`
- Updated by the <font color="green">view</font>
- Re-renders the <font color="green">view</font>
---
class: middle
<legend>3. The Undux architecture</legend>
<img src="images/single-node-effects.png" height="130" />
- Subscribe to changes to specific fields
- Or, subscribe to a set of fields
- A reactive way to listen to changes

