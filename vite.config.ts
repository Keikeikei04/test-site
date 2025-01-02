import { defineConfig, ConfigEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }: ConfigEnv) => ({
  plugins: [react()],
  base: mode === 'production' ? '/test-site/' : '/', // 本番環境では /test-site/ を使用
  build: {
    outDir: 'docs', // 出力先を指定
  },
}));
