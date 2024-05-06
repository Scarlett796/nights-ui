const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtraPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: { index: "./src/main.tsx" },
  mode: "development",
  devtool: "source-map",
  output: {
    path: path.resolve("./dist"),
    filename: "js/[name].js?v=[contenthash:6]",
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.less$/,
        include: path.resolve("./src"),
        use: [
          {
            loader: MiniCssExtraPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtraPlugin.loader,
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff|gif|png|jpg)$/,
        loader: "url-loader",
        options: {
          name: "img/[name]_[hash:6].[ext]",
          limit: 2048,
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtraPlugin({
      filename: 'css/[name].css?v=[hash:6]',
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["manifest", "vendors", "index", "com", "runtime"],
      chunksSortMode: "manual",
    }),
  ],
  devServer: {
    static: { directory: path.join(__dirname, "dist") },
    compress: true,
    host: "localhost",
    port: 9999,
    // 支持history路由模式
    historyApiFallback: true,
  },
};
