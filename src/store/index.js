import Vue from 'vue';
import Vuex from 'vuex';

import places from './places';
import money from './money';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    places,
    money,
  },
});

export default store;
