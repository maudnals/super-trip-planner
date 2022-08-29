<script lang="ts">
import Trip from '@/components/Trip.vue';

export default {
  components: {
    Trip,
  },
  data() {
    return {
      trip: this.getTrip(),
    };
  },
  methods: {
    // TODO does this need to be here or could it be outside?
    getTripIdFromUrl() {
      const searchParams = new URLSearchParams(location.search);
      return searchParams.get('id');
    },
    getTrip() {
      const tripId = this.getTripIdFromUrl();
      const trip = JSON.parse(localStorage.getItem('trips'))[tripId];
      if (!trip) {
        location.href = '/not-found';
      } else return trip;
    },
  },
};
</script>

<template>
  <Trip :trip="trip" />
</template>
