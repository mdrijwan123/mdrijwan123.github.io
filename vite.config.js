import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    // For GitHub Pages:
    // - Use '/' if your repo is named 'mdrijwan123.github.io'
    // - Use '/portfolio/' if your repo is named 'portfolio'
    base: '/',
    plugins: [
        react({
            jsxRuntime: 'automatic',
        }),
    ],
    // Output built site to `docs/` so GitHub Pages can serve from main branch
    build: {
        outDir: 'docs',
    },
    esbuild: {
        jsx: 'automatic',
    },
})
