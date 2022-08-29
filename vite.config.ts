import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // https://github.com/vitejs/vite/issues/3909#issuecomment-934044912
    {
      name: 'configure-response-headers',
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          // TODODEMO UNCOMMENT
          // res.setHeader('Referrer-Policy', 'no-referrer');
          // TODODEMO UNCOMMENT
          // res.setHeader('Permissions-Policy', 'camera=(), microphone=()');
          next();
        });
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
