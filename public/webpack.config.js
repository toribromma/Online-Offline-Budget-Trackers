const config = {
    entry: "./index.js",
    output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
    },
    watch: true,
    mode: "production"
  };
  module.exports = config;