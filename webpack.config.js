const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Visualizer = require('webpack-visualizer-plugin');


module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    new Dotenv(),
    new Visualizer()
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
}
