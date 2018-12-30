const path = require('path');
const sass = require('sass');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack').DefinePlugin;

require('dotenv').config();

module.exports = (env, options) => {

  const build = options.mode === 'production';

  return {
    entry: {
      main: './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, './build'),
      filename: build ? '[name].[hash:8].js' : '[name].js',
      publicPath: '/'
    },
    devServer: {
      host: '0.0.0.0',
      port: 5000,
      open: true,
      historyApiFallback: true
    },
    devtool: build ? false : 'source-map',
    resolve: {
      modules: [
        'node_modules',
        path.resolve(__dirname, './src')
      ]
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        },
      }, {
        test: /\.(css|scss)$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        },{
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
          options: {
            implementation: sass,
            sourceMap: true
          }
        }]
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|json|mp3|mp4|ico)$/,
        use: {
          loader: 'file-loader',
          options: {
            // name: '[path]/[name].[hash:8].[ext]'
            name: '[path][name].[ext]'
          }
        }
      }]
    },
    plugins: [
      new ErrorOverlayPlugin(),
      new MiniCssExtractPlugin({
        filename: build ? '[name].[hash:8].css' : '[name].css'
      }),
      new DefinePlugin({
        'process.env.SOME_KEY': JSON.stringify(process.env.SOME_KEY)
      }),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        minify: {
          collapseWhitespace: build,
          removeComments: build,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      }),
    ],
    optimization: {
      minimizer: [
        new OptimizeCSSAssetsPlugin(),
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: false
            }
          }
        })
      ]
    }
  };
};