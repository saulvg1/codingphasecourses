// // const _ = require('lodash');
// // var array = [1];
// // var other = _.concat(array, 2, [3], [[4]]);

// const v = require('./variables.js');
// console.log(v.name);
const express = require('express');

const app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
	res.send('<h1>Hi this is my first page </h1>');
});
app.get('/about', (req, res) => {
	res.send('<h1>About </h1>');
});
app.get('/gallery', (req, res) => {
	res.send(`<h1>gallery</h1>
        <div>
            <img src="./vegeta.jpg">
        </div>
        `);
});

app.listen(3000, () => {
	console.log(
		'server is running on http://localhost:3000 to stop server press ctrl + c'
	);
});
