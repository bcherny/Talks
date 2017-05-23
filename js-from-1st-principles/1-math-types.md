# Math vs. JavaScript

| Concept        |  Math                                  | JavaScript                            |
|----------------|----------------------------------------|---------------------------------------|
| Booleans       | `true`, `false`                        | `true`, `false`                       |
| Numbers        | `123`, `Infinity`                      | `123`, `Infinity`                     |
| Operators      | `1 * (2 + 3)`<sup>`4`</sup>                          | `1 * (2 + 3) ** 4`                         |
| Variables      | `x = 4`                                | `let x = 4`                           |
| Sets           | `{1, 2, 3}`                            | `[1, 2, 3]`[1]                        |
| Functions      | `y = m * x + b`                        | `let y = () => m * x + b`             |

JavaScript has some additional concepts:

- Strings `'abc'`
- Objects `{ a: 1 }`
- Null `null`, `undefined`

[1] To be precise, the `[]` syntax indicates an array. But you can get real sets too, via `new Set(...)`.
