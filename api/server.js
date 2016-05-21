require('./models/connect');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const routes = require('./routes/index');
var webpack = require('webpack');
var config = require('../webpack.config');
const app = express();
var compiler = webpack(config);

app.use(bodyParser.json());

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(__dirname + '../app/build/'));

app.use('/', routes);

app.get('*', (request, response) => {
	response.sendFile(path.resolve(__dirname, '../app/build/', 'index.html'));
});

app.listen(PORT, () => {
	console.log(`App listening to ${PORT}`);
});
