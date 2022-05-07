const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production'
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: require.resolve('babel-loader'),
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
        hot: true
    },
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })

    ].filter(Boolean)
}