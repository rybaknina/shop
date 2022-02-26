module.exports = {
  devServer: {
    proxy: "http://localhost:3000"
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/assets/style/blocks/_variables.scss";
          @import "~@/assets/style/blocks/_mixins.scss";
          @import "~@/assets/style/blocks/_common.scss";
          @import "~@/assets/style/blocks/_header.scss";
          @import "~@/assets/style/blocks/_features.scss";
          @import "~@/assets/style/blocks/_feedback.scss";
          @import "~@/assets/style/blocks/_subscribe.scss";
          @import "~@/assets/style/blocks/_footer.scss";
          @import "~@/assets/style/blocks/_menu.scss";
        `
      }
    }
  }
};
