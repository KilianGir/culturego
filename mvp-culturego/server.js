// server.js
import express from 'express';
import fs from 'fs';

const app = express();
app.use(express.json());

const DB_PATH = './database.json';

function readDB() {
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
}

function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

app.get('/api/profils', (req, res) => {
  const db = readDB();
  res.json(Object.keys(db));
});

app.get('/api/profils/:nom/cartes', (req, res) => {
  const db = readDB();
  res.json(db[req.params.nom] || []);
});

app.post('/api/profils/:nom/cartes', (req, res) => {
  const { nom } = req.params;
  const carte = req.body;
  const db = readDB();

  db[nom] = db[nom] || [];
  const existing = db[nom].find(c => c.nom === carte.nom);

  if (existing) {
    existing.count += 1;
  } else {
    db[nom].push({ ...carte, count: 1 });
  }

  writeDB(db);
  res.json(db[nom]);
});

app.delete('/api/profils/:nom/cartes', (req, res) => {
  const db = readDB();
  db[req.params.nom] = [];
  writeDB(db);
  res.json([]);
});

app.listen(3001, () => {
  console.log('Serveur démarré sur http://localhost:3001');
});
