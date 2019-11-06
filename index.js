const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;
const users = require('./data.json');

// set the view engine to ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('home', { menu: 'home' });
});

app.get('/about', (req, res) => {
	res.render('about', { menu: 'about' });
});

app.get('/contact', (req, res) => {
	res.render('contact', { menu: 'contact' });
});

app.get('/api/users', function(req, res) {
	// res.send('Hello Sapi');
	res.json(users);
});

app.listen(PORT, function() {
	console.log(`Server is running on http://localhost:${PORT}`);
});
