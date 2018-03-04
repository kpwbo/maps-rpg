<template>
  <q-layout view="hHh LpR fFf">
    <q-layout-header>
      <q-tabs>
        <q-route-tab slot="title" to="/"
          label="Nearby Places" :count="countNearbyPlaces" />
      </q-tabs>
    </q-layout-header>
    <q-layout-drawer :value="true" side="right">
      <router-view />
    </q-layout-drawer>
    <q-page-container>
      <google-maps></google-maps>
    </q-page-container>
  </q-layout>
</template>

<script>
import GoogleMaps from '../pages/map.vue';

export default {
  components: { GoogleMaps },
  computed: {
    countNearbyPlaces() {
      return this.$store.getters['places/getNearbyPlaces'].length;
    },
  },
};
</script>

<style scoped>
.q-layout, .q-layout-page-container {
  height: 100%;
}
</style>
