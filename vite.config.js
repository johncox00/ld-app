import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    testTimeout: 300000,
    environment: 'jsdom',
    globals: true,
    setupFilesAfterEnv: './src/setupTests.js', // Optional setup file
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
})
