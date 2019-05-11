// 引入全局路径
const path = require('path');
// webpack暴露出去的模块
module.exports = {
  // 入口
  /**
   * 入口方式1
   */
  entry: {
    index:'./src/index.js'
  },
  /**
   * 入口方式2
   */
  // entry: './src/index.js',
  /**
   * 多入口
   */
  // entry: {
  //   index: './src/index.js',
  //   main: './src/main.js'
  // },
  
  // 出口（打包所要生成的地方）
  output: {
    // 生成的路径
    path: path.resolve(__dirname, 'dist'),
    // 生成的js名称
    filename: '[name].js'
  },
  // 开发时所用到的服务
  devServer: {
    // 端口
    port: 8000,
    // 编译的进度
    progress: true,
    // 是否压缩
    compress: true,
    // 是否自动打开浏览器
    open: true,
  },
  // 插件
  plugins: [],
  // 模块是loder 执行顺序是向下执行
  module: {

  },
  // 省略后缀以及配置别名
  resolve: {

  }
}