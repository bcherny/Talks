class: center, middle
# State Management on the Frontend
## By Boris Cherny
### @bcherny - github.com/bcherny
---
class: center, middle
<img src="images/react.png" width="50%" />
---
class: center, middle
<img src="images/composer.png" class="full" />
---
class: center, middle
<img src="images/composer-annotated-0.png" class="full" />
---
class: center, middle
<img src="images/composer-annotated-1.png" class="full" />
---
class: center, middle
<img src="images/composer-annotated-2.png" class="full" />
---
class: center, middle
<img src="images/composer-annotated-3.png" class="full" />
---
class: center, middle
<img src="images/tree.png" class="full" />
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
```jsx
class App extends React.Component {            // App.react.js
  render() { return <Composer /> }}

class Composer extends React.Component {       // Composer.react.js
  state = {
    text: '' }
  render() {
    return <Editor text={this.state.text}>
      <Avatar />
      <Textbox onChange={this.onChange} text={text} />
    </Editor>
    <Sproutbar />
    <Button isEnabled={this.state.text !== ''} />
  }
  onChange(text) {
    this.setState({ text }) }}

class Textbox extends React.Component          // Textbox.react.js
  render() {
    return <textarea
      onChange={this.props.onChange}
      value={this.props.text} /> }}
```