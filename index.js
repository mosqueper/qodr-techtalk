const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const data = require('./data.json');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8082;

// set the view engine to ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

app.get('/api', (req, res) => {
	res.send(data);
});

app.get('/', (req, res) => {
	res.render('home', { menu: 'home' });
});

app.get('/about', (req, res) => {
	res.render('about', { menu: 'about' });
});

app.get('/contact', (req, res) => {
	res.render('contact', { menu: 'contact' });
});

app.get('/:id', (req, res) => {
	const d = data.filter(d => d.id == req.params.id);
	res.send(d);
});

app.listen(PORT, () =>
	console.log(`Server running on http://localhost:${PORT}`)
);
