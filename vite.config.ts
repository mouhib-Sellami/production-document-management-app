import { defineConfig, type AliasOptions } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from "vite-tsconfig-paths";

//@ts-ignore
import path from "path";

//@ts-ignore
const root = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true
      },
    },
  },
  resolve: {
    alias: {
      "@": root,
    } as AliasOptions,
  },
})
