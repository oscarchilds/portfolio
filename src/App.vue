<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/projects">Projects</RouterLink>
  </nav>

  <div id="splitter" />

  <div class="router-container">
    <div class="view">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
nav {
  display: none;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  width: 150px;
  gap: 15px;
  flex-shrink: 0;
  width: 25%;

  a {
    text-decoration: none;
    margin-right: 50px;
    font-size: 1.5em;
    width: fit-content;
    font-weight: normal;

    &.router-link-active {
      font-weight: bold;
    }
  }
}

#splitter {
  display: none;
  width: 2px;
  background-color: #a5a5a5;
  height: 90vh;
  flex-shrink: 0;
}

.router-container {
  width: 100%;
  max-height: 100vh;
  overflow-y: auto;

  .view {
    max-width: 800px;
    padding: 35px;
  }
}

@media (min-width: 768px) {
  nav {
    display: flex;
    margin-left: 50px;
  }

  #splitter {
    display: block;
  }
}
</style>
