const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function (env, argv) {
  const isEnvProduction = argv.mode === 'production';
  const isEnvDevelopment = argv.mode === 'development';

  return {
    entry: {
      main: './src/index.ts',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {},
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'assets/js/[name]_[chunkhash].min.js',
      publicPath: '',
      scriptType: 'text/javascript',
    },
    watchOptions: {
      aggregateTimeout: 200,
      ignored: /node_modules/,
      poll: 500,
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
          options: {
            sources: false,
          },
        },
      ],
    },
    plugins: [
      ...[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
          Object.assign(
            {},
            {
              inject: true,
              template: './public/index.html',
            },
            isEnvProduction
              ? {
                  minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    keepClosingSlash: true,
                    minifyJS: true,
                    minifyCSS: true,
                    minifyURLs: true,
                  },
                }
              : undefined
          )
        ),
      ],
      ...(isEnvDevelopment ? [new BundleAnalyzerPlugin()] : []),
    ],
    devtool: isEnvDevelopment ? 'source-map' : false,
  };
};
