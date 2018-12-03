module.exports = {
    entry: [    // Where do we want webpack to start
        './src/index.js'
    ],
    output: {   // Where do we want webpack to output our bundle
        path:  __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    }
}