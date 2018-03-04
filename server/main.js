const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const nearbyPlaces = require('./nearby-places');

const app = express();

app.use(bodyParser.json());

// Serve APIs
app.use('/api/nearbyPlaces', nearbyPlaces);

// Serve static files
app.use(express.static(path.join(__dirname, '..', 'dist', 'spa-mat')));

// Otherwise, serve index.html
app.use('*', express.static(path.join(__dirname, '..', 'dist', 'spa-mat', 'index.html')));

const port = process.env.PORT || '3000';

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
