//Konfiguracja Webpack
module.exports = {
  entry: ["whatwg-fetch", "./js/app.jsx"],
  output: {
    filename: "./js/out.js"
  },
  devServer: {
    port: 3006,
    contentBase: './',
    inline: true
  },
  devtool: "#eval-source-map",
  watch: true,
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','stage-2', 'react']
        }
      }
    ]
  }
}
