<template>
  <q-page>
    <div ref="gmap" class="gmap"></div>
  </q-page>
</template>

<script>
export default {
  mounted() {
    const mapOptions = {
      disableDefaultUI: true,
      position: new google.maps.LatLng(45.494156, -73.575480),
      showRoadLabels: false,
    };
    const map = new google.maps.StreetViewPanorama(this.$refs.gmap, mapOptions);
    map.addListener('position_changed', () => {
      const pos = map.getPosition();
      this.$store.dispatch('places/findNearbyPlaces', pos);
    });
  },
};
</script>

<style scoped>
.gmap {
  height: 100vh;
}
</style>
