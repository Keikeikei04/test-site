import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/test-site/' : '/',
  plugins: [react()],
  build: {
    outDir: 'docs', // ビルド成果物を'./docs'フォルダに出力
  },
});