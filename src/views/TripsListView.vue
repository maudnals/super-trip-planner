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
      location.href = '/new-trip';
    },
    navigateToTrip(event: any) {
      this.$router.push({ name: 'trip', query: { id: tripId } });
    },
    clearAllTrips() {
      localStorage.clear();
      // TODO improve
      this.$data.trips = () => ({});
    },
});
</script>

<template>
  <div id="header-trips">
    <h1>My trips</h1>
    <div class="buttons-wrapper">
      <button @click="createNewTrip">+ New trip</button>
      <button @click="createMultipleTrips">✨ Create multiple trips</button>
      <button @click="clearAllTrips" class="destroy">
        ❌ Delete all trips
      </button>
    </div>
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

#header-trips {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.buttons-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.buttons-wrapper button {
  margin-left: 1rem;
}
</style>
