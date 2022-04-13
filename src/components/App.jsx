import React, { Fragment } from 'react';
import '../styles/style.scss';
import TopBar from './topBar/Index.jsx';
import Content from './Content/Index.jsx';
import Footer from './footer/Index.jsx';

const App = () => (
  <Fragment>
    <TopBar />
    <Content />
    <Footer />
  </Fragment>
)

export default App;
