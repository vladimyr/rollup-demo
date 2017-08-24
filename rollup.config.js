import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';

import sass from 'rollup-plugin-sass';
import autorpefixer from 'autoprefixer';
import postcss from 'postcss';

export default {
  input: 'src/js/index.js',
  output: {
    file: 'dist/app.js',
    format: 'iife'
  },
  plugins: [
    resolve(),
    commonjs(),
    sass({
      output: 'dist/style.css',
      processor(css) {
        return postcss([autorpefixer])
          .process(css)
          .then(result => result.css);
      }
    }),
    buble()
  ]
};
