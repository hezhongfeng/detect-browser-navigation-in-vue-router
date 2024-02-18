import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'DetectBrowserNavigationInVueRouter',
      // the proper extensions will be added
      fileName: format => `detect-browser-navigation-in-vue-router.${format}.js`,
      formats: ['cjs', 'es', 'iife', 'umd']
    },
    sourcemap: false,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'vue-router'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          'vue-router': 'vueRouter'
        }
      }
    }
  }
});
