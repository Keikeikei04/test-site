import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // base: process.env.NODE_ENV === 'production' ? '/test-site/' : '/', // 本番環境と開発環境で切り替え
  base: '/', // GitHub Pages用のベースパス
  plugins: [react()],
  build: {
    outDir: 'docs', // ビルド成果物を'./docs'フォルダに出力
  },
});