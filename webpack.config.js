var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    //插件项
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("[name]-[hash].css")

    ],
    
    devtool: 'eval-source-map',

    //页面入口文件配置
    entry: {
        entry : __dirname + '/app/main.js',   //  __dirname : nodejs里面的一个全局变量， 指向当前执行脚本所在的目录
    },

    //入口文件输出配置
    output: {
        path: __dirname + '/bundle',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json'},
            { test: /\.js$/, exclude:/node_modules/, loader:'babel'},
            { test: /\.css$/, loader: 'style!css?modules'} //添加对样式表的处理
        ]
    },
    postcss: [
        require('autoprefixer')
    ],
    devServer: {
        //contentBase : './public', // 本地服务器所加载的页面的目录地址，
        color :  true,
        historyApiFallback: true,
        inline : true
    }
    /*,
    //其它解决方案配置
    resolve: {
        root: 'E:/github/flux-example/src', //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            AppStore : 'js/stores/AppStores.js',
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js'
        }
    }*/
};


//   http://www.jianshu.com/p/42e11515c10f#


