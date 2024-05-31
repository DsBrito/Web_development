const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  publicPathc: process.env.NODE_ENV === "production" ? "/most-used-words/" : "/",
  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
    electronBuilder: {
      nodeIntegration: true,
      // builderOptions: {
      //   appId: "com.example.app",
      //   productName: "Most Used Words",
      //   win: {
      //     target: "portable",
      //   },
      //   linux: {
      //     target: "AppImage",
      //   },
      //   mac: {
      //     target: "dmg",
      //   },
      // },
    },
  },
})
