//模块化输出
module.exports = {
	//入口文件,一般使用绝对路径，__dirname为webpack.config.js所在的文件夹
	entry:['./src/script/main.js','./src/script/hello.js'],
	// 打包后的文件
	output:{
		//打包后文件在./dist/js的文件夹中
		path:__dirname+'/dist/js',
		//打包后文件的名称
		filename:'bundle.js'
	}
}





