require.config({
	baseUrl : "./src/",
    map: {
      	'*': {
        	'style': 'assets/lib/requirejs/css.min'
      	}
    },
	paths : {
		/*
		*	避免js文件名和映射名相同，防止打包时被当做js文件重命名
		*/
		'text' : 'assets/lib/requirejs/text',
		'jquery' : 'assets/lib/jquery/jquery_1.11.3',
		'hdb' : 'assets/lib/handlebars/handlebars_v4.0.4',
		'json2' : 'assets/lib/json2/json2',
		'pagination':'assets/lib/pagination/1.2.1/jquery.pagination',
		'blockUI' : 'assets/lib/blockUI/2.64/jquery.blockUI.min',
		'artDialog' : 'assets/lib/dialog/6.0.4/dialog',
		'dialog' : 'assets/common/dialog_amd',
		'ajax' : 'assets/common/ajax_amd',
		'svMap' : 'assets/common/svConfig',
		'pager' : 'assets/common/pager_amd',
        'Util' : 'assets/common/global',
		'datepiker' : 'assets/lib/datepiker/WdatePicker'
	},
	waitSeconds:0,
	shim:{
		'ajax':{
			deps:['jquery']
		},
		'pagination':{
			deps:['jquery']
		},
		'loading':{
			deps:['jquery']
		},
		'pager':{
			deps:['pagination']
		},
		'blockUI':{
			deps:['jquery']
		},
		'artDialog': {
			deps:['jquery']
		},
		'dialog': {
			deps:['artDialog'],
			exports: 'dialog'
		},
		datepiker : {
			deps:['jquery'],
			exports:'datepiker'
		}
	}
});
/*
	Util用法及作用：
	Util集合了所有公用的js文件，并对外暴露相关接口，用于各模块调用。每个模块只需引入Util对象即可调用所有公用功能。
	可以根据项目自行向Util内添加公用js。
	作用：
	1、确保打包时只对Util打包一次，防止模块私自引入公用js文件，导致引用混乱，重复压缩合并
	2、方便统一调用公用js
*/
require(["Util"], function(Util) {
	console.log(Util);
	require(['js/example/demo'],function(demo){
		alert(demo)
	});
});