import { Machine } from './xstate'

const redditMachine = Machine({
    id: 'reddit',
    initial: 'idle',
    states: {
        idle: {},
        selected: {}
    }
})