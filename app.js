/**
 * Created by Mayank on 2017-02-01.
 */
var express = require('express')
var app = express()


app.get('/', function(req, res) {
    res.send('Hello World')
})
app.listen(3000, function (){
console.log('Server running at http://localhost:3000/');
})