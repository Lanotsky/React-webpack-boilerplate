// webpack v4

const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    mode: 'development',
    // main entry
    // also webpack's default entry if none specified
    entry: { main: './src/index.js' },
    // places the creted bundle to the dist folder
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    // debugging source map
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        // parse any JSX or JS file to es6
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader, 
                "css-loader",
                'postcss-loader',
                'sass-loader'
            ]
          },
          // loads static assets
          {
              test: /\.(png|svg|jpg|gif)$/,
              use: [ 'file-loader']
          },
          // font loader
          {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: [ 'file-loader' ]
          },{
            test: /\.(csv|tsv)$/,
            use: [
                'csv-loader'
            ]
          },
          {
            test: /\.xml$/,
            use: [
                'xml-loader'
            ]
          }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            hash: true,
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:8080/'
        }),
        new CleanWebpackPlugin('dist', {} ),    
    ]
}
