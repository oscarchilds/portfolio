<script setup lang="ts">
import ProjectsInfo from '@/components/ProjectInfo.vue'
</script>

<template>
  <ProjectsInfo>
    <template #title>this site</template>
    <template #description>
      <p>
        You can view the source code of this site on
        <a href="https://github.com/oscarchilds/portfolio" target="_blank">GitHub</a>.
      </p>
    </template>
  </ProjectsInfo>
</template>
