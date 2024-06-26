<script setup lang="ts">
import { onMounted, watch, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useDraggable } from '@composables/draggable'
import { useWindowManagementStore } from '@stores/windowManagement'
import Taskbar from '@components/taskbar/Taskbar.vue'

const { createDraggable } = useDraggable()
const windowManagement = useWindowManagementStore()
const { windows } = storeToRefs(windowManagement)
const windowsLength = computed(() => {
  return windows.value.length
})

onMounted(() => assignDraggables())
watch(windowsLength, () => assignDraggables())

function assignDraggables() {
  windows.value
    .filter((x) => !x.draggable)
    .forEach((x) => {
      setTimeout(() => {
        const el = document.getElementById(x.id) as HTMLElement

        windowManagement.setWindowDraggable(x.id, createDraggable(el))
      }, 100)
    })
}
</script>

<template>
  <div id="desktop">
    <component
      v-for="window in windows"
      v-show="!window.minimised"
      :key="window.id"
      :is="window.program.component"
      :id="window.id"
      :class="{ focused: window.focused }"
      :style="{ 'z-index': window.focusOrder }"
      :filePath="window.filePath"
      @focus="windowManagement.focusWindow(window.id)"
      @minimise="windowManagement.hideWindow(window.id)"
      @close="windowManagement.closeWindow(window.id)"
    />
    <taskbar />
  </div>
</template>

<style lang="scss" scoped>
#desktop {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, #331911, #4b162a, #0e3b4c, #0f5343);
  background-size: 400% 400%;
  animation: gradient 100s ease infinite;
  height: 100vh;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
