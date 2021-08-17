var express = require('express');
var mongoose = require('mongoose');
var Cors = require('cors');
var Cards = require('./dbCards.js');

// App Config
const app = express();
const port = process.env.PORT || 8001;
// const connection_url = "paste the mongodb connection url here";

// Middlewares
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,

});

// API Endpoints
app.get("/", (req, res) => res.status(200).send("HELLO"));
app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if(err) {
            res.status(500).send(err);
            console.log("entering if loop post");
        } else {
            res.status(201).send(data);
        }
    });
}); 

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if(err) {
            res.status(500).send(err);
            console.log("entering if loop get");
        } else {
            res.status(200).send(data);
        }
    });
});

//Listener
app.listen(port, () => console.log(`listening on local host: ${port}`));