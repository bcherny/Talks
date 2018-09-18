// @flow

function a(x: number): number { // x must be a number
  return x + 4  // the return type must be a number
}

a(42)
a('foo')
