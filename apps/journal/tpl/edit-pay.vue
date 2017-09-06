<style type="text/css">
	.tb-box {
	    color: #333333;
	    position: relative;
	    overflow: hidden;
	    /* padding: 6px; */
	    font-family: "微软雅黑";
	}
	.bills dl{
		background: #FFFFFF;
	}
	.tb-box dl{
		font-size: 13px;
	}
	.p-pay dt{
		line-height: 38px;
    	border-bottom: 1px solid #cad0e5;
	}
	.bills dl .dl-box{
		margin: 9px 40px;
    	position: relative;
	}
	.bills-num,.bills-date{
		position: absolute;
    	top: 0;
	}
	.bills-date{
		right: 0;
	}
	.bill-num-div{
		display: inline;
	    border-bottom: 1px solid #afb5ca;
	    padding-bottom: 8px;
	}
	.tb-box table{
		table-layout: fixed;
	}
	.outer-table{
		width: 100%;
	}
	.bills td{
		border: none;
    	height: 30px;
	}
	.f-l {
	    float: left;
	}
	.payee{
		width: 68%;
		
	}
	.line-input{
		border: 1px solid rgba(204,204,204,0);
		outline: none;
		border-bottom: 1px solid rgba(204,204,204,1);
		background-color: rgba(204,204,204,0);
		background: none;
		height: 35px;
	}
	.cb-pact-pri{
		line-height: 35px;
	}
	.thrid-tr li{
		float: left;
	}
	.td-w95{
		width: 95px;
	}
	.td-w20{
		width: 20px;
	}
	.h45{
		height: 45px;
	}
	.tb-box .table thead th{
	    height: 0;
	    padding: 0;
	    margin: 0;
	    border: 1px solid #dddddd;
	}
	.tb-box .table{
	    margin-bottom: 0 !important;
	    border-collapse: collapse !important;
	    border-radius: 1px;
	    width: 100%;
	    border: 1px solid #DDD;
	}
	.tb-box .table td{

	    max-width: 65px;
	    overflow-x: hidden;
	    white-space: nowrap;
	    border-left: 1px solid #dddddd;
	    padding: 4px 8px;
	    text-overflow: ellipsis;
	}
	.th-inner{
	    padding: 8px;
	    line-height: 24px;
	    vertical-align: top;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.td-div{
		padding: 6px 5px;
	}
	.td-div>input{
		width: 100%;
	    border: none;
	    height: 100%;
	    background-color: rgba(204,204,204,0);
	}
	.tfoot-table{
		margin-top: 10px;
	}
	.m-l20{
		margin-left: 20px;
	}
	.m-t5{
		margin-top: 5px;
	}
	.tb-box dt,.tb-box label {
	    font-weight: normal;
	}
	.paydate-input{
		width: 80px;
		border: 1px solid rgba(204,204,204,0);
		outline: none;
		
		background-color: rgba(204,204,204,0);
		background: none;
		height: 35px;
	}
	.addition, .subtraction {
	    width: 10px;
	    height: 10px;
	    background: url("/makeplays/imgs/add_minus.png") no-repeat;
	    cursor: pointer;
	}
	.subtraction {
	    background-position: 0 -10px;
	    margin-top: 3px;
	}
	.subtraction:hover {
	    background-position: 0 -30px;
	}
	.addition:hover {
	    background-position: 0 -20px;
	}
	td.p-d0{
		padding-left: 0px !important;
		padding-right: 0px !important;
		padding-bottom: 0px !important;
	}

</style>
<template>
	<div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
        <h4 class="modal-title">修改付款单</h4>
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
						<div class="text-center"><h2>付款单</h2></div>
						<div class="bills-date">
							<span>日期：</span>
							<div class="bill-num-div"><input type="text" id="paymentDate" v-model="journal.date" value="{{journal.date}}" class="paydate-input" /></div>
						</div>
						<div class="clearfix"></div>
					</div>
				</dt>
				<dd>
					<div class="dl-box">
						<table class="outer-table">
							<tbody>
								<tr>
									<td class="td-w95">收款人(单位)：</td>
									<td>
										<input type="text" class="payee line-input f-l" v-model="journal.name" value="{{journal.name}}" />
										<div class="cb-pact-pri">
											<label class="f-l">
												<input type="checkbox" class="cb-pact" />
												<span>付合同款</span>
											</label>
										</div>
									</td>
								</tr>
								<tr>
									<td colspan="2">
										<table class="table m-t5">
											<thead>
												<tr>
													<th class="td-w20">
														<div class="th-inner"></div>
													</th>
													<th>
														<div class="th-inner">摘要</div>
													</th>
													<th>
														<div class="th-inner">财务科目</div>
													</th>
													<th style="width: 112px;">
														<div class="th-inner">币种</div>
													</th>
													<th style="width: 145px;">
														<div class="th-inner">金额</div>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="one in journalAccount">
													<td class="p-d0">
														<div class="td-div">
															<div class="addition" v-on:click="addition"></div>
                                               				<div class="subtraction" v-on:click="subtraction($index)"></div>
														</div>
													</td>
													<td>
														<div class="td-div"><input type="text" value="{{one.summary}}" v-model="journalAccount[$index].summary"/></div>
													</td>
													<td>
														<div class="td-div">
														    <input type="text" value="{{one.accountName}}" v-model="journalAccount[$index].accountName" class="account-proop" readonly="true" @click.stop="propAccount($index,$event)" />

														</div>
													</td>
													<td v-if="$index == 0" rowspan="{{journalAccount.length}}" style="vertical-align: middle;">
														<div>
															<select name="" id="" class="form-control" v-model="journal.currencyId">
																<option v-for="cur in currencys" value="{{cur.currencyId}}">
																{{cur.currencyName}}</option>
															</select>
														</div>
													</td>
													<td>
														<div class="td-div"><input type="text" class="text-right" value="{{one.money}}" v-model="journalAccount[$index].money"/></div>
													</td>
												</tr>
											</tbody>
											<!-- <tbody v-else>
												<tr>
													<td class="p-d0">
														<div class="td-div">
															<div class="addition" v-on:click="addition"></div>
											                <div class="subtraction" v-on:click="subtraction"></div>
														</div>
													</td>
													<td>
														<div class="td-div"><input type="text"  v-model="journalAccount[0].summary"/></div>
													</td>
													<td>
														<div class="td-div"><input type="text"  v-model="journalAccount[0].accountName"/></div>
													</td>
													<td>
														<div></div>
													</td>
													<td>
														<div class="td-div"><input type="text"  v-model="journalAccount[0].money"/></div>
													</td>
												</tr>
											</tbody> -->
											<tfoot>
												<tr>
													<td colspan="4">金额合计：<span>（大写）{{journalAccount | calculatePayTotal | moneyToCap}}</span></td>
													<td class="text-right">{{journalAccount | calculatePayTotal | fmoney}}</td>
												</tr>
											</tfoot>
										</table>
									</td>
								</tr>
								<tr>
									<table class="tfoot-table">
										<tr>
											<td>
												<table>
													<tr>
														<td>付款方式：</td>
														<td>
															<select v-model="journal.way" name="paymentWay" class="line-input">
									                            <option value="1">现金</option>
									                            <option value="2">现金（网转）</option>
									                            <option value="3">银行</option>
								                            </select>
														</td>
													</tr>
												</table>
											</td>
											<td>
												<table class="m-l20">
													<tr>
														<td>有无发票：</td>
														<td>
															<select v-model="journal.invoice" name="isBill"  class="line-input">
									                            <option value="1">有</option>
									                            <option value="0">无</option>
								                            </select>
														</td>
													</tr>
												</table>
											</td>
											<td>
												<table class="m-l20">
													<tr>
														<td>附单据：</td>
														<td><input type="text" v-model="journal.billCount" class="line-input" value="{{journal.billCount}}" style="width: 80px;" /><span>张</span></td>
													</tr>
												</table>
											</td>
											<td>
												<table style="margin-left: 133px;">
													<tr>
														<td>记账：</td>
														<td><input type="text" name="agent" v-model="journal.attn" value="{{journal.attn}}" class="line-input" /></td>
													</tr>
												</table>
											</td>
										</tr>
									</table>
									
								</tr>
							</tbody>
						</table>
						<div class="clearfix"></div>
						<div></div>
					</div>
				</dd>
			</dl>

			<!-- 报销信息 -->
			<input id="sub-input" type="hidden" value="" />
		</div>
		
        <!-- 财务科目弹出框 -->
        <tpl-tree 
          :tree-data="accountData"
          :select-data="selectData"
          :select-index="selectIndex"
          :journal-account="journalAccount"></tpl-tree>
	</div>
	<div class="modal-footer">
	  	<button type="button" class="btn btn-primary" @click="savePay">保存</button>
	    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
	</div>
</template>
<script type="text/javascript">
    import Model from '../js/model'
    import PropTree from '../../../vue_components/select/prop-tree.vue'

	export default {
		props:{
			//要修改的付款单信息
			journal:Object,
			//已选择单据财务科目关联
  			journalAccount:Array,
  			//获取已启用的币种
      		currencys:Array,
      		//当前单据信息
      		invoiceInfo:Object
		},
		data:function(){
			return {
				//财务科目数据
				accountData:[],
				//已选择科目
				selectData:[],
				//科目选择位子
				selectIndex:0,

			}
		},
		components:{
			"tpl-tree":PropTree
		},
		methods:{
			//添加一列
			addition:function(){
				var jour = new Model.JournalAccountModel;
				this.journalAccount.push(jour);
			},
			//删除一列
			subtraction:function(index){
				
				if(this.journalAccount.length > 1){
					this.journalAccount.splice(index,1);
				}
				
			},
			//财务科目弹出
			propAccount:function(index,event){

				this.selectData = [];
	  			this.selectIndex = index;

				$(".prop-tree-panl").css({left:event.target.offsetParent.offsetLeft+60,top:event.target.offsetParent.offsetTop+226})
	  				.show();

			},
			//获取财务科目
			getAccount:function(){
				this.$resource('/budget/getBudgetAll').get(function (data, status, request) {
					this.accountData = data;

				});
			},
			//付款单保存
			savePay:function(){
				/*防止二次提交*/

				//摘要
				var zys = [];
				//科目id
				var subs = [];
				//各科目金额
				var moneys = [];
				var totalMoney = 0;
				var acco = this.journalAccount;
				for(var i = 0; i<acco.length; i++){
					zys.push(acco[i].summary);
					subs.push(acco[i].accountId);
					moneys.push(acco[i].money);
					totalMoney = parseFloat(totalMoney) +  parseFloat(acco[i].money);
				}

				var contractId = this.journal.cid;
				var contractType = this.journal.contractType;
				if(contractId==null || contractId==undefined || contractId == ''){
					contractId = 0;
	    			contractType = 0;
				}

				var typeStatus = this.journal.status;

				var createTime = new Date(this.invoiceInfo.createTime).Format("yyyy-MM-dd hh:mm:ss"); 

				var reimbursement = $("#sub-input").val();
				var param={
		    		paymentId:this.journal.id,  //单据id
		    		zys:zys.toString(),  //摘要
		    		subs:subs.toString(),  //科目id
		    		moneys:moneys.toString(),  //各科目金额
		    		receiptNo:this.journal.billNo,  //票据编号
		    		paymentDate:this.journal.date,  //付款日期
		    		payeeId: '0',  //付款人idthis.journal.personId
		    		payeeType:this.journal.personType,  //付款人类型
		    		payeeName:this.journal.name,  //付款人姓名
		    		contractId:contractId,  //付款合同id
		    		contractType:contractType,  //付款合同类型
		    		currencyId:this.journal.currencyId,  //币种id
		    		totalMoney:totalMoney,  //合计金额
		    		paymentWay:this.journal.way,  //付款方式
		    		hasReceipt:this.journal.invoice,  //有无发票
		    		billCount:this.journal.billCount,  //票据张数
		    		agent:this.journal.attn,  //记账人
		    		status:typeStatus,  //结算状态
		    		reimbursement:reimbursement,  //报销信息
		    		createTime:createTime  //创建时间
		    	};
		    	//console.log(param);

		    	this.$resource('/journal/updatePayById').get(param,function (data, status, request) {
					if(data!=null){
	    				var mes = data.message;
	    				if(mes!="4"){
	    					// 提示 操作成功
	    					alert("操作成功");
	    					this.$dispatch("reload");
	    					$("#_new").modal("hide");
	    				}else{
	    					//提示 操作未生效
	    					alert("操作未生效");
	    				}
	    			}

				});
			}
		},
		created:function(){
			this.getAccount();
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
