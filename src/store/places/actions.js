import axios from 'axios';

export const findNearbyPlaces = ({ commit }, position) => {
  axios.get('/api/nearbyPlaces', {
    params: {
      lat: position.lat().toString(),
      lng: position.lng().toString(),
    },
  }).then((response) => {
    commit('setNearbyPlaces', response.data);
  });
};

export const doSomething = () => {
};
