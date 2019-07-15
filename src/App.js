import React, { useState } from 'react';
import './App.css';

const App = () => {
    const SNIPPETS = [
          'Bears, beets, battlestar galactica',
          "What's Forrest Gump's password? 1Forrest1",
          'Where do programmers like to hangout? The Foo Bar'
    ];
    const INITIAL_GAME_STATE = { victory: false, startTime: null, endTime: null };
    const [ snippet, setSnippet ] = useState('Please select from the list of snippets');
    const [ userText, setUserText ] = useState('');
    const [ gameState, setGameState ] = useState(INITIAL_GAME_STATE);

    const updateUserText = event => {
        setUserText(event.target.value);

        if (event.target.value === snippet) {
                setGameState({
                  ...gameState,
                  victory: true,
                  endTime: new Date().getTime() - gameState.startTime
                });
          }
    }

    const chooseSnippet = snippetIndex => {
        console.log('setSnippet', snippetIndex);
        setSnippet(SNIPPETS[snippetIndex]);
        setGameState({ ...gameState, startTime: new Date().getTime() });
    };

    return (
        <div className="app">
            <h2>Type Race</h2>
            <h3>Type this Snippet as fast as you can!</h3>
            <div className="snippet-wrapper"><span>{snippet}</span></div>
            <h4>{gameState.victory ? `Done! 🎉 Time: ${gameState.endTime}ms` : null}</h4>
            <div>{
                SNIPPETS.map((SNIPPET, index) => (
                  <button onClick={() => chooseSnippet(index)} key={index}>
                    {SNIPPET.substring(0, 10)}...
                  </button>
                ))
            }</div>
            <input value={userText} onChange={updateUserText} placeholder="Type your snippet here!"/>
        </div>
    )
}

export default App;
