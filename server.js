'use strict';

const express = require('express');
const helmet = require('helmet')

// Constants
const PORT = ;

// App
const app = express();
app.use(helmet())


app.get('/', function (req, res) {
  res.send('Do not fear......Captain code is coming\n');
});

app.listen(PORT);
