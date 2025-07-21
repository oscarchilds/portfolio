<template>
  <h2><slot name="title" /></h2>
  <div class="project-images">
    <slot name="images" />
  </div>
  <slot name="description" />
</template>

<style lang="scss" scoped>
.project-images {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  :deep(img) {
    width: 300px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
}
</style>
