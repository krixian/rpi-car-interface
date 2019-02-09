const path = require('path');

module.exports = {
    devServer: {
        public: process.env.PUBLIC_HOST
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/styles/*.less'),
            ]
        }
    }
}
