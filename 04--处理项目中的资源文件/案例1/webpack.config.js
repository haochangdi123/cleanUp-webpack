var htmlWebpackPlugin = require('html-webpack-plugin');
// 因为要用绝对路径,所以我们使用node.js自带的path
var path = require('path');

module.exports = { 
	entry:'./src/app.js',
	output:{
		path:__dirname+'/dist',
		filename:'js/[name]-bundle.js'
	},
	// 通过配置将加载器绑定到RegExp(正则表达式)
	//ES6的转译插件babel
	module:{
		loaders:[
			{
				//检测所有的js文件
				test: /\.js$/, 
				//使用babel-loader
				loader: "babel-loader",
				//不用使用(使用绝对路径)的数组
				//path.resolve可以得出绝对路径
				exclude:[path.resolve(__dirname,'node_modules/'),
						path.resolve(__dirname,'dist/')],
				// 只是src下的js使用(使用绝对路径)
				include:path.resolve(__dirname,'src/'),
				//因为es6是不断更新的,babel转译es6是有不同版本的,这里采用‘es2015’版,也可以在loader?presets='es2015'表示
				query:{
					presets:['es2015']
				}
			}
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			template:'index.html',
			filename:'index.html',
			title:'this is C',
			inject:'body'
		})
	]
}
