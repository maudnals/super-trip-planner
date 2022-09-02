<script lang="ts">
import { RouterLink, RouterView } from 'vue-router';

export default {
  data() {},
};
</script>

<template>
  <div class="app-wrapper">
    <header>
      <img
        alt="App logo"
        class="logo"
        src="@/assets/logo-train.png"
        width="110"
        height="110"
      />
      <div class="app-name">Super Trip Planner</div>
      <div>
        <nav>
          <RouterLink to="/">My trips</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/trip-ideas">Trip ideas</RouterLink>
          <RouterLink class="debugger" to="/debugger">Debug</RouterLink>
        </nav>
      </div>
    </header>
    <main>
      <!--<a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        class="twitter-share-button"
        data-show-count="false"
        >Share on Twitter</a
      >-->
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

.app-name {
  font-family: 'Wanters';
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

.logo {
  display: none;
}

@media only screen and (min-device-width: 480px) {
  .logo {
    display: block;
    margin: 0 auto;
  }
}

nav {
  width: 100%;
  text-align: center;
  padding: 0.2rem 0;
}

a {
  text-decoration: none;
}

nav a {
  text-decoration: none;
  color: var(--color-primary-x-light);
  transition: color 0.3s;
  text-transform: uppercase;
}

nav a:hover {
  color: var(--color-text-inverted);
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
  padding: 0.2rem 0.7rem;
}
</style>
