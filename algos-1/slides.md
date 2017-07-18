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
![](./memes/what-is-this.webp)
---
class: center, middle
## BIG O NOTATION
---