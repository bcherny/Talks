/// code

function list(left, ...rest) {
  if (rest.length === 0) {
    return {
      left: left,
      right: null
    }
  }
  return {
    left: left,
    right: list(...rest)
  }
}

function equals(list1, list2) {
}

function includes(list, item) {

  // if the list's left is the item, then we've found it!
  if (list.left === item) {
    return true
  }

  // if we've reached the end of the list and haven't found item,
  // then the list doesn't contain the item.
  if (list.right === null) {
    return false
  }

  // otherwise, continue onto the rest of the list
  return includes(list.right, item)
}

function push(list, item) {

  // if right is available, then create a new list and add item to it
  if (list.right === null) {
    list.right = list(item, null)
    return list
  }

  // otherwise, keep looking for an available slot
  return push(list.right, item)
}

/// tests

let a = list(1, 2, 3, 4)
let b = push(a, 5)
includes(b, 4) // true
