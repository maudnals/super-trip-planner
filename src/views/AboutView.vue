<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      platform: navigator?.userAgentData?.platform,
    };
  },
  methods: {
    getPlatform() {
      let platform = '';
      if ('userAgentData' in navigator) {
        platform = navigator?.userAgentData?.platform as string;
      } else {
        const ua = navigator.userAgent;
        if (/Mac|iPhone/.test(ua)) {
          platform = 'macOS';
        } else if (/Win/.test(ua)) {
          platform = 'windows';
        }
      }
      console.log(navigator.userAgentData);
      return platform;
    },
    getIconName() {
      const platform = this.getPlatform();
      if (['macOS', 'iOS'].includes(platform)) {
        return 'share-mac-ios';
      } else if (['windows'].includes(platform)) {
        return 'share-windows';
      } else {
        return 'share-default';
      }
    },
    async share() {
      // Title and text are identical, since the title may actually be ignored.
      const title = document.title;
      const text = document.title;
      // Use the canonical URL, if it exists, else, the current location.
      const url = new URL(location.href).href;
      console.log(url);
      // Feature detection to see if the Web Share API is supported.
      if ('share' in navigator) {
        try {
          await navigator.share({
            url,
            text,
            title,
          });
          return;
        } catch (err) {
          // Handle error
        }
      } else {
        console.warn('Share not available');
        // Fallback to use Twitter's Web Intent URL
      }
    },
  },
});
</script>
<template>
  <div class="title-button-group">
    <h1>About</h1>
    <button @click="share">
      Share
      <span class="share-icon" :class="getIconName()">...</span>
    </button>
  </div>
  <div class="iframe-wrapper">
    <iframe
      class="video"
      src="https://www.youtube-nocookie.com/embed/Gnmt-CpToAw"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>
<style>
.iframe-wrapper {
  text-align: center;
  margin: 0 auto;
  margin-top: 2rem;
}

.share-icon {
  color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('@/assets/share-default.svg');
}

.share-mac-ios {
  background-image: url('@/assets/share-mac-ios.svg');
}

.share-windows {
  background-image: url('@/assets/share-windows.svg');
}

.video {
  aspect-ratio: 16 / 9;
  width: 100%;
}
</style>
