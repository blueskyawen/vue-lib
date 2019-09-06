const path = require('path')

module.exports = {
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', path.resolve('examples'))
            .set('~', path.resolve('packages'))
        // packages和examples目录需要加入编译
        config.module
            .rule('js')
            .include.add(/packages/).end()
            .include.add(/examples/).end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })
        config
            .plugin('html-index')
            .tap(args => {
                args.favicon = '/public/favicon.ico'
                return args
            })
    }
}
