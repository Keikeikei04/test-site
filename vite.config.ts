import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/newyear2025/', // GitHub Pages のプロジェクト名を指定
  build: {
    outDir: 'docs', // GitHub Pages のために出力先を設定
  },
});

