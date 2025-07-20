<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/projects">Projects</RouterLink>
  </nav>

  <div id="splitter" />

  <RouterView />
</template>

<style scoped lang="scss">
nav {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 150px;
  gap: 15px;
  flex-shrink: 0;

  a {
    color: black;
    text-decoration: none;
    margin-right: 10px;
    font-size: 1.5em;

    &.router-link-active {
      font-weight: bold;
    }
  }
}

#splitter {
  width: 2px;
  background-color: #a5a5a5;
  height: 90vh;
  margin-right: 50px;
  flex-shrink: 0;
}
</style>
