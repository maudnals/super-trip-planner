<script setup lang="ts">
defineProps<{
  label: string;
  info: string;
}>();
</script>

<template>
  <div class="wrapper">
    <label>{{ label }}</label>
    <div>{{ info }}</div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 0.7px solid var(--color-border);
  padding: 0.4rem 0.2rem;
}

label {
  flex: 1;
}
</style>
