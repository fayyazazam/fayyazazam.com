/**
 * Created by fayyaz on 2016-12-07.
 */
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        // create two library bundles, one with jQuery and
        // another with Angular and related libraries
        'react': ['react', 'react-appear', 'react-dom', 'react-scroll',
            'autoprefixer', 'postcss']
    },

    output: {
        filename: '[name].bundle.js',
        path: 'public/',

        // The name of the global variable which the library's
        // require() function will be assigned to
        library: '[name]_lib',
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader",
                include: [
                    path.resolve(__dirname, 'node_modules/')
                ]
            }
        ]
    },

    node: {
        fs: "empty"
    },

    plugins: [
        //Uncomment when building for production
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.DllPlugin({
            // The path to the manifest file which maps between
            // modules included in a bundle and the internal IDs
            // within that bundle
            path: 'public/[name]-manifest.json',
            // The name of the global variable which the library's
            // require function has been assigned to. This must match the
            // output.library option above
            name: '[name]_lib'
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