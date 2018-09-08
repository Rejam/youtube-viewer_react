const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname + "/build",
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ],
  module: {
    loaders: [
      {
        exclude: /(node_modules|index.html)/,
        loader: "babel",
        query: {
          presets: ["env", "react", "stage-1"]
        }
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
