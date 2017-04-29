 //数据源
   var nodes = [ {name: "百度ife",url:"null",
                  children: [ {name: "小薇学院", url:"null", 
							   children: [ {name: "零基础HTML编码",url:"https://catsuger.github.io/my-ife2017/Task1/Task1.html"},
										   {name: "零基础HTML及CSS编码（一）",url:"https://catsuger.github.io/my-ife2017/Task2/Task2.html"},
										   {name: "三栏布局",url:"https://catsuger.github.io/my-ife2017/Task3/Task3.html"},
										   {name: "定位和居中问题",url:"https://catsuger.github.io/my-ife2017/Task4/Task4.html"},
										   {name: "零基础HTML及CSS编码（二）",url:"https://catsuger.github.io/my-ife2017/Task5/Task5.html"},
										   {name: "通过HTML及CSS模拟报纸排版",url:"https://catsuger.github.io/my-ife2017/Task6/Task6.html"},
										   {name: "技术产品官网的页面架构",url:"https://catsuger.github.io/my-ife2017/Task7/Task7.html"},
										   {name: "响应式网格（栅格化）布局",url:"https://catsuger.github.io/my-ife2017/Task8/Task8.html"},
										   {name: "实现一个复杂页面",url:"https://catsuger.github.io/my-ife2017/Task9/Task9.html"},
										   {name: "Flexbox 布局练习",url:"https://catsuger.github.io/my-ife2017/Task10/Task10.html"},
										   {name: "移动Web页面布局实践",url:"https://catsuger.github.io/my-ife2017/Task11/Task11.html"},
										   {name: "学习CSS 3的新特性",url:" https://catsuger.github.io/my-ife2017/Task12/Task12.html"}
										  ]},
                              {name: "斌斌学院",url:"null", 
							   children: [ {name: "零基础JavaScript编码（一）",url:"https://catsuger.github.io/my-ife2017/Task13/Task13.html"},
							               {name: "零基础JavaScript编码（二）",url:"https://catsuger.github.io/my-ife2017/Task14/Task14.html"} ,
							               {name: "零基础JavaScript编码（三）",url:"https://catsuger.github.io/my-ife2017/Task15/Task15.html"} ,
							               {name: "基础JavaScript练习（一）",url:"https://catsuger.github.io/my-ife2017/Task16/Task16.html"} ,
							               {name: "基础JavaScript练习（二）",url:"https://catsuger.github.io/my-ife2017/Task17/Task17.html"} ,
							               {name: "基础JavaScript练习（三）",url:"https://catsuger.github.io/my-ife2017/Task18/Task18.html"} ,
							               {name: "JavaScript和树（一）",url:"https://catsuger.github.io/my-ife2017/Task19/Task19.html"} ,
							               {name: "JavaScript和树（二）",url:"https://catsuger.github.io/my-ife2017/Task20/Task20.html"} ,
							               {name: "JavaScript和树（三）",url:"https://catsuger.github.io/my-ife2017/Task21/Task21.html"} 
							              ]},
			                  {name: "耀耀学院", url:"null",
							   children: [ {name: "单个表单项的检验",url:"https://catsuger.github.io/my-ife2017/Task22/Task22"},
							               {name: "多个表单项的动态校验",url:"https://catsuger.github.io/my-ife2017/Task23/Task23"},
										   {name: "表单联动",url:"https://catsuger.github.io/my-ife2017/Task24/Task24"},
										   {name: "听指令的小方块（一）",url:"https://catsuger.github.io/my-ife2017/Task25/Task25"},
										   {name: "听指令的小方块（二）",url:"https://catsuger.github.io/my-ife2017/Task26/Task26"},
										   {name: "UI组件之浮出层",url:"https://catsuger.github.io/my-ife2017/Task27/Task27"},
										   {name: "UI组件之排序表格",url:"https://catsuger.github.io/my-ife2017/Task28/Task28"}
										  ]},
			                  {name: "百度糯米学院", url:"null",
							   children: [ {name: "有趣的鼠标悬浮模糊效果",url:"https://catsuger.github.io/my-ife2017/Task29/Task29.html"},
										   {name: "动态数据绑定（一）",url:"https://catsuger.github.io/my-ife2017/Task30/Task30.html"} ,
										   {name: "动态数据绑定（二）",url:"https://catsuger.github.io/my-ife2017/Task31/Task31.html"} ,
										   {name: "自定义checkbox radio样式",url:"https://catsuger.github.io/my-ife2017/Task34/Task34.html"} ,
							               {name: "自定义网页右键菜单",url:"https://catsuger.github.io/my-ife2017/Task36/Task36.html"} ,
							               {name: "使用CSS实现折叠面板",url:"https://catsuger.github.io/my-ife2017/Task37/Task37.html"} ,
							               {name: "正则表达式之入门",url:"https://catsuger.github.io/my-ife2017/Task38/Task38.html"} ,
							               {name: "简易markdown文件解析器",url:"https://catsuger.github.io/my-ife2017/Task39/Task39.html"} ,
							               {name: "CSS3饼状loading效果",url:"https://catsuger.github.io/my-ife2017/Task40/Task40.html"} ,
							               {name: "CSS3实现3D 轮播图",url:"https://catsuger.github.io/my-ife2017/Task41/Task41.html"} ,
							               {name: "仿豆瓣音乐播放器",url:"https://catsuger.github.io/my-ife2017/Task44/Task44.html"} ,
										   {name: "实现树形组件",url:"https://catsuger.github.io/my-ife2017/Task45/Task45"}
										  ]},
			                  {name: "ECharts & WebVR学院",url:"null",
							   children: [ {name: "Three.js 入门",url:"https://catsuger.github.io/my-ife2017/Task46/Task46.html"},
										   {name: "光与影",url:"https://catsuger.github.io/my-ife2017/Task47/Task47.html"} ,
										   {name: "材质与纹理",url:"https://catsuger.github.io/my-ife2017/Task48/Task48.html"} ,
										   {name: "照相机和交互控制",url:"https://catsuger.github.io/my-ife2017/Task49/Task49.html"} ,
							               {name: "动画",url:"https://catsuger.github.io/my-ife2017/Task50/Task50.html"} ,
							               {name: "零基础绘制ECharts图表",url:"https://catsuger.github.io/my-ife2017/Task51/Task51.html"} 
							              ]},
			                  {name: "商业平台学院", url:"null"}]}

			  ];