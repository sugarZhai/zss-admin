const path = require('path');
const {
  override,
  addWebpackModuleRule,
  addWebpackPlugin,
  addWebpackAlias,
  addLessLoader
} = require('customize-cra');
const HardSourcePlugin = require('hard-source-webpack-plugin'); //提供中间缓存,来加速 webpack 的构建速度
const ArcoWebpackPlugin = require('@arco-plugins/webpack-react');
const setting = require('./src/settings.json');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
// 打包配置
const addCustomize = () => (config) => {
  if (process.env.NODE_ENV === 'production') {
    //关闭sourceMap
    config.devtool = false;
    //配置打包后的文件位置
    //config.output.path = path.join(__dirname, 'dist');
    //添加js打包gzip配置
    config.plugins.push(
      new CompressionWebpackPlugin({
        test: /\.js$|\.css$/,
        threshold: 1024,
      })
    );
  }
  // 配置 filesystem 缓存
  config.cache = {
    type: 'filesystem',
  };
  return config;
};

module.exports = {
  webpack: override(
    addCustomize(),
    addLessLoader({
      lessLoaderOptions: {
        lessOptions: {sourceMap: false},
      },
    }),
    addWebpackModuleRule({
      test: /\.svg$/,
      loader: '@svgr/webpack',
    }),
    addWebpackPlugin(
      new HardSourcePlugin(),
      new ArcoWebpackPlugin({
        theme: '@arco-themes/react-arco-pro',
        modifyVars: {
          'arcoblue-6': setting.themeColor,
        },
      })
    ),
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
      '@utils': path.resolve(__dirname, 'src/utils')  
    })
  ),
};
