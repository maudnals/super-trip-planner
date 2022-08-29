<script>
import TripCard from '@/components/TripCard.vue';
import { getPresetTrips } from '../data/data.trips.js';

export default {
  components: {
    TripCard,
  },
  data() {
    return {
      trips: this.getTrips(),
    };
  },
  methods: {
    createNewTrip(event) {
      location.href = '/new-trip';
    },
    createMultipleTrips(event) {
      const trips = getPresetTrips();
      this.clearAllTrips();
      localStorage.setItem('trips', JSON.stringify(trips));
      this.$data.trips = this.getTrips();
    },
    clearAllTrips() {
      localStorage.clear();
      // TODO improve
      this.$data.trips = () => ({});
    },
    getTrips() {
      return localStorage.getItem('trips')
        ? JSON.parse(localStorage.getItem('trips'))
        : {};
    },
  },
};
</script>

<template>
  <h1>My trips</h1>
  <div class="buttons-wrapper">
      <button @click="createMultipleTrips">✨ Create multiple trips</button>
  </div>
  <li v-for="(trip, index) in trips">
    <a :href="'/trip?id=' + index">
      <TripCard
        :title="trip.title"
        :location="trip.location"
        :startDate="trip.dates?.startDate"
        :endDate="trip.dates?.endDate"
      />
    </a>
  </li>
</template>

<style scoped>
li {
  list-style: none;
}

.buttons-wrapper > button {
  margin-right: 1rem;
}
</style>
