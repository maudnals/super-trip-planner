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
  align-items: flex-end;
  border-top: 0.7px solid var(--color-border);
  padding: 0.4rem 0.2rem;
}

label {
  width: 16rem;
  font-family: RobotoMono-Regular;
  color: var(--color-label);
  letter-spacing: 2px;
  font-size: 0.8rem;
  text-transform: uppercase;
}
</style>
