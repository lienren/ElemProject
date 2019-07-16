const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const isProduction = process.env.NODE_ENV !== 'development'
module.exports = {
  publicPath: require('./package.json').name,
  productionSourceMap: false,
  configureWebpack: config => {
    if (isProduction) {
      config.plugins.push(new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      )
    }
  },
  devServer: {
    port: 8083,
    proxy: {
      '/testApi': {
        target: 'http://test.api.51pinzhi.cn/',
        changeOrigin: true,
        pathRewrite: {
          '^/testApi': ''
        }
      },
      '/prodApi': {
        target: 'http://api.51pinzhi.cn/',
        changeOrigin: true,
        pathRewrite: {
          '^/prodApi': ''
        }
      },
      '/sameOriginApi': {
        target: 'http://poc.51pinzhi.cn/',
        changeOrigin: true,
        pathRewrite: {
          '^/sameOriginApi': ''
        }
      },
      '/superApi': {
        target: 'https://super.51pinzhi.cn',
        // target: 'http://192.168.1.101:15000',
        changeOrigin: true,
        pathRewrite: {
          '^/superApi': ''
        }
      }
    }
  }
}
