const express = require('express');
const app = express();
const path = require('./api.notes');
const api = require('./routes/index.html');
const api = require('./routes/notes.html');
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'notes.html'));
});
app.use(clog);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'notes.html'))
);
app.listen(3000, () => {
  console.log('Server is running');
});
const typeDefs = require('./notes.html');
const resolvers = require('./index.html');
const { clog } = require();

module.exports = { typeDefs, resolvers };
 

