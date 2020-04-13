const rewireReactHotLoader = require('react-app-rewire-hot-loader-for-customize-cra');
const { override } = require('customize-cra');

/* config-overrides.js */
module.exports = override(rewireReactHotLoader());
