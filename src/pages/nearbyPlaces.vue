<template>
  <div>
    <q-list v-if="nearbyPlaces.length > 0" highlight no-border>
      <q-item v-for="place in nearbyPlaces" :key="place.name" @click.native="checkPlace(place)">
        <q-item-side :icon="getIcon(place.type)" />
        <q-item-main :label="place.name" />
      </q-item>
    </q-list>
    <p v-else class="text-center q-mt-md">{{ $t('Nothing of interest nearby.') }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    nearbyPlaces() {
      return this.$store.getters['places/getNearbyPlaces'];
    },
  },
  methods: {
    checkPlace(place) {
      // TODO : open modal
      console.log(place);
    },

    getIcon(type) {
      if (type === 'bank') {
        return 'account_balance';
      } else if (type === 'hospital') {
        return 'healing';
      }
      return 'help';
    },
  },
};
</script>
