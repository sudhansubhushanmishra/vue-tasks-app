import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuedevtools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vuedevtools()],
})
