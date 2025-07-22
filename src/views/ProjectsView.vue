<script setup lang="ts">
import DesktopPortfolio from '@/components/projects/DesktopPortfolio.vue'
import EnvFileEditor from '@/components/projects/EnvFileEditor.vue'
import IsItMonospace from '@/components/projects/IsItMonospace.vue'
import PortfolioSite from '@/components/projects/PortfolioSite.vue'
</script>

<template>
  <h1>Projects</h1>
  <EnvFileEditor />
  <hr />
  <IsItMonospace />
  <hr />
  <DesktopPortfolio />
  <hr />
  <PortfolioSite />
  <RouterLink to="/">Back to Homepage</RouterLink>
</template>
