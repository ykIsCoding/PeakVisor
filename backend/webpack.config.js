const path = require('path');

module.exports = {
  entry: './server.ts', // Adjust to your entry file
  target: 'node',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2', // This is important for Node.js modules
    chunkFormat: 'commonjs'
  },
  resolve: {
    alias: {
      '@routes': path.resolve(__dirname, 'src/routes/'),
      '@controller': path.resolve(__dirname, 'src/controller/'),
      '@services': path.resolve(__dirname, 'src/services/')
    },
    extensions: ['.tsx', '.ts', '.js', '.json'] // Add or adjust extensions as needed
  },
  module: {
    // rules: [
    //   {
    //     test: /\.m?js$/, // Updated to include both regular and module JS files
    //     exclude: /node_modules/,
    //     use: {
    //       loader: 'babel-loader',
    //       options: {
    //         presets: ['@babel/preset-env']
    //       }
    //     }
    //   }
    // ]
    rules: [
      // Handle TypeScript files
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // Handle JavaScript files
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
};
