<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.png"
      width="125"
      height="125"
    />
    <div class="app-name">Super trip planner</div>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/trips">My trips</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/trip-ideas">Trip ideas</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  font-weight: normal;
}

.app-name {
  font-family: TheWantersDEMO;
  font-size: 2rem;
  text-align: center;
  color: var(--color-indigo-x-light);
  text-shadow: -1px 2px 0 var(--color-orange);
}

header {
  line-height: 1.5;
  max-height: 100vh;
  background: #005258;
  width: 100vw;
  padding: 0.5rem;
  box-shadow: var(--color-indigo-transparent) 0px 6px 20px 0px;
}

main {
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
  color: var(--color-indigo-x-light);
  transition: 0.3s;
}

nav a:hover {
  background-color: var(--color-indigo-x-light-transparent);
}

nav {
  width: 100%;
  text-align: center;
  padding: 1rem 0;
}

nav a.router-link-exact-active {
  background-color: var(--color-indigo-x-light-transparent);
  color: var(--color-text-inverted);
}

nav a.router-link-exact-active:hover {
  background-color: var(--color-indigo-x-light-transparent);
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
