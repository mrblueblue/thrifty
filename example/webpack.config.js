var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "index.js")
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "assets"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "index.js"),
          path.resolve(__dirname, "../lib/index.js")
        ],
        loader: "babel-loader"
      }
    ]
  }
};
