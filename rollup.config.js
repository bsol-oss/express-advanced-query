import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import json from '@rollup/plugin-json'
import copy from 'rollup-plugin-copy'

import packageJSON from './package.json'
const input = './index.js'

export default [
    {
        input,
        output: [
            {
                file: packageJSON.main,
                format: 'cjs'
            },
            {
                file: packageJSON.module,
                format: 'es'
            }
        ],
        plugins: [
            external(),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'bundled'
            }),
            json(),
            resolve(),
            commonjs(),
            // for copying folders to dist
            copy({
                targets: [
                    { src: 'migrations', dest: 'dist' },
                    { src: 'seeds', dest: 'dist' }
                ]
            }),
            terser()
        ]
    }
]
