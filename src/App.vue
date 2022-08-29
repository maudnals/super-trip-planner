<script lang="ts">
import { RouterLink, RouterView } from 'vue-router';

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
  <div :class="{ 'app-wrapper': true, mobile: isMobile }">
    <header>
      <img
        alt="App logo"
        class="logo"
        src="@/assets/logo-train.png"
        width="125"
        height="125"
      />
      <div class="app-name">Super Trip Planner</div>
      <div>
        <nav>
          <RouterLink to="/">My trips</RouterLink>
          <RouterLink to="/trip-ideas">Trip ideas</RouterLink>
          <RouterLink to="/privacy-policy">Privacy policy</RouterLink>
          <RouterLink to="/debugger">Debugger</RouterLink>
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
@import '@/assets/base.css';

.app-wrapper {
  font-weight: normal;
  display: flex;
  height: 100vh;
  flex-direction: column;
}

.mobile {
  flex-direction: column-reverse;
}

.app-name {
  font-family: TheWantersDEMO;
  font-size: 2rem;
  text-align: center;
  color: var(--color-primary-x-light);
  text-shadow: -1px 2px 0 var(--color-secondary);
}

header {
  line-height: 1.5;
  max-height: 100vh;
  background: var(--color-primary-dark);
  width: 100vw;
  padding: 0.5rem;
  box-shadow: var(--color-primary-transparent) 0px 6px 20px 0px;
}

main {
  padding: 2rem;
  height: 100%;
  padding: 2rem;
}

.logo {
  display: block;
  margin: 0 auto;
}

a {
  text-decoration: none;
}

nav a {
  text-decoration: none;
  color: var(--color-primary-x-light);
  transition: 0.3s;
}

nav a:hover {
  background-color: var(--color-primary-x-light-transparent);
}

nav {
  width: 100%;
  text-align: center;
  padding: 1rem 0;
}

nav a.router-link-exact-active {
  background-color: var(--color-primary-x-light-transparent);
  color: var(--color-text-inverted);
}

nav a.router-link-exact-active:hover {
  background-color: var(--color-primary-x-light-transparent);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
