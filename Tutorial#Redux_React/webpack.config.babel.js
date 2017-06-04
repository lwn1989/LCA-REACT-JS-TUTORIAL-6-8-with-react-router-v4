import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import {HotModuleReplacementPlugin} from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const defaultEnv = {
  dev: true,
  production: false
}

export default (env = defaultEnv) => ({
  entry: [
    ...env.dev ? [
      'react-hot-loader/patch'
    ] : [],
    path.join(__dirname, 'src/js/index.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.min.js'
  },
  plugins: [
    ...env.dev ? [
      // Webpack Development Plugins
      new HotModuleReplacementPlugin()
    ] : [],
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src/js'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                ['es2015', { modules: false }],
                'react', 'stage-3'
              ],
              plugins: ['react-hot-loader/babel', 'transform-decorators-legacy']
            }
          }
        ]
      },
      {
        test: /\.(css|scss|sass)$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.(css|scss|sass)$/,
        loader: env.dev ? 'style!css!sass' : ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: 'css!sass'
        })
      }
    ]
  },
  devServer: {
    hot: env.dev
  }

})
