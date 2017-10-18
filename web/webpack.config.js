module.exports = {
  entry: './index.web.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      query: { cacheDirectory: true }
    },
    {
        test: /\.json$/,
        loader: 'json-loader'
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
          },
        },
      ],
    }]
  }
}