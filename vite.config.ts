import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // // base: process.env.NODE_ENV === 'production' ? '/test-site/' : '/', // ローカルでは'/'を使用
  // base: '/', // リポジトリ名を指定
  plugins: [react()],

  build:{
    outDir: "docs", // 出力先を指定
  }
})
