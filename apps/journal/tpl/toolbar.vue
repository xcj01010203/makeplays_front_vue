<style type="text/css">
	.popup-tpl{

    display: none;
    position: absolute;
    border-radius: 4px;
    box-shadow: 0 6px 12px rgba(0,0,0,.175) !important;    
    border: 1px solid rgba(0,0,0,.15) !important;
    background-clip: padding-box;
    width: 100%;
    max-width:1000px !important;
    line-height: 1.4285em;
    background-color: #fff;
    padding: 0 !important;
    width: 600px;
    z-index: 999 !important;
    font-size: 13px !important
  }

  .modal-title{

    font-weight: bold;
  }

  hr{
    border-top: 1px solid rgba(238, 238, 238, 0.5);
  }

  .row-block{
    margin-bottom: 15px;
  }

  .row-last{

    border-bottom:none;
  }

  .toolbar{
    padding: 10px 0px;
  }

  .toolbar>ul{

    margin-bottom: 0px;
  }

  .list-inline{
    margin-left: 0px;
  }

  .statistic{
  	background-size: 20px 22px;
    background-repeat: no-repeat;
    background-position: 6px 3px;
    width: 34px;
    height: 30px;
  }
  .statistic,.statistic:active,.statistic.btn:active,.statistic.btn-default:active{
  	background-image: url("/makeplays/imgs/iconfont-bf-icon-statistical.png");
  }
  
  .balance{
  	background-size: 18px 16px;
    background-repeat: no-repeat;
    background-position: 7px 6px;
    width: 34px;
    height: 30px;
  }

  .balance,.balance:active,.balance.btn:active,.balance.btn-default:active{
  	background-image: url("/makeplays/imgs/iconfont-jiesuanguanli.png");
  }

  .invoice{
  	background-size: 22px 20px;
    background-repeat: no-repeat;
    background-position: 5px 4px;
    width: 34px;
    height: 30px;
  }

  .invoice,.invoice:active,.invoice.btn:active,.invoice.btn-default:active{
  	background-image: url("/makeplays/imgs/iconfont-piao.png");
  }

  .download{
  	background-size: 18px 16px;
    background-repeat: no-repeat;
    background-position: 7px 6px;
    width: 34px;
    height: 30px;
  }

  .download,.download:active,.download.btn:active,.download.btn-default:active{
  	background-image: url("/makeplays/imgs/iconfont-daochu.png");
  }
  

</style>
<template>
	<div class="toolbar">
		<ul class="list-inline">
			<!-- 是否多选 -->
			<li style="padding-left:0px">
		        <button v-show="mulitSelect" @click="doSingleSelected" type="button" class="btn btn-default btn-sm" title="取消">
		          取消 ({{checkedIds.length}})
		        </button>

		        <button v-show="!mulitSelect" @click="doMulitSelected" type="button" class="btn btn-default btn-sm" title="多选">
		          多选
		        </button>
		    </li>
		    <!-- 批量结算 -->
		    <li v-show="mulitSelect" style="padding-left:20px">
		        <button @click="batchBalance" type="button" disabled="{{!(checkedIds.length >= 1)}}" class="btn btn-default btn-sm balance" title="结算">
		          
		        </button>

		    </li>
		    <!-- 批量有票改无票 -->
		    <li v-show="mulitSelect">
		        <button @click="batchIsBill" type="button" disabled="{{!(checkedIds.length >= 1)}}" class="btn btn-default btn-sm invoice" title="无票改有票">
		          
		        </button>

		    </li>
			<!-- 批量修改 #edit-batch -->
		    <!-- <li v-show="(checkedIds.length != 1)">
		        <button name="popup" id="_edit_batch" type="button" class="btn btn-default btn-sm" title="批量修改单据"
		          disabled="{{!(checkedIds.length > 1 )}}" @click="editBatch">
		          <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
		        </button>
		        
		        <tpl-edit-batch
		          :scenario-array="scenarioArray"
		          :context="updateContext">
		        </tpl-edit-batch>
		    </li> -->

		      <!-- 修改 #edit-one -->
		    <li>
		        <button id="_edit_one" type="button" class="btn btn-default btn-sm" title="修改单据"
		          disabled="{{!(checkedIds.length == 1)}}" @click="editInvoice">
		          <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
		        </button>

		        <!-- <tpl-edit-one
		          :context="updateContext"
		          :scenario="scenario"
		          :script-content="scriptContent">
		        </tpl-edit-one> -->
		    </li>

		    <!-- 批量打印 -->
		    <li v-show="mulitSelect" style="padding-left:20px">
		        <button @click="" type="button" disabled="{{!(checkedIds.length >= 1)}}" class="btn btn-default btn-sm" title="打印">
		          <span class="glyphicon glyphicon-print" aria-hidden="true"></span>
		        </button>

		    </li>

		    <!-- 导出单据 -->
		    <li>
		        <button @click="exportJournal" type="button" class="btn btn-default btn-sm download" title="导出">
		          
		        </button>

		    </li>

		    <!-- 搜索 -->
			<li>
		        <button v-on:click="openQuery" name="popup" type="button" class="btn btn-primary btn-sm" title="搜索场景">
		          <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
		        </button>
		        
		        <!-- 搜索场景 #query -->
		        <tpl-query 
		          :query.sync="query"
                  :context="queryContext"
                  :initials="initials" >
		        </tpl-query>

		    </li>

		    <!-- 显示隐藏统计 -->
		    <li v-show="isStatistic" class="pull-right">
		        <button type="button" class="btn btn-default btn-sm statistic" v-on:click="setStatistic('hidden')" title="隐藏统计">
		          
		        </button>
		    </li>
		    <li v-show="!isStatistic" class="pull-right">
		        <button type="button" class="btn btn-default btn-sm statistic" v-on:click="setStatistic('show')" title="显示统计">
		          
		        </button>
		    </li>
		</ul>

		<!-- 编辑页面 -->
		<tpl-edit 
				:edit-view="editView"
				:journal="journal"
				:journal-account="journalAccount"
				:currencys="currencys"
				:invoice-info="invoiceInfo"></tpl-edit>
	</div>
</template>
<script type="text/javascript">
    import Model from '../js/model'

	import Query from './query.vue'
	import Edit from './edit.vue'

	export default {
		components:{
			'tpl-query':Query,
			'tpl-edit':Edit
		},
		props:{
			//查询条件
            query:Object,
            //已选择的单据
      		checkedIds:Array,
      		//是否显示统计
  			isStatistic:Boolean,
            //所有单据
      		journals:Array,
      		//是否多选
      		mulitSelect:Boolean,
      		//页面加载器
			bodyLoader:Boolean

		},
		data:function(){
			return {
				//查询条件首字母
                initials:{},
                //上下文
                queryContext:new Model.ContextModel(),
                //已选择单据
  				journal:new Model.JournalModel(),
  				//已选择单据财务科目关联
  				journalAccount:[new Model.JournalAccountModel],   //JournalAccountModel
  				//修改类型
  				editView:'',
  				//获取已启用的币种
      		    currencys:[],
      		    //当前单据信息
      		    invoiceInfo:{}
			}
		},
		methods:{
			openQuery:function(){
				this.getContext();
				this.$broadcast('renderQuery');
			},
			//获取查询上下文
			getContext:function(){
				this.$resource('/journal/getQueryCondition').get(function(data, status, request){
					this.queryContext = data.context;
                    this.initials = data.initials;
				});
			},
			//显示隐藏统计
			setStatistic:function(str){
				switch(str){
					case 'show':
						this.isStatistic = true;
						break;
					case 'hidden':
						this.isStatistic = false;
						break;
				}
			},
			//编辑单据
			editInvoice:function(){
				this.journal = Object.assign({}, this.journals[this.checkedIds[0]]);

				switch(this.journal.journalType){
					case 1:
					    //获取付款单详细信息
					    this.getPayInfo();
					    
						this.editView = 'tpl-pay';
						break;
					case 3:
					    this.editView = 'tpl-collection';
					    break;
					default:
						return;
				};
				$("#_new").modal('show');
			},
			//获取已启用币种
			getEnableCurrency:function(){
				this.$resource('/finance/getCurrency').get(function(data, status, request){
					//console.log(data);
					this.currencys = data;
				});
			},
			//获取付款单详细信息
			getPayInfo:function(){
				this.$resource('/journal/getJsonPayById').get({paymentId:this.journal.id},function(data, status, request){
					//console.log(data);
					this.journalAccount = data.payMap;
					this.invoiceInfo = data.pay;
					//if(loanBalance!=null && loanBalance.length>0){}

				});
			},
			//设置为多选
			doMulitSelected:function(){

		        this.mulitSelect = true;

		        this.checkedIds = [];
		    },
		    //设置为单选
		    doSingleSelected:function(){

		        this.mulitSelect = false;

		        this.checkedIds = [];
		    },
		    //批量结算
		    batchBalance:function(){
		    	var payIds = []
		    	  ,times=[];
		    	for(var i=0; i<this.checkedIds.length; i++){
		    		var jour = this.journals[this.checkedIds[i]];
		    		if((jour.journalType == 1 || jour.journalType == 2) && jour.status == 0){
            			payIds.push(jour.id);
            			times.push(jour.createTime);//new Date(jour.createTime).Format("yyyy-MM-dd hh:mm:ss")
            		}
		    	}

		    	if(payIds.length == 0){
		    		alert("请选择未结算的单据！");
		    		return;
		    	}

		    	var param = {
		    					payIds:payIds.toString(),
		            			createTime:times.toString()
		            		};

		    	this.$resource('/journal/updatePaymentStatus').get(param,function(data, status, request){
					var mess = data.message;
        			if(mess == ""){
        				alert("批量结算成功！");
        				
        				this.$dispatch("reload");
        			}else{
        				
        				alert(mess+"票据没有选择财务科目，无法结算。");
        			}

				});
		    },
		    //批量无票改有票
		    batchIsBill:function(){
		    	var payIds = []
		    	  ,times=[];
		    	for(var i=0; i<this.checkedIds.length; i++){
		    		var jour = this.journals[this.checkedIds[i]];
		    		if((jour.journalType == 1 || jour.journalType == 2) && jour.invoice == 0){
            			payIds.push(jour.id);
            			times.push(jour.createTime);//new Date(jour.createTime).Format("yyyy-MM-dd hh:mm:ss")
            		}
		    	}

		    	if(payIds.length == 0){
		    		alert("请选择无票的数据！");
		    		return;
		    	}

		    	var param = {
		    					payIds:payIds.toString(),
		            			createTime:times.toString()
		            		};

		    	this.$resource('/journal/updatePaymentHasReceipt').get(param,function(data, status, request){
					var mess = data.message;
					var sta = data.status;
        			if(sta == 1){
        				alert("批量修改有票成功！");
        				
        				this.$dispatch("reload");
        			}else{
        				
        				alert(mess+"票据状态为有票，无法修改。");
        			}

				});
		    },
		    //导出单据
		    exportJournal:function(){
		    	var _this = this;
		    	_this.bodyLoader = true;
		    	$.ajax({
         			url:"/journal/exportJournalManege",
         			type:"post",
         			dataType:"json",
         			data:_this.query,
         			success:function(data){
         				_this.bodyLoader = false;
         				var form = $("<form></form>");
		         		form.attr("action","/journal/downLoadJournal");
		         		form.attr("method","post");
		         		//form.attr("target","newWin");
		         		form.append("<input type='hidden' name='destFilePath'>");
		         		form.find("input[name='destFilePath']").val(data.path);
		         		//window.open("下载","newWin","");//newWin 是上面form的target
		         		form.submit();
         			}
         		});
		    }
		},
		events:{
			openInvoice:function(){
				this.editInvoice();
			}
		},
		ready:function(){
			//[PLUGIN] 所有按钮添加提示
	  		$('button').tooltip({
	  			placement:'top',
	  			container: 'body',
	  			trigger:'hover'
	  		});

	  		//[JQUERY] [SEMANTICUI] 工具栏按钮弹出层
	  		$('button[name="popup"]').each(function(){

	  			var self = $(this);

	  			self.popup({
	  				popup : self.next(),
	  				on: 'click',
	  				inline   : true,
	  				position : 'bottom left',
	  				lastResort:true,
	  				prefer:false
	  			});

	  			self.next().find(".close-popup").on('click', function(){

	  				self.popup('hide');
	  			});
	  		});

	  		//加载币种信息
	  		this.getEnableCurrency();
		}
	}
</script>