import { resolve } from 'path'

import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import MiniCssPlugin from 'mini-css-extract-plugin'

export const prodRoot = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: resolve('dist'),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
}

export const prodPlugins = [
  new CleanWebpackPlugin,
  new MiniCssPlugin({ filename: '[contenthash].css' }),
]
