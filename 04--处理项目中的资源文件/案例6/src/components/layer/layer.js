//引入html  其实是字符串
import tpl from './layer.html';
//引入ejs  其实是函数(用时传入参数)
import ejs from './layerEjs.ejs';
function layer(){
	return{
		name:'layer',
		tpl:tpl,
		ejs:ejs
	}
}

export default layer;