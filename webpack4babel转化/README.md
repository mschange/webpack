## webpack配置babel转化

## 安装依赖
  cnpm install @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators@babel/plugin-transform-runtime @babel/preset-env --save-dev

  npm install @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators@babel/plugin-transform-runtime @babel/preset-env --save-dev

## 配置
  {
    test: /\.js$/, // 找到所有的js文件
    use: {
      loader: 'babel-loader', // 用babel-loader，需要把ES6转换成ES5语法
      options: {
        presets: [ // babel的集合
          '@babel/preset-env' // @babel/preset-env 就是用来将ES6转化成ES5语法的
        ],
        plugins: [
          ['@babel/plugin-proposal-decorators', { 'legacy': true }], // 将ES7语法中的类装饰器转换成ES5语法， legacy 是宽松模式
          ['@babel/plugin-proposal-class-properties', { 'loose': true }], // 将ES7语法中的类转换成ES5语法
          '@babel/plugin-transform-runtime' //避免编译出现重复
        ]
      }
    },
    include: path.resolve(__dirname, 'src'), // 只查找src目录下的js，不找node_modules里面的js
  },

