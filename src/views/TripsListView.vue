<script>
import TripCard from '@/components/TripCard.vue';

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
    <button @click="createNewTrip">➕ New trip</button>
    <button @click="clearAllTrips" class="destroy">❌ Delete all trips</button>
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
