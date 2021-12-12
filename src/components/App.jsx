import React, { useState, useEffect } from 'react';
import './style.scss';
import { gql, useQuery, useLazyQuery } from '@apollo/client';

import Books from './Books.jsx';
import Author from './Author.jsx';

const App = () => {
  return (
    <div className="wrapper">
      <h1>GraphQl</h1>
      <Books />
      <Author />
    </div>
  )
}

export default App;
