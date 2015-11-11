require.config({
	baseUrl : "./",
    map: {
      	'*': {
        	'style': 'assets/lib/css.min'
      	}
    },
	paths : {
		/*
		*	避免js文件名和映射名相同，防止打包时被当做js文件重命名
		*/
		'text' : 'assets/lib/text',
		// style : 'assets/lib/css.min',
		'avalon' : 'assets/lib/avalon/avalon',
		'jquery' : 'assets/lib/jquery/jquery-1.11.3',
		'base64' : 'assets/lib/base64/jquery.base64',
		'mmRouter': 'assets/lib/mmRouter-0.5/mmRouter',
		'mmHistory':'assets/lib/mmRouter-0.5/mmHistory',
		'easyui' : 'assets/lib/easyui/jquery.easyui.min',
		'loading' :'assets/lib/jquery/loading/loading-overlay.min',
		'pagination':'assets/lib/pagination/1.2.1/jquery.pagination',
		'blockUI' : 'assets/lib/blockUI/2.64/jquery.blockUI.min',
		'artDialog' : 'assets/lib/dialog/6.0.4/dialog',
		'dialog' : 'assets/common/dialog_amd',
		'wrapper' : 'assets/common/avalonJQcomponent',
		'map' :'assets/common/map',
		'config' : 'assets/common/router_config',
		'ajax' : 'assets/common/ajax_amd',
		'svMap' : 'assets/common/svConfig',
		'pager' : 'assets/common/pager_amd',
        'global_ref' : 'assets/common/global',
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
	}//,
	// urlArgs: function(config, moduleName, url){
	// 	var urlArgs = requireConfig.get(moduleName);
	// 	//avalon.log('moduleName:'+moduleName +'\turl:'+url);
	// 	if(urlArgs===undefined)
	// 		return "";
	// 	return "bust=" + urlArgs;
	// }
});

require(["global_ref",'js/main'], function(g, main) {
	g.avalon.scan();
	g.avalon.log('done!');
});