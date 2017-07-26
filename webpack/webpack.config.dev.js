var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

const rootFolder = path.resolve(__dirname, '..')
var nodeModules = {}

// var Dashboard = require('webpack-dashboard')
// var DashboardPlugin = require('webpack-dashboard/plugin')
//
// var dashboard = new Dashboard()
//

module.exports = {
  context: rootFolder,
  devtool: 'eval',
  watch: true,

  entry: {
    app: [
      'react-hot-loader/patch',
      './client/client.js',
    ],
    vendor: ['react', 'react-dom']
  },

  output: {
    path: path.join(rootFolder, '/dist'),
    filename: 'scripts/[name].[chunkhash].js',
    chunkFilename: 'scripts/[name].[chunkhash].chunk.js',
    publicPath: '/',
  },

  resolveLoader: {
    modules: [path.join(rootFolder, 'node_modules')],
    moduleExtensions: ['-loader'],
  },

  resolve: {
    modules: [path.resolve(rootFolder, 'client'), path.resolve(rootFolder, 'src'), 'node_modules'],
    descriptionFiles: ['package.json'],
    moduleExtensions: ['-loader'],
    extensions: ['.js', '.jsx', '.scss', '.css']
  },

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx$/,
        // test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: [/node_modules/]
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                localIdentName: '[hash:base64:5]',
                modules: true
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ],
  },

  plugins: [
    new webpack.DefinePlugin({'process.env': {NODE_ENV: '"development"'}}),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("[name].[contenthash].css"),
    new HtmlWebpackPlugin({
      inject: false,
      template: './client/200.ejs',
      title: 'Titulo',
      minify: {
        collapseBooleanAttributes: true,
        removeComments: true,
        collapseWhitespace: true,
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({names: ['vendor'], filename: 'vendor.dev.js'}),
    // new DashboardPlugin(dashboard.setData),

  ],

  devServer: {
    contentBase: './client',
    historyApiFallback: true,
    port: 3005,
    compress: false,
    inline: true,
    hot: true,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      }
    },
  },

  node: {
    fs: 'empty',
    vm: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}
