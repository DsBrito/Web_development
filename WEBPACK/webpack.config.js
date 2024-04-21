const modoDev = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/first-webpack.js",
  output: {
    filename: "first-webpack.js",
    path: __dirname + "/public",
  },
  devServer: {
    contentBase: "./public",
    port: 9000,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          //   "style-loader", //add css in DOM
          MiniCssExtractPlugin.loader,
          "css-loader", //interpret @mport, url..
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
};
