const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('./notes.db');

// Create the notes table
db.run(`CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    content TEXT
)`);

// Routes
app.get('/notes', (req, res) => {
    db.all('SELECT * FROM notes', [], (err, rows) => {
        if (err) return res.status(500).send(err.message);
        res.json(rows);
    });
});

app.post('/notes', (req, res) => {
    const { title, content } = req.body;
    db.run('INSERT INTO notes (title, content) VALUES (?, ?)', [title, content], function(err) {
        if (err) return res.status(500).send(err.message);
        res.json({ id: this.lastID });
    });
});

app.put('/notes/:id', (req, res) => {
    const { title, content } = req.body;
    const { id } = req.params;
    db.run('UPDATE notes SET title = ?, content = ? WHERE id = ?', [title, content, id], function(err) {
        if (err) return res.status(500).send(err.message);
        res.json({ updated: this.changes });
    });
});

app.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM notes WHERE id = ?', [id], function(err) {
        if (err) return res.status(500).send(err.message);
        res.json({ deleted: this.changes });
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
