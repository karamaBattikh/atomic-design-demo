const cracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      options: {
        baseUrl: './src',
        source: 'jsconfig',
      },
      plugin: cracoAlias,
    },
  ],
};
