<template>
  <h2><slot name="title" /></h2>
  <div class="project-images">
    <slot name="images" />
  </div>
  <slot name="description" />
</template>

<style lang="scss" scoped>
h2 {
  margin-bottom: 0;
}

.project-images {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  :deep(img) {
    margin-top: 20px;
    border-radius: 10px;
    border: 1px solid rgba(215, 213, 213, 0.477);
    max-width: 390px;
  }
}
</style>
