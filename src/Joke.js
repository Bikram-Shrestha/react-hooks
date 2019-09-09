import React from 'react';
import {useFetch} from './hooks';

const JOKE_ADDRESS = 'https://official-joke-api.appspot.com/jokes/random';

function Joke(){

  const {setup,punchline} = useFetch(JOKE_ADDRESS,{})

  return(
    <div>
      <h3>Joke of the session</h3>
      <p>{setup}</p>
      <p>{punchline}</p>
    </div>
  )
}


export default Joke;