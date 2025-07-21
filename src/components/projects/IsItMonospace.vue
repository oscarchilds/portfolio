<script setup lang="ts">
import ProjectsInfo from '@/components/ProjectInfo.vue'

import IsItMonospaceGlyphs from '@/assets/is-it-monospace-glyphs.webp'
import IsItMonospaceCompare from '@/assets/is-it-monospace-compare.webp'
</script>

<template>
  <ProjectsInfo>
    <template #title> is it monospace?</template>
    <template #images>
      <img :src="IsItMonospaceGlyphs" alt="is it monospace? glyphs" />
      <img :src="IsItMonospaceCompare" alt="is it monospace? compare" />
    </template>
    <template #description>
      <p>
        is it monospace? is a simple web app that allows a user to update a font file, and checks
        whether the font is monospace or not. as well as giving some information on what a monospace
        font is. The site came about after discussions in the office where sometimes there would be
        some debate about whether a given font was monospace or not, and I decided to create a
        simple web app to help settle these debates.
      </p>
      <p>
        I originally created the site in 2020, but I have re-visited the code occasionally over the
        years to modernise it and improve the code quality, for example, porting to Vue 3 and
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
</template>
