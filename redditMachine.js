import { Machine } from './xstate'
import { assign } from 'xstate/lib/actionTypes'

const selectEvent = {
    type: 'SELECT', //event type
    name: 'reactjs' //subreddit name
}

const redditMachine = Machine({
    id: 'reddit',
    initial: 'idle',
    context: {
        subreddit: null // no subreddit has been selected yet in the initial state
    },
    states: {
        idle: {},
        selected: {}
    },
    on: {
        SELECT: {
            target: '.selected',
            actions: assign({
                subreddit: (context, event) => event.name
            })
        }
    }
})