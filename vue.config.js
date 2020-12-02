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
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/css/global.less')],
    }
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
