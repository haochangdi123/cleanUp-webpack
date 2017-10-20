//引用webpack.config.js插件
var htmlWebpackPlugin = require('html-webpack-plugin');

//模块化输出
module.exports = {
	//入口文件,这里采用entry对象的方式，分别将main.js和hellow.js打包
	entry:{
		main:'./src/script/main.js',
		hello:'./src/script/hellow.js'
	},
	// 打包后的文件
	output:{
		//打包后文件在./dist/js的文件夹中
		path:__dirname+'/dist/js',
		//打包后文件的名称为entry的chunk名称-编译的哈希值
		filename:'[name]-[hash].js'
	},
	//插件数组
	plugins:[
		//初始化插件
		new htmlWebpackPlugin()
	]
}
