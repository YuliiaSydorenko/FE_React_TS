const path = require('path');

module.exports = {
  // ...existing options...
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/Components/')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
};
