<style type="text/css">
	.panl{
		margin-top: -40px;
		z-index: 10;
		
	}
	.panl tbody tr{
		background: #E9EDF1;
	}
	.panl tbody tr:hover{
		background: #E9EDF1;
	}
	.td-width-min{
    
	    width: 135px;
	}
	.table-hidden-head{

	    margin-top: -42px;
	}
</style>
<template>
	<div class="panl panel-head" v-show="isStatistic">
		<table id="sta-table" class="table table-hover table-head"  v-bind:style="{left: syncScroll +'px'}">
		    <thead style="visibility: hidden;">
				<tr>
					<th v-show="mulitSelect">
		              <div class="" style="width:30px;"></div>
		            </th>
					<th v-bind:class="{ 'hide-border-left': !mulitSelect}">
		              <div class=" td-width-min"></div>
		            </th>
		            <th>
		              <div class=" td-width-min"></div>
		            </th>
		            <th>
		              <div class=" td-width-min"></div>
		            </th>
		            <th>
		              <div class="" style="min-width: 250px;"></div>
		            </th>
		            <th>
		              <div class="" style="min-width: 180px;"></div>
		            </th>
		            <th>
		              <div class="" style="min-width: 180px;"></div>
		            </th>
		            <th>
		              <div class="" style="min-width: 180px;"></div>
		            </th>
		            <th>
		              <div class=" td-width-min"></div>
		            </th>
		            <th>
		              <div class=" td-width-min"></div>
		            </th>
		            <th>
		              <div class=" td-width-min"></div>
		            </th>
		            <th>
		              <div class=" td-width-min"></div>
		            </th>
		            <th>
		              <div class=" td-width-min"></div>
		            </th>
		            <th>
		              <div class=" td-width-min"></div>
		            </th>
		            <th>
		              <div class=" td-width-min"></div>
		            </th>
		            
				</tr>
			</thead>

			<tbody id="static-body">
				<tr v-for="one in statistic" >
					<td v-if="$index == 0 && mulitSelect" colspan="5" rowspan="{{statistic.length}}"><span style="color: red;">合计：</span></td>
					<td v-if="$index == 0 && !mulitSelect" colspan="4" rowspan="{{statistic.length}}"><span style="color: red;">合计：</span></td>
					<td class="text-right">{{one.collectionsMoney | fmoney 2}}({{one.currencyCode}})</td>
					<td class="text-right">{{one.paymentMoney | fmoney 2}}({{one.currencyCode}})</td>
					<td class="text-right">{{one.balance | fmoney 2}}({{one.currencyCode}})</td>
					<td colspan="7"></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script type="text/javascript">
	export default {
		props:{
			
			//横向滚动条
        	syncScroll:String,
        	//是否显示统计
  			isStatistic:Boolean,
  			//是否多选
      		mulitSelect:Boolean,
		},
		data:function(){
			return {
				//统计数据
			    statistic:[],
			}
		},
		events:{
			statisticFun:function(data){
				this.statistic = data;
				if(this.isStatistic){
	            	this.$nextTick(function(){
	            		var hei = $("#static-body").height();
	            		$("#main-data").css("padding-bottom",hei);
	            		$(".panl").css("margin-top",-(18+hei)+"px");
	            	});
				}
            	
			},
			
		},
		ready:function(){
			// var obj = $("#main-data");
			// if(obj.scrollHeight>obj.clientHeight||obj.offsetHeight>obj.clientHeight)
			// 	$(".panl").css("width",($(".panl").width()-16)+"px");
		}
	}
</script>