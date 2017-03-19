import { Emitter } from 'typed-rx-emitter'

type Actions = {
  foo: number
  bar: string
}

const emitter = new Emitter<Actions>()

emitter.on('foo').subscribe(args => { /* ... */ })
emitter.on('bar').subscribe(args => { /* ... */ })

import { Observable } from 'rx'

emitter.emit('foo', 42)
emitter.emit('bar', 'baz')
