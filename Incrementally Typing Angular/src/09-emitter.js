import { EventEmitter2 } from 'eventEmitter2'






const emitter = new EventEmitter2

emitter.on('foo', args => { /* ... */ })
emitter.on('bar', args => { /* ... */ })

emitter.emit('foo', 42)
emitter.emit('bar', 'baz')