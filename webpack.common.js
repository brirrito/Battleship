const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: '/home/brirrito/the_odin_project/Battleship/src/app/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: '/home/brirrito/the_odin_project/Battleship/src/app/view/index.html',
    }),
  ],
};