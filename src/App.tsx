import { useState } from "react";
import { Tweet } from "./Components/tweet"

import './App.css'
import { AppRoutes} from "./Routs";

function App() {
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3'
  ])
function CreatTweet(){
    setTweets([...tweets, 'Tweet 4'])
}

  return (
      <AppRoutes/>
      /* <div>
      {
        tweets.map( tweet => {
          return <Tweet text={tweet}/>
        })
      }
      <button
       onClick={CreatTweet}
       style= {{
        background: '#8257e6',
        border: 0,
        padding: '6px 12px',
        color: "azure"
       }}
       >
        
        Add Tweet</button>
    </div> */
  );
}

export default App
