<script setup lang="ts">
defineProps<{
  endDate: string;
  location: string;
  startDate: string;
  title: string;
}>();
</script>

<template>
  <div class="wrapper">
    <h2 class="title">{{ title }}</h2>
    <div>{{ location }}</div>
    <div>{{ startDate }} ➣ {{ endDate }}</div>
  </div>
</template>

<style scoped>
.wrapper {
  background: var(--color-card);
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 8px;
  color: var(--color-text);
  box-shadow: var(--color-shadow-light) 0px 7px 29px 0px;
  transition: box-shadow 0.2s linear, transform 0.1s linear;
  cursor: pointer;
}

.wrapper:hover {
  box-shadow: var(--color-shadow-dark) 0px 7px 29px 0px;
  transform: translateY(-0.3rem);
}
</style>
