module.exports = {
  pages: {
    index: {
      entry: 'src/app.ts',
      template: 'public/index.html',
      title: 'Pizza Hot',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  devServer: {
    proxy: 'http://localhost:8000'
  },
  outputDir: '../public',
  indexPath: process.env.NODE_ENV === 'production'
    ? '../resources/views/index.blade.php'
    : 'index.html'
}
