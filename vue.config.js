module.exports = {
  // 修改 src 为 examples
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  css: {
    loaderOptions: {
      css: {
        test: /\.less$/i,
        use: [
          'less-loader'
        ]
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      }
    }
  },   
  chainWebpack: config => {
  	config.module.rules.delete('eslint');
  }  
}