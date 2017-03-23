var path = require("path");

module.exports = {
  entry: ['whatwg-fetch', './js/view.js'],
  output: {
    path: "./public",
    filename: "main-bundled.js"
  },
  module: {
    loaders: [
      {test: /\.hbs$/, loader: "handlebars-loader"}
    ]
  }
};
