## webpack打包css，less
   
## 安装依赖
   cnpm install style-loader css-loader  --save-dev
   npm install style-loader css-loader  --save-dev

## 配置css loader
    在webpack.config.js中的module进行配置
    rules: [
      {
        // 处理文件的扩展名的表达式
        test: /\.css$/,
        // loader名称
        use: [ 'style-loader', 'css-loader' ],
        // include: 必须处理的文件(文件夹)
        // exclude: 屏蔽不需要处理的文件
        // query: loaders提供额外的设置选项
      }
    ]

## 处理css中以背景图形式出行的图片

# 安装依赖
    cnpm install  file-loader url-loader --save-dev
    npm install  url-loader url-loader --save-dev

     file-loader: 解决引用路径的问题
     url-loader: 打包成dataURl,它包含file-loader

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
      }

## 配置less

## 安装依赖
    cnpm install less less-loader --save-dev
    npm install less less-loader --save-dev
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
        }
      ]
    }
    
## 配置css添加前缀

## 安装依赖
  cnpm install postcss-loader autoprefixer --save-dev
  npm install postcss-loader autoprefixer --save-dev

## 配置
  plugins: [
    require('autoprefixer')
  ],
## 使用
  {
    // 处理文件的扩展名的表达式
    test: /\.css$/,
    // loader名称
    use: [ 'style-loader', 'css-loader', 'postcss-loader'],
    // include: 必须处理的文件(文件夹)
    // exclude: 屏蔽不需要处理的文件
    // query: loaders提供额外的设置选项
  },
