const path = require('path');
const CracoLessPlugin = require('craco-less');
const resolve = pathname => path.resolve(__dirname, pathname);

module.exports = {
  plugins:[
    {
      plugin: CracoLessPlugin
    },
  ],
  webpack: {
    alias: {
      '@': resolve("src"),
      "components": resolve("src/components"),
      "views": resolve("src/views"),
      "utils": resolve("src/utils"),
      "assets": resolve("src/assets"),
      "base-ui": resolve("src/base-ui"),
      "store": resolve("src/store"),
      "router": resolve("src/router"),
      "service": resolve("src/service")
    }
  }
}