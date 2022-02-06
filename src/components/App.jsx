import React from 'react';
import '../styles/style.scss';
import Grid from '@mui/material/Grid'
import TopBar from './TopBar/TopBar.jsx';
import Menu from './Menu/Menu.jsx';
import Content from './Content/Content.jsx';
import Aside from './Aside/Aside.jsx';
import Footer from './Footer/Footer.jsx';

const App = () => {
  return (
    <Grid container maxWidth={1920} justify="center" >
      <TopBar />
      <Menu />
      <Content />
      <Aside />
      <Footer />
    </Grid>
  )
}

export default App;
