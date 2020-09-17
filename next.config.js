const withCSS = require("@zeit/next-css");
const path = require('path')

module.exports = withCSS({
    webpack(config, options) {
        config.module.rules.push({
           include:path.join(__dirname,'public')
          })
        return config
    }
});