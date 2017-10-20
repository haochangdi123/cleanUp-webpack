var htmlWebpackPlugin = require('html-webpack-plugin');
// 因为要用绝对路径,所以我们使用node.js自带的path
var path = require('path');

module.exports = { 
	//上下文环境(默认为当前路径，当然设置为绝对路径更好)
	context:__dirname,
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
			},
			{
				//检测所有的css文件
				test:/\.css$/,
				// css-loader是的在js中可以引用css文件，再用！将style-loader(是的css应用在HTML)串联起来
				//post-loader将编译的css进行封装
				//loader是从右向左读的，所以先进行postcss-loader再css-loader再style-loader
				// loader:'style-loader!css-loader!postcss-loader'
				
				//或者不写loader，写成loaders也是可以的
				//从下往上读

				loaders:[
					'style-loader',
					//利用css的参数解决@import css文件的问题
					// importLoaders=1表示import进来的css使用一次css-loader(import进来2个文件就是2)
					'css-loader?importLoaders=1',
					{
						loader:'postcss-loader',
						//对postcss-loader进行设置,引用它的autoprefixer插件,对浏览器最近5个版本进行兼容
						options: {
					        ident: 'postcss',
					        plugins: [
						        require('autoprefixer')({
									browsers:['last 5 versions']
								})
					        ]
					    }	
					}
					
				]
			},
			{
				test: /\.less$/,
				//postcss-loader需要在style-loader，css-loader之前处理，less-loader，sass-loader之后处理
				loaders:[
					'style-loader',
					//利用less@import less文件的时候不需要设置css-loader的参数
					//@import css文件的时候需要设置css-loader的参数
					'css-loader',
					{
						loader:'postcss-loader',
						//对postcss-loader进行设置,引用它的autoprefixer插件,对浏览器最近5个版本进行兼容
						options: {
					        ident: 'postcss',
					        plugins: [
						        require('autoprefixer')({
									browsers:['last 5 versions']
								})
					        ]
					    }	
					},
					// 引用less-loader
					'less-loader'	
				] 
			},
			{
                test:   /\.html/,
                loader: 'html-loader'
            },
            {
                test:   /\.ejs/,
                loader: 'ejs-loader'
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
