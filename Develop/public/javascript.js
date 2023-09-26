const express = require('express');
const app = express();
const path = require('path');

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'notes.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is running');
});
const typeDefs = require('./notes.html');
const resolvers = require('./index.html');

module.exports = { typeDefs, resolvers };
 

