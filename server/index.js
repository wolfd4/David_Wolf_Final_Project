const express = require('express');
const fitnessApp = require('./fitnessApp/controller');
const app = express();
const port = 80;
const server = "localhost";

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(__dirname + "/../dist/"));
app.use('/fitnessapp', fitnessApp);
app.use("/", (req, res) => res.sendFile(path.join(__dirname, "/../dist/index.html")) );

app.listen(port);

// eslint-disable-next-line no-console
console.log(`listening on: http://${server}:${port}`);