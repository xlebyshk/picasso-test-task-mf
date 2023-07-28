const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader','css-loader','sass-loader'],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].[hash].js',
    },
    mode: 'development',
    devServer: {
        port: 3000,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html')
        }),
        new ModuleFederationPlugin({
            name: 'Shell',
            filename: 'remoteEntry.js',
            remotes: {
                increment: "Increment@http://localhost:3001/remoteEntry.js",
                decrement: "Decrement@http://localhost:3002/remoteEntry.js"
            },
            shared:[
                "react",
                "react-dom"
            ]
        }),
    ],
}