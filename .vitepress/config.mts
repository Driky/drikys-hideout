import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const currentDir = dirname(fileURLToPath(import.meta.url))

const componentsDir = resolve(currentDir, 'theme', 'components')
const pagesDir = resolve(currentDir, 'theme', 'pages')

const composablesDir = resolve(currentDir, 'theme', 'composables')
const utilsDir = resolve(currentDir, 'theme', 'utils')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Driky's Hideout",
  description: "Welcome to Driky's journey through software devlopment and other knicknacks.",
  srcDir: 'src',
  vite: {
    plugins: [
      AutoImport({
        imports: ['vue', 'vitepress'],
        dirs: [composablesDir, utilsDir],
        dts: resolve(currentDir, 'auto-imports.d.ts'),
      }),
      Components({
        dirs: [
          componentsDir,
          pagesDir,
        ],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: resolve(
          currentDir,
          'components.d.ts'
        ),
      }),
      tailwindcss(),
      // {
      //   name: 'watcher',
      //   configureServer(server) {
      //     server.watcher.add([componentsDir, pagesDir])
      //   },
      // },
    ],
  }
})
