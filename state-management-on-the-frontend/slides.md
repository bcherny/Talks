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
<img src="images/composer-annotated-4.png" width="100%" />
---
class: center, middle
<img src="images/tree.png" width="100%" />
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