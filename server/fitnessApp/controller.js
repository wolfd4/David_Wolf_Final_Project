const express = require('express');
const {fitnessApp, User} = require('./model');
var fitapp = new fitnessApp();
const app = express.Router();

//shows all users
app.get("/", function(req, res){
    res.send(fitapp.users);
});

//adds a user to the fitapp
app.post('/users', (req, res) => {
    const user = new User(req.body.name, fitapp.users.length+1, req.body.age, req.body.height, req.body.weight, req.body.activity);
    fitapp.users.push(user);
    res.send(user);
})

//retrieves user based on name
app.get('/users/:name', (req, res) => {
    const username =  fitapp.users.find(n => n.name === String(req.params.name));
    if(!username){
        res.status(404).send('User not found');
    };
    res.send(username);
})

//adds a friend to the user's friends list
app.post('/addFriend/:name', (req, res) => {
    const friend = fitapp.users.find(n => n.name === String(req.params.name));
    if(!friend){
        res.status(404).send('Friend not found');
    };
    const CurrentUser = fitapp.users.find(n => n.id === 1);
    if(friend.id === CurrentUser.id){
        res.status(404).send('Cannot add yourself as a friend')
    };
    CurrentUser.friendsList.push(friend);
    res.send(CurrentUser)
});

//dispays users aggergated data

//Adds a workout to workout completed
app.post('/addWorkout', (req, res) => {
    var workout = req.body.workout;
    const CurrentUser = fitapp.users.find(n => n.id === 1);
    CurrentUser.workoutsDone.push(workout);
    res.send(CurrentUser);
});

//Adds a calories to intake
app.post('/setIntake', (req, res) => {
    const CurrentUser = fitapp.users.find(n => n.id === 1);
    var inTake = req.body.inTake;
    CurrentUser.changeInTake(inTake);
    res.send(CurrentUser);
});
//gets BMI
app.post('/getBMI', (req, res) => {
    const CurrentUser = fitapp.users.find(n => n.id === 1);
    var BMI = CurrentUser.BMI;
    res.send(`${BMI}`)
});

//display users information
module.exports = app;