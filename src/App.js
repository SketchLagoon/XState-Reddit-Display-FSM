  
import React from 'react';
import { useMachine } from '@xstate/react';
import { redditMachine } from './state-machine/redditMachine';
import { Subreddit } from './components/Subreddit'

const subreddits = ["worldnews", "futurology", "reactjs"];

const App = () => {
  const [current, send] = useMachine(redditMachine);
  const { subreddit } = current.context;

  return (
    <main
      data-machine={redditMachine.id}
      data-state={current.toStrings().join(" ")}
    >
      <header>
        <select
          onChange={e => {
            send("SELECT", { name: e.target.value });
          }}
        >
          <option disabled>Select one</option>
          {subreddits.map(subreddit => {
            return <option key={subreddit}>{subreddit}</option>;
          })}
        </select>
      </header>
      <div>
        <h1>{current.matches("idle") ? "Select a subreddit" : null}</h1>
        {subreddit && <Subreddit service={subreddit} key={subreddit.id} />}
      </div>
    </main>
  );
};

export default App;