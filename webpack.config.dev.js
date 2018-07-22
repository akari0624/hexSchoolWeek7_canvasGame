const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill' ,'./src/index.js'],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            }, {
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ],
                test: /\.(css|less)$/

            }, 
            {
                use: 'url-loader?limit=8192',
                test: /\.(svg)$/
            },
            {
                test: /\.(png|jpg|gif|mp4|ogg|svg|css|ttf|woff|woff2)$/,
                use: [
                    {
                loader:'file-loader',
                options:{
                    name:'[path][name].[ext]',
                    publicPath:'/'  
                  }
                    }]

            },

        ]
    },
    plugins: [new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            filename: './index.html'
        }),        
            new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            'node_modules'
        ],
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        port: 9999
    }
};
