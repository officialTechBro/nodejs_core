import {EventEmitter} from 'events'

const myEmitter = new EventEmitter()

function greetHandler(name) {
    console.log('Hello  ' + name)
}

function goodByeHandler(name) {
    console.log('Bye ' + name)
}

//register event listeners
myEmitter.on('greet', greetHandler)
myEmitter.on('goodbye', goodByeHandler)

//Emit events
myEmitter.emit('greet', 'John')
myEmitter.emit('goodbye', 'Joan')

//Error handling
myEmitter.on('error', (err) => {
    console.log('An Error Occured', err)
})

//simulate error
myEmitter.emit('error', new Error('Something Went wrong'))


