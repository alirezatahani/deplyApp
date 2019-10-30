const express = require('express');
const app = express();

app.get('/', function(req, res, next) {
    res.render('index', { title: 'S' });
    next();
});

app.post('/', function (req, res, next) {
    // Prepare output in JSON format
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    res.json(response);
});

module.exports = app;
