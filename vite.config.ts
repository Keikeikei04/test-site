import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/test-site/', // GitHub Pages用のベースパス
  plugins: [react()],
  build: {
    outDir: 'docs', // ビルド成果物を'./docs'フォルダに出力
  },
});