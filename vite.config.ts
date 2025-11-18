import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  css: {
    transformer: 'postcss'   // disables LightningCSS
  },
   preview: {
    allowedHosts: ['theyearyouwin.up.railway.app'],
    port: parseInt(process.env.PORT) || 4173,
    host: true
  }
})
