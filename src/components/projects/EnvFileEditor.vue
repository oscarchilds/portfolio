<script setup lang="ts">
import ProjectsInfo from '@/components/ProjectInfo.vue'

import EnvFileEditorNpm from '@/assets/env-file-editor-npm.webp'
import EnvFileEditorCode from '@/assets/env-file-editor-code.webp'
</script>

<template>
  <ProjectsInfo>
    <template #title> env-file-editor </template>
    <template #images>
      <img :src="EnvFileEditorNpm" alt="env-file-editor npm" />
      <img :src="EnvFileEditorCode" alt="env-file-editor code" />
    </template>
    <template #description>
      <p>
        env-file-editor is an npm package, written in Typescript, that provides a simple API to
        read, write, and edit local .env files.
      </p>
      <p>
        env-file-editor came about for two reasons. One was that, in my place of work, I had
        recently learned a lot about publishing private npm packages, semvar, and managing
        dependencies, which made me want to apply what I had learned to a public project of my own.
        Secondly, I had run into the issue of needing to edit .env files via scripts, and was
        suprised to find that there wasn't already a library that made this easy to do.
      </p>
      <p>
        The library is currently in a pre-release stage but is feature complete, and I look forward
        to finishing it off soon and publishing the first production-ready version.
      </p>
      <p>
        Visit the project on
        <a href="https://www.npmjs.com/package/env-file-editor" target="_blank">npm</a> or
        <a href="https://github.com/oscarchilds/env-file-editor" target="_blank">GitHub</a>
      </p>
    </template>
  </ProjectsInfo>
</template>
