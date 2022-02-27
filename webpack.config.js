const CompressionPlugin = require('compression-webpack-plugin')
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin')
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')
// const webpack = require('webpack')
const zopfli = require('node-zopfli')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'
const mode = !isProduction ? 'development' : 'production'

const cssLoaders = [
  { loader: MiniCssExtractPlugin.loader },
  { loader: require.resolve('cache-loader') },
  { loader: require.resolve('css-loader') },
  { loader: 'postcss-loader' }
]

const commonPlugins = [
  // webpack 5でprocess.envを使う
  // new webpack.EnvironmentPlugin({
  //   NODE_ENV: 'development'
  // }),

  // ビルドの度にビルドフォルダーを削除する
  new CleanWebpackPlugin(),

  // CSSファイルを別ファイルで出力する
  new MiniCssExtractPlugin({
    filename: '[name].css'
  }),

  // assets.phpファイルを出力する
  new DependencyExtractionWebpackPlugin()
]

module.exports = {
  mode,
  watch: !isProduction,
  entry: {
    index: path.resolve(process.cwd(), 'public', 'src', 'index.js'),
    editor: path.resolve(process.cwd(), 'public', 'src', 'editor.js'),
    'theme-customize': path.resolve(process.cwd(), 'public', 'src', 'theme-customize.js'),
    style: path.resolve(process.cwd(), 'public', 'src', 'scss', 'index.scss')
  },

  output: {
    filename: '[name].js',
    path: path.resolve(process.cwd(), 'public', 'build')
  },

  optimization: {
    // Only concatenate modules in production, when not analyzing bundles.
    concatenateModules: mode === 'production',
    splitChunks: {
      cacheGroups: {
        style: {
          test: /[\\/]style\.(sc|sa|c)ss$/,
          chunks: 'all',
          enforce: true,
          automaticNameDelimiter: '-'
        },
        default: false
      }
    },
    minimizer: [
      // JSを圧縮する
      new TerserPlugin({
        parallel: true,
        sourceMap: true,
        terserOptions: {
          output: {
            comments: /translators:/i
          }
        },
        extractComments: false
      }),
      // CSSを圧縮する
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false,
            annotation: true
          }
        }
      })
    ]
  },

  plugins: !isProduction
    ? [
        ...commonPlugins
      ]
    : [
        ...commonPlugins,
        // 不要なJSを削除
        new FixStyleOnlyEntriesPlugin(),
        // GZIP生成
        new CompressionPlugin({
          test: /\.(css)|(js)$/,
          exclude: /\.map$/,
          algorithm (input, compressionOptions, callback) {
            return zopfli.gzip(input, compressionOptions, callback)
          }
        })
      ],

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              [
                '@babel/preset-react',
                {
                  // 通常は'React.createElement.xxxx'を記述しますが、WordPressのブロックエディターはWordPress用のReactを使用するため、以下のように記述します
                  pragma: 'wp.element.createElement',
                  pragmaFrag: 'wp.element.Fragment',
                  development: !isProduction
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader']
      },
      {
        test: /\.css$/,
        use: cssLoaders
      },
      {
        test: /\.(sc|sa)ss$/,
        use: [
          ...cssLoaders,
          {
            loader: require.resolve('sass-loader'),
            options: {
              implementation: require('sass'),
              sassOptions: {
                implementation: require('sass'),
                indentType: 'tab',
                indentWidth: 1,
                outputStyle: 'expanded',
                fiber: require('fibers')
              }
            }
          }
        ]
      }
    ]
  }
}
