import { resolve } from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

const p = (src: string) => resolve(__dirname, src)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@src', replacement: p('./src') },
      { find: '@api', replacement: p('./src/api') },
      { find: '@app', replacement: p('./src/app') },
      { find: '@assets', replacement: p('./src/assets') },
      { find: '@components', replacement: p('./src/components') },
      { find: '@hooks', replacement: p('./src/hooks') },
      { find: '@stores', replacement: p('./src/stores') },
      { find: '@util', replacement: p('./src/util') },
      { find: '@views', replacement: p('./src/views') },
      { find: '@xlib', replacement: p('./xlib') },
    ],
  },
})
