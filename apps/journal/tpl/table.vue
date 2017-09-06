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

  .panel-container .table thead > tr > th {

    padding: 0;
    margin: 0;
    vertical-align: bottom;
    border-bottom: 1px solid #ddd;
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

  .table-hidden-head{

    margin-top: -42px;
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
</style>
<template>
	<div id="_table" class="panel-container" style="height:765px;">

		<div class="panel-head">
			<table class="table table-hover table-head" v-bind:style="{left: syncScroll +'px'}">
				<thead>
					<tr>
						<th>
			              <div class="th-inner td-width-min">日期</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">票据编号</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">摘要</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">财务科目</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">收款金额</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">付款金额</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">资金余额</div>
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

		<div class="panel-body" v-on:scroll="scrollMove">
			<table class="table table-hover table-hidden-head">
				<thead>
					<tr>
						<th>
			              <div class="th-inner td-width-min">日期{{scrollPosition}}</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">票据编号</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">摘要</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">财务科目</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">收款金额</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">付款金额</div>
			            </th>
			            <th>
			              <div class="th-inner td-width-min">资金余额</div>
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
					<tr v-for="one in journals" >
						<td>{{one.date}}</td>
						<td>{{one.billNo}}</td>
						<td title="{{one.desc}}">{{one.desc}}</td>
						<td title="{{one.accountName}}">{{one.accountName}}</td>
						<td>{{one.collectionsMoney | fmoney 2}}</td>
						<td>{{one.paymentMoney | fmoney 2}}</td>
						<td>{{one.balance | fmoney 2}}</td>
						<td>{{one.status | balanceStatus}}</td>
						<td>{{one.journalType | financeType}}</td>
						<td title="{{one.name}}">{{one.name}}</td>
						<td>{{one.way}}</td>
						<td>{{one.invoice}}</td>
						<td>{{one.billCount}}</td>
						<td>{{one.attn}}</td>
						
					</tr>
				</tbody>
			</table>
		</div>

        <!-- 加载器 -->
        <slot></slot>

	</div>
</template>
<script type="text/javascript">
	export default {
		props:{
			//所有场景
      		journals:Array,
      		
		},
		data:function(){
			return {
				//横向滚动条
        		syncScroll:'0',
        		//滚动条位置是否在底部
  				scrollPosition:false
			}
		},
		computed: {
			scrollPosition:{
				get:function(){
					//console.log(this.scrollPosition)
				},
				set:function(){
					//console.log(this.scrollPosition)
				}
			}
		},
		methods:{
			//横向滚动条滚动
		    scrollMove:function(event){
		 
		      this.syncScroll = '-'+ $(event.target).scrollLeft();
		    },
		},
		ready:function(){
			var height = window.innerHeight - 230;

      		$("#_table").css("height",height);
		}
	}
</script>