<style type="text/css">
	
  .panel-container{

    position: relative;
    clear: both;
    border: 1px solid #dddddd;
    border-radius: 4px;
    min-height: 400px;
    padding-bottom: 42px;
    padding-right: 1px;
  }

  .panel-container .panel-head{

    overflow: hidden;
    background: #F9FAFB;
  }

  .panel-container .panel-head .table{

    margin-bottom:0px;
  }

  .panel-container .panel-body{
    overflow-x: auto;
    overflow-y: auto;
    height: 100%;
    padding: 0px;
    position: relative;
    
  }

  .table-head{

    margin-bottom: 0 !important;
    border-bottom: 1px solid #dddddd;
    border-collapse: collapse !important;
    border-radius: 1px;
    position: relative;
  }

  .panel-container .table>thead:first-child>tr:first-child>th{
    border-top: 0;
    border-bottom: 0px;
  }

  .panel-container .table thead > tr > th {

    padding: 0;
    margin: 0;
    vertical-align: bottom;
    border-bottom: 1px solid #ddd;
  }

  .panel-container thead th:first-child{

    border-left: none;
    border-top-left-radius: 4px;
  }

  .panel-container thead th{
    height: 0;
    padding: 0;
    margin: 0;
    border-left: 1px solid #dddddd;
  }

  .panel-container .table{
    margin-bottom: 0 !important;
    border-collapse: collapse !important;
    border-radius: 1px;
    width: 100%;
    border-bottom: 1px solid #DDD;
  }

  .panel-container tbody tr:first-child td{
    border-top: none;
  }

  .td-width-min{
    
    width: 135px;
  }

  .td-width-max{

    width: 160px;
  }

  .panel-container .table>tbody>tr>td{

    max-width: 65px;
    overflow-x: hidden;
    white-space: nowrap;
    border-left: 1px solid #dddddd;
    padding: 4px 8px;
    text-overflow: ellipsis;
  }

  .panel-container tbody td:first-child{

    border-left: none!important;
  }

  .table-hidden-head{

    margin-top: -42px;
  }

  .panel-container thead tr th:first-child div{

    width:30px;
  }

  .th-inner{
    padding: 8px;
    line-height: 24px;
    vertical-align: top;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .checkbox-large{
    width: 14px;
    height: 14px;
  }

  .tr-high-light td{
    background: #696969 !important;
    color: white;
  }
  .hide-border-left{

    border-left: none!important;
  }
</style>
<template>
	<div id="_table" class="panel-container" style="height:765px;">

		<div class="panel-head">
			<table class="table table-hover table-head" v-bind:style="{left: syncScroll +'px'}">
				<thead>
					<tr>
					    <th v-show="mulitSelect">
			              <div class="th-inner"><input class="checkbox-large" type="checkbox" v-model="checkedAll"></div>
			            </th>
						<th v-bind:class="{ 'hide-border-left': !mulitSelect}">
			              <div class="th-inner td-width-min">日期</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">票据编号</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">摘要</div>
			            </th>
			            <th>
			              <div class="th-inner" style="min-width: 250px;">财务科目</div>
			            </th>
			            <th>
			              <div class="th-inner" style="min-width: 180px;">收款金额</div>
			            </th>
			            <th>
			              <div class="th-inner" style="min-width: 180px;">付款金额</div>
			            </th>
			            <th>
			              <div class="th-inner" style="min-width: 180px;">资金余额</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">状态</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">财务类型</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">收/付款人</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">付款方式</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">有无发票</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">票据张数</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">记账</div>
			            </th>
			            
					</tr>
				</thead>
			</table>
		</div>

		<div id="main-data" class="panel-body" v-on:scroll="scrollMove">
			<table class="table table-hover table-hidden-head">
				<thead>
					<tr>
						<th v-show="mulitSelect">
			              <div class="th-inner"><input class="checkbox-large" type="checkbox"></div>
			            </th>
						<th v-bind:class="{ 'hide-border-left': !mulitSelect}">
			              <div class="th-inner td-width-min">日期{{scrollPosition}}</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">票据编号</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">摘要</div>
			            </th>
			            <th>
			              <div class="th-inner" style="min-width: 250px;">财务科目</div>
			            </th>
			            <th>
			              <div class="th-inner" style="min-width: 180px;">收款金额</div>
			            </th>
			            <th>
			              <div class="th-inner" style="min-width: 180px;">付款金额</div>
			            </th>
			            <th>
			              <div class="th-inner" style="min-width: 180px;">资金余额</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">状态</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">财务类型</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">收/付款人</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">付款方式</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">有无发票</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">票据张数</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">记账</div>
			            </th>
			            
					</tr>
				</thead>

				<tbody>
					<tr v-for="one in journals" 
					    v-bind:class="{'tr-high-light': HighlightSelected($index, checkedIds)}"
					    v-on:click="rowSelected($index)" >
						<td v-show="mulitSelect">
			              <input class="checkbox-large" type="checkbox" value="{{$index}}" v-model="checkedIds">
			            </td>
						<td v-bind:class="{ 'hide-border-left': !mulitSelect}">{{one.date}}</td>
						<td><a href="javascript:void(0)" @click="openEdit">{{one.billNo}}</a></td>
						<td title="{{one.desc}}">{{one.desc}}</td>
						<td title="{{one.accountName}}">{{one.accountName}}</td>
						<td class="text-right">{{one.collectionsMoney | fmoney 2}}</td>
						<td class="text-right">{{one.paymentMoney | fmoney 2}}</td>
						<td class="text-right">{{one.balance | fmoney 2}}</td>

						<td v-if="one.journalType == 3 || one.journalType == 4">/</td>
						<td v-else>{{one.status | balanceStatus}}</td>

						<td>{{one.journalType | financeType}}</td>
						<td title="{{one.name}}">{{one.name}}</td>
						<td>{{one.way | paymentWay}}</td>
						<td>{{one.invoice | hasReceipt}}</td>
						<td>{{one.billCount}}</td>
						<td>{{one.attn}}</td>
						
					</tr>
				</tbody>
			</table>
			
		</div>

        <!-- 加载器 -->
        <slot></slot>

        <!-- 统计 -->
        <tpl-statistic 
        		:sync-scroll.sync="syncScroll"
        		:is-statistic="isStatistic"
        		:mulit-select.sync="mulitSelect"></tpl-statistic>
	</div>
</template>
<script type="text/javascript">

	import Statistic from './statistics.vue'

	export default {
		components:{
			'tpl-statistic':Statistic
		},
		props:{
			//所有场景
      		journals:Array,
      		//已选中的行
            checkedIds:Array,
      		//是否显示统计
  			isStatistic:Boolean,
  			//是否多选
      		mulitSelect:Boolean,
		},
		data:function(){
			return {
				//横向滚动条
        		syncScroll:'0',
  				//全选
                checkedAll:false,
                
			}
		},
		computed: {
			
			//计算全选与单选的关系
		    checkedAll: {
		        get: function () {

		          if(this.checkedIds.length != 0 && this.checkedIds.length == this.journals.length){
		            return true;
		          }else{
		            return false;
		          }
		        },
		        set: function (value) {

		          var arr = new Array();

		          if(value){

		            for(var i in this.journals){

		              arr.push(Number(i));
		            }
		          }

		          this.checkedIds = arr;
		        }
		    }
		},
		methods:{
			//横向滚动条滚动
		    scrollMove:function(event){
		 
		      this.syncScroll = '-'+ $(event.target).scrollLeft();
		      
		    },
		    //点击行选择
		    rowSelected:function(index){

		    	if(this.mulitSelect){
		    		if(!this.checkedIds.$remove(index)){

			          this.checkedIds.push(index);
			        }
		    	}else{

		           this.checkedIds.$set(0, index);
		        }

		    },
		    //高亮选择的行
		    HighlightSelected:function(index, arr){

		        for(var i in arr){

		          if(arr[i] == index){

		            return true;
		          }
		        }
		    },
		    openEdit:function(){
		    	var _this = this;
		    	setTimeout(function(){
		    		_this.$dispatch("openInvoiceWindow");
		    	},300);
		    }
		},
		events:{

		},
		ready:function(){
			var height = window.innerHeight - 280;

      		$("#_table").css("height",height);
		}
	}
</script>