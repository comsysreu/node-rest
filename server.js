var express = require('express');
var app = express();

const users = require('./users');
app.get('/listUsers', users.getUsers);
app.post('/addUser', users.addUser);
app.get('/:id', users.getUser);
app.delete('/deleteUser', users.deleteUser);

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})