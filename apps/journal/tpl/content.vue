<style type="text/css">

.content{

	padding-top: 90px;
}

.fade-transition {
	transition: opacity .2s ease;
}

.fade-enter, .fade-leave {
    opacity: 0;
}
	
</style>

<!--********************************************-->

<template>

<div class="content container-fluid">
	
	<!-- 导航&查询条件 #breadcrumb -->
	<tpl-breadcrumb
	    :query.sync="query"></tpl-breadcrumb>

	<!-- 内容 -->
	<div class="row" style="position:relative">

		<!-- 工具栏 #toolbar -->
	    <tpl-toolbar
	    	:is-statistic.sync="isStatistic"
	    	:checked-ids.sync="checkedIds"  
	    	:query.sync="query"
	    	:journals="journals"
	    	:mulit-select.sync="mulitSelect"
	    	:body-loader.sync="bodyLoader">

	    </tpl-toolbar>

	    <!-- 表格 #table table-query -->
	    <component 
	    	:is="tableView"
	    	:journals="journals"
	    	:checked-ids.sync="checkedIds" 
            :is-statistic="isStatistic"
            :mulit-select.sync="mulitSelect"
	    	transition="fade"
  			transition-mode="out-in">

  			<tpl-loader :loader="tableLoader"></tpl-loader>

	    </component>
		
	    <!-- 分页 @pagination-->
	    <tpl-pagination 
	    	:page.sync="page">

	  	</tpl-pagination>
	</div>

</div>
<tpl-loader :loader="bodyLoader"></tpl-loader>
</template>

<!--*********************************************-->

<script type="text/javascript">
    import Breadcrumb from './breadcrumb.vue'
    import Toolbar from './toolbar.vue'
    import Table from './table.vue'
	import TableQuery from './table-query.vue'
	
	import Pagination from '../../../vue_components/pagination/pagination.vue'
	import Loader from '../../../vue_components/loader/loader.vue'

	import Model from '../js/model'

    export default {
    	components:{
    		'tpl-breadcrumb':Breadcrumb,
    		'tpl-toolbar':Toolbar,
    		'tpl-table':Table,
    		'tpl-loader':Loader,
			'tpl-tableQuery':TableQuery,
			'tpl-pagination':Pagination,
			
    	},
    	data:function(){
    		return {
    			//表格视图切换
	  			tableView:'tpl-tableQuery',
	  			//表格加载器
	  			tableLoader:false,
	  			//账务分页数据
  				journals:[],
  				//所有账务数据
  				journalsAllData:[],
  				//分页
  			    page: new Model.PageModel(),
  			    //查询条件
  			    query: new Model.QueryModel(),
  			    //已选择的单据
  			    checkedIds:[],
  				//是否显示统计
  				isStatistic:true,
  				//是否多选
				mulitSelect:false,
				//页面加载器
				bodyLoader:false
    		}
    	},
    	methods:{
    		loadData:function(option){
    			this.getJournalList(this.query,option);
    			
    		},
    		getJournalList:function(query,option){

    			if(option.refresh){
    				this.journalsAllData = [];
    				this.journals = [];
    			}

    			this.checkedIds = [];

    			this.tableLoader = true;

    			this.$resource('/journal/getJournalList').get(query,function (data, status, request) {
    			
					this.journalsAllData = data.result;
					if(data.result.length <= this.page.pagesize){
						this.journals = this.journalsAllData;
					}else{
						if(option.refresh){
							this.journals = this.journalsAllData.slice(0,this.page.pagesize);
						}else{
							this.journals = this.journalsAllData.slice(this.page.pagenum,this.page.pagesize);
						}
						
					}

					//this.statistic = data.total;

					this.$broadcast("statisticFun",data.total);
					
					this.page.total = data.result.length;

					//等待数据加载完成
		        	this.$nextTick(function(){
						this.tableLoader = false;
						
						var obj = $("#main-data")[0];
						if(obj.scrollHeight>obj.clientHeight||(obj.offsetHeight-17)>obj.clientHeight){
							$(".panl").css("width",($(".panl").width()-16)+"px");
						}

			   		});
	      		});
    		}
    	},
    	events:{
    		paging:function(){
    			this.checkedIds = [];
    			this.journals = [];
    			$("#main-data")[0].scrollTop = 0;
    			this.tableLoader = true;

                if((this.page.pagenum+1)*this.page.pagesize > this.page.total){
                	this.journals = this.journalsAllData.slice(this.page.pagesize*this.page.pagenum,this.page.total);
                }else{
                	this.journals = this.journalsAllData.slice(this.page.pagesize*this.page.pagenum,(this.page.pagenum+1)*this.page.pagesize);
                }

                //等待数据加载完成
	        	this.$nextTick(function(){
					this.tableLoader = false;
					
		   		});
	    		
	    	},
	    	//重置分页刷新
	    	refresh:function(){

	    		this.page = new Model.PageModel();
	    		this.loadData({refresh:true});
	    	},
	    	reload:function(){

	    		this.loadData({refresh:false});
	    	},

	    	openInvoiceWindow:function(){
	    		this.$broadcast("openInvoice");
	    	}
	    	
    	},
    	created:function(){

			this.loadData({refresh:false});
			
        },
        ready:function(){
        	
        }
    }
</script>