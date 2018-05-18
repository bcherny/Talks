class: center, middle
# State Management on the Frontend
## By Boris Cherny
### @bcherny - github.com/bcherny
---
class: middle
# Plan
1. React refresher
2. Flux
3. Redux
4. Undux
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/react.png" width="50%" />
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/composer.png" class="full"/>
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/composer-annotated-0.png" class="full"/>
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/composer-annotated-1.png" class="full"/>
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/composer-annotated-2.png" class="full"/>
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/composer-annotated-3.png" class="full"/>
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/composer-annotated-3.png" width="50%" />
```html
<Composer>
  <Editor>
    <Avatar />
    <Textbox />
  </Editor>
  <Sproutbar />
  <Button />
</Composer>
```
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/tree.png" class="fuller" />
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/tree-graphql-0.png" class="fuller" />
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/tree-graphql-1.png" class="fuller" />
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/tree-graphql-2.png" class="fuller" />
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/tree-graphql-3.png" class="fuller" />
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/tree-graphql-state-0.png" class="fuller" />
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/tree-graphql-state-1.png" class="fuller" />
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/tree-graphql-state-2.png" class="fuller" />
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/tree-graphql-state-callback-0.png" class="fuller" />
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/tree-graphql-state-callback-1.png" class="fuller" />
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/tree-graphql-state-callback-2.png" class="fuller" />
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/tree-graphql-state-callback-3.png" class="fuller" />
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/tree-state-0.png" class="fuller" />
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/tree-state-1.png" class="fuller" />
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/tree-state-2.png" class="fuller" />
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/tree-state-3.png" class="fuller" />
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/deep-passing-0.png" />
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/deep-passing-1.png" />
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/deep-passing-2.png" />
---
class: center, middle
<legend>1. React refresher</legend>
# 😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵
---
class: center, middle
# Flux
<img src="images/flux.svg" style="margin-top: -100px; width: 30%;" />
---
class: center, middle
<legend>2. Flux</legend>
<img src="images/tree-flux-0.png" class="fullish" />
---
class: center, middle
<legend>2. Flux</legend>
<img src="images/tree-flux-1.png" class="fullish" />
---
class: center, middle
<legend>2. Flux</legend>
<img src="images/tree-flux-2.png" class="fullish" />
---
class: center, middle
<legend>2. Flux</legend>
<img src="images/tree-flux-3.png" class="fullish" />
---
class: center, middle
<legend>2. Flux</legend>
<img src="images/tree-flux-4.png" class="fullish" />
---
class: center, middle
<legend>2. Flux</legend>
<img src="images/tree-flux-5.png" class="fullish" />
---
class: center, middle
<legend>2. Flux</legend>
<img src="images/tree-flux-6.png" class="fullish" />
---
class: center, middle
<legend>2. Flux</legend>
<img src="images/tree-flux-7.png" class="fullish" />
---
class: center, middle
<legend>2. Flux</legend>
<img src="images/tree-flux-8.png" class="fullish" />
---
class: center, middle
<legend>2. Flux</legend>
<img src="images/tree-flux-9.png" class="fullish" />
---
class: center, middle
<legend>2. Flux</legend>
<img src="images/tree-flux-10.png" class="fullish" />
---
class: center, middle
<legend>2. Flux</legend>
<img src="images/tree-flux-11.png" class="fullish" />
---
class: center, middle
<legend>2. Flux</legend>
## Flux
<img src="images/flux-flow.png" style="width:70%" />
---
class: center, middle
<legend>2. Flux</legend>
<img src="images/flux-flow-code-0.png" class="fullisher" />
---
class: center, middle
<legend>2. Flux</legend>
<img src="images/flux-flow-code-1.png" class="fullisher" />
---
class: center, middle
<legend>2. Flux</legend>
<img src="images/flux-flow-code-2.png" class="fullisher" />
---
class: center, middle
<legend>2. Flux</legend>
## WHEW.
<img src="images/whew.webp" />
---
class: center, middle
<legend>2. Flux</legend>
# Let's scale it. <img src="images/like.jpg" style="width:200px;position:relative;bottom:-28px;" />
---
class: center, middle
<legend>2. Flux</legend>
<img src="images/tree-flux-11.png" class="fullish" />
---
class: center, middle
<legend>2. Flux</legend>
<img src="images/tree-flux-scale.png" class="fullish" />
---
<legend>2. Flux</legend>
## Flux
- Singleton <font color="orange">Dispatcher</font>
- Lots of <font color="red">Stores</font>
- Describe CUD operations with <font color="red">Actions</font>
- Stores take Actions → mutate their internal state → update the <font color="green">View</font>
---
class: center, middle
<img src="images/redux.png" style="width:50%" />
---
<legend>3. Redux</legend>
## Redux
- Singleton <font color="red">Store</font>
- Lots of <font color="magenta">Reducers</font>
- Describe CUD operations with <font color="red">Actions</font>
- Reducers take Actions → create a new state for the Store → update the <font color="green">View</font>

<small>
## Flux
- Singleton <font color="orange">Dispatcher</font>
- Lots of <font color="red">Stores</font>
- Describe CUD operations with <font color="red">Actions</font>
- Stores take Actions → mutate their internal state → update the <font color="green">View</font>

</small>
---
class: center, middle
<legend>3. Redux</legend>
<img src="images/tree-flux-scale.png" class="fullish" />
---
class: center, middle
<legend>3. Redux</legend>
<img src="images/tree-redux-scale.png" class="fullish" />
---
class: center, middle
<legend>3. Redux</legend>
## Redux
<img src="images/redux-flow.png" style="width:70%" />
---
class: center, middle
<legend>3. Redux</legend>
<img src="images/redux-flow-code-0.png" class="fullish" />
---
class: center, middle
<legend>3. Redux</legend>
<img src="images/redux-flow-code-1.png" class="fullish" />
---
class: center, middle
<legend>3. Redux</legend>
<img src="images/redux-flow-code-2.png" class="fullish" />
---
class: center, middle
<legend>3. Redux</legend>
![](images/complicated.gif)
---
class: center, middle
<img src="images/undux.png" width="45%" />
---
class: center, middle
<legend>4. Undux</legend>
<img src="images/undux-flow-comparison.png" class="fuller" />
---
class: center, middle
<legend>4. Undux</legend>
<img src="images/undux-flow-code-1.png" class="fuller" />
---
class: center, middle
<legend>4. Undux</legend>
<img src="images/undux-flow-code-0.png" class="fuller" />
---
<legend>4. Undux</legend>
## Undux
- Lots of <font color="red">Stores</font>
- Use `.get(key)` and `.set(key)(value)` to read and write to them
- <font color="red">Store</font> updates → <font color="green">View</font> updates
- **Reactive effects**
---
<legend>4. Undux</legend>
```js
composerStore
  .on('text')
  .subscribe(text => {
    console.log('text changed!', text)
  })
```
---
<legend>4. Undux</legend>
```js
composerStore
  .on('text')
  .filter(text => text !== '')
  .subscribe(text => {
    console.log('text changed!', text)
  })
```
---
<legend>4. Undux</legend>
```js
composerStore
  .on('text')
  .filter(text => text !== '')
  .map(text => text.toLowerCase())
  .subscribe(text => {
    console.log('text changed!', text)
  })
```
---
<legend>4. Undux</legend>
```js
composerStore
  .on('text')
  .filter(text => text !== '')
  .map(text => text.toLowerCase())
  .throttle(200)
  .subscribe(text => {
    console.log('text changed!', text)
  })
```
---
class: center, middle
<legend>4. Undux</legend>
<img src="images/tree-flux-11.png" class="fullish" />
---
class: center, middle
<legend>4. Undux</legend>
<img src="images/tree-undux.png" class="fullish" />
---
<legend>4. Undux</legend>
## Undux: features
---
<legend>4. Undux</legend>
## Undux: features
## 🤭 No boilerplate
---
<legend>4. Undux</legend>
## Undux: features
## 🤭 No boilerplate
## 😯 100% TYPESAFE
---
<legend>4. Undux</legend>
## Undux: features
## 🤭 No boilerplate
## 😯 100% TYPESAFE
## 😱 Reactive effects
---
<legend>4. Undux</legend>
## Undux: features
## 🤭 No boilerplate
## 😯 100% TYPESAFE
## 😱 Reactive effects
## 🤯 Built in logger
---
class: center, middle
# Thanks!
-----------
## Learn more...
## <a href="fburl.com/undux">fburl.com/undux</a>
