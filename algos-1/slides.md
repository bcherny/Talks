class: center, middle

# ☙ ALGORITHMS ☙

## A human-friendly introduction

### by Boris ([github.com/bcherny](https://github.com/bcherny))

---
class: center, middle
## Complexity
---
class: middle

```js
for (var n = 0; n < 10; n++) {
  ...
}
```
---
class: middle

```js
for (var n = 0; n < 10; n++) {
  for (var n = 0; n < 10; n++) {
    ...
  }
}
```
---
class: middle

```js
for (var n = 0; n < 10; n++) {
  for (var n = 0; n < 10; n++) {
    for (var n = 0; n < 10; n++) {
      ...
    }
  }
}
```
---

## Which loop is the fastest?

```js
// Loop 1:
for (var n = 0; n < 10; n++) {
  ...
}
```

```js
// Loop 2:
for (var n = 0; n < 10; n++) {
  for (var n = 0; n < 10; n++) {
    ...
  }
}
```

```js
// Loop 3:
for (var n = 0; n < 10; n++) {
  for (var n = 0; n < 10; n++) {
    for (var n = 0; n < 10; n++) {
      ...
    }
  }
}
```
---
class: center, middle
## Ok, the other loops are slower.

### But by how much?
---
```js
// Loop 1:
for (var n = 0; n < 10; n++) {
  ...
}
```

```js
// Loop 2:
for (var n = 0; n < 10; n++) {
  for (var n = 0; n < 10; n++) {
    ...
  }
}
```

```js
// Loop 3:
for (var n = 0; n < 10; n++) {
  for (var n = 0; n < 10; n++) {
    for (var n = 0; n < 10; n++) {
      ...
    }
  }
}
```
---
```js
// n iterations
for (var n = 0; n < 10; n++) {
  ...
}
```

```js
// n*n iterations
for (var n = 0; n < 10; n++) {
  for (var n = 0; n < 10; n++) {
    ...
  }
}
```

```js
// n*n*n iterations
for (var n = 0; n < 10; n++) {
  for (var n = 0; n < 10; n++) {
    for (var n = 0; n < 10; n++) {
      ...
    }
  }
}
```
---
```js
// O(N)
for (var n = 0; n < 10; n++) {
  ...
}
```

```js
// O(N²)
for (var n = 0; n < 10; n++) {
  for (var n = 0; n < 10; n++) {
    ...
  }
}
```

```js
// O(N³)
for (var n = 0; n < 10; n++) {
  for (var n = 0; n < 10; n++) {
    for (var n = 0; n < 10; n++) {
      ...
    }
  }
}
```
---
class: center, middle
![](./images/what-is-this.webp)
---
class: center, middle
## BIG O NOTATION
---
class: center, middle
### More examples...
---
class: middle
```js
// O(?)
function(n) {
  return 42
}
```
---
class: middle
```js
// O(1)
function(n) {
  return 42
}
```
---
class: middle
```js
// O(?)
function(n) {
  var a = 0
  while(n) {
    a++
    n--
  }
  return a
}
```
---
class: middle
```js
// O(N)
function(n) {
  var a = 0
  while(n) {
    a++
    n--
  }
  return a
}
```
---
class: middle
```js
// O(?)
function(n) {
  for (var a = 0; a < n; a++) {...}
  for (var b = 0; b < n; b++) {...}
}
```
---
class: middle
```js
// O(N)
function(n) {
  for (var a = 0; a < n; a++) {...}
  for (var b = 0; b < n; b++) {...}
}
```
---
class: center, middle

## Other common Big Os

`O(1)`

`O(N)`

`O(N²)`

`O(log(N))`

`O(N*log(N))`

`O(Cⁿ)`

`O(N!)`
---
class: center, middle
<img src="images/Complexity-Graph.png" width="100%">
---
class: center, middle
### Makes sense?
![](./images/ok.webp)
---
class: center, middle
## Real Problems
---
### #1

```js
function isSorted(array) {
  // ...
}

isSorted([-9, -5, 0, 3, 9])         // true
isSorted([3, 9, -3, 10])            // false
```
---
### #1

**Algorithm**:

If for each item in the array, the item is less than the next item, then the array is sorted.

**Pseudocode**:

```js
function isSorted(array) {
  // FOR EACH item IN array:
  //   IF item > next item
  //   THEN array is not sorted
  // OTHERWISE, array is sorted
}
```

**Sanity check**:

- `[-9, -5, 0, 3, 9]` ✔ Ok
- `[3, 9, -3, 10]` ✔ Ok

---
### #1

```js
function isSorted(array) {
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    let next = array[i + 1]
    if (next !== undefined && item > next) {
      return false
    }
  }
  return true
}
```
---
### #1 (2nd version)

```js
function isSorted(array) {
  return array.every(function(item, i) {
    let current = array[i]
    let next = array[i + 1]
    if (next === undefined) {
      return true
    }
    return next > current
  })
}
```
---
### #1 (3rd version)

```js
function isSorted(array) {
  if (array.length === 0) {
    return true
  }
  if (array[1] < array[0]) {
    return false
  }
  return isSorted(array.slice(1))
}
```