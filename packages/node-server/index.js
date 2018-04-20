var express = require('express');
var app = express();
var bodyParser = require('body-parser')
const uuidv1 = require('uuid/v1');


app.use(bodyParser.json())
app.listen(3000);
console.log('listening on port 3000');

let events = {};

app.get('/', function (req, res) {
    res.send('example return');
});

app.post('/band/event', (req, res) => {
    // res.send('post method on event')
    console.log(req.body);
    // inMemoryVariable = req.body
    // inMemoryVariable.eventId = uuidv1(); // ⇨ 'f64f2940-fae4-11e7-8c5f-ef356f279131'
    events[uuidv1()] = req.body.event;
    res.status(200).send(JSON.stringify(events))
})

app.get('/band/event/:id', function (req, res) {
    res.status(200).send(events[req.params.id]);
})

app.post('/band/event/:id', function(req, res) {
    res.send('post request on id');
})

app.delete('/band/event/:id', function(req, res) {
    res.send('delete request on id');
})