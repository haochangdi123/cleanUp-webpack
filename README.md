<!--
 * @Author: your name
 * @Date: 2020-03-19 11:28:25
 * @LastEditTime: 2020-03-19 18:22:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hcd-topic-stencild:\work\project\hcd-news-h5\node_modules\hcd-relate-recommend\README.md
 -->
##### 相关推荐

```javascript
import hcd form 'hcd-relate-recommend';

<hcd-relate-recommend
	:base-url="https://www.baidu.com" 
  :token="4B43CD3CD5DB4979AC1B5B3F508391CA",
/>
<hcd-relate-recommend
  :rrBaseUrl="rrBaseUrl"
  :webBuriedPointerObj="webBuriedPointerObj"
/>
// 埋点对象
webBuriedPointerObj: {             
  projectName: 'hcd-news-h5',     //引用组件的项目名(非必填)
  menucode: 213,                   // 埋点的menu_code(非必填)
  initActioncode: 213003,          // 初始化时埋点的actioncode(非必填)
  clickActioncode: 213004,         // 点击目标时埋点的actioncode(非必填)
  searchId: 0                      // 项目页面的id，比如资讯的id(非必填)
},

//调用改组件的项目需要注册rocNative
// 因为该组件使用了埋点npm，所以需要自行注册sendBuriedPoint，openErrorDebug，getLocalData 三个方法
```

| 字段       | 类型             | 备注                       | 是否必须 |
| ---------- | ---------------- | -------------------------- | -------- |
| rrBaseUrl   | string           | 请求后台接口的域名         | true     |
| discuss-id | string \| number | 话题ID                     | true     |
| token      | string           | 登录的token                | true     |
| webBuriedPointerObj      | Object           | 讨论标题（默认：热门话题） | false    |
| topic-url  | string           | 讨论跳转页面域名           | true     |
| appId      | string           | 微信授权登录的appID           | true     |

