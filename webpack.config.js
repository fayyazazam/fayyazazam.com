const { resolve } = require('path');

const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const config = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './main.js'
  ],

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  context: resolve(__dirname, 'app'),

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'build'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        loaders: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.(png|jpg)$/, use: 'url-loader?limit=15000' },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, use: 'file-loader' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml' }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: /\.js$/,
      options: {
        eslint: {
          configFile: resolve(__dirname, '.eslintrc'),
          cache: false
        }
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
