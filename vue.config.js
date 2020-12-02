const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/css/global.less')],
    }
  },
 chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_config_report) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end()
        config.plugins.delete('prefetch')
      }
    }
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('@components', resolve('src/components'))
  },
  productionSourceMap: false,
  devServer: {
    open: true,
    proxy: {
      '/nypt_jshc': {
        target: "http://61.153.188.179:8082/nypt_jshc/ ", // 测试
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/nypt_jshc': '/', // 重写接口
        },
      },
    },
  },
}
