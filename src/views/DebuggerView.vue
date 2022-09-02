<script lang="ts">
import { defineComponent } from 'vue';
import { getPresetTrips } from '../data/data.trips.js';
import { getTrips } from '../utils/utils.localStorage.js';

export default defineComponent({
  data() {
    return {
      platform: navigator?.userAgentData?.platform,
      isMobile: navigator?.userAgentData?.mobile,
      isWebShareApiAvailable: 'share' in navigator,
      trips: getTrips(),
    };
  },
  methods: {
    createMultipleTrips(event: any) {
      const trips = getPresetTrips();
      localStorage.clear();
      localStorage.setItem('trips', JSON.stringify(trips));
      // To refresh the view
      this.$data.trips = getTrips();
    },
    clearAllTrips() {
      localStorage.clear();
      // To refresh the view
      this.$data.trips = getTrips();
    },
  },
});
</script>

<template>
  <h1>Debugger</h1>
  <div>
    isWebShareApiAvailable:
    {{ isWebShareApiAvailable ? '✅ true' : '❌ false' }}
  </div>
  <hr />
  <div>platform: {{ platform }}</div>
  <div>isMobile: {{ isMobile }}</div>
  <hr />
  Trips:
  {{ Object.keys(trips).length || 0 }}
  <div class="buttons-group-wrapper">
    <button class="primary" @click="createMultipleTrips">
      ✨ Create multiple trips
    </button>
    <button @click="clearAllTrips" class="destructive">
      ❌ Delete all trips
    </button>
  </div>
</template>

<style>
hr {
  border-bottom: solid 1px var(--color-grey);
  border-top: 0;
  margin: 0.5rem;
}
</style>
