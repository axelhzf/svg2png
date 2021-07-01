const watch = process.argv.includes('--watch');

require('esbuild')
  .build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    sourcemap: true,
    outfile: 'dist/index.js',
    platform: 'node',
    target: ['node14'],
    format: 'cjs',
    external: ['express', 'body-parser', 'sharp'],
    watch: watch,
    define: {
      'process.env.NODE_ENV': "'production'"
    }
  })
  .catch(() => process.exit(1));
