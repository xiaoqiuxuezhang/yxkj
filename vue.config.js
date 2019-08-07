module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': {
         target: "http://10.10.10.116:9022/qianlima-pushmsg/",
        //  target: "https://www.easy-mock.com/mock/5cbe80662c4b8166ea1e7a3f/qianlima-pushmsg",
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: config => {
    // config
    //   .entry('index')
    //   .add('babel-polyfill')
    //   .end();
    // 生产环境配置
    if (process.env.NODE_ENV === 'production') {
      // 删除预加载
      config.plugins.delete('preload');
      config.plugins.delete('prefetch');
      // 压缩代码
      config.optimization.minimize(true);
    }
  }
}
