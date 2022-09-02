<script lang="ts">
import TripCard from '@/components/TripCard.vue';
import { defineComponent } from 'vue';
import { getPresetTrips } from '../data/data.trips.js';
import { getTrips } from '../utils/utils.localStorage.js';

export default defineComponent({
  components: {
    TripCard,
  },
  data() {
    return {
      trips: getTrips(),
    };
  },
  methods: {
    createNewTrip(event: any) {
      this.$router.push('new-trip');
    },
    navigateToTrip(event: any) {
      const tripId = event.target.parentElement.getAttribute('tripid');
      this.$router.push({ name: 'trip', query: { id: tripId } });
    },
  },
});
</script>

<template>
  <div class="title-button-group">
    <h1>My trips</h1>
    <button @click="createNewTrip" class="primary">+ New trip</button>
  </div>
  <li v-for="(trip, index) in trips">
    <TripCard
      :title="trip?.title"
      :location="trip?.location"
      :startDate="trip?.dates?.startDate"
      :endDate="trip?.dates?.endDate"
      @click="navigateToTrip"
      :tripId="index"
    />
  </li>
</template>

<style scoped>
li {
  list-style: none;
}
</style>
