import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import {nodeResolve} from '@rollup/plugin-node-resolve';

export default {
    input: "src/comic.ts",
    output: {
        dir: "dist",
        format: "esm"
    },
    plugins: [
        typescript({
            tsconfig: "./tsconfig.json"
        }),
        nodeResolve({browser: true}),
        terser(),
    ],
};