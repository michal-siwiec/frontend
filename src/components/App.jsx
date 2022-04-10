import React from 'react';
import '../styles/style.scss';
import Grid from '@mui/material/Grid'
import TopBar from './topBar/Index.jsx';
import Content from './Content/Index.jsx';
import Footer from './footer/Index.jsx';

const App = () => {
  return (
    <Grid container>
      <TopBar />
      <Content />
      <Footer />
    </Grid>
  )
}

export default App;
