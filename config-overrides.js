const path = require('path')
const { override, addPostcssPlugins } = require('customize-cra')
const px2viewport = require('postcss-px-to-viewport')

const postcssPlugins = addPostcssPlugins([
  px2viewport({
    viewportWidth: 375,
  }),
])

module.exports = override(postcssPlugins)
