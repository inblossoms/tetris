const { resolve } = require("path"),
  webpack = require("webpack"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "eval",
  entry: "./src/index.ts",
  output: {
    path: resolve("./dist"),
    filename: "script/bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 5,
    }),
  ],
  performance: {
    hints: "warning",
    maxEntrypointSize: 2048000,
    maxAssetSize: 1024000,
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith(".js");
    },
  },
  module: {
    rules: [{ test: /.ts$/, loader: "ts-loader" }],
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "all",
      minSize: 102400,
    },
  },
};
