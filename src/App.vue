<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="router-container">
    <div class="view">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.router-container {
  width: 100%;
  max-height: 100vh;
  overflow-y: auto;
  display: flex;
  justify-content: center;

  .view {
    width: 800px;
    padding: 35px;
    height: fit-content;
  }
}
</style>
