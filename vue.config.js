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
    contentBase: path.resolve(__dirname, './Cesium'),
    open: true,
    proxy: {
      '/szxc_jshc': {
        // target: 'http://10.80.70.40:8092/szxc_jshc/', // 肖奎
        // target: "http://szny.agri.hangzhou.gov.cn:8078/szxc_ladp/", // 正式
        target: "http://61.153.188.179:8082/nypt_jshc/ ", // 测试
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/szxc_jshc': '/', // 重写接口
        },
      },
    },
  },
}
