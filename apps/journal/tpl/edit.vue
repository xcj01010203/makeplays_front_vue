<style type="text/css"></style>
<template>
	<div id="_new" class="modal fade">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<component 
						:is="editView"
						:journal="journal"
						:journal-account="journalAccount"
						:currencys="currencys"
						:invoice-info="invoiceInfo"></component>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import editPay from './edit-pay.vue'
	import editCollection from './edit-collection.vue'

	export default {
		components:{
			'tpl-pay':editPay,
			'tpl-collection':editCollection
		},
		props:{
			//修改类型
			editView:String,
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

			}
		}
	}
</script>