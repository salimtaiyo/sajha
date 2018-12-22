const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// importing routers
const regRouter = require('./routes/register');

// middleware
app.use(express.json());
app.use(cors());

// database
mongoose
  .connect(
    'mongodb+srv://shal1231:Shal1231@cluster0-wlagw.mongodb.net/test?retryWrites=true',
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(err => {
    console.log('Connection failed!', err);
  });

// to get rid of this error
// (node:66003) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
mongoose.set('useCreateIndex', true);

// routers
app.use('/register', regRouter);

module.exports = app;
