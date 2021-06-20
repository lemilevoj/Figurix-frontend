const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname,'../backend/public'),
    devServer:{
        proxy: {
            '/src':{
                target: 'http://localhost:3000'
            }

        }
    }
}