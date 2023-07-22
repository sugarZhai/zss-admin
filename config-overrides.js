/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const {
  override,
  addWebpackModuleRule,
  addWebpackPlugin,
  addWebpackAlias,
  overrideDevServer,
} = require('customize-cra');
const ArcoWebpackPlugin = require('@arco-plugins/webpack-react');
const addLessLoader = require('customize-cra-less-loader');
const setting = require('./src/settings.json');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
// 打包配置
// const addCustomize = () => (config) => {
// if (process.env.NODE_ENV === 'production') {
// 关闭sourceMap
// config.devtool = false;
// 配置打包后的文件位置
// 修改输出目录为 "dist"
// config.output.path = path.join(__dirname, 'dist');
// 添加js打包gzip配置
// config.plugins.push(
//   new CompressionWebpackPlugin({
//     test: /\.js$|\.css$/,
//     threshold: 1024,
//   })
// );
// }
// return config;
// };
// 跨域配置
const devServerConfig = () => (config) => {
  return {
    ...config,
    // 服务开启gzip
    compress: true,
    proxy: {
      '/api': {
        target: 'xxx',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api',
        },
      },
    },
  };
};

module.exports = {
  webpack: override(
    // addCustomize(),
    addLessLoader({
      lessLoaderOptions: {
        lessOptions: {},
      },
    }),
    addWebpackModuleRule({
      test: /\.svg$/,
      loader: '@svgr/webpack',
    }),
    addWebpackPlugin(
      new ArcoWebpackPlugin({
        theme: '@arco-themes/react-arco-pro',
        modifyVars: {
          'arcoblue-6': setting.themeColor,
        },
      })
    ),
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
    })
  ),
  devServer: overrideDevServer(devServerConfig()),
};
