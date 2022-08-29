<script lang="ts">
export default {
  data() {
    return {
      platform: navigator?.userAgentData?.platform,
      isMobile: navigator?.userAgentData?.mobile,
    };
  },
};
</script>

<template>
  <div>Platform: {{ platform }}</div>
  <div>isMobile: {{ isMobile }}</div>
</template>
