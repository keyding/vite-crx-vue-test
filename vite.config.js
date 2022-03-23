import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { crx } from 'rollup-plugin-chrome-extension'
import manifest from './manifest.json'

const crxOptions = {
  manifest, 
  contentScripts: { 
    preambleCode:  false
  } 
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), crx(crxOptions)]
})
