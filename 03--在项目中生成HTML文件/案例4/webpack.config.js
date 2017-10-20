
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
			template:'index.html',
			//自动生成HTML文件的名字
			filename:'index-[hash].html',
			//引入打包后的js的script标签所在的位置,这里表示放在head标签中
			inject:'head',
			//可以向模板传递参数，然后应用于自动生成的html,(模板需要获取参数)
			title:'我来自参数',
			//任何的参数都是可以传递的
			date:new Date()
		})
	]
}
