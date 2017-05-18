let's make a list...

```js
let list = (left, right) => ({ left, right })
list.add = (list1, item) => ({ ...list1, right: list(item, null) })
list.concat = (list1, list2) => {
  // list.last(list1) ({ ...list1, right: list2 })
}
list.has = (list, item) => {
  if (list.left === item) {
    return true
  }
  if (list.right === null) {
    return false
  }
  return list.has(list.right, item)
}
list.head = _ => _.left
list.last = _ => _.right === null ? _.left : list.last(_.right)
list.map = (list, fn) => {
  let left = fn(list.left)
  let right = list.right === null ? null : list.map(list.right, fn)
  return list(left, right)
}

let threes = list(1, list(2, list(3, null)))
let fours = list.add(three, 4)
list.has(threes, 2) // true
let evens = list.map(threes, _ => _ * 2)
```
