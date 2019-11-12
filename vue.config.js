module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://cdn.jsdelivr.net/gh/temofart/eva/dist'
    : './',
  configureWebpack: {
    output: {
      filename: 'app.js',
    },
    optimization: {
      splitChunks: false
    },
  }
}