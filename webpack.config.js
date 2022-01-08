const {resolve} = require("path");

module.exports = {
  entry: './src/action.ts',
  target: 'node',
  devtool: 'source-map',
  module: {
    rules: [
      {test: /\.ts$/, use: 'ts-loader'},
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'action.js',
    path: resolve(__dirname, 'dist'),
  }
}
