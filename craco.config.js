// alias主要是给路径配置别名
// style下面是配置vw适配

const path = require('path')
const pxtoviewport = require('postcss-px-to-viewport')

module.exports = {
    webpack: {
        //配置路劲别名：将来写路径可以简写
        alias: {
            "@redux": path.resolve(__dirname, "./src/redux"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@api": path.resolve(__dirname, "./src/api")

        }
    },
    // 配置vw/vh
    style: {
        postcss: {
            plugins: [
                pxtoviewport({
                    viewportWidth: 375
                })
            ]
        }
    }
}