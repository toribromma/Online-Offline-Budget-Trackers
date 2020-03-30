const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
    entry: "./public/assets/js/app.js",
    output: {
      path: __dirname + "/public/dist",
      filename: "bundle.js"
    },
    mode: "production",
    plugins: [
      new WebpackPwaManifest({
              // the name of the generated manifest file
        filename: "manifest.json",
        inject: false,
        fingerprints: false,
        name: "Budget App",
        short_name: "Budget App",
        description: "An application for budget",
        background_color: "#01579b",
        theme_color: "#ffffff",
        "theme-color": "#ffffff",
        start_url: "/",
        display: "standalone",
        icons: [
          {
            src: path.resolve("./public/assets/images/icons/icon-192x169.png"),
            sizes: [192, 512],
            destination: path.join("assets", "icons")
          }
        ]
      })
    ],
    // configure webpack to use babel-loader to bundle our separate modules and transpile the code
    // refer to https://github.com/babel/babel-loader for more information on the settings
    // module: {
    //   rules: [
    //     {
    //       test: /\.js$/, // files must end in ".js" to be transpiled
    //       exclude: /node_modules/, // don't transpile code from "node_modules"
    //       use: {
    //         loader: "babel-loader",
    //         options: {
    //           presets: ["@babel/preset-env"]
    //         }
    //       }
    //     }
    //   ]
    // }
  };
  
  module.exports = config;