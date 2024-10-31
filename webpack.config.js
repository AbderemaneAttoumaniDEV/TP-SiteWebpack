const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/main.js',   // Le fichier js principale de notre code source.
  mode: 'development',
  output: {
    filename: 'main.js',    // Le nom du bundle à générer
    path: path.resolve(__dirname, 'dist'),   // Le chemin dans lequel le bundle doit être généré
  },
  module: {
    rules: [
        {
        test: /.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
    ],
  },
  plugins: [new HtmlWebpackPlugin({template: 'src/index.html'})],
  devServer: {open: true},
};