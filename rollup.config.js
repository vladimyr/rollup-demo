// View https://buble.surge.sh
import buble from 'rollup-plugin-buble'; // used for ES6+ to ES5 conversion

// If you want to use modules from npm like redom...
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

// View https://rollupjs.org/#command-line-reference
export default {
  input: 'index.js', // main script name
  output: {
    file: 'app.js', // bundle name
    format: 'iife' // wrap everything in IIFE
  },
  plugins: [
    buble(),
    resolve(),
    commonjs()
  ]
};
