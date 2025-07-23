<script setup lang="ts">
import ProjectsInfo from '@/components/ProjectInfo.vue'

import DesktopPortfolioOne from '@/assets/desktop-portfolio-one.webp'
import DesktopPortfolioTwo from '@/assets/desktop-portfolio-two.webp'
</script>

<template>
  <ProjectsInfo>
    <template #title>desktop portfolio</template>
    <template #images>
      <img :src="DesktopPortfolioOne" alt="desktop portfolio one" />
      <img :src="DesktopPortfolioTwo" alt="desktop portfolio two" />
    </template>
    <template #description>
      <p>
        The desktop portfolio site is an unfinished project of mine where I wanted to have a go at
        creating something like
        <a href="https://github.com/DustinBrett/daedalOS" target="_blank">daedalOS</a>, which I
        think is an amazing piece of work. It was intended to be my portfolio site but I realised
        the scope of the project was too large for the time I had. However, I'm still proud of what
        I was able to achieve on the site.
      </p>
      <p>
        Visit the site
        <a href="https://oscarchilds.github.io/desktop-portfolio/" target="_blank">here</a> or on
        <a href="https://github.com/oscarchilds/desktop-portfolio" target="_blank">GitHub</a>
      </p>
    </template>
  </ProjectsInfo>
</template>
