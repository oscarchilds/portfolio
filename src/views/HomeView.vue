<script setup lang="ts">
import ProfilePicture from '@/assets/profile-picture.jpeg'
</script>

<template>
  <div class="header">
    <img :src="ProfilePicture" alt="profile picture" />
    <h1>Hi, my name is Oscar Childs</h1>
  </div>
  <p>I am a Software Developer based in South Derbyshire, UK.</p>
  <p>
    I am a Full Stack Developer with 6+ years of commercial experience. My main strengths are
    C#/.NET, VueJS, Typescript, SQL Server, creating public and private resuable code libraries via
    Nuget or NPM, and creating Azure infrastructre and CI/CD pipelines. I also have some experience
    with Java and Blazor.
  </p>
  <p>
    Outside of work, I've worked on a couple of small personal projects, which you can find on the
    <RouterLink to="/projects">Projects</RouterLink> page.
  </p>
  <p>
    You can also find me on
    <a href="https://github.com/oscarchilds" target="_blank">GitHub</a> and
    <a href="https://www.linkedin.com/in/oscar-childs-4b5843146/" target="_blank">LinkedIn</a>.
  </p>
  <p>
    Outside of coding, I'm a husband and father of two. I enjoy spending quality time with my
    family, as well as relaxing with video games, films, or watching F1.
  </p>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  gap: 35px;
  align-items: center;

  img {
    flex-shrink: 0;
    width: 100px;
    border-radius: 10px;
  }

  h1 {
    font-size: 2em;
    margin: 0;
  }
}

@media (min-width: 768px) {
  .header h1 {
    font-size: 3em;
  }
}
</style>
