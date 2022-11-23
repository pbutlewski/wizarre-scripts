export default {
  server: {
    host: '0.0.0.0',
    cors: '*',
  },
  build: {
    minify: true,
    manifest: true,
    rollupOptions: {
      input: ['./src/index.js', './src/style.scss'],
      output: {
        format: 'es',
        sourceMap: true,
        entryFileNames: 'main.js',
        assetFileNames: '[name][extname]',
        esModule: false,
        compact: true,
        inlineDynamicImports: false,
        globals: {
          jquery: '$',
        },
      },
      external: ['jquery'],
    },
  },
};
