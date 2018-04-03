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
<img src="images/react.png" width="50%" />
---
class: center, middle
<img src="images/composer.png" class="full"/>
---
class: center, middle
<img src="images/composer-annotated-0.png" class="full"/>
---
class: center, middle
<img src="images/composer-annotated-1.png" class="full"/>
---
class: center, middle
<img src="images/composer-annotated-2.png" class="full"/>
---
class: center, middle
<img src="images/composer-annotated-3.png" class="full"/>
---
class: center, middle
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
<img src="images/tree.png" width="80%" />
---
class: center, middle
<img src="images/tree-graphql-0.png" class="full" />
---
class: center, middle
<img src="images/tree-graphql-1.png" class="full" />
---
class: center, middle
<img src="images/tree-graphql-2.png" class="full" />
---
class: center, middle
<img src="images/tree-graphql-3.png" class="full" />
---
class: center, middle
<img src="images/tree-graphql-state-0.png" class="full" />
---
class: center, middle
<img src="images/tree-graphql-state-1.png" class="full" />
---
class: center, middle
<img src="images/tree-graphql-state-2.png" class="full" />
---
class: center, middle
<img src="images/tree-graphql-state-callback-0.png" class="full" />
---
class: center, middle
<img src="images/tree-graphql-state-callback-1.png" class="full" />
---
class: center, middle
<img src="images/tree-graphql-state-callback-2.png" class="full" />
---
class: center, middle
<img src="images/tree-graphql-state-callback-3.png" class="full" />
---
class: center, middle
<img src="images/tree-state-0.png" class="full" />
---
class: center, middle
<img src="images/tree-state-1.png" class="full" />
---
class: center, middle
<img src="images/tree-state-2.png" class="full" />
---
class: center, middle
<img src="images/tree-state-3.png" class="full" />
---
class: center, middle
<img src="images/deep-passing-0.png" />
---
class: center, middle
<img src="images/deep-passing-1.png" />
---
class: center, middle
<img src="images/deep-passing-2.png" />
---
class: center, middle
# 😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵
---
class: center, middle
# Flux
<img src="images/flux.svg" style="margin-top: -100px; width: 30%;" />
---
class: center, middle
<img src="images/tree-flux-0.png" class="full" />
---
class: center, middle
<img src="images/tree-flux-1.png" class="full" />
---
class: center, middle
<img src="images/tree-flux-2.png" class="full" />
---
class: center, middle
<img src="images/tree-flux-3.png" class="full" />
---
class: center, middle
<img src="images/tree-flux-4.png" class="full" />
---
class: center, middle
<img src="images/tree-flux-5.png" class="full" />
---
class: center, middle
<img src="images/tree-flux-6.png" class="full" />
---
class: center, middle
<img src="images/tree-flux-7.png" class="full" />
---
class: center, middle
<img src="images/tree-flux-8.png" class="full" />
---
class: center, middle
<img src="images/tree-flux-9.png" class="full" />
---
class: center, middle
<img src="images/tree-flux-10.png" class="full" />
---
class: center, middle
<img src="images/tree-flux-11.png" class="full" />
---
class: center, middle
## Flux
<img src="images/flux-flow.png" style="width:50%" />
---
class: center, middle
<img src="images/flux-flow-code-0.png" class="full" />
---
class: center, middle
<img src="images/flux-flow-code-1.png" class="full" />
---
class: center, middle
## WHEW.
<img src="images/whew.webp" />
---
class: center, middle
# Let's scale it. <img src="images/like.jpg" style="width:200px;position:relative;bottom:-28px;" />
---
class: center, middle
<img src="images/tree-flux-11.png" class="full" />
---
class: center, middle
<img src="images/tree-flux-scale.png" class="full" />
---
## Flux
- Singleton <font color="orange">Dispatcher</font>
- Lots of <font color="red">Stores</font>
- Describe CUD operations with <font color="red">Actions</font>
- Stores take Actions → mutate their internal state → update the <font color="green">View</font>
---
class: center, middle
<img src="images/redux.png" style="width:50%" />
---
## Redux
- Singleton <font color="red">Store</font>
- Lots of <font color="magenta">Reducers</font>
- Describe CUD operations with <font color="red">Actions</font>
- Reducers take Actions → create a new state for the Store → update the <font color="green">View</font>

## Flux
- Singleton <font color="orange">Dispatcher</font>
- Lots of <font color="red">Stores</font>
- Describe CUD operations with <font color="red">Actions</font>
- Stores take Actions → mutate their internal state → update the <font color="green">View</font>
---
class: center, middle
<img src="images/tree-redux-scale.png" class="full" />
---
class: center, middle
## Redux
<img src="images/redux-flow.png" style="width:50%" />
---
class: center, middle
<img src="images/redux-flow-code-0.png" class="full" />
---
class: center, middle
<img src="images/redux-flow-code-1.png" class="full" />
---
class: center, middle
<img src="images/redux-flow-code-2.png" class="full" />
---
class: center, middle
![](images/complicated.gif)
---
class: center, middle
<img src="images/undux.png" width="45%" />
---
class: center, middle
<img src="images/undux-flow-comparison.png" class="full" />
---
class: center, middle
<img src="images/undux-flow-code.png" class="full" />
---
## Undux
- Lots of <font color="#2a6fe6">Stores</font>
- Use `.get(key)` and `.set(key)(value)` to read and write to them
- <font color="#2a6fe6">Store</font> updates → <font color="green">View</font> updates

<div class="smaller">
  <h2>Redux</h2>
  <ul>
  <li>Singleton <font color="red">Store</font></li>
  <li>Lots of <font color="magenta">Reducers</font></li>
  <li>Describe CUD operations with <font color="red">Actions</font></li>
  <li>Reducers take Actions → create a new state for the Store → update the <font color="green">View</font></li>
  </ul>

  <h2>Flux</h2>
  <ul>
  <li>Singleton <font color="orange">Dispatcher</font></li>
  <li>Lots of <font color="red">Stores</font></li>
  <li>Describe CUD operations with <font color="red">Actions</font></li>
  <li>Stores take Actions → mutate their internal state → update the <font color="green">View</font></li>
  </ul>
</div>
---
class: center, middle
<img src="images/tree-flux-11.png" class="full" />
---
class: center, middle
<img src="images/tree-undux.png" class="full" />
---
## Undux: features
---
## Undux: features
## 🤭 No boilerplate
---
## Undux: features
## 🤭 No boilerplate
## 😯 100% TYPESAFE
---
## Undux: features
## 🤭 No boilerplate
## 😯 100% TYPESAFE
## 😱 Reactive effects
---
## Undux: features
## 🤭 No boilerplate
## 😯 100% TYPESAFE
## 😱 Reactive effects
## 🤯 Built in logger
---
class: center, middle
## Coming to a www near you soon...
---
class: center, middle
# Thanks!
## @bcherny
## github.com/bcherny/undux
