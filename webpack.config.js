var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var clearWebpackPlugin = require('clean-webpack-plugin');
var path = require("path");


module.exports = {
  entry: ['./src/js/app.js', './src/css/style.sass'],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                url: true
              }
            },
            'sass-loader'
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.js$/,
        exclude: '/node_modules',
        use: [
          { loader: 'ng-annotate-loader' },
          { loader: 'babel-loader' },
        ]
      },
      {
        test: /\.(ttf|woff|woff2|otf)$/,
        loader: 'file-loader',
        options: {
          name: './fonts/[name].[ext]'
        }
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: './img/[name].[ext]'
        }
      },
      {
        test: /\.htaccess$/,
        loader: 'file-loader',
        options: {
          name: '[name]'
        }
      },
      {
        test: /\.html$/,
        loader: "raw-loader",
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
    new ExtractTextPlugin("[name].css"),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    }),
    new clearWebpackPlugin(['**/*'], {
      root: path.resolve(__dirname, './dist'),
      verbose: true
    })
  ]
};