const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    entry: path.resolve(__dirname, './src/Button.tsx'),
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
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].[hash].js',
    },
    mode: 'development',
    devServer: {
        port: 3002,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html')
        }),
        new ModuleFederationPlugin({
            name: 'Decrement',
            filename: 'remoteEntry.js',
            exposes: {
                "./Button": "./src/Button"
            }
        })
    ],
}