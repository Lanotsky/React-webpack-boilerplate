const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const  BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports={
    mode: 'development',
    entry: {
        app: './src/index.js',
      },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ 
                process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                "css-loader", 
                "postcss-loader",
                "sass-loader"]
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader",
                    options: { minimize: true }
                  }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            inject: "body"
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            // proxy: 'http://localhost:8080/' just in case you want to load a proxy
        })
    ]

    
}