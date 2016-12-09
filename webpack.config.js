const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/App.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: 'public/'
    },
    module: {
        loaders: [
            // Used for compiling JavaScript
            {
                test: /\.js/, loaders: ['react-hot', 'babel'],
                exclude: /(node_modules)/,
                cacheDirectory: true
            },

            // Used for compiling scss files
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"],
                include: [
                    path.resolve(__dirname, 'src/styles/stylesheets/')
                ]
            },

            // Used for post-css loader / auto-prefixing
            {
                test: /\.css/,
                loader: 'style-loader!css-loader!postcss-loader',
                exclude: /(node_modules)/
            },

            // Used for Images, Bootstrap Glyphicon Fonts
            {
                test: /\.(jpe?g|png|gif|svg|ico|woff2|woff|ttf|svg|eot)$/i,
                loader: 'file',
                include: [
                    path.resolve(__dirname, 'src/styles/')

                ]
            },
            // Json loader so I can prefix inline styling
            {
                test: /\.json$/,
                loader: "json-loader",
                exclude: /(node_modules)/
            }
        ]
    },
    postcss: [
        autoprefixer({
            browsers: ['last 3 versions']
        })
    ],

    plugins: [
        new webpack.DllReferencePlugin({
            context: '.',
            manifest: require('./public/react-manifest.json')
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
    ]
};
