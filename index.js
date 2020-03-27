require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile('inddex.html');
});

app.listen(process.env.PORT, () => {
	console.log(`Server ready on ${process.env.PORT}`)
})
