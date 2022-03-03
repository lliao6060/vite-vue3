import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/

export default ({ mode }) => {
  return defineConfig({
    // base: loadEnv(mode, process.cwd()).VITE_PUBLIC,
    base: "./",
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@components': resolve(__dirname, 'src/components'),
        '/images': 'src/assets/images'
      },
    },
    //跨域設定
    server: {
      host: 'localhost',
      port: 3000,
      open: false,
      https: false,
      proxy: {
        // 字串寫法
        '/foo': 'http://localhost:4567',
        // 選項寫法
        '/api': {
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        // 正則寫法
        '^/fallback/.*': {
          target: 'http://jsonplaceholder.typicode.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/fallback/, '')
        },
      }
    },
    //打包模式 & MPA多頁應用
    build: {
      assetsDir: "./static",
      chunkSizeWarningLimit: 1500, //分塊打包 大塊分解成更小的塊
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          // arcticle: resolve(__dirname, 'arcticle/index.html')
        },
        output: {
          manualChunks(id) {
            if(id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        },
        //預設會有hash 如果想要保留原檔名想要取消檔名的hash時 如下
        // output: {
        //   entryFileNames: `assets/[name].js`,
        //   chunkFileNames: `assets/[name].js`,
        //   assetFileNames: `assets/[name].[ext]`
        // }
      }
    },
    //全局都可以引用
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/styles/_mixin.scss";
          @import "@/assets/styles/_palette.scss";
        `
        }
      }
    },
    plugins: [
      vue(),
      //提供傳統瀏覽器兼容
      legacy({
        // browserslist: [
        //   "defaults",
        //   "not IE 11"
        // ],
        targets: ['defaults', 'not IE 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      })
    ],
  })
}
