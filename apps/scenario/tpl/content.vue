<style type="text/css">

	.content.container-fluid{
		padding-top: 15px;
	}

	.fade-transition {
	  transition: opacity .2s ease;
	}

	.fade-enter, .fade-leave {
	  opacity: 0;
	}

	.statistics{

		display: inline-block;
    padding-left: 0;
    margin: 10px 0;
    border-radius: 4px;
	}

	.statistics li{
		display: inline;
		padding-left: 5px;
		padding-right: 5px;
		border-left: 1px solid #BCBCBC;
	}

	.statistics li:first-child{
		padding-left: 0px !important;
		border-left:none;
	}
</style>

<template>
	
	<div class="content container-fluid">
		
		<!-- 面包屑导航&查询条件 #breadcrumb -->
		<tpl-breadcrumb
			:query.sync="query">
    </tpl-breadcrumb>

		<div class="row" style="position:relative">

			<!-- 工具栏 #toolbar -->
	    <tpl-toolbar 
	    	:checked-ids.sync="checkedIds" 
	    	:table-view.sync="tableView"
	    	:scenarios="scenarios"
	    	:query.sync="query"
	    	:mulit-select.sync="mulitSelect"
	    	:summary="summary"
	    	:view-column-model="viewColumnModel"
	    	:with-status-color.sync="withStatusColor"
	    	:page="page"
	    	:total-page-count.sync="totalPageCount"
	    	:modal-message.sync="modalMessage"
	      :confirm-callback.sync="confirmCallback">

	    </tpl-toolbar>

	    <!-- 表格 #table table-block -->
	    <component 
	    	:is="tableView" 
	    	:checked-ids.sync="checkedIds" 
	    	:scenarios="scenarios"
	    	:roles="roles"
	    	:mulit-select.sync="mulitSelect"
	    	:view-column-model="viewColumnModel"
	    	:with-status-color="withStatusColor"
	    	:total-page-count.sync="totalPageCount"

	    	transition="fade"
  			transition-mode="out-in">

  			<tpl-loader :loader="tableLoader"></tpl-loader>

	    </component>

	    <!-- 分页 @pagination-->
	    <tpl-pagination 
	    	:page.sync="page">

		    <ul class="statistics text-muted">
		      <li>
		        统计：共{{summary.total}}场 / {{summary.pages | currency ''}} 页
		      </li>
		      <template v-for="one in summary.status">
	    			<li>{{one.shootStatus | shootstatus}}{{one.funResult}}</li>
	    		</template>
		    </ul>

	  	</tpl-pagination>

	  	<!-- 弹出框 -->
	    <tpl-alert
	      :modal-message="modalMessage">
	    </tpl-alert>
	    <tpl-confirm
	      :modal-message="modalMessage"
	      :confirm-callback="confirmCallback">
	    </tpl-confirm>
		</div>
	</div>
</template>

<script type="text/javascript">
	
	import Breadcrumb from './breadcrumb.vue'
	import Toolbar from './toolbar.vue'
	import Table from './table.vue'
	import Block from './table-block.vue'
	import Pagination from '../../../vue_components/pagination/pagination.vue'
	import Loader from '../../../vue_components/loader/loader.vue'
  import Alert from '../../../vue_components/dialog/alert.vue'
  import Confirm from '../../../vue_components/dialog/confirm.vue'

	import Model from '../js/model'

	export default {

		components:{
			'tpl-toolbar':Toolbar,
			'tpl-table':Table,
			'tpl-block':Block,
			'tpl-pagination':Pagination,
			'tpl-loader':Loader,
			'tpl-breadcrumb':Breadcrumb,
      'tpl-alert': Alert,
      'tpl-confirm': Confirm
		},
		data:function(){
		  	return {
	  			//表格视图切换
				tableView:'tpl-table',
				//表格加载器
				tableLoader:false,
				//已选择的场景
				checkedIds:[],
				//所有场景
				scenarios: [],
				//所有角色
				roles:[],
				//分页
				page: new Model.PageModel(),
				//查询条件
				query: new Model.QueryModel(),
				//统计
				summary: {
					total:0,
					pages:0,
					status:[],
					site:[]
				},
				//是否多选
				mulitSelect:false,
				//场景表中列信息
	    	viewColumnModel: new Model.ViewColumnModel(),
    		//是否带有拍摄状态颜色
    		withStatusColor: false,
    		//已选页数
    		totalPageCount: 0,
        //弹出框信息
        modalMessage: "",
        //弹出框回调
        confirmCallback: function(){}
			}
		},
    methods:{

    	//查询场景和统计
    	loadData:function(option){

    		this.getScenarios(this.query, this.page, option);
				this.getSummary(this.query, this.page);
    	},
    	//查询场景
    	getScenarios:function(query, page, option){

    		if(option.refresh){

    			this.scenarios = [];
    		}

    		this.tableLoader = true;
    		this.checkedIds = [];

	      this.$resource('/viewManager/loadViewList').get(query, page, function (data, status, request) {

	        this.scenarios = data.result.resultList;
	        this.page.total = data.result.total;

	        //等待数据加载完成
	        this.$nextTick(function(){
						this.tableLoader = false;
		   		});
	      });
    	},
    	//查询统计
    	getSummary:function(query, page){

    		this.$resource('/viewManager/loadSummary').get(query, page, function (data, status, request) {
    			//这个看起来很乱 是为了适应返回的数据 实际上//this.summary = data.summary;
    			this.summary = {
    				total:data.viewStatistics.statisticsViewCount[0].funResult,
    				pages:data.viewStatistics.statisticsPageCount[0].funResult,
    				status:data.viewStatistics.statisticsShootStatus,
    				site:data.viewStatistics.statisticsSite
    			};
	      });
    	},
    	//查询所有角色
    	getRole:function(){

    		this.$resource('/viewManager/retrieveRole').get(function (data, status, request) {
    			
					this.roles = data;
	      });
    	}
    },
	events:{
    	
    	//重置分页刷新
    	refresh:function(){
    		this.page = new Model.PageModel();
    		this.loadData({refresh:true});
    	},
    	reload:function(){

    		this.loadData({refresh:false});
    	},
    	paging:function(){

    		this.getScenarios(this.query, this.page, {refresh:true});
    	}
	},
    created:function(){
    	
		this.loadData({refresh:false});
		this.getRole();
  	}
}
</script>