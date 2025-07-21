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
  gap: 20px;
  flex-wrap: wrap;

  :deep(img) {
    width: 300px;
    margin-top: 20px;
    height: auto;
    border-radius: 10px;
    border: 1px solid rgba(215, 213, 213, 0.477);
  }
}
</style>
