import './css/common.css';
import layer from './components/layer/layer.js';
import less from './components/layer/layer.less';
const app = function(){
	var dom = document.getElementById('app');
	var newLayer = layer();
	//模板其实就是newLayer.tpl属性，将模板当做字符串
	dom.innerHTML =  newLayer.tpl;

	var ejsdom = document.getElementById('ejsdiv');
	//向ejs模板中传递参数
	ejsdom.innerHTML = newLayer.ejs({
		name:'hcd',
		arr:['apple','xiaomi','honor']
	})
}

new app();