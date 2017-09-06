<style type="text/css">
	.f-r {
	    float: right;
	}
	.dl-box .way-table tr{
		height: 45px;
	}
	.wd100{
		width: 100%;
	}
	.dl-box .pdl8{
		padding-left: 8px;
	}
</style>
<template>
	<div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
        <h4 class="modal-title">修改收款单</h4>
	</div>
	<div class="modal-body" style="padding-top: 0px;">
		<div class="tb-box bills p-pay" id="pay-box">
			<dl>
				<dt>
					<div class="dl-box">
						<div class="bills-num">
							<span>票据编号：</span>
							<div class="bill-num-div">{{journal.billNo}}</div>
						</div>
						<div class="text-center"><h2>收款单</h2></div>
						<div class="bills-date">
							<span>日期：</span>
							<div class="bill-num-div"><input type="text" id="paymentDate" v-model="journal.date" value="{{journal.date}}" class="paydate-input" /></div>
						</div>
						<div class="clearfix"></div>
					</div>
				</dt>
				<dd>
					<div class="dl-box">
						<table class="wd100 way-table">
							<tbody>
								<tr>
									<td class="text-right" style="width: 95px;">付款人(单位)：</td>
									<td><input type="text" class="line-input wd100 pdl8" value="{{journal.name}}" v-model="journal.name"/></td>
								</tr>
								<tr>
									<td class="text-right">摘  要：</td>
									<td><input type="text" class="line-input wd100 pdl8" value="{{journal.desc}}" v-model="journal.desc"/></td>
								</tr>
								<tr>
									<td class="text-right">金  额： </td>
									<td>
										<select name="" id="" class="f-l line-input" style="width: 13%;" v-model="journal.currencyId">
											<option v-for="cur in currencys" value="{{cur.currencyId}}">
											{{cur.currencyName}}</option>
										</select>
										<input type="text" style="width: 85%;" class="line-input pdl8 f-r" value="{{journal.collectionsMoney}}" v-model="journal.collectionsMoney"/>
									</td>
								</tr>
								<tr>
									<td class="text-right">付款方式：</td>
									<td>

										<select v-model="journal.way" name="paymentWay" class="line-input">
				                            <option value="1">现金</option>
				                            <option value="2">现金（网转）</option>
				                            <option value="3">银行</option>
			                            </select>

										<table class="f-r">
											<tr>
												<td>记账：</td>
												<td><input type="text" class="line-input pdl8" value="{{journal.attn}}" v-model="journal.attn"/></td>
											</tr>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</dd>
			</dl>
		</div>
		
        
	</div>
	<div class="modal-footer">
	  	<button type="button" class="btn btn-primary" @click="saveCollection">保存</button>
	    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
	</div>
</template>
<script type="text/javascript">
	import Model from '../js/model'

	export default {
		props:{
			//要修改的收款单信息
			journal:Object,
			//已选择单据财务科目关联
  			journalAccount:Array,
  			//获取已启用的币种
      		currencys:Array,
      		//当前单据信息
      		invoiceInfo:Object
		},
		data:function(){
			return {}
		},
		methods:{
			saveCollection:function(){
				var createTime = new Date(this.journal.createTime).Format("yyyy-MM-dd hh:mm:ss"); 
				var param = {
	    			collectionId: this.journal.id,				
	    			receiptNo: this.journal.billNo,
	    			collectionDate: this.journal.date,
	    			otherUnit: this.journal.name,
	    			summary: this.journal.desc,
	    			money: this.journal.collectionsMoney,
	    			currencyId: this.journal.currencyId,
	    			paymentWay: this.journal.way,
	    			agent: this.journal.attn,
	    			createTime: createTime
	            };

	            //console.log(param);
	            this.$resource('/journal/updateCollection').get(param,function (data, status, request) {
					if(data==1){
    					// 提示 操作成功
    					alert("操作成功");
    					this.$dispatch("reload");
    					$("#_new").modal("hide");
    				}else{
    					//提示 操作未生效
    					alert("操作未生效");
    				}

				});
			}
		},
		ready:function(){
			$('#paymentDate').datetimepicker({
			    format: 'yyyy-mm-dd',
			    language:'zh-CN',
			    autoclose:'close',
			    minView:2
			});

			
		}
	}
</script>