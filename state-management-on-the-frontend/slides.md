class: center, middle
# State Management on the Frontend
## By Boris Cherny
### @bcherny - github.com/bcherny
---
class: center, middle
<img src="images/react.png" width="50%" />
---
class: center, middle
<img src="images/composer.png" width="100%" />
---
class: center, middle
<img src="images/composer-annotated-0.png" width="100%" />
---
class: center, middle
<img src="images/composer-annotated-1.png" width="100%" />
---
class: center, middle
<img src="images/composer-annotated-2.png" width="100%" />
---
class: center, middle
<img src="images/composer-annotated-3.png" width="100%" />
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
# Flux
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
<img src="images/flux-flow-code.png" class="full" />
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
- Describe CRUD operations with <font color="red">Actions</font>
- Stores take Actions → mutate their internal state → update the <font color="green">View</font>
---
class: center, middle
# Redux
---
## Redux
- Singleton <font color="red">Store</font>
- Lots of <font color="magenta">Reducers</font>
- Describe CRUD operations with <font color="red">Actions</font>
- Reducers take Actions → create a new state for the Store → update the <font color="green">View</font>

## Flux
- Singleton <font color="orange">Dispatcher</font>
- Lots of <font color="red">Stores</font>
- Describe CRUD operations with <font color="red">Actions</font>
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
<img src="images/redux-flow-code.png" class="full" />
---