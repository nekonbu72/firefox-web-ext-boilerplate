const path = require("path");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    background_scripts: "./background_scripts/background.js",
    popup: "./popup/index.js"
  },
  output: {
    path: path.resolve(__dirname, "addon"),
    filename: "[name]/index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      }
    ]
  }
};
