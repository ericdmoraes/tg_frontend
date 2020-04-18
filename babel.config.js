module.exports = {
    plugins: [
        [
            'babel-plugin-root-import',
            {
                paths: [
                    {
                        rootPathPrefix: '~',
                        rootPathSuffix: 'src',
                    },
                ],
            },
        ],
    ],
};
