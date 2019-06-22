module.exports = {
    context: __dirname + '/src',
    entry: {
        app: './main.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            }
        ]
    },
    devServer: {
        contentBase: __dirname + '/dist',
        compress: true,
        port: 9000
    }

}