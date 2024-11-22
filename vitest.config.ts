/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            return tag.startsWith('v-')
          }
        }
      }
    })
  ],
  test: {
    environment: 'jsdom', // Use jsdom for DOM simulation
    globals: true, // Make Vitest globals available in tests
    server: {
      deps: {
        inline: ['vuetify']
      }
    }
  }
})
