const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

// load environmental variables
dotenv.config({ path: './config.env' });
const port = process.env.PORT || 8000;

const app = express();

// Routes
app.use('/esi.evetech.net/dev/', require('./routes/profile'));

// Dev logging
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
})