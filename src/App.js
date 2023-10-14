import './App.css';
import React, { useState } from 'react';

function App() {

  const [text, setText] = useState('');

  const wordCount = (event) => {
    setText(event.target.value);
  };

  const count = text.trim().split(/\s+/).filter(word => word.length > 0).length;

  return (

    <div className="App">
      <div className="container">
          <h1>Word Counter</h1>
          <textarea value={text} onChange={wordCount} />
          <h3>Word Count : {count}</h3>
      </div>
    </div>
  );
}

export default App;
