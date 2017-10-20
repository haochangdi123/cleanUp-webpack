var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
	entry:{
		a:'./src/script/a.js',
		b:'./src/script/b.js',
		c:'./src/script/c.js',
		d:'./src/script/d.js'
	},
	output:{
		path:__dirname+'/dist',
		filename:'js/[name]-[hash].js',
		publicPath:'http://hcd.com/'
	},
	plugins:[
		//自动生成多少个HTML页面就new几次插件
		new htmlWebpackPlugin({
			template:'index.html',
			filename:'a.html',
			title:'this is A',
			//在该页面加载chunk为‘a’打包生成的js
			chunks:['a']
		}),
		new htmlWebpackPlugin({
			template:'index.html',
			filename:'b.html',
			title:'this is 	B',
			//加载除了‘a’chunk以外所有的打包生成的js
			excludeChunks:['a']
		}),
		new htmlWebpackPlugin({
			template:'index.html',
			filename:'c.html',
			title:'this is C',
			chunks:['c','d']
		})
	]
}
