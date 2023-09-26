const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.get('/notes', (req, res) => {
  const dbPath = path.join(__dirname, 'db.json');
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    const notes = JSON.parse(data);
    res.json(notes);
  });
});


app.post('/notes', (req, res) => {
  const dbPath = path.join(__dirname, 'db.json');
  const newnote = req.body;

  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error' });
      return;
    }

    const notes = JSON.parse(data);
    notes.push(note);

    fs.writeFile(dbPath, JSON.stringify(notes), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Server Error' });
        return;
      }
      res.status(201).json(notes);
    });
  });
});
app.get('/api/notes', (req, res) => {
    const dbPath = path.join(__dirname, 'db.json');
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: ' Error' });
        return;
      }
      const notes = JSON.parse(data);
      res.json(notes);
    });
  });
  app.post('/api/notes', (req, res) => {
    const dbPath = path.join(__dirname, 'db.json');
    const newNote = req.body;
  
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      const notes = JSON.parse(data);
      newNote.id = uuidv4();
      notes.push(newNote);
  
      fs.writeFile(dbPath, JSON.stringify(notes), (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Error' });
          return;
        }
        res.status(201).json(newNote);
      });
    });
  });

app.listen(port, () => {} )