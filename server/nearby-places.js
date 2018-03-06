const express = require('express');
const axios = require('axios');

const router = express.Router();

class PlaceOfInterest {
  constructor(name, lat, lng, type, id) {
    this.name = name;
    this.lat = lat;
    this.lng = lng;
    this.type = type;
    this.id = id;
  }
}

class PlacesOfInterest {
  constructor() {
    this.places = [];
  }

  addPlace(place) {
    this.places.push(place);
  }

  toString() {
    return JSON.stringify(this.places);
  }
}

router.use('/', (req, res) => {
  const position = req.query;
  const places = new PlacesOfInterest();
  const types = ['bank', 'hospital'];
  const promises = types.map(type =>
    axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
      params: {
        key: process.env.GOOGLE_MAPS_PLACES_API_KEY,
        location: `${position.lat},${position.lng}`,
        radius: '100',
        type,
      },
    }).then((response) => {
      response.data.results.forEach((result) => {
        places.addPlace(new PlaceOfInterest(
          result.name,
          result.geometry.location.lat,
          result.geometry.location.lng,
          type,
          result.place_id
        ));
      });
    }).catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    }),
  );
  Promise.all(promises).then(() => {
    res.send(places.toString());
  });
});

module.exports = router;
