# XState-Reddit-Display-FSM

## What does this app do?

This project is an attempt to better understand Finite State Machines using the XState library. I will be creating a basic app from one of their tutorials listed in their docs that connects to the Reddit API and displays posts from a list of selected subreddits. 

My primary goals for this project are as follows:

- Have a predefined list of subreddits that the user can select from
- Load the selected subreddit
- Display the last time the selected subreddit was loaded
- Reload the selected subreddit
- Select a different subreddit at any time

## How can I run this app as well?

1. clone the repository to your local machine
2. change directories into the root folder of the project
3. run `yarn` in your command line
4. after all node modules are installed run `yarn start` in your command line
5. if the app does not open your browser automatically, go to [localhost:3000](http://localhost:3000) in your browser of choice

## Where can I find the resources to recreate this app myself?

**XState Docs:**

[https://xstate.js.org/docs/](https://xstate.js.org/docs/)

**XState Reddit API Tutorial:**

[https://xstate.js.org/docs/tutorials/reddit.html](https://xstate.js.org/docs/tutorials/reddit.html)