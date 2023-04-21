// vue3写法
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//     TranspileDependencies: true,
//     // transpileDependencies: true,
//     lintOnSave: false //关闭检验
// }

console.log(process.env.NODE_ENV); // 可以查看当前环境变量
module.exports = {
    lintOnSave: false, //关闭检验
    devServer: {
        port: 8000, //开发环境运行时的端口
        open: true, //项目运行成功后是否直接打开浏览器
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:300', // 代理的目标地址
        //         changeOrigin: true, // 是否跨域
        //         pathRewrite: {
        //             '^/api': '' // 重写路径
        //         }
        //     }
        // }
    },
};

