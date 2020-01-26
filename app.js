const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const playerRouter = require('./app/players/player.route');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
    res.send('Here you get the list of players :D')
});

app.use('/players', playerRouter);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});

module.exports = app;

