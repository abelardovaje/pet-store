var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin('./css/admin.css',{
    disable:false,
    allChunks:true
});


function resolve (dir) {
    return path.join(__dirname, '.', dir)
}

function sassRules(){
    return {
        test:/\.(css|sass|scss)$/,
        use:extractSass.extract(['css-loader', 'sass-loader'])
    }
}


function scriptRules(){
    return {
        test:/\.js$/,
        exclude:path.resolve(__dirname,'node_modules'),
        loader:'babel-loader'
    }
}

function fileRules(){
    return {
        test:/\.(woff|woff2|eot|ttf|svg)$/,
        use:[
            {
                loader:'url-loader?limit=1024&publicPath=../&name=../dist/fonts/[name].[ext]'
            }
        ]
    }
}

function imageRules(){
    return {
       
        test:/\.(png|jpg)$/,
        use:[
            {
                loader:'url-loader?limit=1024&publicPath=../&name=../dist/img/[name].[ext]'
            }
        ]
    }
}

module.exports = {
    entry:{
        admin:['babel-polyfill','./resources/assets/js/app.js']
    },
    output:{
        filename:'js/[name]/[name].js',
        path:resolve('./dist'),
        // chunkFilename:"../js/chunk/[id].chunk.js",
        // publicPath: '/',
    },
    module:{
        rules:[sassRules(),scriptRules(),fileRules(),imageRules()]
    },
    resolve:{
        alias:{
            '@image':path.resolve(__dirname,'./dist/img')
        }
    },
    plugins:[extractSass]

}