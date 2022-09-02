<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      platform: navigator?.userAgentData?.platform,
    };
  },
  methods: {
    getNearbyTripIdeas() {
      navigator.geolocation.getCurrentPosition(
        () => {
          console.log('ok');
        },
        () => {
          console.log('nok');
        }
      );
    },
  },
});

// getUserLocation();
</script>
<template>
  <h1>Trip ideas</h1>
  <h2>All trip ideas</h2>
  {Insert list of trip ideas here}
  <div class="title-button-group">
    <h2>Trip ideas nearby</h2>
    <!--TODO COMMENT/UNCOMMENT-->
    <button class="primary" @click="getNearbyTripIdeas">
      Show trip ideas nearby
    </button>
    <!--TODO COMMENT/UNCOMMENT-->
  </div>
</template>
