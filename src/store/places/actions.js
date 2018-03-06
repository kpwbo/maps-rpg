import axios from 'axios';

export const findNearbyPlaces = ({ commit, state }) => {
  commit('setLookingForNearbyPlaces', true);
  axios.get('/api/nearbyPlaces', {
    params: {
      lat: state.currentPosition.lat().toString(),
      lng: state.currentPosition.lng().toString(),
    },
  }).then((response) => {
    commit('setNearbyPlaces', response.data);
    commit('setLookingForNearbyPlaces', false);
  });
};

export const doSomething = () => {
};
