## webpack 热更新

## 安装热更新所需要的依赖
    npm install webpack-dev-server --save-dev
    or
    cnpm install webpack-dev-server --save-dev

## 添加启动配置项目
   "dev": "webpack-dev-server --config webpack.config.js"

## webpack.config.js中添加 devServer模块
    配置如下
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
    }

## 启动
    npm run dev

## 测试
    修改index.js文件保存后，无需重新启动，会自动编译，说明热更新配置完成