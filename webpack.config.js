var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var prod = process.env.Node_ENV === 'production';

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, "./"),
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
        {
            test: /\.sass$/,
            use: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader:['css-loader','sass-loader'],
                publicPath: './'
            })
        },
        {
            test: /\.js$/,
            exclude: '/node_modules',
            use: 'babel-loader'
        },
        {
        test: /\.json$/,
        loader: 'json'
        }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./"),
        compress: true,
        port: 8080,
         historyApiFallback: {
            index: 'index.html',
            contentBase: './'

         },
        stats: "errors-only",
        open: true
    },
    plugins: [
        new ExtractTextPlugin('./style.css')
    ]
}