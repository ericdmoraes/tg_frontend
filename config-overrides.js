const rewireReactHotLoader = require('react-app-rewire-hot-loader-for-customize-cra');
const { override, addBabelPlugin } = require('customize-cra');

/* config-overrides.js */
module.exports = override(
    rewireReactHotLoader(),
    addBabelPlugin([
        'babel-plugin-root-import',
        {
            rootPathSuffix: 'src',
        },
    ])
);
