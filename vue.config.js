const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/css/global.less')],
    }
  }
}
