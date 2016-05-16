require('./models/connect');
let express = require('express');
let bodyParser = require('body-parser');

const routes = require('./routes/index');

let app = express();

app.use(bodyParser.json());

app.use('/', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`App listening to ${PORT}`);
});
