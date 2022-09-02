<script lang="ts">
import Trip from '@/components/Trip.vue';
import { defineComponent } from 'vue';
import { getTrips } from '../utils/utils.localStorage.js';

export default defineComponent({
  components: {
    Trip,
  },
  data() {
    return {
      trip: this.getTrip(),
    };
  },
  methods: {
    getTripIdFromUrl() {
      const searchParams = new URLSearchParams(location.search);
      return searchParams.get('id');
    },
    getTrip() {
      const tripId = this.getTripIdFromUrl();
      const trip = getTrips()[tripId ? tripId : 0];
      if (!trip) {
        this.$router.push('not-found');
      } else return trip;
    },
  },
});
</script>

<template>
  <Trip :trip="trip" />
</template>
