const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const phaserModuleDir = path.join(__dirname, 'node_modules/phaser-ce/build/custom/');
const phaser = path.join(phaserModuleDir, 'phaser-split.js');
const pixi = path.join(phaserModuleDir, 'pixi.js');
const p2 = path.join(phaserModuleDir, 'p2.js');

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: {
    app: ['./app'],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif|ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      },

      {
        test: /\.css$/,
        include: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        }),
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

      {
        test: /phaser-split.js$/,
        loader: 'expose-loader',
        options: 'Phaser',
      },

      {
        test: /pixi.js$/,
        loader: 'expose-loader',
        options: 'PIXI',
      },

      {
        test: /p2.js$/,
        loader: 'expose-loader',
        options: 'p2',
      },
    ],
  },

  resolve: {
    modules: [
      'src',
      'node_modules',
    ],

    extensions: [
      '.js',
      '.css',
    ],

    alias: {
      phaser,
      pixi,
      p2,
    }
  },

  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
    }),

    new HtmlWebpackPlugin({
      template: './index.html',
      inject: false,
    }),
  ],

  devtool: 'source-map',

  devServer: {
    publicPath: '/',
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    historyApiFallback: true,
  },
};
