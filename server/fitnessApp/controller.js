const express = require('express');
const {fitnessApp, User} = require('./model');

var fitapp = new fitnessApp();
const app = express.Router();

app.get("/", function(req, res){
    res.send(fitapp.users);
});

//adds a user
app.post('/users', (req, res) => {
    const user = new User(req.body.name, fitapp.users.length+1, req.body.age, req.body.height, req.body.weight, req.body.activity);
    fitapp.users.push(user);
    res.send(user);
})


module.exports = app;