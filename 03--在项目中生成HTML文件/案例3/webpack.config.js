
var htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = { 
	//执行上下文，默认为webpack.config.js所在的文件夹
	// context：
	entry:{
		main:'./src/script/main.js',
		hello:'./src/script/hellow.js'
	},
	output:{
		path:__dirname+'/dist',
		filename:'js/[name]-[hash].js'
	},
	//插件数组
	plugins:[
		//初始化插件,传递模板参数
		new htmlWebpackPlugin({
			//模板为同级目录下的index.html，为何不用写路径，是因为默认上下文问webpack.config.js所在的文件夹
				template:'index.html'
		})
	]
}
