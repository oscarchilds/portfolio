<script setup lang="ts">
import ProjectsInfo from '@/components/ProjectInfo.vue'

import EnvFileEditorNpm from '@/assets/env-file-editor-npm.webp'
import EnvFileEditorCode from '@/assets/env-file-editor-code.webp'

import IsItMonospaceHero from '@/assets/is-it-monospace-hero.webp'
import IsItMonospaceCompare from '@/assets/is-it-monospace-compare.webp'
</script>

<template>
  <div class="view">
    <h1>Projects</h1>
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
          dependencies, which made me want to apply what I had learned to a public project of my
          own. Secondly, I had run into the issue of needing to edit .env files via scripts, and was
          suprised to find that there wasn't already a library that made this easy to do.
        </p>
        <p>
          Visit the project on
          <a href="https://www.npmjs.com/package/env-file-editor" target="_blank">npm</a> or
          <a href="https://github.com/oscarchilds/env-file-editor" target="_blank">GitHub</a>
        </p>
      </template>
    </ProjectsInfo>
    <hr />
    <ProjectsInfo>
      <template #title> is it monospace?</template>
      <template #images>
        <img :src="IsItMonospaceHero" alt="is it monospace? hero" />
        <img :src="IsItMonospaceCompare" alt="is it monospace? compare" />
      </template>
      <template #description>
        <p>
          is it monospace? is a simple web app that checks whether a given font is monospace or not,
          and gives some information on what a monospace font is. The site came about after
          discussions in the office where sometimes there would be debate about whether a given font
          was monospace or not, and I decided to create a simple web app to help settle these
          debates.
        </p>
        <p>
          I originally created the site in 2020, but I have re-visited the code occasionally over
          the years to modernise it and improve the code quality, for example, porting to Vue 3 and
          Typescript.
        </p>
        <p>
          Visit the site
          <a href="https://oscarchilds.github.io/is-it-monospace/" target="_blank">here</a> or view
          the source code on
          <a href="https://github.com/oscarchilds/is-it-monospace" target="_blank">GitHub</a>
        </p>
      </template>
    </ProjectsInfo>
  </div>
</template>
