const express = require('express');
const path = require('path');

express()
  .use(express.static(path.join(__dirname, '../dist')))
  .set('views', path.join(__dirname, '../dist'))
  .engine('html', require('ejs').renderFile)
  .set('view engine', 'html')
  .get('*', (req, res) => res.render('index'))
  .listen(3001, () => console.log('Listening on 3001'));
