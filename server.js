const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const fs = require('fs')

//Work out what this is doing!
const PORT = process.env.PORT || 3000
const dev = process.env.NODE_DEV !== 'production' //true false
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler() //part of next config

//Import mongoose to manage the database
const mongoose = require('mongoose')

//Import models
kittenModel = require('./database/models/kittenModel.js')

fs.readFile('./secure/api_password.txt', (err, password) => {
    mongoose.connect('mongodb://topmoviesapp:'+ password +'@68.183.183.193:27017/test', {useNewUrlParser: true})
    //mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true})
});


nextApp.prepare().then(() => {
    // express code here
    const app = express()

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    

    //Api Routes
    app.get('/api', (req, res) => {
        kittenModel.find({}, (err, kittens) => {
            res.json(kittens)
        })  
    })

    app.get('/api/:name', (req, res) => {
        kittenModel.find({name: 'req.params.name'}, (err, kittens) => {
            res.json(kittens)
        })  
    })
    
    app.get('/api/addkitten/:name', (req, res) => {

        let kitten = new kittenModel({name: req.params.name});

        kitten.save((err, kitten) => {
            res.send('Object ' + kitten + ' added to database');
        })
    })

    //Handel all other routes via next.js
    app.get('*', (req,res) => {
        return handle(req,res) // for all the react stuff
    })

    //Bind app to port
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))

})


