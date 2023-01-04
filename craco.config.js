const path = require('path')
const { name } = require('./package.json')

const pathResolve = (pathUrl) => path.join(__dirname, pathUrl)
module.exports = {
  reactScriptsVersion: 'react-scripts',
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@components': pathResolve('src/components'),
      '@constants': pathResolve('src/constants'),
      '@containers': pathResolve('src/containers'),
      '@hooks': pathResolve('src/hooks'),
      '@mocks': pathResolve('src/mocks'),
      '@routes': pathResolve('src/routes'),
      '@services': pathResolve('src/services'),
      '@styles': pathResolve('src/styles'),
      '@types': pathResolve('src/types'),
      '@utils': pathResolve('src/utils'),
      '@contexts': pathResolve('src/contexts'),
    },
    configure(webpackConfig) {
      // 配置扩展扩展名
      webpackConfig.resolve.extensions = [
        ...webpackConfig.resolve.extensions,
        ...['.scss', '.css'],
      ]
      // 接入微前端框架qiankun的配置,不接入微前端可以不需要
      webpackConfig.output.library = `${name}-[name]`
      webpackConfig.output.libraryTarget = 'umd'
      webpackConfig.output.globalObject = 'window'
      return webpackConfig
    },
  },

  style: {
    postcss: {
      mode: 'exclude',

      loaderOptions: {
        postcssOptions: {
          ident: 'postcss',

          plugins: [
            [
              'postcss-px-to-viewport-8-plugin',

              {
                unitToConvert: 'px', // 要转化的单位

                viewportWidth: 375, // UI设计稿的宽度

                viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用 rem

                fontViewportUnit: 'vw', // 字体使用的视口单位

                unitPrecision: 3, // 指定`px`转换为视窗单位值的小数后 x位数 // propList: 当有些属性的单位我们不希望转换的时候，可以添加在数组后面，并在前面加上!号，如propList: ["*","!letter-spacing"],这表示：所有css属性的属性的单位都进行转化，除了letter-spacing的

                propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换 // 转换的黑名单，在黑名单里面的我们可以写入字符串，只要类名包含有这个字符串，就不会被匹配。比如selectorBlackList: ['wrap'],它表示形如wrap,my-wrap,wrapper这样的类名的单位，都不会被转换

                selectorBlackList: ['ignore'], // 指定不转换为视窗单位的类名，

                minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换

                mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false

                replace: true, // 是否转换后直接更换属性值

                exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配

                landscape: false, // 是否处理横屏情况
              },
            ],
          ],
        },
      },
    },
  },
}
