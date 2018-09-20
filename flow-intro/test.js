// @flow
type User = {| name: string, userID: number |}

// Type of object's keys
type UserFields = $Keys<User> // Array<'name' | 'userID'>

// Type of object's values
type UserTypes = $Values<User> // Array<string | FBID>

// Type of a value at a specific key
type NameType = $ElementType<User, 'userID'> // FBID

let a: UserFields = 'name2'
