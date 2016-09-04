$(function(){
	var myChart = echarts.init(document.getElementById('js_ChinaMap'));

	var dd = [
		{name:'山东',contact:'苏州热线',tel:'0512-68838881'},
		{name:'上海',contact:'苏州热线',tel:'0512-68838881'},
		{name:'江苏',contact:'苏州热线',tel:'0512-68838881'},
		{name:'浙江',contact:'苏州热线',tel:'0512-68838881'},
		{name:'安徽',contact:'苏州热线',tel:'0512-68838881'},
		{name:'江西',contact:'苏州热线',tel:'0512-68838881'},
		{name:'福建',contact:'苏州热线',tel:'0512-68838881'},
		{name:'内蒙古',contact:'北京热线',tel:'010-84833505'},
		{name:'北京',contact:'北京热线',tel:'010-84833505'},
		{name:'天津',contact:'北京热线',tel:'010-84833505'},
		{name:'河北',contact:'北京热线',tel:'010-84833505'},
		{name:'山西',contact:'北京热线',tel:'010-84833505'},
		{name:'广西',contact:'广州热线',tel:'020-38778687'},
		{name:'广东',contact:'广州热线',tel:'020-38778687'},
		{name:'海南',contact:'广州热线',tel:'020-38778687'}
	];

	var option = {
		tooltip : {
			trigger: 'item',			
        	 formatter : function (params) {
	            var value = params.name+'<br/>'
	            for(var i=0;i<dd.length;i++){
	            	if(dd[i].name==params.name){
	            		value+= dd[i].contact+'<br/>'+dd[i].tel;
	            	}
	            }
	            return value;
	        }
		},
		series : [
			{
				name: '中国',
				type: 'map',
				mapType: 'china',
				itemStyle: {
		            normal: {
		                borderWidth:1,
		                borderColor:'#fff',
		                label: {
		                    show: false
		                }
		            },
		            emphasis: {     
		                borderWidth:1,
		                borderColor:'#fff',
		                label: {
		                    show: true,
		                    textStyle: {
		                        color: '#fff'
		                    }
			            },
		                areaColor: '#329cff'
		            }
				},

				data:[
					{name:'山东',selected:true},
					{name:'上海',selected:true},
					{name:'江苏',selected:true},
					{name:'浙江',selected:true},
					{name:'安徽',selected:true},
					{name:'江西',selected:true},
					{name:'福建',selected:true},
					{name:'内蒙古'},
					{name:'北京',selected:true},
					{name:'天津',selected:true},
					{name:'河北',selected:true},
					{name:'山西',selected:true},
					{name:'广西',selected:true},
					{name:'广东',selected:true},
					{name:'海南'},
					{name:'黑龙江',selected:true},
					{name:'吉林',selected:true},
					{name:'辽宁',selected:true},
					{name:'河南',selected:true},
					{name:'湖北',selected:true},
					{name:'湖南',selected:true},
					{name:'陕西',selected:true},
					{name:'宁夏'},
					{name:'甘肃'},
					{name:'青海'},
					{name:'新疆',selected:true},
					{name:'重庆',selected:true},
					{name:'贵州'},
					{name:'四川',selected:true},
					{name:'云南',selected:true},
					{name:'西藏'}
				]
				
			}
	
		]
	};

    myChart.setOption(option);
    
	myChart.on('click', function () {
      	window.location.href="#hy_register";
	});
	
});