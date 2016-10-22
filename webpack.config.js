var webpack = require('webpack'); // Requiring the webpack lib
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var port = process.env.PORT || 3000;

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:' + port, // Setting the URL for the hot reload
        'webpack/hot/only-dev-server', // Reload only the dev server
        './src/index.jsx'
    ],
    devtool: 'source-map',
    stats: { colors: true },
    module: {
        noParse: [/(node_modules|~)\//gi],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-2']
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('css-loader!postcss-loader!less-loader')
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.less'],
        root: [path.join(__dirname, './src')],
        modulesDirectories: ['node_modules/']
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        port: port,
        hot: true // Activate hot loading,
        // proxy: {
        //   '/api':{
        //     target: 'https://express-passport-ivanpankov.c9users.io',
        //     secure: false
        //   }
        // }
    },
    plugins: [
        // creates index.html file
        new HtmlWebpackPlugin({ title: 'React Redux OAuth Application', filename: 'index.html', template: 'src/index.ejs' }),
        // Wire in the hot loading plugin
        new webpack.HotModuleReplacementPlugin(),
        // Avoid publishing files when compilation failed:
        new webpack.NoErrorsPlugin(),
        // Aggressively remove duplicate modules:
        new webpack.optimize.DedupePlugin(),

        new ExtractTextPlugin('styles.css')
    ],
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ]
};