import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import FullReload from 'vite-plugin-full-reload'
import RubyPlugin from 'vite-plugin-ruby'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [
    FullReload(['config/routes.rb', 'app/views/**/*']),
    RubyPlugin(),
    WindiCSS({
      config: __dirname + "/windi.config.ts",
      root: __dirname
    }),
    reactRefresh(),
  ],
})


