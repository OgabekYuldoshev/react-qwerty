import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import { fileURLToPath } from "node:url"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dts({ rollupTypes: true, })],
    build: {
        cssMinify: "esbuild",
        minify: 'esbuild',
        outDir: 'lib',
        sourcemap: true,
        lib: {
            entry: fileURLToPath(new URL("./src/editor.ts", import.meta.url)),
            formats: ['es', 'cjs'],
            fileName: 'react-qwerty'
        },

        rollupOptions: {
            external: ['react', 'modern-normalize', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    "react-dom": "ReactDOM",
                }
            }
        },
    }
})
