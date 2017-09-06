<style type="text/css">

	.breadcrumb{

		background-color:white;
		padding: 8px 0px 18px;
  	margin-bottom: 0px;
	}

	.page-header{

		margin: 0px 0 20px;
	}
</style>

<template>

	<main class="container-fluid">
		
		<!-- 导航 -->
		<ol class="breadcrumb">
			<li><a href="#">拍摄管理</a></li>
			<li class="active">计划</li>
		</ol>

		<!-- 标题栏 #header -->
		<tpl-header

			:plans="plans"
			:overview="overview"
			:display="display">
		</tpl-header>

		<!-- 概述&详情 #overview #detail-->
		<component 
			keep-alive
    	:is="display"

    	:overview="overview"
    	:detail="detail"
    	:page.sync="page">
    </component>

		<!-- 遮罩 @global-loader -->
		<tpl-global-loader
		
			:loader="loader">
		</tpl-global-loader>
	</main>
</template>

<script type="text/javascript">

	import Header from './header.vue'
	import Overview from './overview.vue'
	import Detail from './detail.vue'
	
	import GlobalLoader from '../../../vue_components/loader/global-loader.vue'

	import Model from '../js/model'

	export default {
		
		components:{
			'tpl-header':Header,
			'tpl-overview':Overview,
			'tpl-detail':Detail,
			'tpl-global-loader':GlobalLoader
		},
		data:function(){

			return{
				//概述与详情模板切换
				display:'tpl-overview',
				//所有计划
				plans:[],
				//概述
				overview:{},
				//详情
				detail:[],
				//加载状态
				loader: false,
				//分页
				page: new Model.PageModel()
			}
		},
		methods:{
			//加载
			loading:function(){
				
				this.getPlans();
				this.getOverview();
			},
			//查询所有计划
    	getPlans:function(){

    		this.$resource('/plans').get(function (data, status, request) {
    			
					this.plans = data;
	      });
    	},
    	//查询概述
    	getOverview:function(id){

    		this.loader = true;

    		this.$resource('/plan/overview').get({planId: id}, function (data, status, request) {
    			
  				this.overview = data;

	        this.$nextTick(function(){
						this.loader = false;

						this.$broadcast('doRenderChart');
		   		});
	      });
    	},
    	//查询详情
    	getDetail:function(id){

    		this.loader = true;

    		this.$resource('/plan/detail').get({planId: id}, this.page, function (data, status, request) {
    			
    			this.detail = data.views;
    			this.page.total = data.page.total;

    			this.$nextTick(function(){
						this.loader = false;
		   		});
	      });
    	},
    	//切换视图
    	setDisplay:function(name){

    		if(this.display != name){

    			if(this.display == 'tpl-overview'){

	    			this.display = 'tpl-detail';
	    			this.getDetail(this.overview.id);

	    		}else{

	    			this.display = 'tpl-overview';
	    			this.getOverview();
	    		}
    		}
    	},
    	//切换计划
    	change:function(id){

    		console.log(id);
    		
    		if(this.display == 'tpl-overview'){

    			this.getOverview(id);
    		}else{

    			this.getDetail(id);
    		}
    	}
    },
    events: {
    	setLoader:function(value){

    		this.loader = value;
    	},
    	doLoading:function(id){

    		this.getPlans();
    		this.change(id);
    	},
    	doGetOverview:function(){

    		this.getOverview();
    	},
    	doGetDetail:function(){

    		this.getDetail();
    	},
    	doSetDisplay:function(name){
    		
    		this.setDisplay(name);
    	},
    	doChange:function(id){

    		this.change(id);
    	},
    	paging:function(){

    		this.getDetail(this.overview.id);
    	}
	  },
	  created:function(){
			
			this.loading();
    }
	}
</script>