const handlers = require('./lib/handlers');
const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'));
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', handlers.home);

app.get('/about', handlers.about);

app.use(handlers.notFound);

app.use(handlers.serverError);

if (require.main === module) {
	app.listen(port, () => {
		console.log(`Server listening on port ${port}`);
	});
} else {
	module.exports = app;
}