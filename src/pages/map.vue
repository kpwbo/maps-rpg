<template>
  <q-page>
    <div ref="gmap" class="gmap"></div>
  </q-page>
</template>

<script>
import { loadGoogleMaps, onGoogleMapsLoaded } from '../googleMapsHelper';

export default {
  mounted() {
    onGoogleMapsLoaded().then(() => {
      const mapOptions = {
        disableDefaultUI: true,
        position: new google.maps.LatLng(45.494156, -73.575480),
        showRoadLabels: false,
      };
      const map = new google.maps.StreetViewPanorama(this.$refs.gmap, mapOptions);
      map.addListener('position_changed', () => {
        this.$store.commit('places/setCurrentPosition', map.getPosition());
        this.$store.dispatch('places/findNearbyPlaces');
      });
    });
    loadGoogleMaps();
  },
};
</script>

<style scoped>
.q-layout-page, .gmap {
  height: 100%;
}
</style>
