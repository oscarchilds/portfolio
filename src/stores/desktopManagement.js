import { defineStore } from "pinia"
import { consoleProgram } from "@data/programs.js"

export const useDesktopManagementStore = defineStore('desktopManagment', {
  state: () => ({
    windows: [
      {
        id: `id-${self.crypto.randomUUID()}`,
        program: consoleProgram,
        minimised: false,
        draggable: null,
        focused: true,
        focusOrder: 0
      }
    ]
  }),
  actions: {
    closeWindow(id) {
      const windowToClose = this.windows.find(x => x.id == id)
      const otherWindows = this.windows.filter(x => x.id != id)

      if (windowToClose.focused && this.windows.length > 1) {
        const focusOrderToFind = windowToClose.focusOrder - 1
        const nextWindowToFocus = this.windows.find(x => x.focusOrder == focusOrderToFind)

        if (!nextWindowToFocus.minimised) nextWindowToFocus.focused = true
      }

      otherWindows
        .filter(x => x.focusOrder > windowToClose.focusOrder)
        .forEach(x => x.focusOrder--)

      this.windows = this.windows.filter(x => x.id != id)
    },
    openProgram(program) {
      this.windows.forEach(x => x.focused = false)

      this.windows.push({
        id: `id-${self.crypto.randomUUID()}`,
        program: program,
        open: true,
        minimised: false,
        focused: true,
        focusOrder: this.windows.length
      })
    },
    setWindowDraggable(id, draggable) {
      const window = this.windows.find(x => x.id === id)

      if (!window) console.error(`Error closing window with ID ${id}`)

      window.draggable = draggable
    },
    focusWindow(id) {
      const windowToFocus = this.windows.find(x => x.id == id)
      const otherWindows = this.windows.filter(x => x.id != id)

      otherWindows.forEach(x => {
        x.focused = false

        if (x.focusOrder > windowToFocus.focusOrder) {
          x.focusOrder--
        }
      })

      windowToFocus.focused = true
      windowToFocus.focusOrder = this.windows.length - 1
      windowToFocus.minimised = false
    },
    hideWindow(id) {
      const windowToHide = this.windows.find(x => x.id == id)
      const otherWindows = this.windows.filter(x => x.id != id)

      if (otherWindows.length) {
        otherWindows
          .filter(x => x.focusOrder < windowToHide.focusOrder)
          .forEach(x => x.focusOrder++)

        otherWindows
          .find(x => x.focusOrder == this.windows.length - 1)
          .focused = true
      }

      windowToHide.focused = false
      windowToHide.focusOrder = 0
      windowToHide.minimised = true
    }
  }
})