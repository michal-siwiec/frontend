import React from 'react';
import '../styles/style.scss';
import Books from './Books.jsx';
import Author from './Author.jsx';
import Messages from './chat/Messages.jsx';

const App = () => {
  return (
    <div className="wrapper">
      <h1>GraphQl</h1>
      {/* <Messages /> */}
      <Books />
      {/* <Author /> */}
    </div>
  )
}

export default App;
