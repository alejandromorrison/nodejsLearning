const http = require('http');
const express = require('express');

const app = express();


app.use('/users', (req, res, next) => {
	console.log("this is the user middleware");
	res.send('<p>users</p>');
});

app.use('/', (req, res, next) => {
	console.log("this is the main log");
	res.send('<p>main</p>');
});

app.listen(3000);
