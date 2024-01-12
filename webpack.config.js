const webpack = require('webpack');

module.exports = [
    {
      entry: './lib/index',
      output: {
        path: __dirname + '/lib',
        filename: 'http-message-signatures.min.js',
        library: 'httpMessageSignatures'
      },
  
      plugins: [
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        })
      ],
      
      resolve: {
        extensions: ['.web.ts', '.web.js', '.ts', '.js', '.json'],
        fallback: {
            buffer: require.resolve('buffer'),
            constants: require.resolve('constants-browserify'),
            crypto: require.resolve('crypto-browserify'),
            stream: require.resolve('stream-browserify'),
            url: require.resolve('url'),
        }
      },
  
      devtool: 'source-map',
  
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
          }
        ]
      },
    }
  ];