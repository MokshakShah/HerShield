import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// process.env.SENSITIVE_VALUE_1
export default defineConfig({
  plugins: [react()],
})
