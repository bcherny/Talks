class: center, middle
# Web 300: UI State Management with React
---
class: middle
# Plan
1. React refresher
2. Local state
3. Flux
4. Redux
5. Undux
---
class: center, middle
<legend>1. React refresher</legend>
<img src="images/react.png" width="50%" />

???
Let's start with a quick refresher on React.
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
# Local state
---
class: center, middle
<legend>2. Local state</legend>
<img src="images/tree-state-0.png" class="fuller" />
---
class: center, middle
<legend>2. Local state</legend>
<img src="images/tree-state-1.png" class="fuller" />
---
class: center, middle
<legend>2. Local state</legend>
<img src="images/tree-state-2.png" class="fuller" />
---
class: center, middle
<legend>2. Local state</legend>
<img src="images/tree-state-3.png" class="fuller" />
---
class: center, middle
<legend>2. Local state</legend>
<img src="images/deep-passing-0.png" />
---
class: center, middle
<legend>2. Local state</legend>
<img src="images/deep-passing-1.png" />
---
class: center, middle
<legend>2. Local state</legend>
<img src="images/deep-passing-2.png" />
---
class: center, middle
<legend>2. Local state</legend>
# 😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵
---
class: center, middle
# Application state
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
<img src="images/flux.svg" style="display: block; margin: 0 auto;" />
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
- Singleton <font color="#ED692F">Dispatcher</font>
- Lots of <font color="#774896">Stores</font>
- Describe CUD operations with <font color="#ED692F">Actions</font>
- Stores take Actions → mutate their internal state → update the View
---
class: center, middle
<img src="images/redux.png" style="width:50%" />
---
<legend>3. Redux</legend>
## Redux
- Singleton <font color="#774896">Store</font>
- Lots of <font color="#E57ACF">Reducers</font>
- Describe CUD operations with <font color="#ED692F">Actions</font>
- Reducers take Actions → create a new state for the Store → update the View

<small>
## Flux
- Singleton <font color="#ED692F">Dispatcher</font>
- Lots of <font color="#774896">Stores</font>
- Describe CUD operations with <font color="#ED692F">Actions</font>
- Stores take Actions → mutate their internal state → update the <font color="green">View</font>

</small>
---
class: center, middle
<legend>3. Redux</legend>
<img src="images/tree-flux-scale.png" class="fullish" />
---
class: center, middle
<legend>3. Redux</legend>
<img src="images/tree-redux-scale.png" class="fullish" style="margin-top:-1.6em" />
---
class: center, middle
<legend>3. Redux</legend>
<img src="images/redux-flow-comparison.png" class="fullish" />
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
<img src="images/undux-flow-code-0.png" class="fullish" />
---
class: center, middle
<legend>4. Undux</legend>
<img src="images/undux-flow-code-1.png" class="fullish" />
---
class: center, middle
<legend>4. Undux</legend>
<img src="images/undux-flow-comparison.png" class="fuller" />
---
<legend>4. Undux</legend>
## Undux
- No ~~<font color="#ED692F">dispatcher</font>, <font color="#E57ACF">reducer</font>, <font color="#ED692F">actions</font>~~
- Any number of <font color="#774896">Stores</font>
- Reactive effects (observe store fields)
- Store updates → View updates

<small>
## Flux
- Singleton <font color="#ED692F">Dispatcher</font>
- Lots of <font color="#774896">Stores</font>
- Describe CUD operations with <font color="#ED692F">Actions</font>
- Stores take Actions → mutate their internal state → update the <font color="green">View</font>

</small>
---
class: center, middle
<legend>4. Undux</legend>
<img src="images/tree-flux-11.png" class="fullish" />
---
class: center, middle
<legend>4. Undux</legend>
<img src="images/tree-undux.png" class="fullish" />
---
class: center, middle
# tl;dr
---
class: middle
<legend>5. tl;dr</legend>

| Library  | For application size | Type safety | Features
|-|-|-|-|
| **Flux** | Medium | Poor | Most code examples
| **Redux** | Medium | Poor | Single store, selectors
| **Undux** | Small-Medium | Excellent | Low boilerplate, reactive effects
| **Relay** | Medium | Poor | One API for local and remote state
| **Flux Data Plugins** | Large | Excellent | Code splitting, selectors

<br>
<small>
https://fburl.com/febible
</small>
---
class: middle
# Thanks!
-----------
## Learn more...
### <a href="https://fburl.com/learn-flux">fburl.com/learn-flux</a>
### <a href="https://fburl.com/learn-redux">fburl.com/learn-redux</a>
### <a href="https://fburl.com/learn-undux">fburl.com/learn-undux</a>
### <a href="https://fburl.com/learn-data-plugins">fburl.com/learn-data-plugins</a>
