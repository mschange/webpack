// 引入全局路径
const path = require('path');
// webpack暴露出去的模块
module.exports = {
  // 入口
  entry: {
    index:'./src/index.js'
  },
  
  // 出口（打包所要生成的地方）
  output: {
    // 生成的路径
    path: path.resolve(__dirname, 'dist'),
    // 生成的js名称
    filename: '[name].js'
  },
  // 开发时所用到的服务
  devServer: {
    //设置基本目录结构
    contentBase:path.resolve(__dirname,'dist'),
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
  plugins: [
    require('autoprefixer')
  ],
  // 模块是loder 执行顺序是向下执行、左向右执行
  module: {
    rules: [
      // 配置css loader
      {
        // 处理文件的扩展名的表达式
        test: /\.css$/,
        // loader名称
        use: [ 'style-loader', 'css-loader', 'postcss-loader'],
        // include: 必须处理的文件(文件夹)
        // exclude: 屏蔽不需要处理的文件
        // query: loaders提供额外的设置选项
      },
      // 配置图片loader
      {
        // 匹配图片后缀名
        test:/\.(png|jpg|gif)/ ,
        // 使用的loader
        use:[{
            loader:'url-loader',
            // 选项
            options:{
              // 是把小于1000B的文件打成Base64的格式，写入JS。
              limit: 1000
            }
        }]
      },
      // 配置less loader
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader" // compiles Less to CSS
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
    ]
  },
  // 省略后缀以及配置别名
  resolve: {

  }
}