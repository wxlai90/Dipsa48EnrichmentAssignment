const PORT = process.env.PORT || 5000;

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const config = require('./config.json');

const connectionString = config.mongo;

const client = new MongoClient(connectionString, { useNewUrlParser: true });

client.connect((err, client) => {
    if (err) console.error("DB connection error")
});

const app = express();

app.use(bodyParser.json())

app.get('/api/name/:name', (req, res) => {
    const name = req.params.name;
    client.db('boardgames')
        .collection('games')
        .find({ Name: new RegExp(name, 'i') })
        .toArray()
        .then(resp => res.json(resp));
})

app.get('/api/category/:name', (req, res) => {
    const name = req.params.name;
    client.db('boardgames')
        .collection('details')
        .find({ boardgamecategory: new RegExp(name, 'i') })
        .toArray()
        .then(resp => res.json(resp))
        .catch(err => res.send('error'));
})

app.get('/api/game/:id', (req, res) => {
    const id = req.params.id
    client.db('boardgames')
        .collection('games')
        .findOne({ "_id": ObjectId(id) })
        .then((result => res.send(result)));
})


app.get('/api/category/id/:id', (req, res) => {
    const id = parseInt(req.params.id);
    client.db('boardgames')
        .collection('details')
        .findOne({ "id": id })
        .then(result => res.json(result));
})


app.get('/api/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    client.db('boardgames')
        .collection('comments')
        .find({ "gameid": id })
        .toArray()
        .then(result => res.json(result));
})


app.post('/api/comment/new', (req, res) => {
    comment = req.body;
    client.db('boardgames')
        .collection('comments')
        .insertOne({ ...comment })
        .then((resp) => res.send('ok'));
})

app.listen(PORT, () => console.log(`Started listening on ${PORT}`));