<script lang="ts">
navigator.geolocation.getCurrentPosition(
  () => {
    console.log('ok');
  },
  () => {
    console.log('no');
  }
);
</script>

<template>
  <div>
    <h1>Trip ideas</h1>
    <h2>Near me</h2>
    <h2>All</h2>
  </div>
</template>
