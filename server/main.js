const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const nearbyPlaces = require('./nearby-places');

const app = express();

app.use(bodyParser.json());
app.use(compression());

// Serve APIs
app.use('/api/nearbyPlaces', nearbyPlaces);

// Serve static files
app.use(express.static(path.join(__dirname, '..', 'dist', 'pwa-mat')));

// Otherwise, serve index.html
app.use('*', express.static(path.join(__dirname, '..', 'dist', 'pwa-mat', 'index.html')));

const port = process.env.PORT || '3000';

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`);
});
