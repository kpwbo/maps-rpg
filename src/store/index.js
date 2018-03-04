import Vue from 'vue';
import Vuex from 'vuex';

import places from './places';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    places,
  },
});

export default store;
