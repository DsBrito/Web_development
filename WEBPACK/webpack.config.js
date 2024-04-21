const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
  mode: "development",
  entry: "./src/first-webpack.js",
  output: {
    filename: "first-webpack.js",
    path: __dirname + "/public",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/, // this is a regular expression that tells webpack to use the following loaders for all files that end with .css or .scss
        use: [
          //   "style-loader", //add css in DOM
          MiniCssExtractPlugin.loader,
          "css-loader", //interpret @mport, url..
          "sass-loader",
        ],
      },
    ],
  },
}
