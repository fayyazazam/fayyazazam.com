import webpack from 'webpack';
import path from 'path';
import autoprefixer from 'autoprefixer';

export default {
  entry: './src/App.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: 'public/'
  },
  module: {
    loaders: [
      // Used for compiling JavaScript
      { test: /\.js/, loader: 'babel', exclude: /(node_modules)/},
      // Used for Bootstrap Less Source Files
      { test: /\.less/, loader: 'style!css!less' },
      // Used for compiling scss files
      { test: /\.scss$/, loaders: ["style", "css", "sass"]},
      // Used for post-css loader / auto-prefixing
      { test: /\.css/, loader: 'style-loader!css-loader!postcss-loader' },
      // Used for Images, Bootstrap Glyphicon Fonts
      { test: /\.(jpe?g|png|gif|svg|ico|woff2|woff|ttf|svg|eot)$/i, loader: 'file'},
        // Json loader so I can prefix inline styling
      { test: /\.json$/, loader: "json-loader"}
    ]
  },
  postcss: [
      autoprefixer({
        browsers: ['last 3 versions']
      })
  ],

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
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
