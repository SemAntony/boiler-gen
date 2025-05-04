import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'
import { dependencies, devDependencies } from './package.json'

import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    plugins: [ tsconfigPaths(), dts()],
    build: {
        lib: {
             // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, join('lib', 'index.ts')),
            name: 'MyLib',
            // the proper extensions will be added
            fileName: format => `ui-core.${format}.js`,
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: [
                ...Object.keys(dependencies),
                ...Object.keys(devDependencies),
              ],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {},
            },
        },
        sourcemap: false,
        target: 'esnext',
    },
    resolve: {
        alias: {
          '@': resolve(__dirname, 'lib'),
        },
      },
})
