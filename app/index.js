const express = require('express');

const app = express();
const {PORT} = process.env;
console.log(PORT);
const port = PORT;

app.get('/', (req, res) => {
	console.log(PORT);
	res.send('Docker vet app demo 1.0.1 !!!!');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
